import { useGetUserQuery } from '../../services/usersApi';
import { Spinner } from '../../components/atoms/Spinner';
import { Message } from '../../components/atoms/Message';
import { EditUserContainer } from '../../containers/EditUserContainer';
import { useParams } from 'react-router-dom';

export const EditUser = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetUserQuery(id!);

  if (isLoading) return <Spinner />;
  if (error) return <Message severity="error" text="Unable to fetch user!" />;

  return <>{data && <EditUserContainer user={data} />}</>;
};
