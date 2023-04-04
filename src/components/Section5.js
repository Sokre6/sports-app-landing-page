import { createStyles, Text } from "@mantine/core";
import UlettiTransparentLogo from "../assets/icons/uletti-transparent-logo.svg";
import FacebookLogo from "../assets/icons/facebook-logo.svg";
import InstagramLogo from "../assets/icons/instagram-logo.svg";
import TwitterLogo from "../assets/icons/twitter-logo.svg";

import { Link, NavLink } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  fifthSection: {
    backgroundColor: "#0F1222",
    height: "500px",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
      width: "100vw",
      height: "634px",
    },
  },
  subsection1: {
    display: "flex",
    flexDirection: "row",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
    },
  },
  subsection2: {
    display: "flex",
    flexDirection: "row",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
    },
  },

  ulettiLogo: {
    backgroundImage: `url(${UlettiTransparentLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginLeft: "16vw",
    marginTop: "200px",
    width: "51px",
    height: "51px",
    position: "relative",
    "@media (max-width: 1211px)": {
      marginLeft: "5vw",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "55px",
      width: "80px",
      height: "80px",
    },
  },
  title: {
    width: "470px",
    height: "58px",
    marginLeft: "1vw",
    marginTop: "190px",
    fontSize: "48px",
    letterSpacing: "-1.2px",
    color: "#FFFFFF",
    fontFamily: "Albert_Sans",
    fontWeight: "bold",
    textAlign: "center",
    "@media (max-width: 1211px)": {
      marginTop: "198px",
      marginLeft: "1px",
      fontSize: "40px",
      width: "400px",
    },
    "@media (max-width: 880px)": {
      marginTop: "198px",
      fontSize: "35px",
      width: "350px",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "27px",
      width: "200px",
      height: "77px",
      fontSize: "35px",
      letterSpacing: "-0.88px",
    },
  },
  facebookLogo: {
    backgroundImage: `url(${FacebookLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginLeft: "25vw",
    marginTop: "200px",
    width: "45px",
    height: "45px",
    position: "relative",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "37vw",
      marginTop: "110px",
    },

    "@media (max-width: 590px)": {
      marginLeft: "33vw",
    },

    "@media (max-width: 470px)": {
      marginLeft: "29vw",
    },
    "@media (max-width: 410px)": {
      marginLeft: "25vw",
    },
  },
  instagramLogo: {
    backgroundImage: `url(${InstagramLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginLeft: "2vw",
    marginTop: "200px",
    width: "45px",
    height: "45px",
    position: "relative",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "-45px",
    },
  },
  twitterLogo: {
    backgroundImage: `url(${TwitterLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginLeft: "2vw",
    marginTop: "200px",
    width: "45px",
    height: "45px",
    position: "relative",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "58vw",
      marginTop: "-45px",
    },
    "@media (max-width: 470px)": {
      marginLeft: "62vw",
    },
    "@media (max-width: 410px)": {
      marginLeft: "64vw",
    },
  },

  text1: {
    width: "100px",
    height: "38px",
    marginLeft: "20vw",
    marginTop: "200px",
    fontSize: "14px",
    letterSpacing: "0px",
    color: "#FFFFFF",
    fontFamily: "Albert_Sans",
    textAlign: "center",
    textDecoration: "none",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "84px",
    },
  },
  text2: {
    width: "100px",
    height: "38px",
    marginLeft: "3vw",
    marginTop: "200px",
    fontSize: "14px",
    letterSpacing: "0px",
    color: "#FFFFFF",
    fontFamily: "Albert_Sans",
    textAlign: "center",
    textDecoration: "none",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "-5px",
    },
  },
  text3: {
    width: "278px",
    height: "38px",
    marginLeft: "34vw",
    marginTop: "200px",
    fontSize: "12px",
    letterSpacing: "0px",
    color: "#FFFFFF",
    fontFamily: "Albert_Sans",
    textAlign: "center",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "364px",
      height: "31px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "40px",
    },
  },
  a: {
    textDecoration: "none",
  },
}));

const Section5 = () => {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.fifthSection}>
        <div className={classes.subsection1}>
          <div className={classes.ulettiLogo} />
          <Text className={classes.title}>Join Uletti community</Text>

          <a
            href="https://www.facebook.com/ulettiapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.facebookLogo} />
          </a>
          <a
            href="https://www.instagram.com/ulettiapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.instagramLogo} />
          </a>
          <a
            href="https://twitter.com/ulettiapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={classes.twitterLogo} />
          </a>
        </div>
        <div className={classes.subsection2}>
          <a href="mailto:info@uletti.com" className={classes.a}>
            <p className={classes.text1}>Contact</p>
          </a>
          <NavLink
            className={classes.text2}
            component={Link}
            to="/privacy-policy"
          >
            Privacy Policy
          </NavLink>
          <Text className={classes.text3}>
            © 2023 Uletti Ltd, All Rights Reserved
          </Text>
        </div>
      </div>
    </>
  );
};
export default Section5;
