import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/theme";
import Router from "./routes/route";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
