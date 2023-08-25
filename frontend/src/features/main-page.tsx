import { SideNavBar } from "features/side-nav-bar";
import { Grid, Box, Stack } from "lib/component-library";
import { Trending } from "features/trending";
import { Suggestions } from "features/suggestions";
export const MainPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "0px",
        paddingY: ({ spacing }) => spacing(5),
        width: "100%",
      }}
    >
      <Grid container columnSpacing={6} maxWidth={"1600px"}>
        <Grid item sm={2}>
          <SideNavBar />
        </Grid>
        <Grid item sm={6}>
          <Stack gap={8}>
            <Trending />
            <Suggestions />
          </Stack>
        </Grid>
        <Grid item sm={4}>
          <SideNavBar />
        </Grid>
      </Grid>
    </Box>
  );
};
