import { Box, Typography, Button } from "@mui/material"
import Lightbox from '../assets/Lightbox.png'


const Video = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', gap: '2rem', height: '720px', backgroundColor: '#FFFFFF', padding: '50px'}}>
        
        {/* container for text */}
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', width: '50%', height: '100%'}}>
            
            {/* wrapper for elevate */}
            <Box sx={{display: 'flex', alignItems: 'center', borderColor: '#FF5C00', textTransform: 'none', height: '40px', border: '1px solid', borderRadius: '8px', width: '113px', color: '#FF5C00', mb: '15px'}}>
                <Typography sx={{fontWeight: 500, fontSize: '18px', lineHeight: '24px', fontFamily: 'inter', width: '100%', textAlign: 'center'}}>Elavate</Typography>
            </Box>

            {/* container for master your climb */}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', pt: '20px'}}>
                <Typography sx={{fontWeight: 700, fontSize: '48px', lineHeight: '57.6px', fontFamily: 'inter', width: '90%', textAlign: 'left', color: '#1E1E1E'}}>
                    Master Your Climb with Our Training Video
                </Typography>
            </Box>

            {/* container for smaller texts */}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', py: '30px'}}>
                <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', width: '90%', textAlign: 'left', color: '#1E1E1E'}}>
                    Discover the secrets of successful mountaineering with our acclaimed training video. Join countless adventurers who have transformed their skills and confidence.
                </Typography>
            </Box>

            {/* container for Box */}

            <Box sx={{width: '90%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', py: '15px',}}>
                
                {/* Box one */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                    
                    {/* wrapper for percentage */}
                    <Typography sx={{fontWeight: 700, fontSize: '48px', lineHeight: '57.6px', fontFamily: 'inter', width: '95%', textAlign: 'left', color: '#000000'}}>
                        50%
                    </Typography>
                    
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', width: '75%', textAlign: 'left', color: '#000000'}}>
                        Unleash your potential and conquer new heights!
                    </Typography>
                
                </Box>

                {/* Box two */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column'}}>
                    
                    {/* wrapper for percentage */}
                    <Typography sx={{fontWeight: 700, fontSize: '48px', lineHeight: '57.6px', fontFamily: 'inter', width: '65%', textAlign: 'left', color: '#000000'}}>
                        50%
                    </Typography>
                    
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', width: '95%', textAlign: 'left', color: '#000000'}}>
                        Start your journey towards mountaineering excellence today!
                    </Typography>
                
                </Box>

            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '20px'}}>
            
                <Button variant="outlined" sx={{borderColor: '#FF5C00', textTransform: 'none', height: '60px', borderRadius: '12px', color: '#FF5C00', }}>
                    <Typography sx={{fontWeight: 600, fontSize: '24px', lineHeight: '36px', width: '123px'}}>Watch</Typography>
                </Button>

            </Box>

        </Box>

        {/* container for video */}
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', width: '50%', height: '100%'}}>
            <img src={Lightbox} alt="ligthbox" style={{height: '100%', width: '100%'}}/>
        </Box>

    </Box>
  )
}

export default Video