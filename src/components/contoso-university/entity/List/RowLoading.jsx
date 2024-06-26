import React from 'react';
import PropTypes from 'prop-types';

function RowLoading({ colSpan }) {
  return (
    <tr>
      <td colSpan={colSpan}>
        <div className="d-flex justify-content-center">
          <output className="spinner-border">
            <span className="visually-hidden">Loading...</span>
          </output>
        </div>
      </td>
    </tr>
  );
}

RowLoading.propTypes = {
  colSpan: PropTypes.number.isRequired,
};

export default RowLoading;
