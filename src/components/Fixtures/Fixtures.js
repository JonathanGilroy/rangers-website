import React, { useState, useEffect } from "react";
import { Link, Typography } from "@mui/material";
import "./Fixtures.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";

import firstFixtures from "./first-fixtures.json";
import twosFixtures from "./twos-fixtures.json";

function Contact() {
  const [state, setState] = useState({
    mobileView: false,
  });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const getFixtureCards = (team) => {
    return team.fixtures.map(({ home, hScore, away, aScore, date, result }) => {
      return (
        <Box>
          <Typography variant="body1" align="center" sx={{ mb: 1 }}>
            {date} <ResultIcon matchResult={result}></ResultIcon>
          </Typography>
          <Paper elevation={4} sx={{ padding: 2, mb: 5 }}>
            <Grid container spacing={0.5} justifyContent="center">
              <Grid item xs={4}>
                <Typography align="center">{home}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography align="center">{hScore}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography align="center">-</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography align="center">{aScore}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography align="center">{away}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      );
    });
  };

  const contentToDisplay = () => {
    return (
      <>
        <img
          src={"jenks-wallpaper-2.jpg"}
          alt="Thurston Ranger smiling running onto the pitch for kick off."
          style={{
            maxWidth: "100%",
            width: "100%",
          }}
        />
        <Box
          sx={{
            mr: mobileView ? 1 : 6,
            ml: mobileView ? 1 : 6,
          }}
        >
          <Typography align="center" sx={{ mb: 6 }}>
            <h1>Fixtures and Results</h1>
            <Typography align="justify">
              <p>
                {
                  "The team on the left of the match cards indicates the home team, with the team on the right of the card indicating the away team. "
                }
                {
                  "Please see the RFU website for more information regarding fixtures, results and league tables for the "
                }
                <Link
                  href="https://www.englandrugby.com/fixtures-and-results/search-results?team=22795&season=2022-2023#fixtures"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  first team
                </Link>
                {", and "}
                <Link
                  href="https://www.englandrugby.com/fixtures-and-results/search-results?team=22796&season=2022-2023#fixtures"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  second team
                </Link>
                .
              </p>
            </Typography>
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            textColor="primary"
            indicatorColor="primary"
            sx={
              {
                // '& .MuiTabs-indicator': { backgroundColor: '#AA0000' },
                // '& .MuiTab-root': { color: '' },
                // // https://codingbeautydev.com/blog/material-ui-tabs/
                // '& .Mui-selected': { color: '#AA0000' },
              }
            }
          >
            <Tab label="First Team" />
            <Tab label="Second Team" />
          </Tabs>
          <Box sx={{ padding: 2, mt: 5 }}>
            {value === 0 && (
              <Box sx={{ flexGrow: 1 }}>{getFixtureCards(firstFixtures)}</Box>
            )}
            {value === 1 && (
              <Box sx={{ flexGrow: 1 }}>{getFixtureCards(twosFixtures)}</Box>
            )}
          </Box>
          {/* <Typography>
                        <p>We are currently working to create our own fixtures and results page. In the mean time, please find the club fixtures and results on the RFU website below:</p>
                        <ul>
                            <li>
                                <Link
                                    href='https://www.englandrugby.com/fixtures-and-results/search-results?team=22795&season=2022-2023#fixtures'
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    First Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.englandrugby.com/fixtures-and-results/search-results?team=22796&season=2022-2023#fixtures"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Second Team
                                </Link>
                            </li>
                        </ul>
                    </Typography> */}
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

export default Contact;
