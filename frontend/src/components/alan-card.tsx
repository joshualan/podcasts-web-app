import { Card, styled, CardProps } from "lib/component-library";

export const AlanCard = styled(Card)<CardProps>(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));