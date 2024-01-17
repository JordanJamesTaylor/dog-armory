import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const theme = createTheme({
    palette: {
      primary: {
        main: '#000',
      }
    },
});

const Welcome = () => {

    return (
        <ThemeProvider theme={theme}>
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Typography
                variant='h3'
                sx={{
                    width: '60%',
                    marginTop: '5rem',
                    marginBottom: '2.5rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    letterSpacing: '.07em',
                    lineHeight: '1.3em'
                }}
            >
                PREPARE YOUR DOG FOR BATTLE WITH STEEL PAWS!
            </Typography>
            <Typography
                sx={{
                    width: '50%',
                    fontSize: '1.3rem',
                    textAlign: 'center',
                    lineHeight: '1.65em'
                }}
            >
                Auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.    
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '2.5rem 0',
                    width: '25%',
                }}
            >
                <Button 
                    variant='outlined'
                    color={'primary'}
                    sx={{
                        width: '40%',
                        padding: '1rem',
                        borderRadius: '25px',
                        bgColor: 'primary.main'
                    }}
                >
                    SHOP ALL
                </Button>
                <Button 
                    variant='contained'
                    endIcon={<TrendingFlatIcon />}
                    color={'primary'}
                    sx={{
                        width: '40%',
                        padding: '1rem',
                        borderRadius: '25px',
                        bgColor: 'primary.main'
                    }}    
                >
                    OUR STORY
                </Button>
            </Box>
        </section>
        </ThemeProvider>
    );
};

export default Welcome;