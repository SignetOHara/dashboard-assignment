import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  data?: User[];
}

export const UsersWrapper = ({ children, data }: Props) => {
  return (
    <Grid container flexDirection="column">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid grey"
        p={3}
      >
        <Typography fontWeight="500" component="h2" variant="h4">
          User List
        </Typography>
        <Link to="/add" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary" size="large">
            Add New
          </Button>
        </Link>
      </Grid>
      <Grid p={3}>{children}</Grid>
    </Grid>
  );
};
