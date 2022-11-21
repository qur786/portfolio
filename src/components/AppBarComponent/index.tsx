import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Link,
  Grid,
  Stack,
} from "@mui/material";
import { yellow, grey } from "@mui/material/colors";
import { useState } from "react";
import type { LinkProps } from "@mui/material";
import { Links } from "../utils";

export function CustomAppBar() {
  const [isHover, setIsHover] = useState<Record<Links, boolean>>({
    title: false,
    home: false,
    contact: false,
    projects: false,
    about: false,
  });

  const onMouseMoveHandler: LinkProps["onMouseMove"] = (event) => {
    const dataName = event.currentTarget.getAttribute("data-name");
    setIsHover((prev) => ({
      ...prev,
      [dataName ?? ""]: true,
    }));
  };

  const onMouseLeaveHandler: LinkProps["onMouseLeave"] = (event) => {
    const dataName = event.currentTarget.getAttribute("data-name");
    setIsHover((prev) => ({
      ...prev,
      [dataName ?? ""]: false,
    }));
  };

  return (
    <AppBar color="transparent">
      <Toolbar>
        <Grid container>
          <Grid container item xs={6}>
            <Grid item>
              <Link
                href="/"
                underline="none"
                onMouseMove={onMouseMoveHandler}
                onMouseLeave={onMouseLeaveHandler}
                color={isHover.title === true ? yellow[600] : grey[900]}
                data-name={Links.Title}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: yellow[600] }}>Q</Avatar>
                  <Typography sx={{ fontWeight: "bolder" }}>
                    QURBAN AHMAD
                  </Typography>
                </Stack>
              </Link>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={6}
            alignItems="center"
            justifyContent="space-around"
          >
            <Grid item>
              <Link
                href="#"
                underline="none"
                variant="button"
                data-name={Links.Home}
                color={isHover.home === true ? yellow[600] : grey[900]}
                onMouseMove={onMouseMoveHandler}
                onMouseLeave={onMouseLeaveHandler}
                sx={{ fontWeight: "bolder" }}
              >
                Home
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                underline="none"
                variant="button"
                data-name={Links.About}
                color={isHover.about === true ? yellow[600] : grey[900]}
                onMouseMove={onMouseMoveHandler}
                onMouseLeave={onMouseLeaveHandler}
                sx={{ fontWeight: "bolder" }}
              >
                About
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                underline="none"
                variant="button"
                data-name={Links.Projects}
                color={isHover.projects === true ? yellow[600] : grey[900]}
                onMouseMove={onMouseMoveHandler}
                onMouseLeave={onMouseLeaveHandler}
                sx={{ fontWeight: "bolder" }}
              >
                Projects
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                underline="none"
                variant="button"
                data-name={Links.Contact}
                color={isHover.contact === true ? yellow[600] : grey[900]}
                onMouseMove={onMouseMoveHandler}
                onMouseLeave={onMouseLeaveHandler}
                sx={{ fontWeight: "bolder" }}
              >
                Contact
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
