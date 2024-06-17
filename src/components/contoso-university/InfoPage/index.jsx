import React from 'react';
import PropTypes from 'prop-types'; 

function InfoPage({ title, subtitle, data = [] }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <br />
      <div className="row">
        <table className="table table-striped table-hover">
          <tbody>
            {data.map((x) => (
              <tr key={x.key}>
                <td>{x.key}</td>
                <td>{x.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

InfoPage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default InfoPage;
