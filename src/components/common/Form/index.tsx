import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  useAddNewUserMutation,
  useUpdateUserMutation,
} from '../../../services/usersApi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { IFormInputs, User } from '../../../types/types';

interface Props {
  user?: User;
}

export const Form = ({ user }: Props) => {
  let preloadedValues;
  if (user) {
    preloadedValues = {
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
    };
  }

  const navigate = useNavigate();
  const [addNewUser] = useAddNewUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Enter your name'),
    username: Yup.string().required('Enter your username'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid.'),
    city: Yup.string().required('City is required'),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues: preloadedValues,
  });

  const onSubmit = async (data: IFormInputs) => {
    if (user) {
      const updatedUser: User = {
        ...data,
        id: user.id,
        address: { city: data.city },
      };
      await updateUser(updatedUser);
      navigate('/');
      toast.success('User edited successfully!');
    } else {
      const newUser: User = {
        ...data,
        address: { city: data.city },
        id: v4(),
      };
      await addNewUser(newUser);
      navigate('/');
      toast.success('User added successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
          marginBottom: '15px',
        }}
      >
        <TextField
          margin="normal"
          placeholder="Name"
          label="Name"
          required
          {...register('name', { required: true })}
          error={errors.name ? true : false}
          helperText={errors.name?.message}
        />
        <TextField
          margin="normal"
          placeholder="Username"
          label="Username"
          required
          {...register('username', { required: true })}
          error={errors.username ? true : false}
          helperText={errors.username?.message}
        />
        <TextField
          margin="normal"
          placeholder="Email"
          label="Email"
          required
          {...register('email', { required: true })}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
        />
        <TextField
          margin="normal"
          placeholder="City"
          label="City"
          required
          {...register('city', { required: true })}
          error={errors.city ? true : false}
          helperText={errors.city?.message}
        />
        <Stack mt={4} direction="row" spacing={4} justifyContent="flex-end">
          <Button variant="outlined" color="error" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </Stack>
      </Box>
    </form>
  );
};
