import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import Loading from '../../Loading';

function EntityAddOrUpdate({ entityName, entityPath, isEditMode, isLoading, submitHandler, children }) {
  return (
    <>
      <h2>{isEditMode ? 'Editar' : 'Agregar'}</h2>
      <h4>{entityName}</h4>
      <div className="d-flex gap-2 mb-3">
        <Link to={`/${entityPath}`}>Volver a la lista</Link>
      </div>
      <hr />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {children}
          <div className="row mt-4">
            <div className="col-md-2">
              <button className="btn btn-primary" onClick={submitHandler}>
                Guardar
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

EntityAddOrUpdate.propTypes = {
  entityName: PropTypes.string.isRequired,
  entityPath: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  submitHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default EntityAddOrUpdate;
