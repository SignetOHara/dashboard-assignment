import { useGetUsersQuery } from '../../services/usersApi';
import { Spinner } from '../../components/atoms/Spinner';
import { Message } from '../../components/atoms/Message';
import { Dashboard } from '../../containers/Dashboard';

export const Home = () => {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <Spinner />;
  if (error) return <Message severity="error" text="Unable to fetch data!" />;

  return <>{data && <Dashboard data={data} />}</>;
};
