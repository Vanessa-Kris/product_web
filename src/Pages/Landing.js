import { Box, Card, CardMedia, Grid, Typography, Button } from "@mui/material";
import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Faqs from "../Components/FAQs";

export default function Landing() {
  return (
    <Box sx={{ mx: 15, my: 2 }}>
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
            <Grid item md={3}>
              <Box
                component="img"
                src="/googleplay.png"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item md={3}>
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
      <Box textAlign="center" sx={{ py: 20, px: 30 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          With RelaySMS, you can send emails, tweet and chat on telegram without
          an active internet connection.
        </Typography>
        <Typography variant="body1" sx={{ p: 5 }}>
          By setting up your account while you have an internet connection, you
          can continue to communicate later using SMS when your no longer have
          internet access. In the case where you have no stored token,
          communicate using Relay Bridges.
        </Typography>
        <Typography variant="body1" sx={{ p: 2, textDecoration: "underline" }}>
          Getting Started{" "}
          <FaCircleArrowRight size="20px" style={{ rotate: "-30deg" }} />
        </Typography>
      </Box>
      {/*  */}
      {/* How Relay Works */}
      <Box className="cards" sx={{ p: 8, borderRadius: "20px" }}>
        <Grid container rowSpacing={8}>
          <Grid
            item
            md={6}
            sx={{ justifyContent: "center", display: "flex", mx: "auto" }}
          >
            <Box component="img" src="/secure.svg" sx={{ width: "50%" }} />
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
            <Box component="img" src="/open.svg" sx={{ width: "50%" }} />
          </Grid>

          <Grid
            item
            md={6}
            sx={{ justifyContent: "center", display: "flex", mx: "auto" }}
          >
            <Box component="img" src="/serer.svg" sx={{ width: "50%" }} />
          </Grid>
          <Grid item md={6} my="auto">
            <Typography variant="h6" sx={{ fontWeight: 700, py: 2 }}>
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
        <Grid container sx={{ py: 15 }}>
          <Grid item md={5} my="auto">
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
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
        {/* <iframe
          width="860"
          height="415"
          src="https://www.youtube.com/embed/NLp4VSYGR4Y?si=EmNrXJKsrkIuOEPs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
        <Box>
          <Grid container columnSpacing={4} sx={{ py: 15 }}>
            <Grid
              item
              md={7}
              sx={{ justifyContent: "center", display: "flex", mx: "auto" }}
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
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
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
