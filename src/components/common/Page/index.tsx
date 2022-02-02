import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  children: React.ReactNode;
}

export const Page = ({ children }: Props) => {
  return (
    <Container maxWidth="xl" sx={{ width: 1, paddingBottom: '2rem' }}>
      <Box mt={5}>
        <Typography fontWeight={700} variant="h3" component="h1" mb={4}>
          Dashboard
        </Typography>
        {children}
      </Box>
    </Container>
  );
};
