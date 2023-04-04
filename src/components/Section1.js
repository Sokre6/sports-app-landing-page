import Mockup2 from "../assets/images/screenshots/mockup2.png";
import UlettiLogo from "../assets/icons/uletti-logo.svg";
import UlettiLogoText from "../assets/icons/uletti-logo-text.svg";
import { createStyles, Text } from "@mantine/core";
import MobileStoreButton from "react-mobile-store-button";

const useStyles = createStyles((theme) => ({
  firstSection: {
    height: "800px",
    width: "100vw",
    backgroundColor: "#0F1222",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    position: "relative",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100vw",
      height: "711px",
      flexDirection: "column",
    },
  },
  mockup2: {
    marginTop: "90px",
    marginLeft: "130px",
    width: "380px",
    height: "710px",
    position: "absolute",
    "@media (max-width: 1680px)": {
      width: "345px",
      height: "680px",
      marginLeft: "100px",
      marginTop: "70px",
    },
    "@media (max-width: 1350px)": {
      width: "330px",
      height: "640px",
      marginLeft: "80px",
      marginTop: "60px",
    },
    "@media (max-width: 1275px)": {
      width: "280px",
      height: "530px",
      marginLeft: "70px",
      marginTop: "50px",
    },
    "@media (max-width: 1060px)": {
      width: "280px",
    },
    "@media (max-width: 935px)": {
      width: "260px",
      height: "500px",
      marginLeft: "60px",
      marginTop: "70px",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "215px",
      height: "389px",
      marginTop: "30px",
      marginLeft: "65px",
    },
  },
  subsection1: {
    display: "flex",
  },
  suibsection2: {
    display: "flex",
    flexDirection: "row",
  },
  ulettiLogoText: {
    backgroundImage: `url(${UlettiLogoText})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "181px",
    marginLeft: "571px",
    width: "152px",
    height: "50px",
    "@media (max-width: 1680px)": {
      marginLeft: "500px",
    },
    "@media (max-width: 1545px)": {
      marginLeft: "440px",
    },
    "@media (max-width: 1460px)": {
      marginLeft: "380px",
    },
    "@media (max-width: 1200px)": {
      marginLeft: "250px",
      marginTop: "250px",
    },
    "@media (max-width: 1060px)": {
      marginLeft: "180px",
    },
    "@media (max-width: 935px)": {
      marginLeft: "120px",
      marginTop: "300px",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "135px",
      height: "44px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "-680px",
    },
  },
  text1: {
    width: "382px",
    height: "66px",
    marginLeft: "480px",
    marginTop: "72px",
    fontSize: "55px",
    letterSpacing: "-1.38px",
    color: "#FFFFFF",
    fontFamily: "Albert_Sans",

    "@media (max-width: 1680px)": {
      marginLeft: "420px",
    },
    "@media (max-width: 1545px)": {
      marginLeft: "350px",
    },
    "@media (max-width: 1460px)": {
      marginLeft: "300px",
    },
    "@media (max-width: 1200px)": {
      marginLeft: "190px",
      marginTop: "60px",
      fontSize: "45px",
    },
    "@media (max-width: 1060px)": {
      marginLeft: "120px",
    },
    "@media (max-width: 935px)": {
      marginLeft: "80px",
      marginTop: "50px",
      fontSize: "40px",
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "242px",
      height: "42px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "55px",
      fontSize: "35px",
      letterSpacing: "-0.88px",
    },
  },
  text2: {
    width: "408px",
    height: "137px",
    marginLeft: "460px",
    marginTop: "36px",
    fontSize: "26px",
    letterSpacing: "0px",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Albert_Sans",

    "@media (max-width: 1680px)": {
      marginLeft: "400px",
    },
    "@media (max-width: 1545px)": {
      marginLeft: "330px",
    },
    "@media (max-width: 1460px)": {
      marginLeft: "280px",
    },
    "@media (max-width: 1200px)": {
      marginLeft: "140px",
    },
    "@media (max-width: 1060px)": {
      marginLeft: "70px",
      fontSize: "20px",
      width: "400px",
    },
    "@media (max-width: 935px)": {
      marginLeft: "30px",
      fontSize: "17px",
      width: "350px",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "281px",
      height: "66px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "15px",
      fontSize: "18px",
    },
  },
  appStore: {
    marginLeft: "530px",
    marginTop: "50px",
    "@media (max-width: 1680px)": {
      marginLeft: "460px",
    },
    "@media (max-width: 1545px)": {
      marginLeft: "400px",
    },
    "@media (max-width: 1460px)": {
      marginLeft: "340px",
    },
    "@media (max-width: 1200px)": {
      marginLeft: "200px",
    },
    "@media (max-width: 1060px)": {
      marginLeft: "140px",
    },
    "@media (max-width: 935px)": {
      marginTop: "-20px",
      marginLeft: "80px",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "33%",
      marginTop: "32px",
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
    marginLeft: "5px",
    marginTop: "48px",
    "@media (max-width: 935px)": {
      marginTop: "-22px",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "5px",
      marginRight: "auto",
      marginTop: "30px",
    },
  },
  ulettiBackground: {
    backgroundImage: `url(${UlettiLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "636px",
    width: "636px",
    marginTop: "100px",
    marginLeft: "148px",
    marginRight: "auto",
    "@media (max-width: 1680px)": {
      width: "550px",
      height: "550px",
      marginLeft: "110px",
      marginTop: "150px",
    },
    "@media (max-width: 1350px)": {
      width: "480px",
      height: "480px",
      marginLeft: "100px",
      marginTop: "190px",
    },
    "@media (max-width: 1275px)": {
      width: "420px",
      height: "420px",
      marginLeft: "80px",
      marginTop: "300px",
    },
    "@media (max-width: 1060px)": {
      marginLeft: "50px",
    },
    "@media (max-width: 935px)": {
      width: "380px",
      height: "380px",
      marginLeft: "20px",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "350px",
      height: "350px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "345px",
    },
  },
  appStores: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

const Section1 = () => {
  const { classes } = useStyles();
  const iOSUrl = "";
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.uletti.app";

  return (
    <>
      <div className={classes.firstSection}>
        <div className={classes.subsection1}>
          <div className={classes.ulettiBackground}>
            <img className={classes.mockup2} src={Mockup2} alt=""></img>
          </div>
        </div>
        <div className={classes.subsection2}>
          <div className={classes.ulettiLogoText} alt="" />
          <Text className={classes.text1}>Enter the Game</Text>
          <Text className={classes.text2}>
            Uletti app for recreational athletes connects match management and
            real recreation.
          </Text>
          <div className={classes.appStores}>
            <MobileStoreButton
              store="ios"
              url={iOSUrl}
              linkProps={{ title: "iOS Store Button" }}
              className={classes.appStore}
              width={120}
              height={40}
            />
            <MobileStoreButton
              store="android"
              url={androidUrl}
              linkProps={{ title: "Android Store Button" }}
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
export default Section1;
