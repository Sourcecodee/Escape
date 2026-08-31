import { Button, Typography, Box } from "@mui/material"
import Avaters from '../assets/Frame 427320244.png'
import Blue from '../assets/Blue.jpg'
import Multiple from '../assets/Multiple.jpg'
import Red from '../assets/Red.jpg'
import Green from '../assets/Green.jpg'
import Orange from '../assets/Orange.jpg'
import { FC } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react"


const Adventure: FC = () => {

    const sliderRef = useRef<Slider>(null);

    // Function to reset slider when reaching the end
    const handleAfterChange = (currentIndex: number) => {
    const totalSlides = 6; // Total number of actual slides
    if (currentIndex === totalSlides) {
      sliderRef.current?.slickGoTo(0, false); // Jump back to the start without animation
    }
  };

    const settings = {
      dots: false,
      infinite: true,
      adaptiveHeight: false,
      speed: 6000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 1500,
      cssEase: 'ease-in-out',
      pauseOnHover: true,
      afterChange: handleAfterChange,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: true } },
        { breakpoint: 640, settings: { slidesToShow: 1, centerMode: true, centerPadding: '18px' } },
      ]
    };

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
          alt: 'Image 4',
        },
        {
          source: Red,
          alt: 'Image 5',
        },
      ];
    
      const items = [
          
          <div>
            <img src={sliderImages[0].source} alt={sliderImages[0].alt} className="sliderimg"/>
          </div>,
          
          <div>
            <img src={sliderImages[1].source} alt={sliderImages[1].alt} className="sliderimg"/>
          </div>,
          
          <div>
            <img src={sliderImages[2].source} alt={sliderImages[2].alt}className="sliderimg"/>
          </div>,
          
          <div>
            <img src={sliderImages[3].source} alt={sliderImages[3].alt}className="sliderimg"/>
          </div>,
          
          <div>
            <img src={sliderImages[4].source} alt={sliderImages[4].alt} className="sliderimg"/>
          </div>
          
      ]

      const extended =[...items, ...items, ...items]

  return (
    <Box sx={{background: '#FBF7FD', display: 'flex', flexDirection: 'column', alignItems: 'center', height: {xs:'900px', md:'1000px'}, padding: {xs: '28px 16px 12px', md: '48px 32px 16px'}, overflow: 'hidden'}}>
        
        <Box sx={{padding: {xs: '8px 0 18px', md: '12px 0 22px'}, width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Box sx={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #FF5C00', borderRadius: '999px', px: {xs: 2, md: 2.5}, py: 1, color: '#FF5C00', background: 'rgba(255,92,0,0.06)'}}>
                <Typography sx={{fontWeight: 600, fontSize: {xs: '12px', md:'13px'}, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'inter', textAlign: 'center'}}>Empowering Adventurers of Tomorrow</Typography>
            </Box>
        </Box>

        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <Typography sx={{fontWeight: 800, fontSize: {xs: '30px', sm: '36px', md: '56px'}, lineHeight: {xs:'36px', sm:'40px', md:'64px'}, fontFamily: 'inter', maxWidth: {xs: '100%', md: '760px'}, textAlign: 'center', letterSpacing:'-0.03em'}}>
                Conquer Your Fears, Embrace the
                <span style={{color: '#FF5C00'}}> Adventure</span>
            </Typography>
        </Box>

        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', pt: {xs: 2, md: 2.5}, pb: 1}}>
            <Typography sx={{fontWeight: 400, fontSize: {xs: '14.5px', md:'17px'}, lineHeight: {xs:'24px', md:'28px'}, fontFamily: 'inter', maxWidth: {xs: '100%', md: '680px'}, textAlign: 'center', color: '#2b2b2b'}}>
                Join us in the exhilarating world of mountaineering, where bravery meets kindness. Our training videos inspire both parents and children to push their limits and explore the great outdoors together.
            </Typography>
        </Box>

        <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, gap: 1.25, pt: 2.5, width: {xs:'100%', sm:'auto'}, maxWidth: 480, mx: 'auto', justifyContent:'center', alignItems:'center'}}>

             <Button variant="contained" sx={{background: '#FF5C00', textTransform: 'none', height: 44, borderRadius: '12px', px: 2.5, color: '#FBF7FD', boxShadow: 'none', '&:hover':{background:'#E65300'}, fontWeight: 700, width: {xs:'100%', sm:'auto'}, maxWidth: {xs: 280, sm: 'none'}, mx: {xs:'auto', sm:0}}}>
                <Typography sx={{fontWeight: 700, fontSize: '14px', fontFamily: 'inter', whiteSpace:'nowrap'}}>Call Us for More Info</Typography>
            </Button>    
            
            <Button variant="outlined" sx={{borderColor: '#FF5C00', textTransform: 'none', height: 44, borderRadius: '12px', px: 2.5, color: '#FF5C00', background: '#fff', fontWeight: 700, width: {xs:'100%', sm:'auto'}, maxWidth: {xs: 280, sm: 'none'}, mx: {xs:'auto', sm:0}}}>
                <Typography sx={{fontWeight: 700, fontSize: '14px', fontFamily: 'inter', whiteSpace:'nowrap'}}>Learn More</Typography>
            </Button>
        
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 3, zIndex: 2}}>
            
            <Typography sx={{fontWeight: 600, fontSize: {xs: '13px', md: '14px'}, letterSpacing:'0.08em', textTransform:'uppercase', fontFamily: 'inter', textAlign: 'center', color: '#6b6b6b'}}>
                Trusted by Adventurers Worldwide
            </Typography>

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.2, mt: 1}}>
                
                <Box sx={{width: {xs: 160, md: 180}, height: 44, display:'flex', alignItems:'center'}}>
                    <img src={Avaters} alt="Avaters" style={{height: '100%', width: '100%', objectFit:'contain'}}/>
                </Box>
                
                <Typography sx={{fontWeight: 700, fontFamily: 'inter', fontSize: '14px', color: '#1E1E1E', background:'#fff', border:'1px solid #E8E0EC', borderRadius: 999, px:1.2, py:0.4}}>+56</Typography>
           
            </Box>

        </Box>

        {/* container for image slider */}
        <div className="slider-container">
        
          <Slider ref={sliderRef} {...settings}>  
          
                {extended.map((item, index) => (
                    <div key={index} style={{display: 'flex'}}>
                        {item}
                    </div>
                ))}

          </Slider>

        </div>

    </Box>
  )
}

export default Adventure