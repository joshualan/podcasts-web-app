import { Stack, Typography, styled } from "lib/component-library";

const IttyBittyBar = styled("div")<{ height: number; active: boolean }>(
  ({ theme, height, active }) => ({
    height: theme.spacing(height),
    backgroundColor: active
      ? theme.palette.common.white
      : theme.palette.grey[500],
    borderRadius: theme.spacing(8),
    width: theme.spacing(1),
  })
);

export const SongBar = () => {
  const currentTimestamp = 1472;
  const totalTime = 1931;

  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {[...Array(50)].map((_, index) => {
          console.log(index / 50);
          return (
            <IttyBittyBar
              active={index / 50 < currentTimestamp / totalTime}
              height={Math.floor(Math.random() * 4) + 2}
            />
          );
        })}
      </Stack>
      <Stack paddingTop={(theme) => theme.spacing(2)} direction={"row"}>
        <Typography fontSize={(theme) => theme.spacing(3)}>{`${Math.floor(
          currentTimestamp / 60
        )}:${currentTimestamp % 60 < 10 ? 0 : ""}${
          currentTimestamp % 60
        }`}</Typography>
        <Typography
          marginLeft={"auto"}
          fontSize={(theme) => theme.spacing(3)}
          color={({ palette }) => palette.grey[500]}
        >{`${Math.floor(totalTime / 60)}:${totalTime % 60 < 10 ? 0 : ""}${
          totalTime % 60
        }`}</Typography>
      </Stack>
    </div>
  );
};
