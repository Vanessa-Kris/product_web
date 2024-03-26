import { Box, Card, CardMedia, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Faqs from "../Components/FAQs";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Box sx={{ mx: { md: 15, sm: 10, xs: 3 }, my: { md: 2, xs: 10 } }}>
      {/* Banner Page */}
      <Grid container>
        <Grid
          item
          md={6}
          sx={{ justifyContent: "center", display: "flex", mx: "auto" }}
        >
          <Box component="img" src="/phones.png" sx={{ width: "70%" }} />
        </Grid>
        <Grid item md={6} my="auto">
          <Box component="img" src="/logo.png" sx={{ width: "10%", mb: 4 }} />
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Communicate offline with online platforms
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
          </Typography>
          {/*  */}
          <Grid container>
            <Grid item md={3} xs={6}>
              <Box
                component="img"
                src="/googleplay.png"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <Box
                component="img"
                src="/googleplay.png"
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*  */}
      {/* About Section */}
      <Box
        textAlign="center"
        sx={{ py: { md: 20, xs: 7 }, px: { md: 30, xs: 3 } }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, fontSize: { xs: "25px", md: "30px" } }}
        >
          With RelaySMS, you can send emails, tweet and chat on telegram without
          an active internet connection.
        </Typography>
        <Typography variant="body1" sx={{ p: { md: 5, xs: 2 } }}>
          By setting up your account while you have an internet connection, you
          can continue to communicate later using SMS when your no longer have
          internet access. In the case where you have no stored token,
          communicate using Relay Bridges.
        </Typography>
        <Link to="/help">
          <Typography
            variant="body1"
            sx={{ p: 2, textDecoration: "underline" }}
          >
            Getting Started{" "}
            <FaCircleArrowRight size="20px" style={{ rotate: "-30deg" }} />
          </Typography>
        </Link>
      </Box>
      {/*  */}
      {/* How Relay Works */}
      <Box className="cards" sx={{ p: { md: 8, xs: 2 }, borderRadius: "20px" }}>
        <Grid container rowSpacing={8}>
          <Grid
            item
            md={6}
            sx={{ justifyContent: "center", display: "flex", mx: "auto" }}
          >
            <Box
              component="img"
              src="/secure.svg"
              sx={{ width: { md: "50%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={6} my="auto">
            <Typography variant="h6" sx={{ fontWeight: 700, py: 2 }}>
              Secure
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
              Vivamus lacinia, lacus nec tristique bibendum, velit libero
              consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
            </Typography>
          </Grid>

          <Grid item md={6} my="auto">
            <Typography variant="h6" sx={{ fontWeight: 700, py: 2 }}>
              Open Source
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
              Vivamus lacinia, lacus nec tristique bibendum, velit libero
              consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            sx={{ justifyContent: "center", display: "flex", mx: "auto" }}
          >
            <Box
              component="img"
              src="/open.svg"
              sx={{ width: { md: "50%", xs: "80%" } }}
            />
          </Grid>

          <Grid
            item
            md={6}
            sx={{ justifyContent: "center", display: "flex", mx: "auto" }}
          >
            <Box
              component="img"
              src="/serer.svg"
              sx={{ width: "50%", display: { md: "block", xs: "none" } }}
            />
          </Grid>
          <Grid item md={6} my="auto">
            <Typography variant="h6" sx={{ fontWeight: 700, py: 1 }}>
              Decentralized
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
              Vivamus lacinia, lacus nec tristique bibendum, velit libero
              consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      {/* Rlay Map */}
      <Box>
        <Grid container rowSpacing={4} sx={{ py: { md: 15, xs: 10 } }}>
          <Grid item md={5} my="auto">
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, fontSize: { md: "48px", xs: "33px" } }}
            >
              RelaySMS is actively used in over 60 countries.
            </Typography>
          </Grid>
          <Grid
            item
            md={7}
            sx={{ justifyContent: "center", display: "flex", mx: "auto" }}
          >
            <Box
              component="img"
              src="/map.png"
              sx={{ width: "100%", borderRadius: "20px" }}
            />
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      {/* Video */}
      <Box>
        <Box>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={4}
            sx={{ py: { md: 15, xs: 10 } }}
          >
            <Grid
              item
              md={7}
              sx={{
                justifyContent: "center",
                display: "flex",
                mx: "auto",
                width: "100%",
              }}
            >
              <iframe
                width="860"
                height="415"
                src="https://www.youtube.com/embed/NLp4VSYGR4Y?si=EmNrXJKsrkIuOEPs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Grid>
            <Grid item md={5} my="auto">
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, fontSize: { md: "48px", xs: "33px" } }}
              >
                Get familiar with RelaySMS
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/*  */}
      {/* Getting Started */}
      <Box>
        <Grid container rowSpacing={4} mx="auto">
          <Grid item md={12}>
            <Typography variant="h5" sx={{ fontWeight: 700, py: 2 }}>
              Whats new on RelaySMS ?
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="/new.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  How we measure gateway clients reliability
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dignissim purus eu nunc ullamcorper, vel convallis ante
                  tincidunt.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="/ai.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  The controversy of lorem ipsum dummy text
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dignissim purus eu nunc ullamcorper, vel convallis ante
                  tincidunt.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="/dash.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  A new dashboard to monitor gateway clients reliabilty
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dignissim purus eu nunc ullamcorper, vel convallis ante
                  tincidunt.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Read more</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      {/*  */}
      {/* FAQS */}
      <Box sx={{ my: 15 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, py: 4 }}>
          FAQs
        </Typography>

        <Faqs />
      </Box>
      {/*  */}
    </Box>
  );
}
