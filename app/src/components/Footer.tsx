import { Divider, Grid, Typography } from "@mui/joy";

export default function Footer() {
  return (
    <Grid
      sx={(theme) => ({
        backgroundColor: theme.colorSchemes.light.palette.primary[100],
        color: "white",
        marginTop: "auto",
        textAlign: "center",
      })}
    >
      <Divider />
      <Typography
        sx={(theme) => ({
          color: theme.colorSchemes.light.palette.text.tertiary,
        })}
      >
        &copy;copyright 2024
      </Typography>
    </Grid>
  );
}
