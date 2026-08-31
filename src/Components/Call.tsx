import { Box, Typography, Button } from "@mui/material"
import Testimonial from "./Testimonial"


const Call = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF',}}>
        
        <Box sx={{minHeight: {xs: 'auto', md: '380px'}, width: '100%', backgroundColor: '#FF5C00', padding : {xs: '36px 16px', md: '48px 32px'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', maxWidth: 720}}>

            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 1}}>
                <Typography sx={{fontWeight: 800, fontSize: {xs: '28px', md: '42px'}, lineHeight: {xs:'34px', md:'48px'}, fontFamily: 'inter', textAlign: 'center', color: '#FBF7FD', letterSpacing:'-0.02em'}}>
                  Get in Touch with Us
                </Typography>
            </Box>

            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', py: {xs: 1.5, md: 2}}}>
                <Typography sx={{fontWeight: 400, fontSize: {xs: '15px', md:'17px'}, lineHeight: {xs:'24px', md:'28px'}, fontFamily: 'inter', textAlign: 'center', color: '#FFF7F0', maxWidth: 560}}>
                  Have questions? Our team is here to help you with all your mountaineering training needs.
                </Typography>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%', mt: 1}}>
                <Button variant="contained" sx={{background: 'white', textTransform: 'none', height: 44, borderRadius: '12px', px: 3, color: '#FF5C00', boxShadow:'none', fontWeight: 700, mx:'auto'}}>
                    <Typography sx={{fontWeight: 700, fontSize: '14px', fontFamily:'inter'}}>Call Now</Typography>
                </Button>
            </Box>

            </Box>
        </Box>
        <Testimonial/>
    </Box>
  )
}

export default Call