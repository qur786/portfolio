import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CustomAppBar } from "./components/AppBarComponent";
import { MobileCustomAppBar } from "./components/MobileAppBarComponent";
import ProgrammerImage from "./images/programmer.jpg";

export function App(): JSX.Element {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.up("sm"));
  return (
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
        style={{ backgroundImage: `url(${ProgrammerImage})` }}
      >
        <Grid item>
          <Typography variant="h3" align="center" sx={{ fontWeight: "bolder" }}>
            Hey! I am Qurban Ahmad
          </Typography>
        </Grid>
        <Grid container item justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" align="center">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
