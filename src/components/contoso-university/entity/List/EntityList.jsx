import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import TableTable from './EntityTable';
import MinimalActionToast from '../../MinimalActionToast';

export const entityPath = 'risks';

function EntityList({ title, entityPath, columns = [], dataRenderRow, fetchDataFunction }) {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetchDataFunction();
        if (isMounted) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Failed to fetch data:', error);
          setIsLoading(false);
        }
      }
    };

    if (locationState?.notification) {
      setNotification(locationState?.notification);
      navigate(location.pathname, { replace: true, state: null });
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [navigate, locationState?.notification, fetchDataFunction]);

  const handleOnCloseNotification = () => {
    setNotification(null);
  };

  return (
    <>
      <h1>{title}</h1>
      <p>
        <Link to={`/${entityPath}/new`}>Crear Nuevo</Link>
      </p>

      <TableTable
        entityPath={entityPath}
        columns={columns}
        data={data}
        dataRenderRow={dataRenderRow}
        isLoading={isLoading}
      />

      {notification && (
        <MinimalActionToast
          action={notification.action}
          message={notification.message}
          onClose={handleOnCloseNotification}
        />
      )}
    </>
  );
}

EntityList.propTypes = {
  title: PropTypes.string.isRequired,
  entityPath: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  dataRenderRow: PropTypes.func.isRequired,
  fetchDataFunction: PropTypes.func.isRequired,
};

export default EntityList;
