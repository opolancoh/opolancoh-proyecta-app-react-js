import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { dateToLocaleString } from '@helpers/date-helper';
import Loading from '../../Loading';

const EntityRemove = ({ subtitle, entityPath, infoFields = [], getByIdService, removeService }) => {
  const { entityId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getByIdService(entityId);

      setData(response.data);
      setIsLoading(false);
    }

    fetchData();
  }, [entityId, getByIdService]);

  const handleSubmit = async () => {
    // Send request
    await removeService(entityId);

    navigate(`/${entityPath}`, {
      state: {
        notification: {
          action: 'success',
          message: `Elemento eliminado correctamente.`,
        },
      },
    });
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <h2>Eliminar</h2>
      <h4>{subtitle}</h4>
      <h5>Está seguro de eliminar este elemento?</h5>
      <div className="d-flex gap-2 mb-3">
        <Link to={`/${entityPath}`}>Volver a la lista</Link>
      </div>
      <hr />

      <dl className="row">
        {infoFields.map((field) => (
          <React.Fragment key={field.key}>
            <div className="col-2">
              <dt>{field.label}:</dt>
            </div>
            <div className="col-10">
              <dd>{field.render ? field.render(data[field.key]) : data[field.key]}</dd>
            </div>
          </React.Fragment>
        ))}
      </dl>

      <dl className="row">
        <div className="col-2">
          <dt>Creado:</dt>
        </div>
        <div className="col-10">
          <dd>
            {dateToLocaleString(data.createdAt)} por {data.createdBy?.name || 'No definido'}
          </dd>
        </div>
        <div className="col-2">
          <dt>Modificado:</dt>
        </div>
        <div className="col-10">
          <dd>
            {dateToLocaleString(data.updatedAt)} por {data.updatedBy?.name || 'No definido'}
          </dd>
        </div>
      </dl>

      <div className="row">
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

EntityRemove.propTypes = {
  subtitle: PropTypes.string.isRequired,
  entityPath: PropTypes.string.isRequired,
  infoFields: PropTypes.array.isRequired,
  getByIdService: PropTypes.func.isRequired,
  removeService: PropTypes.func.isRequired,
};

export default EntityRemove;
