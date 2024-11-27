import { Box, Typography} from "@mui/material"
import Logo from '../assets/Frame 427320249.png'
import X from '../assets/X.png'
import In from '../assets/In.png'
import Insta from '../assets/Insta.png'
import Youtube from '../assets/Youtube.png'
import Facebook from '../assets/Facebook.png'

const Footer = () => {
  return (
    <div style={{width: '100%', height: '100%'}}>
        {/* container for navbar */}
        <Box sx={{height: '108px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FBF7FD', py: '40px'}}>
                
            {/* container for logo */}
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '60px'}}>
                <img src={Logo} alt='Company Logo' style={{width: '50px'}}/>
            </Box>
            
            {/* container for nav text */}
            <Box sx={{ display: 'flex', gap: '2rem', justifyContent: 'space-between', alignItems: 'center', background: '#FBF7FD', pl: '120px'}}>
                
                <Typography sx={{fontWeight: 600, fontSize: '14px', lineHeight: '21px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                    Training Videos
                </Typography>

                <Typography sx={{fontWeight: 600, fontSize: '14px', lineHeight: '21px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                    Our Team
                </Typography>

                <Typography sx={{fontWeight: 600, fontSize: '14px', lineHeight: '21px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                    Customer Support
                </Typography>
                
            </Box>

            {/* container for links */}
            <Box sx={{display: 'flex', gap: '6px', width: '20%',}}>
                
               {/* icon links */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                    
                    {/* icons for social media */}
                    <Box sx={{padding: '10px'}}>
                        <   a href="" rel="noreferrer" target='_blank'><img src={Facebook} alt='Facebook icon' style={{width: '20px', height: '23px', }}/></a>
                    </Box>

                    <Box sx={{padding: '10px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={Insta} alt='Instagram icon' style={{width: '20px', height: '20px',}}/></a> 
                    </Box>

                    <Box sx={{padding: '10px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={X} alt='X icon' style={{width: '20px', height: '20px', paddingTop: '3px'}}/></a>
                    </Box>

                    <Box sx={{padding: '10px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={In} alt='LinkedIn icon' style={{width: '20px', height: '20px', paddingTop: '4px'}}/></a>
                    </Box>

                    <Box sx={{padding: '10px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={Youtube} alt='Youtube icon' style={{width: '20px', height: '20px', paddingTop: '2px'}}/></a>
                    </Box>

                </Box>
            
            </Box>
            
        </Box>

        <Box sx={{width: '100%', background: '#FBF7FD', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{width: '100%', mx: '60px', bgcolor: '#1E1E1E',  height: '1px'}}></Box>
        </Box>

        
        {/* container for copyright */}
        <Box sx={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', background: '#FBF7FD', padding: '30px 50px'}}>
            
            <Typography sx={{fontWeight: 400, fontSize: '14px', lineHeight: '21px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                © 2024 Escape Global. All rights reserved.
            </Typography>

            <Typography sx={{fontWeight: 400, fontSize: '14px', lineHeight: '21px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                Privacy Policy
            </Typography>

            <Typography sx={{fontWeight: 400, fontSize: '14px', lineHeight: '21px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                Terms of Use
            </Typography>

            <Typography sx={{fontWeight: 400, fontSize: '14px', lineHeight: '21px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                Cookie Settings
            </Typography>
            
        </Box>
         

    </div>
  )
}

export default Footer