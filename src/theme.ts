import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif`,
  },
  palette: {
    background: {
      default: "#f7f6f3", // мягкий серо-бежевый
    },
    text: {
      primary: "#1a1a1a",
    },
  },
});

export default theme;