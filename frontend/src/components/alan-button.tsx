import { styled, Button, ButtonProps } from "lib/component-library";

// could also override this in the theme but not the biggest fan of
// overriding for a small project like this.
export const AlanButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: theme.spacing(5),
}));
