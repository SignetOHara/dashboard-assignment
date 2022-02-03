import { Form } from '../../components/common/Form/';
import { FormWrapper } from '../../components/common/FormWrapper';
import Box from '@mui/material/Box';
import { User } from '../../types/types';

interface Props {
  user: User;
}

export const EditUserContainer = ({ user }: Props) => {
  return (
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 3,
        maxWidth: '80%',
        margin: '4rem auto 0',
      }}
    >
      <FormWrapper>
        <Form user={user} />
      </FormWrapper>
    </Box>
  );
};
