import { AlanCard } from "components/alan-card";
import {
  Box,
  Stack,
  Typography,
  TypographyProps,
  styled,
} from "lib/component-library";
import { Image } from "mui-image";

const StyledSubHeading = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.grey[500],
}));

export const SideNavBar = () => {
  return (
    <AlanCard>
      <Stack spacing={5} padding={3}>
        <div>
          <Image
            src={"https://placekitten.com/g/100/100"}
            style={{ maxWidth: "100px", borderRadius: "50%" }}
          />
          <Typography variant="h6" sx={{ paddingTop: 2 }}>
            Cat Johnson
          </Typography>
          <StyledSubHeading variant="caption">
            cat.johnson@kitten.com
          </StyledSubHeading>
        </div>
        <div>
          <StyledSubHeading align="left">MENU</StyledSubHeading>
        </div>
        <div>Logout</div>
      </Stack>
    </AlanCard>
  );
};
