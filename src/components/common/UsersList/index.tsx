import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Message } from '../../atoms/Message';

interface UserListProps {
  data: User[];
  handleDialog: (id: string) => void;
}

export const UsersList: React.FunctionComponent<UserListProps> = ({
  data,
  handleDialog,
}) => {
  if (data.length === 0)
    return (
      <Message severity="warning" text="No more users! Please add another" />
    );

  return (
    <Box border="1px solid #b8b8b8">
      <TableContainer component={Paper}>
        <Table size="medium">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
              <TableCell align="center" sx={{ padding: '1rem 0' }}>
                Id
              </TableCell>
              <TableCell align="center" sx={{ padding: '1rem 0' }}>
                Name
              </TableCell>
              <TableCell align="center" sx={{ padding: '1rem 0' }}>
                Username
              </TableCell>
              <TableCell align="center" sx={{ padding: '1rem 0' }}>
                Email
              </TableCell>
              <TableCell align="center" sx={{ padding: '1rem 0' }}>
                City
              </TableCell>
              <TableCell align="center" sx={{ padding: '1rem 0' }}>
                Edit
              </TableCell>
              <TableCell align="center" sx={{ padding: '1rem 0' }}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.id}>
                <TableCell align="center">{user.id}</TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.username}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{user.address.city}</TableCell>
                <TableCell align="center">
                  <Link
                    to={`/update/${user.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant="contained" color="secondary">
                      Edit
                    </Button>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDialog(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
