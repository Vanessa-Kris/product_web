import { Box, ListItemButton, Typography, List } from "@mui/material";
import React from "react";

export default function Installation() {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, pb: 3 }}>
        Installing RelaySMS
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
        purus eu nunc ullamcorper, vel convallis ante tincidunt.
      </Typography>
      <List>
        <ListItemButton>Andriod</ListItemButton>
        <ListItemButton>iOS</ListItemButton>
        <ListItemButton>Linux</ListItemButton>
        <ListItemButton>Windows</ListItemButton>
        <ListItemButton>Mac</ListItemButton>
      </List>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700, pb: 3 }}>
          Android
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
          purus eu nunc ullamcorper, vel convallis ante tincidunt.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, pb: 3 }}>
          How to get started
        </Typography>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
          purus eu nunc ullamcorper.
        </Typography>
      </Box>
      {/*  */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700, pb: 3 }}>
          iOS
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
          purus eu nunc ullamcorper, vel convallis ante tincidunt.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, pb: 3 }}>
          How to get started
        </Typography>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
          purus eu nunc ullamcorper.
        </Typography>
      </Box>
      {/*  */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700, pb: 3 }}>
          Desktop
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
          purus eu nunc ullamcorper, vel convallis ante tincidunt.
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, pb: 3 }}>
          How to get started
        </Typography>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
          purus eu nunc ullamcorper.
        </Typography>
      </Box>
    </Box>
  );
}
