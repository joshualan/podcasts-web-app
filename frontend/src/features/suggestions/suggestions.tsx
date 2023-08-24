import { Typography } from "lib/component-library";

export const Suggestions = () => {
  return (
    <div>
      <Typography
        align="left"
        variant="h6"
        sx={{ paddingBottom: ({ spacing }) => spacing(4) }}
      >
        YOU MIGHT LIKE
      </Typography>
      Suggestions
    </div>
  );
};
