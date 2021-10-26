import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import AppRouter from "./Routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0C66C2",
    },
    secondary: {
      main: "#FFF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
