import injectSheet from "react-jss";

import theme from "./theme";

const styles = {
  "@global": theme.reset,
  mainHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2rem",
    height: "55vh",
    "& h1": {
      fontSize: "4rem",
      marginBottom: "2rem",
      lineHeight: 1.2,
      "& span": {
        color: "#b50d10"
      }
    },
    "& p": {
      fontSize: "2rem"
    }
  }
};

const Style = Component => injectSheet(styles)(Component);

export default Style;
