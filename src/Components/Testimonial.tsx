import { Box, Rating, Typography } from "@mui/material"
import EmilyS from '../assets/EmilyS.png'
import Michael from '../assets/Michael.png'
import Sarah from '../assets/Sarah.png'

const Testimonial = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', padding : '50px'}}>
        
        {/* container for master your climb */}
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', pt: '10px'}}>
            <Typography sx={{fontWeight: 700, fontSize: '48px', lineHeight: '57.6px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                Customer Testimonials
            </Typography>
        </Box>

        {/* container for smaller texts */}
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', py: '30px'}}>
            <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                Our family has grown stronger through these videos!
            </Typography>
        </Box>

        {/* container for cards */}
        <Box sx={{display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', py: '20px'}}>
            
            {/* card one */}
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                
                <Rating defaultValue={5} sx={{color: '#FF5C00'}}></Rating>
                {/* upper text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', py: '30px'}}>
                    <Typography sx={{fontWeight: 700, fontSize: '20px', lineHeight: '28px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        "These training videos inspired my kids to be brave!"
                    </Typography>
                </Box>

                <Box sx={{width: '60px', height: '60px', padding: '10px'}}>
                    <img src={EmilyS} alt="EmilyS" style={{height: '100%', width: '100%'}}/>
                </Box>

                {/* container for master your climb */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', pt: '10px'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '16px', lineHeight: '24px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Emily Johnson
                    </Typography>
                </Box>

                {/* container for smaller texts */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', py: '6px'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Parent, Adventure Co.
                    </Typography>
                </Box>

            </Box>

            {/* card two */}
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                
                <Rating defaultValue={5} sx={{color: '#FF5C00'}}></Rating>
                {/* upper text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', py: '30px'}}>
                    <Typography sx={{fontWeight: 700, fontSize: '20px', lineHeight: '28px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        "We learned teamwork and resilience as a family!"
                    </Typography>
                </Box>

                <Box sx={{width: '60px', height: '60px', padding: '10px'}}>
                    <img src={Michael} alt="Michael" style={{height: '100%', width: '100%'}}/>
                </Box>

                {/* container for master your climb */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', pt: '10px'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '16px', lineHeight: '24px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Michael Smith
                    </Typography>
                </Box>

                {/* container for smaller texts */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', py: '6px'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Father, Outdoor Life
                    </Typography>
                </Box>

            </Box>

            {/* card three */}
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                
                <Rating defaultValue={5} sx={{color: '#FF5C00'}}></Rating>
                {/* upper text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', py: '30px'}}>
                    <Typography sx={{fontWeight: 700, fontSize: '20px', lineHeight: '28px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        "These videos are a game changer for our kids!"
                    </Typography>
                </Box>

                <Box sx={{width: '60px', height: '60px', padding: '10px'}}>
                    <img src={Sarah} alt="Sarah" style={{height: '100%', width: '100%'}}/>
                </Box>

                {/* container for master your climb */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', pt: '10px'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '16px', lineHeight: '24px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Sarah Lee
                    </Typography>
                </Box>

                {/* container for smaller texts */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', py: '6px'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Mom, Family Adventures
                    </Typography>
                </Box>

            </Box>

        </Box>

    </Box>
  )
}

export default Testimonial