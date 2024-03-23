import {
  Box,
  Typography,
  Grid,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import {
  FaBlog,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLink,
  FaPen,
  FaPenFancy,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{ bgcolor: "black", color: "white", p: 3, px: 8 }}
      >
        <Box>
          <Grid container>
            <Grid item md={6} xs={6}>
              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  src="/logo.png"
                  sx={{ width: "40px", mx: 2 }}
                  alt="smswithoutborders logo"
                />
                <Typography variant="h5">RelaySMS</Typography>
              </Box>
            </Grid>
            <Grid item md={3} xs={6}>
              <List>
                <ListItem variant="body1">
                  <FaPenFancy style={{ marginRight: 15 }} /> Blogs
                </ListItem>
                <ListItem variant="body1">
                  <FaLink style={{ marginRight: 15 }} /> RelaySMS
                </ListItem>
                <ListItem variant="body1">
                  <FaLink style={{ marginRight: 15 }} /> Deku SMS
                </ListItem>
                <ListItem variant="body1">
                  <FaLink style={{ marginRight: 15 }} /> Developers
                </ListItem>
              </List>
            </Grid>
            <Grid item md={3} xs={6}>
              <List>
                <ListItem variant="body1">
                  <FaGithub style={{ marginRight: 15 }} />
                  GitHub
                </ListItem>
                <ListItem variant="body1">
                  <FaFacebook style={{ marginRight: 15 }} />
                  Facebook
                </ListItem>
                <ListItem variant="body1">
                  <FaXTwitter style={{ marginRight: 15 }} /> X
                </ListItem>
                <ListItem variant="body1">
                  <FaEnvelope style={{ marginRight: 15 }} /> Mail
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <br />
        </Box>
        <Typography variant="body1" sx={{ mx: 2 }}>
          © 2024 SMSWithoutBorders
        </Typography>
      </Box>
    </>
  );
}
