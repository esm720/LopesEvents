import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Calendar from "../../assets/static/calendar.svg";

import { styled } from "@mui/material/styles";

import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Calender",
    description:
      "See what days have events happening in an instant. Plan your schedule months in advance.",
    imageLight: `url(https://res.cloudinary.com/djqhpdau5/image/upload/v1740730114/calendar_yvadnm.svg)`,
    imageDark: `url(https://res.cloudinary.com/djqhpdau5/image/upload/v1740730114/calendar_yvadnm.svg)`,
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: "Mobile integration",
    description:
      "Built with mobility in mind. LopesEvents is built to move with you from one event, to the next.",
    imageLight: `url(https://res.cloudinary.com/djqhpdau5/image/upload/v1740733128/Cellphone_rfmgig.svg)`,
    imageDark: `url(https://res.cloudinary.com/djqhpdau5/image/upload/v1740733128/Cellphone_rfmgig.svg)`,
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "On All platforms",
    description:
      "No local installation needed. Connect with your friends and sync your calanders so you are never apart.",
    imageLight: `url(https://res.cloudinary.com/djqhpdau5/image/upload/v1740732190/Platforms_rbmnyn.svg)`,
    imageDark: `url(https://res.cloudinary.com/djqhpdau5/image/upload/v1740732190/Platforms_rbmnyn.svg)`,
  },
];

const Chip = styled(MuiChip)(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
        color: "hsl(0, 0%, 100%)",
        borderColor: (theme.vars || theme).palette.primary.light,
        "& .MuiChip-label": {
          color: "hsl(0, 0%, 100%)",
        },
        ...theme.applyStyles("dark", {
          borderColor: (theme.vars || theme).palette.primary.dark,
        }),
      },
    },
  ],
}));

function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 2, overflow: "auto" }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: "fill",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: 280,
            backgroundImage: "var(--items-imageLight)",
            ...theme.applyStyles("dark", {
              backgroundImage: "var(--items-imageDark)",
            }),
          })}
          style={
            items[selectedItemIndex]
              ? {
                  "--items-imageLight": items[selectedItemIndex].imageLight,
                  "--items-imageDark": items[selectedItemIndex].imageDark,
                }
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: "text.primary", fontWeight: "medium" }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

MobileLayout.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  selectedFeature: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icon: PropTypes.element,
    imageDark: PropTypes.string.isRequired,
    imageLight: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  selectedItemIndex: PropTypes.number.isRequired,
};

export { MobileLayout };

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: "100%", md: "60%" } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Product features
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}
        >
          The days of depending on word of mouth to know what's happening is
          over. LopesEvents brings everybody together in a convenient and user
          friendly way.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: "100%",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: (theme.vars || theme).palette.action
                        .hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: "action.selected",
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                      gap: 1,
                      textAlign: "left",
                      textTransform: "none",
                      color: "text.secondary",
                    },
                    selectedItemIndex === index && {
                      color: "text.primary",
                    },
                  ]}
                >
                  {icon}

                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { xs: "100%", md: "70%" },
            height: "var(--items-image-height)",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            <Box
              sx={(theme) => ({
                m: "auto",
                minHeight: 300,
                minWidth: 370,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundImage: "var(--items-imageLight)",
                ...theme.applyStyles("dark", {
                  backgroundImage: "var(--items-imageDark)",
                }),
              })}
              style={
                items[selectedItemIndex]
                  ? {
                      "--items-imageLight": items[selectedItemIndex].imageLight,
                      "--items-imageDark": items[selectedItemIndex].imageDark,
                    }
                  : {}
              }
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
