import {
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "lib/component-library";
import { Search as SearchIcon } from "lib/icons";

export const Search = () => {
  return (
    <Stack>
      <Typography
        align="left"
        variant="h6"
        sx={{ paddingBottom: ({ spacing }) => spacing(4) }}
      >
        QUICK SEARCH
      </Typography>

      <TextField
        type="search"
        placeholder="Search Podcasts"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            paddingLeft: (theme) => theme.spacing(5),
            borderRadius: (theme) => theme.spacing(5),
          },
        }}
      />
    </Stack>
  );
};
