import { createStyles, Text } from "@mantine/core";
import Mockup1 from "../assets/images/screenshots/mockup1@2x.png";

const useStyles = createStyles((theme) => ({
  thirdSection: {
    backgroundColor: "#F0F1F2",
    height: "726px",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    overflow: "visible",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
      width: "100vw",
      height: "699px",
    },
  },
  subsection1: {
    display: "flex",
    flexDirection: "column",
    width: "50vw",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100vw",
    },
  },
  subsection2: {
    width: "50vw",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100vw",
    },
  },
  title: {
    marginTop: "245px",
    marginLeft: "15vw",
    width: "446px",
    height: "66px",
    textAlign: "center",
    letterSpacing: "-1.32px",
    color: "#0F1222",
    fontSize: "55px",
    fontWeight: "bold",
    fontFamily: "Albert_Sans",

    "@media (max-width: 1680px)": {
      marginLeft: "12vw",
      fontSize: "50px",
    },
    "@media (max-width: 1275px)": {
      marginLeft: "7vw",
      fontSize: "45px",
    },

    "@media (max-width: 935px)": {
      marginLeft: "6vw",
    },
    "@media (max-width: 800px)": {
      width: "400px",
      fontSize: "40px",
      marginLeft: "4vw",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "320px",
      height: "42px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "443px",
      fontSize: "35px",
      letterSpacing: "-0.84px",
    },
  },
  text: {
    marginTop: "18px",
    marginLeft: "17vw",
    width: "364px",
    height: "70px",
    textAlign: "center",
    letterSpacing: "0px",
    color: "#0F1222",
    fontSize: "29px",
    fontFamily: "Albert_Sans",

    "@media (max-width: 1680px)": {
      marginLeft: "15vw",
      fontSize: "25px",
    },
    "@media (max-width: 1275px)": {
      marginLeft: "10vw",
      fontSize: "23px",
    },
    "@media (max-width: 1060px)": {
      fontSize: "20px",
    },
    "@media (max-width: 800px)": {
      width: "300px",
      fontSize: "20px",
      marginLeft: "10vw",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "226px",
      height: "44px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "50px",
      fontSize: "18px",
      letterSpacing: "0px",
    },
  },
  image: {
    backgroundImage: `url(${Mockup1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "850px",
    width: "455px",
    marginLeft: "10vw",
    marginTop: "-60px",
    "@media (max-width: 1275px)": {
      height: "800px",
      width: "410px",
      marginLeft: "5vw",
      marginTop: "-30px",
    },

    "@media (max-width: 935px)": {
      height: "700px",
      width: "360px",
      marginTop: "20px",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "267px",
      height: "500px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "-650px",
    },
  },
}));

const Section3 = () => {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.thirdSection}>
        <div className={classes.subsection1}>
          <Text className={classes.title}>Create new match</Text>
          <Text className={classes.text}>
            Enter match parameters and invite members to join.
          </Text>
        </div>
        <div className={classes.subsection2}>
          <div className={classes.image} />
        </div>
      </div>
    </>
  );
};
export default Section3;
