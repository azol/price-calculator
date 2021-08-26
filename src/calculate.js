import { Money } from 'bigint-money';

export function getCalculationData(props) {
  const serverToProcess = props.servers[props.server];
  const serverCalculationData = new Map().set(
    new Map().set(props.server, props.numberOfServers),
    [
      new Money(serverToProcess.location[props.location].monthly?.toString() ?? '0').multiply(props.numberOfServers).format(),
      props.noSetupFee ?
        new Money('0').format() :
        new Money(serverToProcess.location[props.location].setup?.toString() ?? '0').multiply(props.numberOfServers).format()
    ]
  );
  const addonsCalculationData = [...props.serverAddons].map(([addon, number]) => {
    return new Map().set(
      new Map().set(addon, number),
      [
        new Money(props.addons[addon].monthly?.toString() ?? '0').multiply(number).format(),
        new Money(props.addons[addon].setup?.toString() ?? '0').multiply(number).format(),
      ]
    );
  });

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

  return {
    calculationData: allCalculationData,
    totalSetup: totalSetup,
    totalMonthly: totalMonthly,
  }
}
