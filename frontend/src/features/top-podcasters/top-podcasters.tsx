import { Typography, Stack } from "lib/component-library";
import { Podcaster } from "./podcaster";
import { Image } from "mui-image";
const PODCASTERS = [
  {
    name: "Anna Johnson",
    followers: "25k",
    icon: (
      <Image
        src={"https://picsum.photos/id/1/80"}
        style={{ maxWidth: "80px", borderRadius: "50%" }}
        bgColor="transparent"
      />
    ),
  },
  {
    name: "Benjamin Thompson",
    followers: "50k",
    icon: (
      <Image
        src={"https://picsum.photos/id/23/80"}
        style={{ maxWidth: "80px", borderRadius: "50%" }}
        bgColor="transparent"
      />
    ),
  },
  {
    name: "Noah Davis",
    followers: "120k",
    icon: (
      <Image
        src={"https://picsum.photos/id/16/80"}
        style={{ maxWidth: "80px", borderRadius: "50%" }}
        bgColor="transparent"
      />
    ),
  },
];

export const TopPodcasters = () => {
  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          align="left"
          variant="h6"
          sx={{ paddingBottom: ({ spacing }) => spacing(4) }}
        >
          TOP PODCASTERS
        </Typography>
        <Typography
          sx={{
            color: (theme) => theme.palette.grey[500],
            fontSize: (theme) => theme.spacing(4),
            alignSelf: "center",
            paddingBottom: (theme) => theme.spacing(3),
          }}
          align="right"
        >
          See All
        </Typography>
      </Stack>

      {PODCASTERS.map((podcaster) => {
        return <Podcaster {...podcaster} />;
      })}
    </Stack>
  );
};
