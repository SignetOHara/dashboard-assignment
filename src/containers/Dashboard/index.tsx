import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteUserMutation } from '../../services/usersApi';
import { UsersWrapper } from '../../components/common/UsersWrapper';
import { UsersList } from '../../components/common/UsersList';
import { Dialogue } from '../../components/atoms/Dialogue';
import { toast } from 'react-toastify';
import { Message } from '../../components/atoms/Message';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { User } from '../../types/types';

interface Props {
  data: User[];
}

export const Dashboard = ({ data }: Props) => {
  const navigate = useNavigate();
  const [deleteUser] = useDeleteUserMutation();
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');

  const handleDelete = async (id: string) => {
    try {
      setOpen(false);
      await deleteUser(id).unwrap();
      toast.success('User Deleted Successfully!');
    } catch (error) {
      setOpen(false);
      toast.error('Failed to delete!');
      setError(true);
    }
  };

  const handleDialog = (id: string) => {
    setOpen(true);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (error) {
    const handleClick = () => {
      navigate(-2);
      setError(false);
    };

    return (
      <>
        <Message
          text="Delete failed :( This user doesn't actually exist on the Json Placeholder API"
          severity="error"
        />
        <Button onClick={handleClick}>Back</Button>
      </>
    );
  }

  return (
    <>
      <Box mt={8} sx={{ boxShadow: 3, borderRadius: 3 }}>
        <UsersWrapper>
          <UsersList data={data} handleDialog={handleDialog} />
        </UsersWrapper>
      </Box>
      <Dialogue
        open={open}
        onClose={handleClose}
        id={id}
        onDelete={handleDelete}
      />
    </>
  );
};
