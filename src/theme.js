// primary colors below selected from matrial ui light blue 4th from left
// secondary colors deep orange 3rd from left

const primary = {
  light: "#8bf6ff",
  main: "#4fc3f7",
  dark: "#0093c4"
};

const secondary = {
  light: "#ffddc1",
  main: "#ffab91",
  dark: "#c97b63"
};

// https://stackoverflow.com/a/35970186
export function invertColor(hex, bw) {
  function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join("0");
    return (zeros + str).slice(-len);
  }
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // http://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

const invertedColors = colors =>
  Object.keys(colors).reduce(
    (a, k) => ({ ...a, [k]: invertColor(colors[k], true) }),
    {}
  );

const primaryText = invertedColors(primary);
const secondaryText = invertedColors(secondary);

const h1to4lineHeight = 1.3;

const breakpointSize = {
  xs: 400,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

const breakpoint = Object.keys(breakpointSize).reduce(
  (a, s) => ({
    ...a,
    [s]: {
      size: breakpointSize[s],
      query: `@media (max-width: ${breakpointSize[s]}px)`
    }
  }),
  {}
);

export default {
  color: {
    primary,
    primaryText,
    secondary,
    secondaryText,
    overlay5: "rgba(0,0,0,0.5)",
    overlay8: "rgba(0,0,0,0.8)"
  },
  margin: {
    lr: "1rem",
    left: "1rem",
    righ: "1rem",
    tb: "1rem",
    section: {
      lr: "1rem",
      tb: "1rem"
    }
  },
  breakpoint,
  reset: {
    html: {
      scrollBehavior: "smooth"
    },
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box"
    },
    "*::before": { boxSizing: "border-box" },
    "*::after": { boxSizing: "border-box" },
    body: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI",' +
        ' "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",' +
        ' "Droid Sans", "Helvetica Neue", sans-serif',
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      lineHeight: 1.6,
      fontSize: "1.1rem",
      background: "#f9f9f9"
    },
    h1: {
      lineHeight: h1to4lineHeight
    },
    h2: {
      lineHeight: h1to4lineHeight
    },
    h3: {
      lineHeight: h1to4lineHeight
    },
    h4: {
      lineHeight: h1to4lineHeight
    },
    code: {
      fontFamily:
        "source-code-pro, Menlo, Monaco, Consolas," +
        ' "Courier New", monospace'
    },
    img: {
      width: "100%"
    }
  },
  button: {
    display: "inline-block",
    color: secondaryText.main,
    background: secondary.main,
    padding: "0.7rem 1.2rem",
    cursor: "pointer",
    borderRadius: "2rem",
    "&:hover": {
      color: secondaryText.light,
      background: secondary.light
    }
  },
  button2: {
    padding: "0 0.6rem",
    marginLeft: "0.2rem",
    borderRadius: "1rem",
    color: secondaryText.main,
    background: secondary.main,
    "&:hover": {
      color: secondaryText.light,
      background: secondary.light
    }
  }
};
