import React, { useState, useEffect } from "react";
import "./History.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Contact() {
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

  const contentToDisplay = () => {
    return (
      <>
        <Box
          sx={{
            mr: mobileView ? 2 : 6,
            ml: mobileView ? 2 : 6,
            mb: 4,
          }}
        >
          <Typography align="center">
            <h1>A Brief History of Thurston Rugby Club</h1>
          </Typography>
          <Typography align="justify">
            <p>
              The club was formed in 1973 by teachers and parents at the newly
              opened Thurston Upper School, which had an enormous rural
              catchment area, including RAF Honington. The club initially used
              the school pitches and the local pubs and grew quickly, with a
              second XV added in 1976, a Colts side in 1978 and a 3rd XV in
              1987.
              <br />
              <br />
              The first captain of the club was Dave Ainge, a parent at the
              school and an RAF officer at Honington, followed by John Cook,
              Head of PE at the school and an ex Diss player. By 1978 it was
              realised that the growing club would need to be put on a more
              formal footing and the committee created a constitution, which has
              been the solid basis for the club’s development over the last
              fifty years. The 3rd XV became a special, uproarious team and was
              known as the “Dangerous XIV” from their then skipper Arthur
              “Dangerous” Johnston (ex RAF, Bury Police and Entrepreneur
              extraordinaire) and the fact that they nearly always played with
              14 men, including local legends such as “Matt Braddock” and those
              with exotic nicknames, such as Rat, Dog, Earwig, Hoof and the
              Honking Monk.
              <br />
              <br /> Players came from the Upper School, from Culford School,
              the RAF, other clubs (including Bury) and from players moving into
              the area. In the modern era many young players have joined from
              the West Suffolk College Rugby Academy. Undoubtedly the standard
              of rugby has improved over the years and players are probably
              fitter and certainly larger than forty years ago. One thing has
              not changed and that is the warmth and the closeness of the
              camaraderie within the club, which extends beyond the players to
              families, supporters, sponsors and friends. The social life
              remains extraordinarily active and successful.
              <br />
              <br /> When local businessman, RFU and Eastern Counties stalwart,
              David Robinson became Club President in the 1980s, he purchased
              land in Church Road Pakenham, which the club used for a horse show
              and the start of the 1989 season. The new owner of Nether Hall
              approached us to buy the land, which had originally been part of
              the estate and we agreed a sale on the condition that he would buy
              a larger piece of land in Thurston and donate a chunk of money to
              the club to start building the clubhouse. In the event the club
              acquired a sizeable piece of land near the school and started fund
              raising to build the clubhouse. This included weight lifting
              marathons, hiring out club labour, treasure hunts, caravan club
              Camps on the land and an annual horse show that ran for twelve
              years contributing about £1000 per annum to the building fund. The
              land was levelled (up to a point) and farming members contributed
              time and effort to seeding, planting trees and erecting posts.
              When the club opened for business in 1990, it was one of the few
              (if any) clubs in East Anglia that owned its own land. In 1980 the
              club achieved its first major honour by winning the Suffolk Plate,
              at Sudbury, beating a strong Ipswich YMCA side that included
              several county players. Thurston also had many players who had
              represented the county at Colts and a few at senior level, plus
              one Steve Bird, an RAF colt who made today’s giants seem small.
              Since then the club has won the Suffolk Plate on another three
              occasions. The new clubhouse was formally opened in 1990 by Sandy
              Sanders, the RFU President with two representative games and an
              enjoyable day and evening of celebrations. The clubhouse has since
              been extended to provide better changing facilities and the bar
              rivals any club in the area.
              <br />
              <br /> By 1990 the club had started youth rugby in conjunction
              with the School and until 1995 the club produced successful teams
              from under 13s to Colts level. However in common with many clubs,
              the number of players tended to fluctuate in the late 1990s and
              the following decade. The club joined the league system at its
              inception and currently runs two senior sides. The 1st XV reached
              the play-offs for London 3 North in 2007 but then dropped down a
              league. Currently our first team are competing in Eastern Counties
              1 with our second team playing in Eastern Counties Greene King
              Division One South. The future is bright for Thurston RUFC with
              the playing side revitalised and the social side as strong as ever
              including annual tours to far flung places, frequent VP lunches
              and the very popular annual dinner; there is also tremendous
              support from the many sponsors involved with the club.
            </p>
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

export default Contact;
