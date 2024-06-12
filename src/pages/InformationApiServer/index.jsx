import { useEffect, useState } from 'react';
import { getServerInfo } from '../../services/apiInformationService';
import InfoPage from '../../components/contoso-university/InfoPage';
import Loading from '../../components/contoso-university/Loading';

function ApiServerInfo() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await getServerInfo();
      setData(response);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) return <Loading />;

  return <InfoPage title="Información de la API" subtitle="Detalles técnicos del servidor." data={data} />;
}

export default ApiServerInfo;
