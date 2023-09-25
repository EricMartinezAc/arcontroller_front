import { AspectRatio, BookmarkAdd, Padding } from '@mui/icons-material'
import { Button, Card, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'

import Fondo_aside from '../../../../../Assets/Imgs/fondos/istockphoto-1060839456-612x612.jpg'


export default class Aside extends Component {
    render() {
        return (
            <React.Fragment>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        opacity: '0.9'
                    }}
                >
                    <Typography
                        sx={{
                            margin: '30px auto'
                        }}
                        variant='h5'
                    >
                        Herramientas de software más usadas
                    </Typography>
                    <Card
                        variant="outlined"
                        sx={{
                            backgroundColor: ' #7a8efb ',
                            borderRadius: '2%'
                        }}>
                        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                            Yosemite National Park
                        </Typography>
                        <Typography level="body2">April 24 to May 02, 2021</Typography>
                        <IconButton
                            aria-label="bookmark Bahamas Islands"
                            variant="plain"
                            color="neutral"
                            size="sm"
                            sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                        >
                            <BookmarkAdd />
                        </IconButton>
                        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                            <img
                                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                                loading="lazy"
                                alt=""
                            />
                        </AspectRatio>
                        <Box sx={{ display: 'flex' }}>
                            <div>
                                <Typography level="body3">Total price:</Typography>
                                <Typography fontSize="lg" fontWeight="lg">
                                    $2,900
                                </Typography>
                            </div>
                            <Button
                                variant="solid"
                                size="sm"
                                color="primary"
                                aria-label="Explore Bahamas Islands"
                                sx={{ ml: 'auto', fontWeight: 600 }}
                            >
                                Explore
                            </Button>
                        </Box>
                    </Card>

                </Box>
            </React.Fragment>
        )
    }
}
