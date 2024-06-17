import React from 'react';
import PropTypes from 'prop-types'; 

function RowNoData({ colSpan }) {
  return (
    <tr>
      <td colSpan={colSpan} className="text-center">
        No hay datos
      </td>
    </tr>
  );
}

RowNoData.propTypes = {
  colSpan: PropTypes.number.isRequired,
};

export default RowNoData;
