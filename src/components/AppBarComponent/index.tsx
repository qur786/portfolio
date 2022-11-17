import { AppBar, Toolbar, Avatar, Typography, Link, Grid } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { useState } from "react";
import type { LinkProps } from "@mui/material";

export function CustomAppBar() {
  const [nameColor, setNameColor] = useState("black");

  const onMouseMoveHandler: LinkProps["onMouseMove"] = () => {
    setNameColor(yellow[600]);
  };

  const onMouseLeaveHandler: LinkProps["onMouseLeave"] = () => {
    setNameColor("black");
  };

  return (
    <AppBar color="transparent">
      <Toolbar>
        <Link
          href="https://github.com/qur786"
          underline="none"
          onMouseMove={onMouseMoveHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              {/* TODO: replace it with image */}
              <Avatar sx={{ bgcolor: yellow[600] }}>Q</Avatar>
            </Grid>
            <Grid item>
              <Typography sx={{ fontWeight: "bolder", color: nameColor }}>
                QURBAN AHMAD
              </Typography>
            </Grid>
          </Grid>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
