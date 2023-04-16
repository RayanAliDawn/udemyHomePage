import { createTheme } from "@mui/material";
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            xss: 467,
            ssm: 600,
            sm: 700,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});
export default theme;
