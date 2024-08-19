"use client";
import {
  CssBaseline,
  CssVarsProvider,
  Divider,
  extendTheme,
  Grid,
  Typography,
} from "@mui/joy";

interface Props {
  children: React.ReactNode;
}
export default function Template({ children }: Props) {
  const theme = extendTheme({
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            50: "#C0CCD9",
            100: "#A5B8CF",
            200: "#6A96CA",
            300: "#4886D0",
            400: "#2178DD",
            500: "#096BDE",
            600: "#1B62B5",
            700: "#265995",
            800: "#2F4968",
            900: "#2F3C4C",
          },
        },
      },
    },
  });
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline>
        <Grid container direction="column" sx={{ height: "100%" }}>
          <Grid>
            <Typography variant="outlined">Todo App</Typography>
          </Grid>
          <Divider />
          <Grid>{children}</Grid>
          <Grid sx={{ marginTop: "auto", textAlign: "center" }}>
            <Divider />
            Footer
          </Grid>
        </Grid>
      </CssBaseline>
    </CssVarsProvider>
  );
}
