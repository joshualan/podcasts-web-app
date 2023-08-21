import { SideNavBar } from "features/side-nav-bar";
import { Container, Grid } from "lib/component-library";
export const MainPage = () => {
  return (
    <Container
      sx={{ margin: "0px", paddingY: ({ spacing }) => spacing(5) }}
      maxWidth={false}
    >
      <Grid container spacing={3}>
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
    </Container>
  );
};
