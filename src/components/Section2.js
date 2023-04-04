import { createStyles, Grid, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  secondSection: {
    height: "800px",
    width: "100vw",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    overflow: "visible",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100vw",
      height: "900px",
      flexDirection: "column",
    },
  },
  subsection1: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    marginTop: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "556px",
    height: "58px",
    textAlign: "center",
    letterSpacing: "-1.2px",
    color: "#0F1222",
    fontSize: "48px",
    fontWeight: "bold",
    fontFamily: "Albert_Sans",

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "309px",
      height: "77px",
      marginTop: "43px",
      fontSize: "35px",
      letterSpacing: "-0.88px",
    },
  },
  text1: {
    marginTop: "24px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "723px",
    height: "73px",
    textAlign: "center",
    letterSpacing: "0px",
    color: "#0F1222",
    fontSize: "26px",
    fontFamily: "Albert_Sans",
    "@media (max-width: 1275px)": {
      width: "50vw",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "300px",
      height: "141px",
      marginTop: "38px",
      fontSize: "18px",
    },
  },

  grid: {
    marginTop: "100px",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "300px",
      height: "141px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px",
      fontSize: "18px",
    },
  },
  circle: {
    height: "21px",
    width: "21px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    borderRadius: "50%",
    backgroundColor: "#0C31FF",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginTop: "5px",
    },
  },

  leftText: {
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "263px",
    height: "124px",
    textAlign: "center",
    letterSpacing: "0px",
    color: "#0F1222",
    fontSize: "22px",
    fontFamily: "Albert_Sans",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: "18px",
      width: "216px",
      height: "100px",
    },
  },
  centerText: {
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "309px",
    height: "124px",
    textAlign: "center",
    letterSpacing: "0px",
    color: "#0F1222",
    fontSize: "22px",
    fontFamily: "Albert_Sans",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: "18px",
      width: "300px",
      height: "100px",
    },
  },
  rightText: {
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "250px",
    height: "124px",
    textAlign: "center",
    letterSpacing: "0px",
    color: "#0F1222",
    fontSize: "22px",
    fontFamily: "Albert_Sans",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: "18px",
      width: "200px",
      height: "100px",
    },
  },
}));

const Section2 = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.secondSection}>
        <div className={classes.subsection1}>
          <Text className={classes.title}>Oh no, missing one again!</Text>
          <Text className={classes.text1}>
            Your team member cancels the match at the last minute and you need
            to manage a million calls to find a replacement?
          </Text>
        </div>

        <Grid className={classes.grid}>
          <Grid.Col xl={4} lg={4} md={4} sm={4}>
            <div className={classes.circle} />
            <Text className={classes.leftText}>
              Find new members to join your team or invite another team for a
              match.
            </Text>
          </Grid.Col>
          <Grid.Col xl={4} lg={4} md={4} sm={4}>
            <div className={classes.circle} />
            <Text className={classes.centerText}>
              Easily record and track results of all past matches and share data
              with the team.
            </Text>
          </Grid.Col>
          <Grid.Col xl={4} lg={4} md={4} sm={4}>
            <div className={classes.circle} />
            <Text className={classes.rightText}>
              Uletti provides match management solution for the complete team.
            </Text>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};
export default Section2;
