import { Form } from '../../components/common/Form';
import { FormWrapper } from '../../components/common/FormWrapper';
import Box from '@mui/material/Box';

export const AddUserContainer = () => {
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
        <Form />
      </FormWrapper>
    </Box>
  );
};
