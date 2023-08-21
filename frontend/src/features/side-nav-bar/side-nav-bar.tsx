import { AlanCard } from "components/alan-card";
import {
  Button,
  Stack,
  Typography,
  TypographyProps,
  styled,
} from "lib/component-library";
import { Image } from "mui-image";
import {
  Explore,
  Bolt,
  Description,
  Mic,
  WatchLater,
  PlayCircle,
  Favorite,
  AddBox,
  SystemUpdateAlt,
  Settings,
  Logout,
} from "lib/icons";

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
          <Button startIcon={<Explore />}>Discover</Button>
          <Button startIcon={<Bolt />}>Trending</Button>
          <Button startIcon={<Description />}>Genres</Button>
          <Button startIcon={<Mic />}>Speaker</Button>

          <StyledSubHeading align="left">Library</StyledSubHeading>
          <Button startIcon={<WatchLater />}>Resent</Button>
          <Button startIcon={<PlayCircle />}>Playlist</Button>
          <Button startIcon={<Favorite />}>Favorites</Button>

          <StyledSubHeading align="left">Customize</StyledSubHeading>
          <Button startIcon={<AddBox />}>New Playlist</Button>
          <Button startIcon={<SystemUpdateAlt />}>Download</Button>
          <Button startIcon={<Settings />}>Settings</Button>

          <Button startIcon={<Logout />}>Log Out</Button>
        </div>
      </Stack>
    </AlanCard>
  );
};
