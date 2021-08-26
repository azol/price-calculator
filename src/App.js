import './App.scss';
import { useState } from 'react';
import { vatRates, languages, servers as SERVERS, addons as ADDONS } from './data';

// TODO: process sb servers
const servers = Object.keys(SERVERS).filter(server => !server.startsWith('SB'));
const addons = Object.keys(ADDONS);

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

function Addon(props) {
  return (
    <div className="control">
      <label className="checkbox">
        <input className="checkbox mr-2" id={props.addon} type="checkbox" onChange={(event) => props.handleAddon(props.addon, event.target.checked ? 1 : 0)} />
        {props.name}
      </label>
    </div>
  );
}

function Addons(props) {
  return (
    <ul>
      {addons.map((addon) =>
        <li key={addon} className="field">
          <Addon addon={addon} name={addon} handleAddon={props.handleAddon} />
        </li>
      )}
    </ul>
  );
}

function Result(props) {

  function formatResult() {
    return `server is: ${props.server}
numberOfServers: ${props.numberOfServers}
addons: ${[...props.serverAddons.keys()].map(addon => addon)}
country: ${props.country}
language: ${props.language}`;
  }

  return (
    <div className="field">
      <div className="control">
        <textarea className="textarea is-small is-family-monospace" readOnly value={formatResult()} />
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

  function handleAddon(addon, number) {
    if (number > 0) {
      setServerAddons(new Map(serverAddons.set(addon, number)))
    } else {
      serverAddons.delete(addon);
      setServerAddons(new Map(serverAddons));
    }
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
      <Addons language={language} handleAddon={handleAddon} />
      <Result server={server} numberOfServers={numberOfServers} serverAddons={serverAddons} country={country} language={language} />
    </main>
  );
}

export default App;
