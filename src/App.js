import './App.css';
import { useState } from 'react';
import { vatRates, languages, servers as SERVERS, addons as ADDONS } from './data';

// TODO: process sb servers
const servers = Object.keys(SERVERS).filter(server => !server.startsWith('SB'));
const addons = Object.keys(ADDONS);

function Languages(props) {
  return (
    <label>Language
      <select value={props.language} onChange={(event) => props.setLanguage(event.target.value)}>{
        props.languages.map(lang =>
          <option key={lang} value={lang}>{lang}</option>
        )}
      </select>
    </label>
  );
}

function VatRates(props) {
  return (
    <label>VAT
      <select value={props.country} onChange={(event) => props.setCountry(event.target.value)}>{
        Object.keys(props.vatRates).map(country =>
          <option key={country} value={country}>{country}</option>
        )}
      </select>
    </label>
  );
}

function Servers(props) {
  return (
    <label>Server
      <select value={props.server} onChange={(event) => props.setServer(event.target.value)}>{
        props.servers.map(server =>
          <option key={server} value={server}>{server}</option>
        )}
      </select>
    </label>
  );
}

function Addon(props) {
  return (
    <label>{props.name}
      <input id={props.addon} type="checkbox" onChange={(event) => props.handleAddon(props.addon, event.target.checked ? 1 : 0)} />
    </label>
  );
}

function Addons(props) {
  return (
    <ul>
      {addons.map((addon) =>
        <li key={addon}>
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
    <textarea readOnly value={formatResult()} />
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
    <main>
      <Languages languages={languages} language={language} setLanguage={setLanguage} />
      <VatRates vatRates={vatRates} country={country} setCountry={setCountry} />
      <Servers servers={servers} server={server} setServer={setServer} />
      <label>Servers
        <input value={numberOfServers} type="number" min="1" step="1" onInput={(event) => setNumberOfServers(event.target.value)} />
      </label>
      <Addons language={language} handleAddon={handleAddon} />
      <Result server={server} numberOfServers={numberOfServers} serverAddons={serverAddons} country={country} language={language} />
    </main>
  );
}

export default App;
