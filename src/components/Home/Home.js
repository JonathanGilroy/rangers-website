import React, { useState, useEffect } from "react";
import "./Home.css";
import Box from "@mui/material/Box";
import { Typography, Card, CardContent, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";

function Home() {
  const [state, setState] = useState({
    mobileView: false,
  });

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const ResultIcon = (props) => {
    if (props.matchResult === "win") {
      return (
        <CheckCircleIcon
          fontSize="small"
          sx={{ color: "green", verticalAlign: "text-bottom" }}
        />
      );
    } else if (props.matchResult === "draw") {
      return (
        <OfflinePinIcon
          fontSize="small"
          sx={{ color: "orange", verticalAlign: "text-bottom" }}
        />
      );
    } else if (props.matchResult === "loss") {
      return (
        <CancelIcon
          fontSize="small"
          sx={{ color: "red", verticalAlign: "text-bottom" }}
        />
      );
    } else {
      return (
        <DoDisturbOnIcon
          fontSize="small"
          sx={{ color: "grey", verticalAlign: "text-bottom" }}
        />
      );
    }
  };

  const contentToDisplay = () => {
    return (
      <>
        <Typography
          variant={mobileView ? "h4" : "h1"}
          align="center"
          sx={{ mt: mobileView ? 2 : 2, mb: mobileView ? 2 : 4 }}
        >
          Thurston Rangers
        </Typography>
        <Box
          sx={{
            mr: mobileView ? 2 : 6,
            ml: mobileView ? 2 : 6,
          }}
        >
          {/* <Grid
            container
            direction="row"
            justifyContent={mobileView ? "space-evenly" : "space-between"}
            alignItems="flex-start"
          >
            <Grid item>
              <Typography sx={{ fontWeight: "bold" }}>
                Last 5 results:
              </Typography>
              <Card
                sx={{
                  mb: 2,
                  mt: 2,
                  width: mobileView ? 220 : 160,
                  height: 125,
                }}
                style={{ backgroundColor: "#F0F0F0" }}
                elevation={4}
              >
                <CardContent>
                  <Typography>1st XV</Typography>
                  <Box>
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "green", verticalAlign: "text-bottom" }}
                    />
                    <CancelIcon
                      fontSize="small"
                      sx={{ color: "red", verticalAlign: "text-bottom" }}
                    />
                    <OfflinePinIcon
                      fontSize="small"
                      sx={{ color: "orange", verticalAlign: "text-bottom" }}
                    />
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "green", verticalAlign: "text-bottom" }}
                    />
                    <CancelIcon
                      fontSize="small"
                      sx={{ color: "red", verticalAlign: "text-bottom" }}
                    />
                  </Box>
                  <Typography>2nd XV</Typography>
                  <Box>
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "green", verticalAlign: "text-bottom" }}
                    />
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "green", verticalAlign: "text-bottom" }}
                    />
                    <CancelIcon
                      fontSize="small"
                      sx={{ color: "red", verticalAlign: "text-bottom" }}
                    />
                    <CancelIcon
                      fontSize="small"
                      sx={{ color: "red", verticalAlign: "text-bottom" }}
                    />
                    <CancelIcon
                      fontSize="small"
                      sx={{ color: "red", verticalAlign: "text-bottom" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                Upcoming fixtures:
              </Typography>
              <Card
                sx={{
                  mb: 2,
                  mt: 2,
                  width: mobileView ? 220 : 350,
                  height: mobileView ? 150 : 120,
                }}
                style={{ backgroundColor: "#F0F0F0" }}
                elevation={4}
              >
                <CardContent>
                  <Typography variant={"h5"} align="center">
                    Rangers v Young Farmers
                  </Typography>
                  <Typography align="center">Robinson Field</Typography>
                  <Typography align="center">
                    KO: 5pm, 7th April 2023
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid> */}
          <Typography
            variant={mobileView ? "h5" : "h3"}
            align="center"
            sx={{ mt: 3, mb: 3 }}
          >
            Blood, sweat and beers
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            sx={{ mb: mobileView ? 2 : 4 }}
          >
            We are a friendly community rugby club based in Thurston, Suffolk
            currently fielding two mens teams. Following COVID-19, the club has
            just had its most successful season ever, with both our first and
            second team winning county cups and gaining promotion to higher
            leagues (Eastern Counties 1 and Eastern Counties Greene King
            Division One South respectively).
          </Typography>
          <Box display="flex" justifyContent="center">
            <img
              object-fit
              src={"cup-victory.jpg"}
              alt="Thurston Rangers celebrating cup win."
              style={{
                width: mobileView ? "95%" : "75%",
              }}
            />
          </Box>
          <Typography
            align="justify"
            variant="body1"
            sx={{ mb: mobileView ? 2 : 4, mt: mobileView ? 2 : 4 }}
          >
            The club is also due to celebrate it's 50th birthday in 2023, so
            keep an eye out for news and events to mark this special event next
            year! The club has a fantastic community and hosts multiple social
            events throughout the year including VP dinners, ladies luncheons,
            hog roasts and annual dinner.
          </Typography>
          <Box display="flex" justifyContent="center">
            <img
              object-fit
              src={"twos-cup-victory-2.jpg"}
              alt="Thurston Rangers second team celebrating cup win."
              style={{
                width: mobileView ? "95%" : "75%",
              }}
            />
          </Box>
          <Typography sx={{ mb: 4, mt: mobileView ? 2 : 4 }}>
            So whether you're a player or supporter, newcomer or vet, come on
            down!
          </Typography>
        </Box>
      </>
    );
  };

  const displayMobile = () => {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        {contentToDisplay()}
      </Box>
    );
  };

  const displayDesktop = () => {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          sx={{
            width: "105vh",
            height: "100%",
            minHeight: "100vh",
            backgroundColor: "white",
          }}
        >
          {contentToDisplay()}
        </Box>
      </Box>
    );
  };

  const { mobileView } = state;

  return <>{mobileView ? displayMobile() : displayDesktop()}</>;
}

export default Home;
