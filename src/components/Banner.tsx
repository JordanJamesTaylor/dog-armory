import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      }
    },
});

const Banner = () => {
    return (
        <ThemeProvider theme={theme}>
        <section>
            <div
                style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '20%',
                    fontFamily: 'Heebo',
                    fontSize: '2.5rem',
                    color: 'white',
                    zIndex: '1',
                }}
            >
                <h1>
                    Combat Gear for Man's Best Friend
                </h1>
                <Button 
                    variant='contained'
                    color={'primary'}
                    sx={{
                        marginTop: '2rem',
                        padding: '1rem',
                        width: '15%',
                        borderRadius: '25px',
                        bgColor: 'primary.main'
                    }}
                >
                    Shop All
                </Button>
            </div>
            <img 
                src="/combat-dogs/banner-dog2.jpg" 
                alt="Dog in combat gear" 
                style={{
                    position: 'relative',
                    display: 'flex',
                    height: '100vh',
                    width: '100%',
                    zIndex: '0'   
                }}    
            />
        </section>
        </ThemeProvider>
    )
};

export default Banner;