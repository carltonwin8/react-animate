import injectSheet from "react-jss";

import theme from "./theme";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "2rem",
    background: "#f1f1f1",
    marginBottom: "2rem",
    maxWidth: "1100px",
    margin: "auto",
    overflow: "auto",
    padding: "0 2rem",
    "& a": {
      display: "inline-block",
      textDecoration: "none",
      color: "#fff",
      background: "#000",
      padding: "0.8rem 1.8rem",
      marginTop: "2rem",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.8
      }
    },
    "& img": {
      width: "100%",
      minHeight: "300px"
    },
    "& h3": {
      marginBottom: "2rem"
    },
    "&>div": {
      padding: "2rem"
    },
    "&:nth-child(even)": {
      "& img": {
        order: 2
      }
    }
  },
  [theme.breakpoint.sm.query]: {
    container: {
      display: "block"
    }
  }
};

const Style = Component => injectSheet(styles)(Component);

export default Style;
