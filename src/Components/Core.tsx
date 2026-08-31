import { Box, Typography, Button } from "@mui/material"
import Family from '../assets/Placeholder Image.jpg'
import Bridge from '../assets/Bridge.jpg'
import Mountain from '../assets/Mountain.jpg'

const Core = () => {
  return (
    <Box sx={{height: 'auto', background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: {xs: '32px 16px', md: '56px 32px'}, overflow:'hidden'}}>
        
        {/* wrapper for empower */}
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderColor: '#FF5C00', textTransform: 'none', height: {xs: 'auto', md: '40px'}, border: '1px solid', borderRadius: {xs: '4px', md: '8px'}, width: '113px', color: '#FF5C00', mt: '20px'}}>
            <Typography sx={{fontWeight: 500, fontSize: '18px', lineHeight: '24px', fontFamily: 'inter', width: '100%', textAlign: 'center'}}>Empower</Typography>
        </Box>

        {/* container for core business values */}
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: {xs:'10px 0 15px', md: '20px 0 50px'}}}>
            <Typography sx={{fontWeight: 700, fontSize: {xs: '28px', md: '48px'}, lineHeight: {xs:'40px', md:'57.6px'}, fontFamily: 'inter', width: {xs: '90%', md: '60%'}, textAlign: 'center', color: '#1E1E1E'}}>
                Our Core Values: Bravery and Kindness
            </Typography>
        </Box>

        {/* container for smaller texts */}
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 0 70px'}}>
            <Typography sx={{fontWeight: 400, fontSize: {xs: '14px', md:'18px'}, lineHeight: '27px', fontFamily: 'inter', width: {xs: '90%', md: '65%'}, textAlign: 'center', color: '#1E1E1E'}}>
                At Escape Global, we believe in empowering families through the spirit of adventure. Our training videos inspire bravery while fostering kindness in every challenge.
            </Typography>
        </Box>

        <Box sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', md: 'repeat(3,1fr)'}, gap: {xs: 2, md: 2.5}, width: '100%', maxWidth: 1240, alignItems: 'start'}}>
            
            <Box sx={{display: 'flex', flexDirection: 'column', background:'#FBF7FD', border:'1px solid #F0E6F5', borderRadius: 3, overflow:'hidden'}}>
                <Box sx={{width:'100%', aspectRatio: '4/3', overflow:'hidden'}}>
                  <img src={Family} alt="family photo" style={{width: '100%', height: '100%', objectFit:'cover'}}/>
                </Box>
                
                {/* fisrt text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: {xs: '13px', md: '20px'}}}>
                    <Typography sx={{fontWeight: 600, fontSize: {xs: '24px', md: '30px'}, lineHeight: {xs: '30px', md: '39px'}, fontFamily: 'inter', width: '100%', textAlign: 'center', color: '#1E1E1E'}}>
                        Family-Oriented Approach to Mountaineering
                    </Typography>
                </Box>

                {/* second text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                    <Typography sx={{fontWeight: 400, fontSize: {xs: '14px', md:'18px'}, lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        We create a supportive community for families.
                    </Typography>
                </Box>

            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', background:'#FBF7FD', border:'1px solid #F0E6F5', borderRadius: 3, overflow:'hidden'}}>
                <Box sx={{width:'100%', aspectRatio: '4/3', overflow:'hidden'}}>
                  <img src={Bridge} alt="bridge photo" style={{width: '100%', height: '100%', objectFit:'cover'}}/>
                </Box>
                
                {/* fisrt text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: {xs: '13px', md: '20px'}}}>
                    <Typography sx={{fontWeight: 600, fontSize: {xs: '24px', md: '30px'}, lineHeight: {xs: '30px', md: '39px'}, fontFamily: 'inter', width: '80%', textAlign: 'center', color: '#1E1E1E'}}>
                        Join Us on This Brave Journey
                    </Typography>
                </Box>

                {/* second text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                    <Typography sx={{fontWeight: 400, fontSize: {xs: '14px', md:'18px'}, lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Together, we can conquer mountains and fears.
                    </Typography>
                </Box>

            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', background:'#FBF7FD', border:'1px solid #F0E6F5', borderRadius: 3, overflow:'hidden'}}>
                <Box sx={{width:'100%', aspectRatio: '4/3', overflow:'hidden'}}>
                  <img src={Mountain} alt="mountain photo" style={{width: '100%', height: '100%', objectFit:'cover'}}/>
                </Box>
                
                {/* fisrt text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: {xs: '13px', md: '20px'}}}>
                    <Typography sx={{fontWeight: 600, fontSize: {xs: '24px', md: '30px'}, lineHeight: {xs: '30px', md: '39px'}, fontFamily: 'inter', width: '80%', textAlign: 'center', color: '#1E1E1E'}}>
                        Experience the Adventure with Us
                    </Typography>
                </Box>

                {/* second text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                    <Typography sx={{fontWeight: 400, fontSize: {xs: '14px', md:'18px'}, lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Our videos are designed for all family member.
                    </Typography>
                </Box>

            </Box>

        </Box>

        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%', mt: {xs: 3, md: 4}}}>
            <Button variant="outlined" sx={{borderColor: '#FF5C00', textTransform: 'none', height: 44, borderRadius: '12px', px: 3, color: '#FF5C00', background:'#fff', mx:'auto', display:'flex'}}>
                <Typography sx={{fontWeight: 700, fontSize: '14px', fontFamily:'inter'}}>Learn More</Typography>
            </Button>
        </Box>



    </Box>
  )
}

export default Core