import { createStyles, Group } from "@mantine/core";
import UlettiLogo from "../assets/icons/uletti-logo.svg";
import UlettiLogoText from "../assets/icons/uletti-logo-text.svg";

const useStyles = createStyles((theme) => ({
  appBackground: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#0F1222",
    display: "flex",
    overflow: "hidden",
    position: "relative",
    "@media (max-width: 800px) and (orientation:landscape)": {
      height: "1100px",
    },
  },

  ulettiLogoText: {
    backgroundImage: `url(${UlettiLogoText})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute",
    marginTop: "47px",
    marginLeft: "50px",
    width: "152px",
    height: "50px",
    "@media (max-width: 800px)": {
      marginLeft: "40%",
      marginTop: "50px",
      width: "135px",
      height: "44px",
    },
    "@media (max-width: 600px)": {
      marginLeft: "37%",
    },
    "@media (max-width: 500px)": {
      marginLeft: "35%",
    },
    "@media (max-width: 455px)": {
      marginLeft: "32%",
    },
    "@media (max-width: 410px)": {
      marginLeft: "30%",
    },
    "@media (max-width: 373px)": {
      fontSize: "44px",
    },
  },

  ulettiBackground: {
    backgroundImage: `url(${UlettiLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "1400px",
    width: "1400px",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",

    "@media (max-height: 1400px)": {
      marginTop: "-50px",
    },
    "@media (max-height: 1300px)": {
      marginTop: "-100px",
    },
    "@media (max-height: 1200px)": {
      marginTop: "-150px",
    },
    "@media (max-height: 1100px)": {
      marginTop: "-200px",
    },
    "@media (max-height: 1000px)": {
      marginTop: "-220px",
    },
    "@media (max-width: 1600px)": {
      width: "1300px",
      height: "1300px",
      marginTop: "-120px",
    },
    "@media (max-width: 1500px)": {
      width: "1200px",
      height: "1200px",
      marginTop: "-100px",
    },
    "@media (max-width: 1400px)": {
      width: "1100px",
      height: "1100px",
      marginTop: "-35px",
    },
    "@media (max-width: 1300px)": {
      width: "1000px",
      height: "1000px",
      marginTop: "auto",
    },
    "@media (max-width: 1200px)": {
      width: "950px",
      height: "950px",
    },
    "@media (max-width: 1100px)": {
      width: "900px",
      height: "900px",
    },
    "@media (max-width: 1000px)": {
      width: "850px",
      height: "850px",
    },
    "@media (max-width: 900px)": {
      width: "750px",
      height: "750px",
    },
    "@media (max-width: 800px)": {
      width: "950px",
      height: "950px",
      marginLeft: "-10%",
      marginTop: "200px",
    },
    "@media (max-width: 790px)": {
      width: "940px",
      height: "940px",
      marginLeft: "-10%",
    },
    "@media (max-width: 780px)": {
      width: "930px",
      height: "930px",
      marginLeft: "-10%",
    },

    "@media (max-width: 770px)": {
      width: "920px",
      height: "920px",
      marginLeft: "-10%",
    },

    "@media (max-width: 760px)": {
      width: "910px",
      height: "910px",
      marginLeft: "-10%",
    },

    "@media (max-width: 750px)": {
      width: "900px",
      height: "900px",
      marginLeft: "-10%",
    },

    "@media (max-width: 740px)": {
      width: "890px",
      height: "890px",
      marginLeft: "-10%",
    },

    "@media (max-width: 730px)": {
      width: "880px",
      height: "880px",
      marginLeft: "-10%",
    },

    "@media (max-width: 720px)": {
      width: "870px",
      height: "870px",
      marginLeft: "-10%",
    },

    "@media (max-width: 710px)": {
      width: "860px",
      height: "860px",
      marginLeft: "-10%",
    },
    "@media (max-width: 700px)": {
      width: "850px",
      height: "850px",
      marginLeft: "-12%",
    },
    "@media (max-width: 690px)": {
      width: "840px",
      height: "840px",
    },
    "@media (max-width: 680px)": {
      width: "830px",
      height: "830px",
    },
    "@media (max-width: 670px)": {
      width: "820px",
      height: "820px",
    },
    "@media (max-width: 660px)": {
      width: "810px",
      height: "810px",
    },
    "@media (max-width: 650px)": {
      width: "800px",
      height: "800px",
    },
    "@media (max-width: 640px)": {
      width: "790px",
      height: "790px",
    },
    "@media (max-width: 630px)": {
      width: "780px",
      height: "780px",
    },
    "@media (max-width: 620px)": {
      width: "770px",
      height: "770px",
    },
    "@media (max-width: 610px)": {
      width: "760px",
      height: "760px",
    },
    "@media (max-width: 600px)": {
      width: "750px",
      height: "750px",
      marginLeft: "-14%",
    },
    "@media (max-width: 590px)": {
      width: "740px",
      height: "740px",
    },
    "@media (max-width: 580px)": {
      width: "730px",
      height: "730px",
    },
    "@media (max-width: 570px)": {
      width: "720px",
      height: "720px",
    },
    "@media (max-width: 560px)": {
      width: "710px",
      height: "710px",
    },
    "@media (max-width: 550px)": {
      width: "700px",
      height: "700px",
    },
    "@media (max-width: 540px)": {
      width: "690px",
      height: "690px",
    },
    "@media (max-width: 530px)": {
      width: "680px",
      height: "680px",
    },
    "@media (max-width: 520px)": {
      width: "670px",
      height: "670px",
    },
    "@media (max-width: 510px)": {
      width: "660px",
      height: "660px",
    },
    "@media (max-width: 500px)": {
      width: "650px",
      height: "650px",
      marginLeft: "-16%",
      marginTop: "135px",
    },
    "@media (max-width: 490px)": {
      width: "640px",
      height: "640px",
    },
    "@media (max-width: 480px)": {
      width: "630px",
      height: "630px",
    },
    "@media (max-width: 470px)": {
      width: "620px",
      height: "620px",
    },
    "@media (max-width: 460px)": {
      width: "610px",
      height: "610px",
      marginLeft: "-18%",
    },
    "@media (max-width: 450px)": {
      width: "600px",
      height: "600px",
    },
    "@media (max-width: 440px)": {
      width: "590px",
      height: "590px",
    },
    "@media (max-width: 430px)": {
      width: "580px",
      height: "580px",
    },
    "@media (max-width: 420px)": {
      width: "570px",
      height: "570px",
    },
    "@media (max-width: 410px)": {
      width: "560px",
      height: "560px",
    },
    "@media (max-width: 400px)": {
      width: "550px",
      height: "550px",
      marginLeft: "-20%",
    },
    "@media (max-width: 390px)": {
      width: "540px",
      height: "540px",
    },
    "@media (max-width: 380px)": {
      width: "530px",
      height: "530px",
    },
    "@media (max-width: 370px)": {
      width: "520px",
      height: "520px",
    },
    "@media (max-width: 360px)": {
      width: "510px",
      height: "510px",
      marginLeft: "-22%",
    },
  },

  title: {
    width: "940px",
    height: "144px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "600px",
    fontSize: "106px",
    letterSpacing: "-2.65px",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Albert_Sans",
    fontWeight: "bold",
    "@media (max-width: 1600px)": {
      marginTop: "500px",
    },

    "@media (max-width: 1500px)": {
      marginTop: "450px",
    },
    "@media (max-width: 1400px)": {
      marginTop: "400px",
    },
    "@media (max-width: 1300px)": {
      marginTop: "350px",
    },
    "@media (max-width: 1000px)": {
      marginTop: "270px",
      fontSize: "95px",
    },
    "@media (max-width: 800px)": {
      fontSize: "86px",
      width: "85vw",
      marginTop: "400px",
    },
    "@media (max-width: 750px)": {
      fontSize: "80px",
      marginTop: "350px",
    },
    "@media (max-width: 680px)": {
      fontSize: "70px",
      marginTop: "300px",
    },
    "@media (max-width: 600px)": {
      fontSize: "60px",
      marginTop: "270px",
    },
    "@media (max-width: 500px)": {
      fontSize: "55px",
      marginTop: "250px",
    },
    "@media (max-width: 455px)": {
      fontSize: "50px",
      marginTop: "220px",
    },
    "@media (max-width: 410px)": {
      fontSize: "46px",
      marginTop: "200px",
    },
    "@media (max-width: 373px)": {
      fontSize: "44px",
    },
  },
  subtitle: {
    width: "940px",
    height: "144px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-20px",
    fontSize: "40px",
    letterSpacing: "0px",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Albert_Sans",
    fontWeight: "bold",

    "@media (max-width: 600px)": {
      fontSize: "30px",
      marginTop: "-70px",
    },
    "@media (max-width: 500px)": {
      fontSize: "24px",
      marginTop: "-80px",
    },
  },
}));

const ComingSoon = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.appBackground}>
        <div className={classes.ulettiLogoText} alt="" />
        <div className={classes.ulettiBackground}>
          <Group position="center">
            <p className={classes.title}>Enter the Game</p>
            <p className={classes.subtitle}>Coming soon…</p>
          </Group>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
