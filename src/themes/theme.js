import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({});
theme = responsiveFontSizes(theme);

export { theme };
