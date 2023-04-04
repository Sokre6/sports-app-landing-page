import UlettiTransparentLogo from "../assets/icons/uletti-transparent-logo.svg";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { createStyles } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";
import Section5 from "./Section5";

const useStyles = createStyles((theme) => ({
  privacyPolicy: {
    backgroundColor: "#0F1222",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    color: "#FFFFFF",
    fontFamily: "Albert_Sans",
    overflow: "hidden",
  },
  navigation: {
    alignItems: "center",
    display: "flex",
    minHeight: "5em",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: "5",
  },
  navigationLinksWrapper: {
    padding: "0 2.5em",
    display: "flex",
    width: "100%",
  },
  navigationBackToHomepageWrapper: {
    marginLeft: "auto",
    display: "flex",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  container: {
    margin: "0 auto",
    maxWidth: "1080px",
    position: "relative",
    width: "100%",
  },
  row: {
    display: "flex",
    width: "100%",
  },
  col: {
    boxSizing: "border-box",
    display: "flex",
    flex: "1 1",
    flexDirection: "column",
    maxWidth: "100%",
    [`@media (max-width: 1200px)`]: {
      padding: "0 2em",
    },
    [`@media (max-width: 500px)`]: {
      padding: "0 1em",
    },
  },
  backButton: {
    backgroundImage: `url(${IconArrowNarrowLeft})`,
    height: "50px",
    width: "180px",
    backgroundColor: "#FFFFFF",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "1.75rem",
    textDecoration: "none",
    fontSize: "20px",
    boxSizing: "content-box",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: "30px",
      width: "110px",
    },
  },
  buttonText: {
    marginTop: "5px",
    width: "100px",
    height: "38px",
    fontSize: "20px",
    fontWeight: "500",
    color: "#000000",
    fontFamily: "Albert_Sans",
    textAlign: "center",
    textDecoration: "none",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: "14px",
      marginTop: "15px",
    },
  },
  ulettiLogo: {
    backgroundImage: `url(${UlettiTransparentLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginBottom: "3em",
    marginTop: "100px",
    width: "169px",
    height: "169px",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  privacyPolicyTitle: {
    letterSpacing: "1.8px",
    color: "#FFFFFF",
    fontFamily: "Albert_Sans",
    fontSize: "60px",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "40px",
      textAlign: "center",
    },
  },
  privacyPolicyOrderedList: {
    display: "block",
    listStyleType: "none",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    paddingInlineStart: "40px",
  },
  privacyPolicyOrderedListWithDots: {
    display: "block",
    listStyleType: "disc",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
    paddingInlineStart: "40px",
  },
  privacyPolicyText: {
    marginTop: "30px",
    fontSize: "20px",
    lineHeight: "22px",
    letterSpacing: "1px",
  },
  privacyPolicySubtitle1: {
    marginTop: "50px",
    fontSize: "30px",
    lineHeight: "26px",
    letterSpacing: "2px",
  },
  privacyPolicySubtitle2: {
    marginTop: "30px",
    fontSize: "25px",
    lineHeight: "24px",
    letterSpacing: "1.5px",
    paddingInlineStart: "20px",
  },
}));

const PrivacyPolicy = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.privacyPolicy}>
        <div className={classes.navigation}>
          <div className={classes.navigationLinksWrapper}>
            <span className={classes.navigationBackToHomepageWrapper}>
              <NavLink component={Link} to="/" className={classes.backButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-narrow-left"
                  width="44px"
                  height="44px"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l14 0"></path>
                  <path d="M5 12l4 4"></path>
                  <path d="M5 12l4-4"></path>
                </svg>
                <p className={classes.buttonText}>homepage</p>
              </NavLink>
            </span>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.col}>
              <div className={classes.ulettiLogo} />
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h1 className={classes.privacyPolicyTitle}>
                Uletti Privacy Policy
              </h1>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <li className={classes.privacyPolicyText}>
                    ULETTI d.o.o., with its registered seat in Zagreb, Jaruščica
                    1E, Registration No. 081498052 as the data controller. This
                    version applies from: 13 March 2023.
                  </li>
                  <li className={classes.privacyPolicyText}>
                    This Privacy Policy applies to Uletti application ("App”)
                    and sets out how we process personal data of our users. By
                    "user” we mean any person who registered to our App. By
                    personal data we mean any information that identifies or can
                    be used to identify you as users of our App.
                  </li>
                  <li className={classes.privacyPolicyText}>
                    For the purposes of this Privacy Policy, ‘we’, ‘us’, and
                    ‘our’ refers to ULETTI d.o.o., and ‘you’ refers to you as
                    users of the App.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h2 className={classes.privacyPolicySubtitle1}>
                Our main principles
              </h2>
              <h3 className={classes.privacyPolicySubtitle2}>
                Data Minimisation
              </h3>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <p className={classes.privacyPolicyText}>
                    We only ask you for minimal set of data – we do not need to
                    know more about you than what is necessary to run our
                    Services. We do not even need to know your real name, just
                    your E -mail address and nickname.
                  </p>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h3 className={classes.privacyPolicySubtitle2}>
                Deleting Profile
              </h3>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <p className={classes.privacyPolicyText}>
                    Deleting your profile means deleting your personal data. As
                    simple as that. You can delete your profile within our App.
                    If you decide to delete your profile, that action is
                    permanent.
                  </p>
                  <p className={classes.privacyPolicyText}>
                    After deleting your profile, the content you published
                    remains in the App.
                  </p>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h3 className={classes.privacyPolicySubtitle2}>
                Disturbing Users
              </h3>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <p className={classes.privacyPolicyText}>
                    We have a feature for reporting users for harassment or
                    inappropriate behaviour. If you find actions of some users
                    inappropriate, please contact us via App through option
                    „Report User“.
                  </p>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h2 className={classes.privacyPolicySubtitle1}>
                Personal Data We Process
              </h2>
              <h3 className={classes.privacyPolicySubtitle2}>
                Basic Account Data
              </h3>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <p className={classes.privacyPolicyText}>
                    Includes your E-mail address and your nickname that will be
                    added as your profile name.
                  </p>
                  <p className={classes.privacyPolicyText}>
                    To make it easier for your contacts and other people to
                    reach you and recognize who you are, you may add (but you do
                    not need to) your profile picture. There is also a
                    possibility of setting profile picture of the team of which
                    you are a member. Note that all your personal data that you
                    enter on your App profile are public (visible) in our App.
                  </p>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h3 className={classes.privacyPolicySubtitle2}>Your Messages</h3>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <p className={classes.privacyPolicyText}>
                    Includes messages and other content you publish in the chats
                    or otherwise on the App.
                  </p>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h3 className={classes.privacyPolicySubtitle2}>Technical Data</h3>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <p className={classes.privacyPolicyText}>
                    Includes information about devices you use to access our
                    App, including their type, mobile network, country, OS,
                    date, and time of log-in / log-out and your actions in the
                    App.
                  </p>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h2 className={classes.privacyPolicySubtitle1}>
                Legal bases for processing
              </h2>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <p className={classes.privacyPolicyText}>
                    We rely on several different legal bases when processing
                    your personal data:
                  </p>
                </ol>
              </div>

              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedListWithDots}>
                  <li className={classes.privacyPolicyText}>
                    Registering to our App: We process your personal data
                    required to create and verify your user profile (Basic
                    Account Data). In this case, we rely on our contract as
                    legal basis for processing your profile information.
                  </li>
                  <li className={classes.privacyPolicyText}>
                    Using our App: We may process your personal data to provide
                    you access to the App, its content and to share any content
                    you make on the App (Basic Account Data, Your Messages,
                    Technical Data). In this case, we rely on our contract as
                    legal basis for processing your profile information.
                  </li>
                  <li className={classes.privacyPolicyText}>
                    Getting in touch: We may process your personal data to
                    inform you about the news related to the App or to hear what
                    you think about the App (Basic Account Data). In this case,
                    we rely on our legitimate interest as author of the App.
                  </li>
                  <li className={classes.privacyPolicyText}>
                    Filing a request or otherwise contacting us: We may process
                    your personal data to respond to your request or otherwise
                    answer your questions (Basic Account Data, Your Messages,
                    Technical Data). In this case, we rely either on our
                    legitimate interest to answer your message or on our legal
                    obligation to respond to your request.
                  </li>
                  <li className={classes.privacyPolicyText}>
                    Understanding how you use the Services: We may process your
                    personal data so that we could further develop the App and
                    provide you with even better experience (Basic Account Data,
                    Your Messages, Technical Data). In this case, we rely on our
                    legitimate interest as author of the App.
                  </li>
                  <li className={classes.privacyPolicyText}>
                    Security incident or unauthorised use of the App: We may
                    process your personal data so that we could detect, prevent,
                    or otherwise address any security incident or unauthorised
                    use of the App (Basic Account Data, Your Messages, Technical
                    Data). In this case, we rely on our legitimate interest as
                    author of the App.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h2 className={classes.privacyPolicySubtitle1}>
                Sharing your personal data
              </h2>
              <h3 className={classes.privacyPolicySubtitle2}>
                Our Subcontractors
              </h3>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <li className={classes.privacyPolicyText}>
                    Uletti uses services of third-party providers and affiliated
                    companies for certain activities, including, but not limited
                    to hosting, storing, marketing, and data analytics. When
                    processing your personal data, our service providers will
                    act in line with our instructions and will not process your
                    personal data for any purpose other than the ones stated in
                    this Privacy Policy.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h3 className={classes.privacyPolicySubtitle2}>Data Transfers</h3>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <p className={classes.privacyPolicyText}>
                    In case you are a user located in the EU, you may want to
                    know that we store your personal data within the EU.
                  </p>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h3 className={classes.privacyPolicySubtitle2}>
                Other Uletti Users
              </h3>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <p className={classes.privacyPolicyText}>
                    Other users of our Services may gain access to your
                    nickname, e-mail address and other data that are visible on
                    your profile and the content you communicated with that
                    user. Note that some of our users may be located outside the
                    EU/EEA.
                  </p>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h3 className={classes.privacyPolicySubtitle2}>
                Law Enforcement Authorities
              </h3>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <p className={classes.privacyPolicyText}>
                    If Uletti receives a court order to share data associated
                    with a certain Uletti account, we are under duty to disclose
                    requested data to the relevant authorities. We keep register
                    of such requests and will inform the affected data subjects
                    as soon as we are allowed to.
                  </p>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h2 className={classes.privacyPolicySubtitle1}>Your Rights</h2>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <li className={classes.privacyPolicyText}>
                    Under applicable data protection legislation, you have a
                    right to: (1) request a copy of all your personal data that
                    we store and to transmit that copy to another data
                    controller; (2) delete or amend your personal data; (3)
                    restrict, or object to, the processing of your personal
                    data; (4) correct any inaccurate or incomplete personal data
                    we hold on you; and (5) lodge a complaint with national data
                    protection authorities regarding our processing of your
                    personal data.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h2 className={classes.privacyPolicySubtitle2}>Our Contacts</h2>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <li className={classes.privacyPolicyText}>
                    If you want to exercise any of these rights, please send a
                    message to privacy@uletti.com. You may also contact us in
                    writing on the following address: ULETTI d.o.o., 10020
                    Zagreb, Jaruščica 1E, Croatia.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h2 className={classes.privacyPolicySubtitle2}>
                Third-party links
              </h2>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <li className={classes.privacyPolicyText}>
                    Our App may include links to third-party websites, plug-ins,
                    and applications. Clicking on those links or enabling those
                    connections may allow third parties to collect or share data
                    about you. We do not control these third-party websites and
                    are not responsible for their privacy statements. When you
                    leave our App, we encourage you to read the privacy notice
                    of every website you visit or third-party mobile application
                    you may use.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <h2 className={classes.privacyPolicySubtitle2}>
                Changes to this Privacy Policy
              </h2>
              <div className={classes.col}>
                <ol className={classes.privacyPolicyOrderedList}>
                  <li className={classes.privacyPolicyText}>
                    We will review and may update this Privacy Policy from time
                    to time. Any changes to this Privacy Policy will become
                    effective when we post the revised Privacy Policy. Please
                    check our App to see any updates or changes to our Privacy
                    Policy, a summary of which we will set out below.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Section5 />
      </div>
    </>
  );
};
export default PrivacyPolicy;
