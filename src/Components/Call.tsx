import { Box, Typography, Button } from "@mui/material"
import Testimonial from "./Testimonial"


const Call = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF',}}>
        
        <Box sx={{height: '413px', width: '100%', backgroundColor: '#FF5C00', padding : '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            
            {/* container for text */}
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', width: '100%'}}>

            {/* container for get in touch climb */}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', pt: '10px'}}>
                <Typography sx={{fontWeight: 700, fontSize: '48px', lineHeight: '57.6px', fontFamily: 'inter', textAlign: 'center', color: '#FBF7FD'}}>
                  Get in Touch with Us
                </Typography>
            </Box>

            {/* container for smaller texts */}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', py: '30px'}}>
                <Typography sx={{fontWeight: 400, fontSize: '20px', lineHeight: '30px', fontFamily: 'inter', textAlign: 'center', color: '#FBF7FD'}}>
                  Have questions? Our team is here to help you with all your mountaineering training needs.
                </Typography>
            </Box>

            {/* wrapper for call now*/}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px'}}>
                
                <Button variant="outlined" sx={{borderColor: '#FF5C00', textTransform: 'none', height: '60px', borderRadius: '10px', color: '#000000', background: 'white'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '24px', lineHeight: '36px', width: '103px'}}>Call Now</Typography>
                </Button>

            </Box>

            </Box>
        </Box>
        <Testimonial/>
    </Box>
  )
}

export default Call