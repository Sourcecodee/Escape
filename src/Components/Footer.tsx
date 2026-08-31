import { Box, Typography} from "@mui/material"
import Logo from '../assets/Frame 427320249.png'
import X from '../assets/X.png'
import In from '../assets/In.png'
import Insta from '../assets/Insta.png'
import Youtube from '../assets/Youtube.png'
import Facebook from '../assets/Facebook.png'

// ..

const Footer = () => {
  return (
    <div style={{width: '100%'}}>
        <Box sx={{minHeight: 'auto', width: '100%', display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-between', alignItems: {xs: 'flex-start', md: 'center'}, background: '#FBF7FD', px: {xs: 2, md: 4}, py: {xs: 3, md: 2.5}, gap: {xs: 2, md: 2}}}>
                
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1.5}}>
                <img src={Logo} alt='Company Logo' style={{width: '42px'}}/>
                <Typography sx={{fontWeight: 700, fontFamily:'inter', color:'#1E1E1E', display: {xs: 'none', sm:'block'}}}>Escape Global</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: {xs: 1.5, md: '2rem'}, flexWrap:'wrap', alignItems: 'center', background: '#FBF7FD'}}>
                
                <Typography sx={{fontWeight: 600, fontSize: {xs:'13px', md:'14px'}, fontFamily: 'inter', color: '#1E1E1E'}}>
                    Training Videos
                </Typography>
                <Typography sx={{fontWeight: 600, fontSize: {xs:'13px', md:'14px'}, fontFamily: 'inter', color: '#1E1E1E'}}>
                    Our Team
                </Typography>
                <Typography sx={{fontWeight: 600, fontSize: {xs:'13px', md:'14px'}, fontFamily: 'inter', color: '#1E1E1E'}}>
                    Customer Support
                </Typography>
                
            </Box>

            <Box sx={{display: 'flex', gap: 0.5, alignItems:'center'}}>
                {[Facebook, Insta, X, In, Youtube].map((src,i)=>(
                  <Box key={i} sx={{width: 40, height: 40, display:'grid', placeItems:'center', border:'1px solid #E8E0EC', borderRadius: 2, background:'#fff'}}>
                    <a href="" rel="noreferrer" target='_blank' style={{display:'grid', placeItems:'center'}}><img src={src} alt='social' style={{width: 18, height: 18, objectFit:'contain'}}/></a>
                  </Box>
                ))}
            </Box>
            
        </Box>

        <Box sx={{width: '100%', background: '#FBF7FD', display: 'flex', justifyContent: 'center', px: {xs:2, md:4}}}>
            <Box sx={{width: '100%', bgcolor: '#E8E0EC',  height: '1px'}}></Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: {xs:'column', md:'row'}, gap: {xs: 1, md: 1.5}, justifyContent: 'space-between', alignItems: {xs:'flex-start', md:'center'}, background: '#FBF7FD', px: {xs:2, md:4}, py: 2.5}}>
            
            <Typography sx={{fontWeight: 400, fontSize: {xs:'13px', md:'14px'}, fontFamily: 'inter', color: '#1E1E1E'}}>
                © 2024 Escape Global. All rights reserved.
            </Typography>

            <Box sx={{display:'flex', gap: 2, flexWrap:'wrap'}}>
              <Typography sx={{fontWeight: 500, fontSize: '14px', fontFamily: 'inter', color: '#1E1E1E'}}>Privacy Policy</Typography>
              <Typography sx={{fontWeight: 500, fontSize: '14px', fontFamily: 'inter', color: '#1E1E1E'}}>Terms of Use</Typography>
              <Typography sx={{fontWeight: 500, fontSize: '14px', fontFamily: 'inter', color: '#1E1E1E'}}>Cookie Settings</Typography>
            </Box>
            
        </Box>
         

    </div>
  )
}

export default Footer