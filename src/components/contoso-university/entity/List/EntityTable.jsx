import React from 'react';
import PropTypes from 'prop-types';
import RowLoading from './RowLoading';
import RowNoData from './RowNoData';

function TableTable({ entityPath, columns = [], data = [], dataRenderRow, isLoading }) {
  const colSpan = columns.length + 1;
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((item, index) => (
            <th key={index} scope="col">
              {item.label}
            </th>
          ))}
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {isLoading ? (
          <RowLoading colSpan={colSpan} />
        ) : data.length === 0 ? (
          <RowNoData colSpan={colSpan} />
        ) : (
          data.map((item) => dataRenderRow(item, entityPath))
        )}
      </tbody>
    </table>
  );
}

TableTable.propTypes = {
  entityPath: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  dataRenderRow: PropTypes.func.isRequired,
};

export default TableTable;
