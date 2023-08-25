import { AlanCard } from "components/alan-card";
import { AlanButton } from "components/alan-button";
import {
  ButtonProps,
  Grid,
  Stack,
  Typography,
  styled,
  alpha,
} from "lib/component-library";

const StyledButton = styled(AlanButton)<ButtonProps>(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.light, 0.5),
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
            xs={4}
            container
            direction={"column"}
            justifyContent={"center"}
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
          </Grid>
          <Grid
            container
            direction={"column"}
            justifyContent={"center"}
            gap={4}
            item
            xs={8}
          >
            <Typography variant="h4">Graphic Here</Typography>
          </Grid>
        </Grid>
      </AlanCard>
    </div>
  );
};
