import { Box, Typography, Button } from "@mui/material"
import Jacob from '../assets/Jacob.jpg'
import X from '../assets/X.png'
import In from '../assets/In.png'
import Be from '../assets/Symbol.svg.png'
import Aika from '../assets/Aika.jpg'
import Mike from '../assets/Mike.jpg'
import Emily from '../assets/Emily.jpg'
import David from '../assets/David.jpg'
import Carter from '../assets/Carter.jpg'

const Team = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-strart', alignItems: 'center', gap: '2rem', height: 'auto', backgroundColor: '#FFFFFF', padding: '150px 50px 10px'}}>
        
        {/* container for text */}
        <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', height: '100%', width: '100%'}}>
            
            {/* wrapper for elevate */}
            <Box sx={{display: 'flex', alignItems: 'center', borderColor: '#FF5C00', textTransform: 'none', height: '40px', border: '1px solid', borderRadius: '8px', width: '80px', color: '#FF5C00', mb: '15px'}}>
                <Typography sx={{fontWeight: 500, fontSize: '18px', lineHeight: '24px', fontFamily: 'inter', width: '100%', textAlign: 'center'}}>Team</Typography>
            </Box>

            {/* container for master your climb */}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', pt: '20px'}}>
                <Typography sx={{fontWeight: 700, fontSize: '48px', lineHeight: '57.6px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                    Our Team
                </Typography>
            </Box>

            {/* container for smaller texts */}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', py: '30px'}}>
                <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                    Meet the passionate individuals behind Escape Global.
                </Typography>
            </Box>

        </Box>

        {/* Box for first set of team */}
        <Box sx={{display: 'flex', justifyContent: 'space-between', gap: '2.5rem', alignItems: 'center', mt: '40px'}}>
            {/* first image */}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px', width: '48%'}}>
                {/* image */}
                <img src={Jacob} alt="Jacob" style={{width: '100%', height: '100%'}}/>
                
                {/* avater name */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0 2px'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '24px', lineHeight: '36px', fontFamily: 'inter', width: '80%', textAlign: 'center', color: '#1E1E1E'}}>
                        Jacob Jones 
                    </Typography>
                </Box>

                {/* position text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 0 20px'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                       Team Leader
                    </Typography>
                </Box>
                
                {/* description text */}
                <Box sx={{width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                       Jacob  inspires the team with his adventurous spirit and dedication to mountaineering.
                    </Typography>
                </Box>
                
                {/* icon links */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                   
                   {/* icons for social media */}
                    <Box sx={{padding: '5px'}}>
                    <   a href="" rel="noreferrer" target='_blank'><img src={X} alt='Facebook icon' style={{width: '100%', height: '100%', }}/></a>
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={In} alt='LinkedIn icon' style={{width: '100%', height: '100%',}}/></a> 
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={Be} alt='X icon' style={{width: '100%', height: '16px',}}/></a>
                    </Box>

                </Box>

            </Box>


            {/* second image */}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px'}}>
                {/* image */}
                <img src={Aika} alt="Aika" style={{width: '100%', height: '100%'}}/>
                
                {/* avater name */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0 2px'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '24px', lineHeight: '36px', fontFamily: 'inter', width: '80%', textAlign: 'center', color: '#1E1E1E'}}>
                        Aika Cheng
                    </Typography>
                </Box>

                {/* position text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 0 20px'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Content Creator
                    </Typography>
                </Box>
                
                {/* description text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Aika crafts engaging stories that resonate with our audience's love for adventure.
                    </Typography>
                </Box>
                
                {/* icon links */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                    
                    {/* icons for social media */}
                    <Box sx={{padding: '5px'}}>
                    <   a href="" rel="noreferrer" target='_blank'><img src={In} alt='Facebook icon' style={{width: '100%', height: '100%', }}/></a>
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={X} alt='LinkedIn icon' style={{width: '100%', height: '100%',}}/></a> 
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={Be} alt='X icon' style={{width: '100%', height: '16px',}}/></a>
                    </Box>
                
                </Box>

            </Box>

            {/* third image */}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px'}}>
                {/* image */}
                <img src={Mike} alt="Mike" style={{width: '100%', height: '100%'}}/>
                
                {/* avater name */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0 2px'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '24px', lineHeight: '36px', fontFamily: 'inter', width: '80%', textAlign: 'center', color: '#1E1E1E'}}>
                        Mike Johnson 
                    </Typography>
                </Box>

                {/* position text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 0 20px'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Video Producer
                    </Typography>
                </Box>
                
                {/* description text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Mike brings our mountaineering training videos to life with his creative vision.
                    </Typography>
                </Box>
                
                {/* icon links */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                    
                    {/* icons for social media */}
                    <Box sx={{padding: '5px'}}>
                    <   a href="" rel="noreferrer" target='_blank'><img src={In} alt='Facebook icon' style={{width: '100%', height: '100%', }}/></a>
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={X} alt='LinkedIn icon' style={{width: '100%', height: '100%',}}/></a> 
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={Be} alt='X icon' style={{width: '100%', height: '16px',}}/></a>
                    </Box>

                </Box>

            </Box>

        </Box>
        
        {/* Box for second set of team */}
        <Box sx={{display: 'flex', justifyContent: 'space-between', gap: '2.5rem', alignItems: 'center', mt: '20px',}}>
            {/* first image */}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px'}}>
                {/* image */}
                <img src={Emily} alt="Emily" style={{width: '100%', height: '100%'}}/>
                
                {/* avater name */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0 2px'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '24px', lineHeight: '36px', fontFamily: 'inter', width: '80%', textAlign: 'center', color: '#1E1E1E'}}>
                        Emily Davis 
                    </Typography>
                </Box>

                {/* position text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 0 20px'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Marketing Specialist
                    </Typography>
                </Box>
                
                {/* description text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Emily connects our brand with families who seek adventure and growth.
                    </Typography>
                </Box>
                
                {/* icon links */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                   
                   {/* icons for social media */}
                    <Box sx={{padding: '5px'}}>
                    <   a href="" rel="noreferrer" target='_blank'><img src={X} alt='Facebook icon' style={{width: '100%', height: '100%', }}/></a>
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={In} alt='LinkedIn icon' style={{width: '100%', height: '100%',}}/></a> 
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={Be} alt='X icon' style={{width: '100%', height: '16px',}}/></a>
                    </Box>

                </Box>

            </Box>


            {/* second image */}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px'}}>
                {/* image */}
                <img src={David} alt="David" style={{width: '100%', height: '100%'}}/>
                
                {/* avater name */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0 2px'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '24px', lineHeight: '36px', fontFamily: 'inter', width: '80%', textAlign: 'center', color: '#1E1E1E'}}>
                        Aika Cheng
                    </Typography>
                </Box>

                {/* position text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 0 20px'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Technical Advisor
                    </Typography>
                </Box>
                
                {/* description text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        David ensures our training programs are safe, effective, and innovative.
                    </Typography>
                </Box>
                
                {/* icon links */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                    
                    {/* icons for social media */}
                    <Box sx={{padding: '5px'}}>
                    <   a href="" rel="noreferrer" target='_blank'><img src={In} alt='Facebook icon' style={{width: '100%', height: '100%', }}/></a>
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={X} alt='LinkedIn icon' style={{width: '100%', height: '100%',}}/></a> 
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={Be} alt='X icon' style={{width: '100%', height: '16px',}}/></a>
                    </Box>
                
                </Box>

            </Box>

            {/* third image */}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '600px'}}>
                {/* image */}
                <img src={Carter} alt="Carter" style={{width: '100%', height: '100%'}}/>
                
                {/* avater name */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0 2px'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '24px', lineHeight: '36px', fontFamily: 'inter', width: '80%', textAlign: 'center', color: '#000000'}}>
                        We're hiring!
                    </Typography>
                </Box>

                {/* position text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 0 20px'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Join us
                    </Typography>
                </Box>
                
                {/* description text */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
                    <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                        Explore exciting career opportunities and be part of our adventure.
                    </Typography>
                </Box>
                
                {/* icon links */}
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
                    
                    {/* icons for social media */}
                    <Box sx={{padding: '5px'}}>
                    <   a href="" rel="noreferrer" target='_blank'><img src={In} alt='Facebook icon' style={{width: '100%', height: '100%', }}/></a>
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={X} alt='LinkedIn icon' style={{width: '100%', height: '100%',}}/></a> 
                    </Box>

                    <Box sx={{padding: '5px'}}>
                        <a href="" rel="noreferrer" target='_blank'><img src={Be} alt='X icon' style={{width: '100%', height: '16px',}}/></a>
                    </Box>

                </Box>

            </Box>

        </Box>

         {/* container for text */}
         <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', height: '100%', width: '100%'}}>

            {/* container for we're hiring */}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', pt: '10px'}}>
                <Typography sx={{fontWeight: 700, fontSize: '32px', lineHeight: '42.6px', fontFamily: 'roboto', textAlign: 'center', color: '#1E1E1E'}}>
                    We're hiring!
                </Typography>
            </Box>

            {/* container for smaller texts */}
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', py: '30px'}}>
                <Typography sx={{fontWeight: 400, fontSize: '18px', lineHeight: '27px', fontFamily: 'inter', textAlign: 'center', color: '#1E1E1E'}}>
                    Check out our available roles.
                </Typography>
            </Box>

            {/* wrapper for open position*/}
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', m: '0 0 40px'}}>
                
                <Button variant="outlined" sx={{borderColor: '#FF5C00', textTransform: 'none', height: '60px', borderRadius: '10px', color: '#FF5C00'}}>
                    <Typography sx={{fontWeight: 600, fontSize: '24px', lineHeight: '36px', width: '211px'}}>Open Position</Typography>
                </Button>

            </Box>

        </Box>

    </Box>

  )
}

export default Team