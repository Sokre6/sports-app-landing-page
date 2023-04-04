import { createStyles, Text } from "@mantine/core";
import UlettiBoxLogo from "../assets/icons/uletti-box-logo@2x.png";
import MobileStoreButton from "react-mobile-store-button";

const useStyles = createStyles((theme) => ({
  fifthSection: {
    backgroundColor: "#1C36F3",
    height: "500px",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    overflow: "visible",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
      width: "100vw",
      height: "565px",
    },
  },
  subsection1: {
    display: "flex",
    flexDirection: "row",
    width: "50vw",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100vw",
    },
  },
  subsection2: {
    display: "flex",
    flexDirection: "column",
    width: "50vw",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100vw",
    },
  },
  subsection3: {
    display: "flex",
    flexDirection: "row",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100vw",
    },
  },
  ulettiLogo: {
    backgroundImage: `url(${UlettiBoxLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "492px",
    width: "492px",
    marginLeft: "10vw",
    marginTop: "30px",
    "@media (max-width: 1275px)": {
      height: "350px",
      width: "350px",
      marginTop: "110px",
      marginLeft: "5vw",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "30px",
      height: "250px",
      width: "250px",
    },
  },
  title: {
    width: "332px",
    height: "58px",
    marginLeft: "9vw",
    marginTop: "150px",
    fontSize: "48px",
    letterSpacing: "-1.2px",
    color: "#FFFFFF",
    fontFamily: "Albert_Sans",
    fontWeight: "bold",
    textAlign: "center",

    "@media (max-width: 1560px)": {
      marginLeft: "7vw",
    },
    "@media (max-width: 1400px)": {
      marginLeft: "3vw",
    },
    "@media (max-width: 1275px)": {
      height: "45px",
      width: "280px",
      marginLeft: "6vw",
      fontSize: "40px",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "0px",
      height: "42px",
      width: "282px",
      fontSize: "35px",
      letterSpacing: "-0.88px",
    },
  },
  text: {
    marginTop: "10px",
    marginLeft: "2vw",
    width: "606px",
    height: "42px",
    textAlign: "center",
    fontFamily: "Albert_Sans",
    letterSpacing: "0px",
    color: "#FFFFFF",
    fontSize: "24px",
    "@media (max-width: 1560px)": {
      marginLeft: "-2vw",
    },
    "@media (max-width: 1400px)": {
      marginLeft: "-6vw",
    },
    "@media (max-width: 1275px)": {
      height: "35px",
      width: "350px",
      marginLeft: "1vw",
      fontSize: "16px",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "50px",
      height: "90px",
      width: "250px",
      fontSize: "18px",
      letterSpacing: "0px",
    },
  },
  appStore: {
    marginLeft: "10vw",
    marginTop: "63px",
    "@media (max-width: 1560px)": {
      marginLeft: "9vw",
    },
    "@media (max-width: 1400px)": {
      marginLeft: "5vw",
    },
    "@media (max-width: 1275px)": {
      marginLeft: "6vw",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "33%",
      marginTop: "18px",
    },
    "@media (max-width: 770px)": {
      marginLeft: "32%",
    },
    "@media (max-width: 710px)": {
      marginLeft: "31%",
    },
    "@media (max-width: 650px)": {
      marginLeft: "29%",
    },
    "@media (max-width: 590px)": {
      marginLeft: "27%",
    },
    "@media (max-width: 530px)": {
      marginLeft: "25%",
    },
    "@media (max-width: 500px)": {
      marginLeft: "23%",
    },
    "@media (max-width: 470px)": {
      marginLeft: "21%",
    },
    "@media (max-width: 410px)": {
      marginLeft: "17%",
    },
  },
  googleStore: {
    marginLeft: "1vw",
    marginTop: "55px",
    "@media (max-width: 1275px)": {
      marginLeft: "1vw",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "5px",
      marginRight: "auto",
      marginTop: "10px",
    },
  },
}));

const Section4 = () => {
  const { classes } = useStyles();
  const iOSUrl = "";
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.uletti.app";

  return (
    <>
      <div className={classes.fifthSection}>
        <div className={classes.subsection1}>
          <div className={classes.ulettiLogo} />
        </div>
        <div className={classes.subsection2}>
          <Text className={classes.title}>Enter the Game</Text>
          <Text className={classes.text}>
            Uletti is available on Google play & App store
          </Text>
          <div className={classes.subsection3}>
            <MobileStoreButton
              store="ios"
              url={iOSUrl}
              linkProps={{ title: "iOS Store Button", width: 120, height: 40 }}
              className={classes.appStore}
              width={120}
              height={40}
            />
            <MobileStoreButton
              store="android"
              url={androidUrl}
              linkProps={{
                title: "Android Store Button",
              }}
              className={classes.googleStore}
              width={160}
              height={54}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Section4;
