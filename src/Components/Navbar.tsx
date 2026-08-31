import { Box, Button, Typography, Drawer, List, ListItem, ListItemButton, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Logo from '../assets/Frame 427320249.png'
import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', active: true },
    { label: 'About Us' },
    { label: 'Our Team' },
    { label: 'Contact Us' },
  ]

  return (
    <div>
        <Box sx={{height: {xs: '64px', md: '88px'}, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FBF7FD', borderBottom: '1px solid #E8E0EC', px: {xs: 1, md: 0}, position: 'sticky', top: 0, zIndex: 50}}>
            
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1.5, pl: {xs: 1.5, md: '32px'}}}>
                <img src={Logo} alt='Company Logo' style={{width: '42px', height: 'auto'}}/>
                <Typography sx={{display: {xs: 'none', sm: 'block'}, fontWeight: 700, fontSize: '16px', letterSpacing: '-0.02em', color: '#1E1E1E', fontFamily: 'inter'}}>Escape Global</Typography>
            </Box>
            
            <Box sx={{display: {xs: 'none', md:'flex'}, alignItems: 'center', gap: 0.5}}>
                {navItems.map(item=>(
                  <Button key={item.label} sx={{textTransform: 'none', borderRadius: '10px', color: item.active ? '#FF5C00' : '#1E1E1E', px: 1.8}}>
                      <Typography sx={{fontWeight: 600, fontSize: '15px', fontFamily: 'inter', textDecoration: item.active ? 'underline' : 'none', textUnderlineOffset: '4px'}}>{item.label}</Typography>
                  </Button>
                ))}
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', gap: 1, pr: {xs: 1, md: '32px'}}}>
                <Button variant="outlined" sx={{borderColor: '#FF5C00', textTransform: 'none', height: '44px', borderRadius: '12px', minWidth: '90px', color: '#FF5C00', display: {xs: 'none', md: 'flex'}, fontFamily: 'inter', fontWeight: 600}}>
                    Call
                </Button>
                <Button variant="contained" sx={{background: '#FF5C00', textTransform: 'none', height: '44px', borderRadius: '12px', px: 2.5, color: '#FBF7FD', boxShadow: 'none', '&:hover':{background:'#E65300'}, fontFamily: 'inter', fontWeight: 700, fontSize: {xs: '14px', md:'15px'}}}>
                    Sign Up
                </Button>
                <IconButton onClick={()=> setOpen(true)} sx={{display: {xs: 'flex', md: 'none'}, border: '1px solid #E8E0EC', width: 44, height: 44, borderRadius: '12px', background: '#FFFFFF'}}>
                  <MenuIcon sx={{color: '#1E1E1E'}}/>
                </IconButton>
            </Box>
        </Box>

        <Drawer anchor="right" open={open} onClose={()=> setOpen(false)} PaperProps={{sx:{width: '86%', maxWidth: 360, background: '#FBF7FD'}}}>
          <Box sx={{p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #E8E0EC'}}>
            <Box sx={{display:'flex', alignItems:'center', gap: 1.2}}>
              <img src={Logo} alt='logo' style={{width: 36}}/>
              <Typography sx={{fontWeight: 700, fontFamily:'inter'}}>Escape Global</Typography>
            </Box>
            <IconButton onClick={()=> setOpen(false)} sx={{border:'1px solid #E8E0EC', background:'#fff'}}><CloseIcon/></IconButton>
          </Box>
          <List sx={{p: 1.5}}>
            {navItems.map(item=>(
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={()=> setOpen(false)} sx={{borderRadius: 2, py: 1.6, background: item.active ? 'rgba(255,92,0,0.08)' : 'transparent'}}>
                  <Typography sx={{fontFamily:'inter', fontWeight: 600, color: item.active ? '#FF5C00' : '#1E1E1E'}}>{item.label}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{p: 2, mt: 'auto', display:'flex', flexDirection:'column', gap: 1.2}}>
            <Button variant="outlined" fullWidth sx={{borderColor:'#FF5C00', color:'#FF5C00', borderRadius: 3, height: 48, textTransform:'none', fontWeight:700, fontFamily:'inter'}}>Call Us</Button>
            <Button variant="contained" fullWidth sx={{background:'#FF5C00', borderRadius: 3, height: 48, textTransform:'none', fontWeight:700, fontFamily:'inter', boxShadow:'none'}}>Sign Up</Button>
          </Box>
        </Drawer>
    </div>
  )
}

export default Navbar