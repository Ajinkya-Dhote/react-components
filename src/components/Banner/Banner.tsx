import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Banner() {
    return (
        <Box
        className="banner"
        sx={{
          flexGrow: 1,
          height: 250,
          backgroundColor: '#97d2fb',
        //   '&:hover': {
        //     backgroundColor: 'primary.main',
        //     opacity: [0.9, 0.8, 0.7],
        //   },
          borderRadius: 5
        }}
      >
          <Typography variant="h3" color="#2a628f" sx={{p: 2}}>Welcome Aj</Typography>
         
    </Box>
    )
};

export default Banner;