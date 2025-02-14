import React from 'react';
import { Carousel } from 'antd';
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import LopesHerd from '../../assets/static/GatheringLopes.png'
import FoodDrive from '../../assets/static/Service Food Drive.png'
import TrashCleanup from '../../assets/static/TrashCleanup.png'
import Running from '../../assets/static/Running.png'
import Together from '../../assets/static/Together.png'
import { typographyClasses } from "@mui/joy/Typography";
import Container from "@mui/joy/Container";
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';


const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
};

const App: React.FC = () => (
  <>
      <Container
      sx={
        [
          (theme) => ({
            pt: 10
          })
        ]
      }
    >
    <Carousel autoplay arrows infinite={true}>
      <div>
      <AspectRatio
        ratio={600 / 520}
        //variant="outlined"
        maxHeight={300}
        sx={(theme) => ({
          minWidth: 300,
          alignSelf: "stretch",
          [theme.breakpoints.up(834)]: {
            alignSelf: "initial",
            flexGrow: 1,
            "--AspectRatio-maxHeight": "520px",
            "--AspectRatio-minHeight": "400px",
          },
          borderRadius: "sm",
          bgcolor: "background.level2",
          flexBasis: "50%",
        })}
      >
        
        <Card component="li" sx={{  minWidth: 300, flexGrow: 1 }}>
        <CardCover sx={{ opacity: 0.6,  }}>
          <img 
            src={Together}loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
        <Typography
        level="h1"
        sx={{
          fontWeight: 'lg', mt: { xs: 25, sm: 20 }, mr: { xs: 15, sm: 50 },
          fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
        }}
      >
       Stick Together
      </Typography>
        </CardContent>
      </Card>
      </AspectRatio>
      </div>
      <div>
      <AspectRatio
        ratio={600 / 500}
        //variant="outlined"
        maxHeight={300}
        objectFit='cover'
        sx={(theme) => ({
          minWidth: 300,
          alignSelf: "stretch",
          [theme.breakpoints.up(834)]: {
            alignSelf: "initial",
            flexGrow: 1,
            "--AspectRatio-maxHeight": "520px",
            "--AspectRatio-minHeight": "400px",
          },
          borderRadius: "sm",
          bgcolor: "background.level2",
          flexBasis: "50%",
        })}
      >
        
        <Card component="li" sx={{  minWidth: 300, flexGrow: 1 }}>
        <CardCover sx={{ opacity: 0.6,  }}>
        <img 
            src={FoodDrive}loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
        <Typography
        level="h1"
        sx={{
          fontWeight: 'lg', mt: { xs: 25, sm: 20 }, mr: { xs: 15, sm: 50 },
          fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
        }}
      >
       Help Together.
      </Typography>
        </CardContent>
      </Card>
      </AspectRatio>
      </div>
      <div>
      <AspectRatio
        ratio={600 / 520}
        //variant="outlined"
        objectFit='cover'
        maxHeight={300}
        sx={(theme) => ({
          minWidth: 300,
          alignSelf: "stretch",
          [theme.breakpoints.up(834)]: {
            alignSelf: "initial",
            flexGrow: 1,
            "--AspectRatio-maxHeight": "520px",
            "--AspectRatio-minHeight": "400px",
          },
          borderRadius: "sm",
          bgcolor: "background.level2",
          flexBasis: "50%",
        })}
      >
        
        <Card component="li" sx={{  minWidth: 300, flexGrow: 1 }}>
        <CardCover sx={{ opacity: 0.6,  }}>
        <img 
            src={TrashCleanup}loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
        <Typography
        level="h1"
        sx={{
          fontWeight: 'lg', mt: { xs: 25, sm: 20 }, mr: { xs: 15, sm: 50 },
          fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
        }}
      >
       Serve Together.
      </Typography>
        </CardContent>
      </Card>
      </AspectRatio>
      </div>
      <div>
      <AspectRatio
        ratio={600 / 520}
        //variant="outlined"
        maxHeight={300}
        sx={(theme) => ({
          minWidth: 300,
          alignSelf: "stretch",
          [theme.breakpoints.up(834)]: {
            alignSelf: "initial",
            flexGrow: 1,
            "--AspectRatio-maxHeight": "520px",
            "--AspectRatio-minHeight": "400px",
          },
          borderRadius: "sm",
          bgcolor: "background.level2",
          flexBasis: "50%",
        })}
      >
        
        <Card component="li" sx={{  minWidth: 300, flexGrow: 1 }}>
        <CardCover sx={{ opacity: 0.6,  }}>
        <img 
            src={Running}loading="lazy"
            alt=""
          />
        </CardCover>
        <CardContent>
        <Typography
        level="h1"
        sx={{
          fontWeight: 'lg', mt: { xs: 25, sm: 20 }, mr: { xs: 15, sm: 50 },
          fontSize: "clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",
        }}
      >
       Be Fit Together
      </Typography>
        </CardContent>
      </Card>
      </AspectRatio>
      </div>
    </Carousel>
    </Container>
  </>
);

export default App;