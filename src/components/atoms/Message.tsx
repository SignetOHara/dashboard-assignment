import Alert, { AlertColor } from '@mui/material/Alert';

interface Props {
  text: string;
  severity: AlertColor;
}

export const Message = ({ text, severity }: Props) => {
  return <Alert severity={severity}>{text}</Alert>;
};
