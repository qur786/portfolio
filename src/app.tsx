import {
  createTheme,
  CssBaseline,
  Fab,
  FabProps,
  Grid,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import type { Theme } from "@mui/material";
import { useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { CustomAppBar } from "./components/AppBarComponent";
import { MobileCustomAppBar } from "./components/MobileAppBarComponent";

function getTheme(darkMode?: boolean): Theme {
  let theme: Theme;
  if (darkMode === true) {
    theme = createTheme({
      palette: {
        mode: "dark",
      },
    });
  } else {
    theme = createTheme({
      palette: {
        mode: "light",
      },
    });
  }
  return theme;
}

export function App(): JSX.Element {
  const [darkMode, setDarkMode] = useState(true);
  const theme = getTheme(darkMode);
  const mediaQuery = useMediaQuery(theme.breakpoints.up("sm"));

  const handleFabClick: FabProps["onClick"] = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container direction="column">
        <Grid item marginBottom="12vh">
          {mediaQuery === true ? <CustomAppBar /> : <MobileCustomAppBar />}
        </Grid>
        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="80vh"
        >
          <Grid item>
            <Typography
              variant="h3"
              align="center"
              sx={{ fontWeight: "bolder" }}
            >
              Hey! I am Qurban Ahmad
            </Typography>
          </Grid>
          <Grid container item justifyContent="center">
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" align="center">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Fab
        color="info"
        aria-label="mode"
        onClick={handleFabClick}
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
      >
        {darkMode === true ? <LightMode /> : <DarkMode />}
      </Fab>
    </ThemeProvider>
  );
}
