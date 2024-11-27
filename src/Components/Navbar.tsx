import { Box, Button, Typography,} from "@mui/material"
import Logo from '../assets/Frame 427320249.png'

const Navbar = () => {


  return (
    <div>
        {/* container for navbar */}
        <Box sx={{height: '108px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FBF7FD', borderBottom: '1px solid #CACACA'}}>
            
            {/* container for logo */}
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '60px'}}>
                <img src={Logo} alt='Company Logo' style={{width: '50px'}}/>
            </Box>
            
            {/* container for nav links */}
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: '110px'}}>
                
                <Button sx={{textTransform: 'none', borderRadius: '12px', color: '#FF5C00'}}>
                    <Typography sx={{fontWeight: 500, fontSize: '18px', lineHeight: '24px', fontFamily: 'inter', textDecoration: 'underline'}}>Home</Typography>
                </Button>
                
                <Button sx={{textTransform: 'none', borderRadius: '12px', color: '#1E1E1E'}}>
                    <Typography sx={{fontWeight: 500, fontSize: '18px', lineHeight: '24px', fontFamily: 'inter',}}>About Us</Typography>
                </Button>
                
                <Button sx={{textTransform: 'none', borderRadius: '12px', color: '#1E1E1E'}}>
                    <Typography sx={{fontWeight: 500, fontSize: '18px', lineHeight: '24px', fontFamily: 'inter'}}>Our Team</Typography>
                </Button>
                
                <Button sx={{textTransform: 'none', borderRadius: '12px', color: '#1E1E1E'}}>
                    <Typography sx={{fontWeight: 500, fontSize: '18px', lineHeight: '24px', fontFamily: 'inter',}}>Contact Us</Typography>
                </Button>

            </Box>

            {/* container for buttons */}
            <Box sx={{display: 'flex', gap: '6px', padding: '60px'}}>
                
                <Button variant="outlined" sx={{borderColor: '#FF5C00', textTransform: 'none', height: '60px', borderRadius: '12px', width: '101px', color: '#FF5C00'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '20px', lineHeight: '24px', fontFamily: 'inter'}}>Call</Typography>
                </Button>
                
                <Button variant="contained" sx={{background: '#FF5C00', textTransform: 'none', height: '60px', borderRadius: '12px', width: '140px', color: '#FBF7FD'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '20px', lineHeight: '24px', fontFamily: 'inter'}}>Sign Up</Typography>
                </Button>
            
            </Box>

        </Box>
        
    </div>
  )
}

export default Navbar