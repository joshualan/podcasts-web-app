import { SideNavBar } from "features/side-nav-bar";
import { Container, Grid, Box } from "lib/component-library";
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
      <Grid container spacing={3} maxWidth={"1400px"}>
        <Grid item sm={2}>
          <SideNavBar />
        </Grid>
        <Grid item sm={6}>
          <SideNavBar />
        </Grid>
        <Grid item sm={4}>
          <SideNavBar />
        </Grid>
      </Grid>
    </Box>
  );
};
