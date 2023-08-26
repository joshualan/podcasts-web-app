import { ReactElement } from "react";
import {
  Stack,
  Typography,
  styled,
  ButtonProps,
  Box,
} from "lib/component-library";
import { AlanButton } from "components/alan-button";

const StyledButton = styled(AlanButton)<ButtonProps>(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.grey[900],
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  // "&:hover": {
  //   "background-color": theme.palette.grey[500],
  // },
}));

export const Podcaster = ({
  name,
  followers,
  icon,
}: {
  name: string;
  followers: string;
  icon: ReactElement;
}) => {
  return (
    <Stack direction={"row"} padding={3} gap={5} alignItems={"center"}>
      <div>{icon}</div>
      <Stack>
        <Typography align="left" fontWeight={"bold"}>
          {name}
        </Typography>
        <Typography
          align="left"
          color={(theme) => theme.palette.grey[500]}
        >{`${followers} followers`}</Typography>
      </Stack>
      <Box sx={{ marginLeft: "auto" }}>
        <StyledButton>Follow</StyledButton>
      </Box>
    </Stack>
  );
};
