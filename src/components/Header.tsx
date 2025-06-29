import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItemText,
  ListItem,
  ListItemButton,
  Collapse,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
}

const menuItems = [
  { text: "Home", path: "/" },
  {
    text: "Portfolio",
    children: [
      { text: "Argentina", path: "/portfolio/argentina" },
      { text: "Spain", path: "/portfolio/spain" },
      { text: "Portraits", path: "/portfolio/portraits" },
      { text: "Morocco", path: "/portfolio/morocco" },
    ],
  },
  { text: "My story", path: "/about" },
  { text: "Contact", path: "mailto:e.lujnova@gmail.com", isExternal: true },
];

function Header({ title }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const togglerDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fdfdfd",
          color: "#222",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "1.5rem",
              letterSpacing: "0.5px",
            }}
          >
            {title}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={togglerDrawer(true)}
            sx={{
              "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
              transition: "background-color 0.3s",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={togglerDrawer(false)}
        PaperProps={{
          sx: { width: 280, backgroundColor: "#f9f9f9", paddingTop: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Playfair Display', serif",
              mb: 2,
              fontWeight: 500,
              color: "#333",
            }}
          >
            Menu
          </Typography>
        </Box>

        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {menuItems.map((item, index) => {
            const isExternal = item.isExternal;

            if (item.children) {
              return (
                <Box key={index} sx={{ width: "100%" }}>
                  <ListItemButton
                    onClick={() => setPortfolioOpen(!portfolioOpen)}
                    sx={{
                      maxWidth: 220,
                      mx: "auto",
                      borderRadius: 2,
                      textAlign: "center",
                      color: "#333",
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        fontFamily: "'Playfair Display', serif",
                      }}
                    />
                    {portfolioOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={portfolioOpen} timeout="auto" unmountOnExit>
                    <List disablePadding>
                      {item.children.map((child, i) => (
                        <ListItem key={i} disablePadding>
                          <ListItemButton
                            component={Link}
                            to={child.path}
                            onClick={togglerDrawer(false)}
                            sx={{
                              mx: "auto",
                              textAlign: "center",
                              color: "#555",
                              width: "100%",
                              maxWidth: 200,
                              justifyContent: "center",
                              "&:hover": {
                                backgroundColor: "#ececec",
                              },
                            }}
                          >
                            <ListItemText
                              primary={child.text}
                              primaryTypographyProps={{
                                fontSize: "1rem",
                                fontFamily: "'Playfair Display', serif",
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              );
            }

            return (
              <ListItem key={index} disablePadding sx={{ width: "100%" }}>
                <ListItemButton
                  component={isExternal ? "a" : Link}
                  href={isExternal ? item.path : undefined}
                  to={!isExternal ? item.path : undefined}
                  onClick={togglerDrawer(false)}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  sx={{
                    maxWidth: 220,
                    mx: "auto",
                    borderRadius: 2,
                    my: 0.5,
                    textAlign: "center",
                    color: "#333",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: "1.1rem",
                      fontWeight: 400,
                      fontFamily: "'Playfair Display', serif",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
