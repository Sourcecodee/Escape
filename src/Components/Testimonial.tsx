import { Box, Rating, Typography } from "@mui/material"
import EmilyS from '../assets/EmilyS.png'
import Michael from '../assets/Michael.png'
import Sarah from '../assets/Sarah.png'

const Testimonial = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFFFFF', padding : {xs: '32px 16px', md: '48px 32px'}}}>
        
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', pt: 1}}>
            <Typography sx={{fontWeight: 800, fontSize: {xs: '26px', md: '34px'}, lineHeight: 1.1, fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E', letterSpacing:'-0.02em'}}>
                Customer Testimonials
            </Typography>
        </Box>

        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', py: 1.5}}>
            <Typography sx={{fontWeight: 400, fontSize: {xs: '14px', md:'15px'}, lineHeight: '22px', fontFamily: 'inter', textAlign: 'center', color: '#4a4a4a', maxWidth: 520}}>
                Our family has grown stronger through these videos!
            </Typography>
        </Box>

        <Box sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', md: 'repeat(3,1fr)'}, gap: {xs: 2, md: 2.5}, width:'100%', maxWidth: 1100, py: 2}}>
            
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFFFFF', border:'1px solid #F0E6F5', borderRadius: 3, p: 2.5}}>
                
                <Rating defaultValue={5} size="small" sx={{color: '#FF5C00'}}></Rating>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', py: 2}}>
                    <Typography sx={{fontWeight: 600, fontSize: {xs:'15px', md:'16px'}, lineHeight: '22px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        "These training videos inspired my kids to be brave!"
                    </Typography>
                </Box>

                <Box sx={{width: 48, height: 48, borderRadius: '50%', overflow:'hidden', border:'1px solid #F0E6F5'}}>
                    <img src={EmilyS} alt="EmilyS" style={{height: '100%', width: '100%', objectFit:'cover'}}/>
                </Box>

                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', pt: 1.5}}>
                    <Typography sx={{fontWeight: 700, fontSize: '14px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Emily Johnson
                    </Typography>
                </Box>

                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', py: 0.5}}>
                    <Typography sx={{fontWeight: 400, fontSize: '12.5px', fontFamily: 'inter', textAlign: 'center', color: '#6b6b6b'}}>
                        Parent, Adventure Co.
                    </Typography>
                </Box>

            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFFFFF', border:'1px solid #F0E6F5', borderRadius: 3, p: 2.5}}>
                
                <Rating defaultValue={5} size="small" sx={{color: '#FF5C00'}}></Rating>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', py: 2}}>
                    <Typography sx={{fontWeight: 600, fontSize: {xs:'15px', md:'16px'}, lineHeight: '22px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        "We learned teamwork and resilience as a family!"
                    </Typography>
                </Box>

                <Box sx={{width: 48, height: 48, borderRadius: '50%', overflow:'hidden', border:'1px solid #F0E6F5'}}>
                    <img src={Michael} alt="Michael" style={{height: '100%', width: '100%', objectFit:'cover'}}/>
                </Box>

                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', pt: 1.5}}>
                    <Typography sx={{fontWeight: 700, fontSize: '14px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Michael Smith
                    </Typography>
                </Box>

                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', py: 0.5}}>
                    <Typography sx={{fontWeight: 400, fontSize: '12.5px', fontFamily: 'inter', textAlign: 'center', color: '#6b6b6b'}}>
                        Father, Outdoor Life
                    </Typography>
                </Box>

            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFFFFF', border:'1px solid #F0E6F5', borderRadius: 3, p: 2.5}}>
                
                <Rating defaultValue={5} size="small" sx={{color: '#FF5C00'}}></Rating>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', py: 2}}>
                    <Typography sx={{fontWeight: 600, fontSize: {xs:'15px', md:'16px'}, lineHeight: '22px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        "These videos are a game changer for our kids!"
                    </Typography>
                </Box>

                <Box sx={{width: 48, height: 48, borderRadius: '50%', overflow:'hidden', border:'1px solid #F0E6F5'}}>
                    <img src={Sarah} alt="Sarah" style={{height: '100%', width: '100%', objectFit:'cover'}}/>
                </Box>

                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', pt: 1.5}}>
                    <Typography sx={{fontWeight: 700, fontSize: '14px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Sarah Lee
                    </Typography>
                </Box>

                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', py: 0.5}}>
                    <Typography sx={{fontWeight: 400, fontSize: '12.5px', fontFamily: 'inter', textAlign: 'center', color: '#6b6b6b'}}>
                        Mom, Family Adventures
                    </Typography>
                </Box>

            </Box>

        </Box>

    </Box>
  )
}

export default Testimonial