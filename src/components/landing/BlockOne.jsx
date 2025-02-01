import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TwoSidedLayout from "./TwoSidedLayoutOne";
import { Link, Outlet } from "react-router-dom";

export default function HeroLeft() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" sx={{ fontSize: "lg", fontWeight: "lg" }}>
        I want to...
      </Typography>
      <Typography
        level="h1"
        sx={{
          fontWeight: "xl",
          fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
        }}
      >
        See What Lopes are Doing.
      </Typography>
      <Typography
        textColor="text.secondary"
        sx={{ fontSize: "lg", lineHeight: "lg" }}
      >
        Find events near you using our dynamic calendar. Whether you're a Freshman or a Senior, you'll always know what's happening.
      </Typography>
      <Link to={"/"}>
        <Button size="lg" endDecorator={<ArrowForward sx={{ font: "xl" }} />}>
          Get Started
        </Button>
      </Link>
      <Typography>
        Not sure yet? <a href="#">Sign Up for Our Demo</a>
      </Typography>
      <Typography
        level="body-xs"
        sx={{
          position: "absolute",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      ></Typography>
    </TwoSidedLayout>
  );
}
