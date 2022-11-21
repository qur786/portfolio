import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  Link,
  Grid,
  Stack,
  Drawer,
  IconButton,
} from "@mui/material";
import { yellow, grey } from "@mui/material/colors";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import type { LinkProps, IconButtonProps } from "@mui/material";

const Links = {
  Home: "home",
  Contact: "contact",
  Projects: "projects",
  Title: "title",
  About: "about",
} as const;

type Links = typeof Links[keyof typeof Links];

export function MobileCustomAppBar() {
  const [isHover, setIsHover] = useState<Record<Links, boolean>>({
    title: false,
    home: false,
    contact: false,
    projects: false,
    about: false,
  });
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleMenuClick: IconButtonProps["onClick"] = () => {
    setOpenDrawer(true);
  };

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
          <Grid container item xs={8} sm={6}>
            <Grid item>
              <Link
                href="https://github.com/qur786"
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
          <Grid container item xs={4} sm={6} justifyContent="flex-end">
            <Grid item>
              <IconButton onClick={handleMenuClick}>
                {openDrawer === false ? <Menu /> : undefined}
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Drawer open={openDrawer} anchor="top" onClose={handleDrawerClose}>
          <Grid
            container
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <IconButton onClick={handleDrawerClose}>
                <Close />
              </IconButton>
            </Grid>
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
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
