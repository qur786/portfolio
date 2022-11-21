import { useMediaQuery, useTheme } from "@mui/material";
import { CustomAppBar } from "./components/AppBarComponent";
import { MobileCustomAppBar } from "./components/MobileAppBarComponent";

export function App() {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.up("sm"));
  return mediaQuery === true ? <CustomAppBar /> : <MobileCustomAppBar />;
}
