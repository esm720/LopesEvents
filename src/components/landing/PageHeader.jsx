import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

import GatheringLopes from '../../assets/static/GatheringLopes.png'
import BlockOne from '../landing/BlockOne'

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: `url(https://res.cloudinary.com/djqhpdau5/image/upload/v1738351763/LopeGathering_ea5ra4.png)`,
  backgroundSize: "contain",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: `url(https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(293, 98.70%, 29.60%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(304, 97.10%, 13.50%), transparent)",
        }),
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "80%",} }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md:"row"},
              alignItems: "center",
              fontSize: "clamp(4rem, 10vw, 3.5rem)",
              color: "text.primary",
            }}
          >
            Find Your Herd with
          </Typography>
          <Typography
            variant="h1"
            sx={{
              alignItems: "center",
              fontSize: "clamp(4rem, 10vw, 3.5rem)",
              color: "#9500ae",
            }}
          >LopesEvents
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Explore our robust tools that help you find the nearest events near you. A modern 
            solution to bringing together GCU Students and the community. Sign up to our
            newsletter today!
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "350px" } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                },
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              sx={{ minWidth: "fit-content" }}
            >
              Start Now
            </Button>
          </Stack>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <MuiLink href="#" color="primary">
              Terms & Conditions
            </MuiLink>
            .
          </Typography>
        </Stack>
        <BlockOne />
      </Container>
    </Box>
  );
}
