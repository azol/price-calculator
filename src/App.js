import './App.scss';
import { useState, useEffect } from 'react';
import { vatRates, languages, servers as SERVERS, addons as ADDONS } from './data';
import { getCalculationData } from './calculate';
import { table } from 'table';

// TODO: process sb servers
const servers = Object.keys(SERVERS).filter(server => !server.startsWith('SB'));
const addons = Object.keys(ADDONS);

const addonBackupNo = 'backupNo';
const addonsBackup = [addonBackupNo, ...addons.filter(addon => addon.startsWith('backup'))];

const addonPleskNo = 'plesk_No';
const addonsPlesk = [addonPleskNo, ...addons.filter(addon => addon.startsWith('plesk_') & addon !== 'plesk_power_pack')];

const addonCpanelNo = 'cpanel_No';
const addonsCpanel = [addonCpanelNo, ...addons.filter(addon => addon.startsWith('cpanel_'))];

const addonsStorage = addons.filter(addon =>
  addon.startsWith('usb') ||
  addon.startsWith('ddr') ||
  addon.startsWith('ssd') ||
  addon.startsWith('nvme') ||
  addon.startsWith('sas') ||
  addon.startsWith('sata') ||
  addon === 'block_storage_volume'
);

const addonsNetwork = addons.filter(addon =>
  addon.startsWith('ip') ||
  addon.startsWith('subnet') ||
  addon.startsWith('failover_') ||
  addon.startsWith('vlan_') ||
  addon === 'gbit_lan' ||
  addon === 'ten_gbit_lan' ||
  addon === 'gbit_nic' ||
  addon === 'gbit_dual_nic' ||
  addon === 'ten_gbit_nic' ||
  addon === 'ten_gbit_dual_nic_x520' ||
  addon === 'ten_gbit_dual_nic_x710' ||
  addon === 'ten_gbit_dual_nic_dell' ||
  addon === 'uplink_10_gbit' ||
  addon === 'switch_5port' ||
  addon === 'switch_8port' ||
  addon === 'switch_24port' ||
  addon === 'switch_48port' ||
  addon === 'switch_12port_10gbit' ||
  addon === 'switch_48port_10gbit' ||
  addon === 'switch_96port_10gbit' ||
  addon === 'place_reservation'
);

const addonsMisc = addons.filter(addon =>
  !(addonsStorage.includes(addon) ||
    addonsNetwork.includes(addon) ||
    addonsBackup.includes(addon) ||
    addonsCpanel.includes(addon) ||
    addonsPlesk.includes(addon) ||
    addon === 'custom_addon'
  ));

const locations = {
  GERMANY: 'Germany',
  FINLAND: 'Finland'
}

function Languages(props) {
  return (
    <div className="field has-addons">
      <div className="control">
        <label htmlFor="my-select-language" className="button is-small">Language</label>
      </div>
      <div className="control">
        <div className="select is-small">
          <select id="my-select-language" value={props.language} onChange={(event) => props.setLanguage(event.target.value)}>{
            props.languages.map(lang =>
              <option key={lang} value={lang}>{lang}</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

function VatRates(props) {
  return (
    <div className="field has-addons">
      <div className="control">
        <label htmlFor="my-select-country" className="button is-small">VAT</label>
      </div>
      <div className="control">
        <div className="select is-small">
          <select id="my-select-country" value={props.country} onChange={(event) => props.setCountry(event.target.value)}>{
            Object.keys(props.vatRates).map(country =>
              <option key={country} value={country}>{country}</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

function Servers(props) {
  return (
    <div className="field has-addons">
      <div className="control">
        <label htmlFor="my-select-server" className="button is-small">Server</label>
      </div>
      <div className="control">
        <div className="select is-small">
          <select id="my-select-server" value={props.server} onChange={(event) => props.setServer(event.target.value)}>{
            props.servers.map(server =>
              <option key={server} value={server}>{server}</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}

function AddonSelection(props) {
  return (
    <li className="field has-addons">
      <div className="control">
        <div className="select is-small">
          <select id="my-select-addon-backup" defaultValue={props.addons[0]} onChange={(event) => props.handleAddon(event.target.value, 1)}>{
            props.addons.map(addon =>
              <option key={addon} value={addon}>{addon}</option>
            )}
          </select>
        </div>
      </div>
      <div className="control">
        <label htmlFor="my-select-addon-backup" className="button is-small">{props.label}</label>
      </div>
    </li>
  );
}

function Addon(props) {
  if (props.type === 'checkbox' & props.addon !== 'rdp_license' & props.addon !== 'remote_hands') {
    return (
      <div className="control">
        <label className="checkbox">
          <input className="checkbox mr-2" id={props.addon} type="checkbox" onChange={(event) => props.handleAddon(props.addon, event.target.checked ? 1 : 0)} />
          {props.name}
        </label>
      </div>
    );
  } else {
    return (
      <div className="field has-addons">
        <div className="control">
          <input className="input is-small" id={props.addon} type="number" min="0" step="1" defaultValue="0" onChange={(event) => props.handleAddon(props.addon, event.target.value)} />
        </div>
        <div className="control">
          <label htmlFor={props.addon} className="button is-small">{props.name}</label>
        </div>
      </div>
    );
  }
}

function Addons(props) {
  return (
    <ul>
      {props.addons.map((addon) =>
        <li key={addon} className="field">
          <Addon addon={addon} name={addon} type={props.type} handleAddon={props.handleAddon} />
        </li>
      )}
      {props.isAddonsStorage ? <AddonSelection label='backup' addons={addonsBackup} handleAddon={props.handleAddon} /> : ''}
      {props.isAddonsMisc ? <AddonSelection label='Plesk' addons={addonsPlesk} handleAddon={props.handleAddon} /> : ''}
      {props.isAddonsMisc ? <AddonSelection label='cPanel' addons={addonsCpanel} handleAddon={props.handleAddon} /> : ''}
    </ul>
  );
}

function Result(props) {
  return (
    <div className="field">
      <div className="control">
        <textarea className="textarea is-small is-family-monospace" readOnly defaultValue='Calculating...' value={props.value} />
      </div>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState(languages[0]);
  const [country, setCountry] = useState(Object.keys(vatRates)[0]);
  const [server, setServer] = useState(servers[0]);
  const [serverAddons, setServerAddons] = useState(new Map());
  const [numberOfServers, setNumberOfServers] = useState(1);
  const [noSetupFee, setNoSetupFee] = useState(false);
  const [location, setLocation] = useState(locations.GERMANY);
  const [calculationData, setCalculationData] = useState();
  const [formattedCalculationData, setFormattedCalculationData] = useState();

  function handleAddonSelection(addon, number, addons, addonNo) {
    const serverAddonsWithoutSelectionAddons = new Map([...serverAddons].filter(([addon, _]) => !addons.includes(addon)));
    if (addon !== addonNo) {
      serverAddonsWithoutSelectionAddons.set(addon, number);
    }
    setServerAddons(serverAddonsWithoutSelectionAddons);
  }

  function handleAddon(addon, number) {
    if (addonsPlesk.includes(addon)) {
      handleAddonSelection(addon, number, addonsPlesk, addonPleskNo);
      return;
    }
    if (addonsCpanel.includes(addon)) {
      handleAddonSelection(addon, number, addonsCpanel, addonCpanelNo);
      return;
    }
    if (addonsBackup.includes(addon)) {
      handleAddonSelection(addon, number, addonsBackup, addonBackupNo);
      return;
    }
    if (number > 0) {
      setServerAddons(new Map(serverAddons.set(addon, number)))
    } else {
      serverAddons.delete(addon);
      setServerAddons(new Map(serverAddons));
    }
  }

  useEffect(() => {
    const unformatttedCalculationData = getCalculationData({
      language: language,
      country: country,
      server: server,
      serverAddons: serverAddons,
      numberOfServers: numberOfServers,
      noSetupFee: noSetupFee,
      location: location,
      vatRates: vatRates,
      servers: SERVERS,
      addons: ADDONS
    });
    const formattedCalculationData = formatCalculationData(unformatttedCalculationData, language);
    setCalculationData(unformatttedCalculationData);
    setFormattedCalculationData(formattedCalculationData);
  }, [country, language, location, noSetupFee, numberOfServers, server, serverAddons]);

  function formatCalculationData(data, language) {
    const calcDataPreformatted = data.calculationData.map(
      map => [...map].flat()
    ).map(([item, money]) => {
      const itemData = [...item].flat();
      const itemLocalized = { ...SERVERS, ...ADDONS }[itemData[0]].name[language];
      const number = itemData[1];
      return [
        number > 1 ? `${number}x ${itemLocalized}` : itemLocalized,
        money
      ];
    });

    const additionalDataPreformatted = data.calculationDataAdditional.map(
      map => [...map].flat()
    ).map(([item, money]) => {
      const itemData = [...item].flat();
      const itemLocalized = { ...SERVERS, ...ADDONS }[itemData[0]].name[language];
      const number = itemData[1];
      return [
        number > 1 ? `${number}x ${itemLocalized}` : itemLocalized,
        money
      ];
    });

    const currencyFormatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

    const calculationDataPreformattedMonthly = calcDataPreformatted
      .map(([item, money]) => [item, money[0]])
      .filter(item => item[1] !== '0')
      .map(([item, money]) => [item, currencyFormatter.format(money)]);

    const calculationDataPreformattedSetup = calcDataPreformatted
      .map(([item, money]) => [item, money[1]])
      .filter(item => item[1] !== '0')
      .map(([item, money]) => [item, currencyFormatter.format(money)]);

    const calculationDataPreformattedAdditional = additionalDataPreformatted
      .map(([item, money]) => [item, money[0]])
      .filter(item => item[1] !== '0')
      .map(([item, money]) => [item, currencyFormatter.format(money)]);

    const setup = data.totalSetup !== '0' ? [
      ['Setup costs:', ''],
      ...calculationDataPreformattedSetup,
      ['------------------', ''],
      ['Total setup costs:', currencyFormatter.format(data.totalSetup)],
      ['', ''],
    ] : [];

    const vat = data.vatRate === '0' ? [
      ['(excl. VAT)', '']
    ] : [
      [`(incl. VAT ${data.vatRate}%)`, '']
    ];

    const additionalPayment = data.totalAdditional !== '0' ? [
      ['', ''],
      ['Additional payment for product(s) charged for entire month:', ''],
      ...calculationDataPreformattedAdditional,
      ['--------------------', ''],
      ['Total additional costs:', currencyFormatter.format(data.totalAdditional)],
    ] : [];

    const text = table([
      ...setup,
      ['Monthly costs:', ''],
      ...calculationDataPreformattedMonthly,
      ['--------------------', ''],
      ['Total monthly costs:', currencyFormatter.format(data.totalMonthly)],
      ['', ''],
      ...vat,
      ...additionalPayment
    ], {
      drawHorizontalLine: () => false,
      drawVerticalLine: () => false,
      columns: [
        { alignment: 'left' },
        { alignment: 'right' }
      ],
    })
    return text;
  }

  return (
    <main className="container">
      <Languages languages={languages} language={language} setLanguage={setLanguage} />
      <VatRates vatRates={vatRates} country={country} setCountry={setCountry} />
      <Servers servers={servers} server={server} setServer={setServer} />
      <div className="field has-addons">
        <div className="control">
          <label htmlFor="my-input-numberOfServers" className="button is-small">Servers</label>
        </div>
        <div className="control">
          <input id="my-input-numberOfServers" className="input is-small" value={numberOfServers} type="number" min="1" step="1" onInput={(event) => setNumberOfServers(event.target.value)} />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="radio">
            <input className="mr-2" type="radio" name="location" checked={location === locations.GERMANY} onChange={(event) => setLocation(locations.GERMANY)} />
            {locations.GERMANY}
          </label>
          <label className="radio">
            <input className="mr-2" type="radio" name="location" checked={location === locations.FINLAND} onChange={(event) => setLocation(locations.FINLAND)} />
            {locations.FINLAND}
          </label>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input className="checkbox mr-2" type="checkbox" checked={noSetupFee} onChange={(event) => setNoSetupFee(event.target.checked)} />
            No setup fee
          </label>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Addons addons={addonsMisc} isAddonsMisc language={language} type="checkbox" handleAddon={handleAddon} />
        </div>
        <div className="column">
          <Addons addons={addonsStorage} isAddonsStorage language={language} handleAddon={handleAddon} />
        </div>
        <div className="column">
          <Addons addons={addonsNetwork} language={language} handleAddon={handleAddon} />
        </div>
      </div>
      <Result value={formattedCalculationData} />
    </main>
  );
}

export default App;
