import { AlanCard } from "components/alan-card";
import { ReactElement } from "react";
import { Stack, Typography, styled } from "lib/component-library";
import { FavoriteBorder, MoreVert, Favorite } from "lib/icons";
type PodcastSuggestionPropsType = {
  title: string;
  icon: ReactElement;
  author: string;
  episodes: number;
  favorited?: boolean;
};

const ImageCard = styled(AlanCard)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  padding: theme.spacing(3),
  boxShadow: "none",
}));

export const PodcastSuggestion = ({
  title,
  icon: Icon,
  author,
  episodes,
  favorited = false,
}: PodcastSuggestionPropsType) => {
  return (
    <AlanCard sx={{ padding: (theme) => theme.spacing(4) }}>
      <Stack direction={"row"} spacing={5}>
        <ImageCard>{Icon}</ImageCard>

        <Stack justifyContent={"center"} spacing={1}>
          <Typography align="left">{title}</Typography>
          <Typography align="left" color={(theme) => theme.palette.grey[500]}>
            {`${author} • ${episodes} episodes`}
          </Typography>
        </Stack>

        <div style={{ marginLeft: "auto" }}>
          <Stack
            direction={"row"}
            height="100%"
            alignItems={"center"}
            spacing={4}
          >
            {favorited ? <Favorite /> : <FavoriteBorder />}
            <MoreVert />
          </Stack>
        </div>
      </Stack>
    </AlanCard>
  );
};
