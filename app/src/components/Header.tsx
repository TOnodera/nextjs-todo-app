import { Grid, Typography } from "@mui/joy";
import AddTaskSharpIcon from "@mui/icons-material/AddTaskSharp";

export default function Header() {
  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={(theme) => ({
          padding: "1rem",
          backgroundColor: theme.colorSchemes.light.palette.primary[100],
        })}
      >
        <Grid>
          <AddTaskSharpIcon />
        </Grid>
        <Grid sx={{ marginLeft: "0.2rem" }}>
          <Typography
            sx={(theme) => ({
              color: theme.colorSchemes.light.palette.text.tertiary,
            })}
          >
            Todo App
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
