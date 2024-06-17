import { version } from 'react';
import axiosInfo from 'axios/package.json';
import reactRouterDomInfo from 'react-router-dom/package.json';

function AppInfo() {
  const bootstrapVersion =
    // eslint-disable-next-line no-undef
    typeof bootstrap !== 'undefined' ? bootstrap.Alert.VERSION : 'undefined';

  return (
    <>
      <h1>Información de la aplicación</h1>
      <p>Detalles técnicos de la aplicación web.</p>
      <br />

      <div className="row">
        <table className="table table-striped table-hover" role="presentation">
          <tbody>
            <tr>
              <td>VITE_VERSION:</td>
              <td> {import.meta.env.VITE_VERSION}</td>
            </tr>
            <tr>
              <td>VITE_API_URL:</td>
              <td>{import.meta.env.VITE_API_URL}</td>
            </tr>
            <tr>
              <td>Environment:</td>
              <td> {import.meta.env.MODE}</td>
            </tr>
            <tr>
              <td>React Version:</td>
              <td>{version}</td>
            </tr>
            <tr>
              <td>Bootstrap Version:</td>
              <td>{bootstrapVersion}</td>
            </tr>
            <tr>
              <td>Axios Version:</td>
              <td>{axiosInfo.version}</td>
            </tr>
            <tr>
              <td>React Router DOM Version:</td>
              <td>{reactRouterDomInfo.version}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AppInfo;
