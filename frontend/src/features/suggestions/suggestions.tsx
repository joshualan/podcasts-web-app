import { Stack, Typography, styled, ButtonProps } from "lib/component-library";
import { AlanButton } from "components/alan-button";
import { Image } from "mui-image";
import { PodcastSuggestion } from "./podcast-suggestion";

const StyledButton = styled(AlanButton)<ButtonProps & { active?: boolean }>(
  ({ theme, active }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.grey[500],
    "&:hover": {
      "background-color": theme.palette.grey[700],
    },
    flexShrink: 0,
    ...(active && {
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.common.black,
      "&:hover": {
        "background-color": theme.palette.grey[500],
      },
    }),
  })
);

const podcasts = [
  {
    title: "Healthy Lifestyle: The Search for Harmony",
    author: "Liam Martinez",
    episodes: 12,
    icon: (
      <Image
        src={"https://placekitten.com/80/80"}
        style={{ maxWidth: "100px", borderRadius: "50%" }}
        bgColor="transparent"
      />
    ),
  },
  {
    title: "Investing in Yourself",
    author: "Noah Davis",
    favorited: true,
    episodes: 16,
    icon: (
      <Image
        src={"https://placekitten.com/80/80"}
        style={{ maxWidth: "100px", borderRadius: "50%" }}
        bgColor="transparent"
      />
    ),
  },
  {
    title: "How Modern Gadgets Are Changing Our Lives",
    author: "Jackson Brown",
    episodes: 10,
    icon: (
      <Image
        src={"https://placekitten.com/80/80"}
        style={{ maxWidth: "100px", borderRadius: "50%" }}
        bgColor="transparent"
      />
    ),
  },
];

export const Suggestions = () => {
  return (
    <Stack spacing={4}>
      <Typography align="left" variant="h6">
        YOU MIGHT LIKE
      </Typography>
      <Stack direction={"row"} gap={4}>
        <StyledButton active>New Podcasts</StyledButton>
        <StyledButton>Popular</StyledButton>
        <StyledButton>Business</StyledButton>
        <StyledButton>Technology</StyledButton>
        <StyledButton>Psychology</StyledButton>
      </Stack>

      {podcasts.map((podcast) => {
        return <PodcastSuggestion {...podcast} />;
      })}
    </Stack>
  );
};
