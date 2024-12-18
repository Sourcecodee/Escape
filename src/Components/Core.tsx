import { Box, Typography, Button } from "@mui/material"
import Family from '../assets/Placeholder Image.jpg'
import Bridge from '../assets/Bridge.jpg'
import Mountain from '../assets/Mountain.jpg'

const Core = () => {
  return (
    // Container for core values
    <Box sx={{height: 'auto', background: '#FFFFFF', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: {xs: '25px', md: '50px'},}}>
        
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

        {/* container for three images */}
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-evenly', alignItems: 'center', height: {xs: 'auto', md: '435px'}, gap: {xs: '0.5rem', md: '1rem'}}}>
            
            {/* first image */}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '12px'}}>
                {/* image */}
                <img src={Family} alt="family photo" style={{width: '100%', height: '100%'}}/>
                
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

            {/* second image */}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '12px'}}>
                {/* image */}
                <img src={Bridge} alt="bridge photo" style={{width: '100%', height: '100%'}}/>
                
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

            {/* third image */}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', padding: '12px'}}>
                {/* image */}
                <img src={Mountain} alt="mountain photo" style={{width: '100%', height: '100%'}}/>
                
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

        {/* wrapper for learn more*/}
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            
            <Button variant="outlined" sx={{borderColor: '#FF5C00', textTransform: 'none', height: {xs: 'auto', md: '60px'}, borderRadius: {xs: '6px', md: '12px'}, color: '#FF5C00', mt: {xs: '20px', md:'100px'}}}>
                <Typography sx={{fontWeight: 600, fontSize: {xs: '18px', md: '24px'}, lineHeight: {xs: '20px', md: '36px'}, width: {xs: '100px', md: '171px'}}}>Learn More</Typography>
            </Button>

        </Box>



    </Box>
  )
}

export default Core