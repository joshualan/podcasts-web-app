import { AlanCard } from "components/alan-card";
import { AlanButton } from "components/alan-button";
import {
  ButtonProps,
  Grid,
  Typography,
  styled,
  alpha,
  Box,
  Stack,
} from "lib/component-library";
import { ReactComponent as ReactLogo } from "assets/friends.svg";

const StyledButton = styled(AlanButton)<ButtonProps>(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.light, 0.5),
}));

const StyledDiv = styled(Box)<{ gray?: boolean }>(({ theme, gray }) => ({
  height: "4px",
  backgroundColor: gray ? theme.palette.grey[500] : theme.palette.common.white,
  width: "32px",
  borderRadius: "4px",
}));

export const Trending = () => {
  return (
    <div>
      <Typography
        align="left"
        variant="h6"
        sx={{ paddingBottom: ({ spacing }) => spacing(4) }}
      >
        TRENDING PODCAST
      </Typography>

      <AlanCard
        sx={{
          backgroundColor: ({ palette }) => palette.primary.main,
          height: ({ spacing }) => spacing(12),
          padding: ({ spacing }) => spacing(5, 7),
        }}
      >
        <Grid height={"100%"} container spacing={3}>
          <Grid
            item
            xs={6}
            container
            direction={"column"}
            justifyContent={"space-around"}
            gap={4}
          >
            <StyledButton
              disableElevation
              variant="contained"
              sx={{
                fontSize: ({ spacing }) => spacing(3),
                alignSelf: "flex-start",
              }}
            >
              People's Favorite
            </StyledButton>
            <Typography
              variant="h4"
              align="left"
              fontWeight={"bold"}
              sx={{ fontSize: (theme) => theme.spacing(6) }}
            >
              How We Can Save This World
            </Typography>

            <Stack direction={"row"} spacing={4}>
              <StyledDiv />
              <StyledDiv gray sx={{ width: (theme) => theme.spacing(2) }} />
              <StyledDiv gray sx={{ width: (theme) => theme.spacing(2) }} />
            </Stack>
          </Grid>
          <Grid container alignItems={"center"} gap={4} item xs={6}>
            <ReactLogo style={{ maxHeight: "200px" }} />
          </Grid>
        </Grid>
      </AlanCard>
    </div>
  );
};
