import { Button, Typography, Box } from "@mui/material"
import Avaters from '../assets/Frame 427320244.png'
import Blue from '../assets/Blue.jpg'
import Multiple from '../assets/Multiple.jpg'
import Red from '../assets/Red.jpg'
import Green from '../assets/Green.jpg'
import Orange from '../assets/Orange.jpg'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../Css/app.css'


const Adventure: React.FC = () => {

    const sliderImages = [
        {
          source: Blue,
          alt: 'Image 1',
        },
        {
          source: Orange,
          alt: 'Image 2',
        },
        {
          source: Multiple,
          alt: 'Image 3',
        },
        {
          source: Green,
          alt: 'Image 3',
        },
        {
          source: Red,
          alt: 'Image 3',
        },
      ];

      const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
      };
    
      const items = [
        <img src={sliderImages[0].source} className="sliderimg"/>,
        <img src={sliderImages[1].source} className="sliderimg"/>,
        <img src={sliderImages[2].source} className="sliderimg"/>,
        <img src={sliderImages[3].source} className="sliderimg"/>,
        <img src={sliderImages[4].source} className="sliderimg"/>,
      ]

  return (
    // container for content
    <Box sx={{background: '#FBF7FD', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '1225px', padding: '50px'}}>
        
        <Box sx={{padding: '20px 0 30px'}}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderColor: '#FF5C00', textTransform: 'none', height: '40px', border: '1px solid', borderRadius: '8px', width: '364px', color: '#FF5C00',}}>
                <Typography sx={{fontWeight: 500, fontSize: '18px', lineHeight: '24px', fontFamily: 'inter', width: '100%', textAlign: 'center'}}>Empowering Adventurers of Tomorrow</Typography>
            </Box>
        </Box>

        {/* container for embrace adventures */}
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <Typography sx={{fontWeight: 700, fontSize: '60px', lineHeight: '72px', fontFamily: 'inter', width: '70%', textAlign: 'center'}}>
                Conquer Your Fears, Embrace the
                <span style={{color: '#FF5C00'}}> Adventure</span>
            </Typography>
        </Box>

        {/* container for smaller texts */}
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px'}}>
            <Typography sx={{fontWeight: 400, fontSize: '20px', lineHeight: '32px', fontFamily: 'inter', width: '65%', textAlign: 'center', color: '#1E1E1E'}}>
                Join us in the exhilarating world of mountaineering, where bravery meets kindness. Our training videos inspire both parents and children to push their limits and explore the great outdoors together.
            </Typography>
        </Box>

        {/* container for buttons */}
        <Box sx={{display: 'flex', gap: '28px', padding: '10px 0 20px'}}>

             <Button variant="contained" sx={{background: '#FF5C00', textTransform: 'none', height: '72px', borderRadius: '12px', width: '287px', color: '#FBF7FD'}}>
                <Typography sx={{fontWeight: 600, fontSize: '20px', lineHeight: '24px', fontFamily: 'inter'}}>Call Us for More Info</Typography>
            </Button>    
            
            <Button variant="outlined" sx={{borderColor: '#FF5C00', textTransform: 'none', height: '72px', borderRadius: '12px', width: '235px', color: '#FF5C00'}}>
                <Typography sx={{fontWeight: 600, fontSize: '20px', lineHeight: '24px', fontFamily: 'inter'}}>Learn More</Typography>
            </Button>
        
        </Box>

        {/* wrapper for smaller font and avaters */}
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '5px 0 20px'}}>
            
            <Typography sx={{fontWeight: 400, fontSize: '20px', lineHeight: '30px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                Trusted by Adventurers Worldwide
            </Typography>

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                
                <Box sx={{width: '200px', height: '60px', padding: '10px'}}>
                    <img src={Avaters} alt="Avaters" style={{height: '100%', width: '100%'}}/>
                </Box>
                
                <Typography sx={{fontWeight: 400, fontFamily: 'Inter', fontSize: '20px', lineHeight: '30px', color: '#686868'}}>+56</Typography>
           
            </Box>

        </Box>

        {/* container for image slider*/}
        <div className="carousel-container" style={{height: '100%', width: '100%',}}>

            <AliceCarousel items={items} responsive={responsive} infinite autoPlayInterval={3000} autoPlay>
                
                {items.map((item, index) => (
                    <div key={index} style={{ perspective: '1000px', position: 'relative' }}>
                        {item}
                    </div>
                ))}
            
            </AliceCarousel>
        
        </div>
    
    </Box>
  )
}

export default Adventure