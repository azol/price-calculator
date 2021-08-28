import { Money } from 'bigint-money';

const getVatted = (number, vatRate) => (
  new Money(vatRate).divide('100').multiply(number).add(number)
);

export function getCalculationData(props) {
  const vatRate = props.vatRates[props.country].toString(10);
  const serverToProcess = props.servers[props.server];
  const serverCalculationData = new Map().set(
    new Map().set(props.server, props.numberOfServers),
    [
      (() => {
        const monthly = serverToProcess.location[props.location]?.monthly ?? '0';
        if (monthly === '0') {
          return new Money('0').format();
        } else {
          return getVatted(monthly.toString(10), vatRate).multiply(props.numberOfServers).format();
        }
      })(),
      (() => {
        const setup = serverToProcess.location[props.location]?.setup ?? '0';
        if (props.noSetupFee || setup === '0') {
          return new Money('0').format();
        } else {
          return getVatted(setup.toString(10), vatRate).multiply(props.numberOfServers).format();
        }
      })(),
      false
    ]
  );
  const addonsCalculationData = [...props.serverAddons].map(([addon, number]) => {
    return new Map().set(
      new Map().set(addon, number),
      [
        (() => {
          const monthly = props.addons[addon]?.monthly ?? '0';
          if (monthly === '0') {
            return new Money('0').format();
          } else {
            return getVatted(monthly.toString(10), vatRate).multiply(number).format();
          }
        })(),
        (() => {
          const setup = props.addons[addon]?.setup ?? '0';
          if (setup === '0') {
            return new Money('0').format();
          } else {
            return getVatted(setup.toString(10), vatRate).multiply(number).format();
          }
        })(),
        props.addons[addon].pay_entire_month ?? false
      ]
    );
  });
  const additionalCalculationData = addonsCalculationData
    .filter((map) => [...map].flat()[1][2])
    .map(map => new Map([...map].map(([item, money]) => [item, [
      new Money(money[0]).divide(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate())
        .multiply(new Date().getDate() - 1).format(),
      money[1],
      money[2]
    ]])));

  const allCalculationData = [serverCalculationData, ...addonsCalculationData]
  const totalMonthly = allCalculationData
    .map(map => [...map].flat()).map(([item, money]) => money[0])
    .map(money => new Money(money))
    .reduce((prev, current) => prev.add(current), new Money('0'))
    .format();
  const totalSetup = allCalculationData
    .map(map => [...map].flat()).map(([item, money]) => money[1])
    .map(money => new Money(money))
    .reduce((prev, current) => prev.add(current), new Money('0'))
    .format();
  const totalAdditional = additionalCalculationData
    .map(map => [...map].flat())
    .map(([item, money]) => money)
    .filter(money => money[2])
    .map(money => money[0])
    .reduce((prev, current) => prev.add(current), new Money('0'))
    .format()

  return {
    calculationData: allCalculationData,
    totalSetup: totalSetup,
    totalMonthly: totalMonthly,
    calculationDataAdditional: additionalCalculationData,
    totalAdditional: totalAdditional,
    vatRate: vatRate
  }
}
