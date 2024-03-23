import { Typography, Box, IconButton } from "@mui/material";
import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Nav({ darkMode, toggleDarkMode }) {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: 3,
        mx: 5,
        position: "fixed",
        right: 0,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}></Box>
      <Box sx={{ display: "flex" }}>
        <Box
          className="cards"
          sx={{
            display: "flex",

            borderRadius: 7,
            p: 1,
            px: 2,
            justifyItems: "space-between",
          }}
        >
          <Typography sx={{ mx: 4 }} textAlign={"center"}>
            About
          </Typography>
          <Typography sx={{ mr: 4 }} textAlign={"center"}>
            Documentations
          </Typography>
          <Typography sx={{ mr: 4 }} textAlign={"center"}>
            Blog
          </Typography>
        </Box>
        <Typography
          className="cards"
          sx={{ borderRadius: 7, px: 3, py: 1, ml: 2 }}
        >
          Donate
        </Typography>
        {/* Dark/Light mode toggle */}
        <IconButton
          className="cards"
          onClick={toggleDarkMode}
          sx={{ ml: 2 }}
          aria-label={darkMode ? "Light Mode" : "Dark Mode"}
          color="inherit"
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  );
}