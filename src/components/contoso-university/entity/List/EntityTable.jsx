import React from 'react';
import PropTypes from 'prop-types';
import RowLoading from './RowLoading';
import RowNoData from './RowNoData';

function EntityTable({ entityPath, columns = [], data = [], dataRenderRow, isLoading }) {
  const colSpan = columns.length + 1;

  const renderTableBody = () => {
    if (isLoading) {
      return <RowLoading colSpan={colSpan} />;
    }

    if (data.length === 0) {
      return <RowNoData colSpan={colSpan} />;
    }

    return data.map((item) => dataRenderRow(item, entityPath));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((item) => (
            <th key={item.label} scope="col">
              {item.label}
            </th>
          ))}
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="table-group-divider">{renderTableBody()}</tbody>
    </table>
  );
}

EntityTable.propTypes = {
  entityPath: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  dataRenderRow: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default EntityTable;
