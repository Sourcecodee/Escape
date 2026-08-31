import { Box, Typography, Button } from "@mui/material"
import Lightbox from '../assets/Lightbox.png'


const Video = () => {
  return (
    <Box sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', md: '1fr 1fr'}, gap: {xs: 3, md: 4}, backgroundColor: '#FFFFFF', padding: {xs: '28px 16px', md: '52px 32px'}, maxWidth: 1280, mx: 'auto', width:'100%', boxSizing:'border-box', overflow:'hidden'}}>
        
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: {xs: 'center', md: 'flex-start'}, minWidth: 0, width: '100%'}}>
            
            {/* wrapper for elevate */}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderColor: '#FF5C00', textTransform: 'none', height: '40px', border: '1px solid', borderRadius: {xs: '4px', md: '8px'}, width: {xs: '90px', md: '113px'}, color: '#FF5C00', mb: '15px'}}>
                <Typography sx={{fontWeight: 500, fontSize: {xs: '18px', md: '24px'}, lineHeight: '24px', fontFamily: 'inter', width: '100%', textAlign: 'center'}}>Elavate</Typography>
            </Box>

            {/* container for master your climb */}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', pt: '20px'}}>
                <Typography sx={{fontWeight: 700, fontSize: {xs: '28px', md: '48px'}, lineHeight: {xs:'40px', md:'57.6px'}, fontFamily: 'inter', width: {xs: '100%', md: '90%'}, textAlign: {xs: 'center', md: 'left'}, color: '#1E1E1E'}}>
                    Master Your Climb with Our Training Video
                </Typography>
            </Box>

            {/* container for smaller texts */}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', py: '30px'}}>
                <Typography sx={{fontWeight: 400, fontSize: {xs: '14px', md:'18px'}, lineHeight: '27px', fontFamily: 'inter', width: {xs: '100%', md: '90%'}, textAlign: {xs: 'center', md: 'left'}, color: '#1E1E1E'}}>
                    Discover the secrets of successful mountaineering with our acclaimed training video. Join countless adventurers who have transformed their skills and confidence.
                </Typography>
            </Box>

            {/* container for Box */}

            <Box sx={{width: '100%', maxWidth: 480, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, py: 1.5}}>
                
                <Box sx={{display: 'flex', flexDirection: 'column', minWidth: 0}}>
                    <Typography sx={{fontWeight: 800, fontSize: {xs: '28px', md: '42px'}, lineHeight: 1, fontFamily: 'inter', textAlign: {xs: 'center', md: 'left'}, color: '#000000'}}>
                        50%
                    </Typography>
                    <Typography sx={{fontWeight: 400, fontSize: {xs: '13px', md:'15px'}, lineHeight: '22px', fontFamily: 'inter', textAlign: {xs: 'center', md: 'left'}, color: '#1E1E1E', mt: 0.5}}>
                        Unleash your potential and conquer new heights!
                    </Typography>
                </Box>

                <Box sx={{display: 'flex', flexDirection: 'column', minWidth: 0}}>
                    <Typography sx={{fontWeight: 800, fontSize: {xs: '28px', md: '42px'}, lineHeight: 1, fontFamily: 'inter', textAlign: {xs: 'center', md: 'left'}, color: '#000000'}}>
                        50%
                    </Typography>
                    <Typography sx={{fontWeight: 400, fontSize: {xs: '13px', md:'15px'}, lineHeight: '22px', fontFamily: 'inter', textAlign: {xs: 'center', md: 'left'}, color: '#1E1E1E', mt: 0.5}}>
                        Start your journey towards mountaineering excellence today!
                    </Typography>
                </Box>

            </Box>

            <Box sx={{display: 'flex', justifyContent: {xs:'center', md:'flex-start'}, alignItems: 'center', pt: 1, width:'100%'}}>
                <Button variant="outlined" sx={{borderColor: '#FF5C00', textTransform: 'none', height: 44, borderRadius: '12px', px: 3, color: '#FF5C00', background:'#fff', mx: {xs:'auto', md:0}}}>
                    <Typography sx={{fontWeight: 700, fontSize: '14px', fontFamily:'inter'}}>Watch</Typography>
                </Button>
            </Box>

        </Box>

        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 0, width: '100%'}}>
            <Box sx={{width:'100%', maxWidth: 560, aspectRatio: {xs:'16/10', md:'4/3'}, borderRadius: 3, overflow:'hidden', border:'1px solid #F0E6F5', mx: 'auto'}}>
              <img src={Lightbox} alt="lightbox" style={{height: '100%', width: '100%', objectFit:'cover', display:'block'}}/>
            </Box>
        </Box>

    </Box>
  )
}

export default Video