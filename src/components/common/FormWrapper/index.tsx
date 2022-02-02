import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface Props {
  children: React.ReactNode;
}

export const FormWrapper = ({ children }: Props) => {
  return (
    <Grid container flexDirection="column">
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        borderBottom="1px solid grey"
        p={3}
      >
        <Typography fontWeight="500" component="h2" variant="h4">
          Form
        </Typography>
      </Grid>
      <Grid p={3}>{children}</Grid>
    </Grid>
  );
};
