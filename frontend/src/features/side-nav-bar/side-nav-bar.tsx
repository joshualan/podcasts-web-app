import { AlanCard } from "components/alan-card";
import {
  Button,
  ButtonProps,
  Stack,
  Typography,
  TypographyProps,
  styled,
  useTheme,
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
  fontSize: "14px",
}));

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  color: theme.palette.text.primary,
}));

export const SideNavBar = () => {
  return (
    <AlanCard>
      <Stack spacing={6} padding={5}>
        <div>
          <Image
            src={"https://placekitten.com/g/100/100"}
            style={{ maxWidth: "100px", borderRadius: "50%" }}
          />
          <Typography variant="h6" sx={{ paddingTop: 2 }}>
            Cat Johnson
          </Typography>
          <StyledSubHeading variant="caption" sx={{ fontSize: "12px" }}>
            cat.johnson@kitten.com
          </StyledSubHeading>
        </div>
        <div>
          <StyledSubHeading align="left">MENU</StyledSubHeading>
          <StyledButton
            sx={{
              color: "primary.main",
            }}
            startIcon={<Explore />}
          >
            Discover
          </StyledButton>
          <StyledButton startIcon={<Bolt />}>Trending</StyledButton>
          <StyledButton startIcon={<Description />}>Genres</StyledButton>
          <StyledButton startIcon={<Mic />}>Speaker</StyledButton>
        </div>
        <div>
          <StyledSubHeading align="left">LIBRARY</StyledSubHeading>
          <StyledButton startIcon={<WatchLater />}>Resent</StyledButton>
          <StyledButton startIcon={<PlayCircle />}>Playlist</StyledButton>
          <StyledButton startIcon={<Favorite />}>Favorites</StyledButton>
        </div>
        <div>
          <StyledSubHeading align="left">CUSTOMIZE</StyledSubHeading>
          <StyledButton startIcon={<AddBox />}>New Playlist</StyledButton>
          <StyledButton startIcon={<SystemUpdateAlt />}>Download</StyledButton>
          <StyledButton startIcon={<Settings />}>Settings</StyledButton>
        </div>
        <div>
          <StyledButton startIcon={<Logout />}>Log Out</StyledButton>
        </div>
      </Stack>
    </AlanCard>
  );
};
