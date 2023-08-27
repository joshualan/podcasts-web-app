import { AlanCard } from "components/alan-card";
import { Stack, Grid, Typography, Divider } from "lib/component-library";
import { ReactComponent as RainingPhoto } from "assets/raining.svg";
import { SongBar } from "./song-bar";
import {
  PlayCircle,
  SkipPrevious,
  SkipNext,
  QueueMusic,
  Shuffle,
} from "lib/icons";
export const NowPlaying = () => {
  return (
    <div>
      <Typography align="left" variant="h6" paddingBottom={3}>
        NOW PLAYING
      </Typography>
      <AlanCard sx={{ padding: 4 }}>
        <Grid container width={"100%"} rowGap={5} margin={0}>
          <Grid item xs={6}>
            <AlanCard
              sx={{
                backgroundColor: ({ palette }) => palette.primary.main,
              }}
            >
              <RainingPhoto style={{ maxWidth: "150px", maxHeight: "150px" }} />
            </AlanCard>
          </Grid>
          <Grid item xs={6} padding={4}>
            <Stack height={"100%"} justifyContent={"center"}>
              <Typography align="left" fontWeight={"bold"}>
                Psychological Approaches to Stress Reduction
              </Typography>
              <Typography
                align="left"
                color={(theme) => theme.palette.grey[500]}
              >
                Liam Martinez
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <SongBar />
            <Divider sx={{ paddingTop: ({ spacing }) => spacing(3) }} />
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={2}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-start"}
              >
                <QueueMusic />
              </Stack>
            </Grid>

            <Grid item xs={8}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <SkipPrevious />
                <PlayCircle fontSize={"large"} />
                <SkipNext />
              </Stack>
            </Grid>

            <Grid item xs={2}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <Shuffle />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </AlanCard>
    </div>
  );
};
