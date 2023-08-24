import { SideNavBar } from "features/side-nav-bar";
import { Container, Grid, Box } from "lib/component-library";
import { Trending } from "./trending";
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
      <Grid container spacing={5} maxWidth={"1400px"}>
        <Grid item sm={2}>
          <SideNavBar />
        </Grid>
        <Grid item sm={6}>
          <Trending />
        </Grid>
        <Grid item sm={4}>
          <SideNavBar />
        </Grid>
      </Grid>
    </Box>
  );
};
