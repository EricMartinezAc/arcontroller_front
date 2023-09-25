import { Typography } from '@mui/material'
import { Box, width } from '@mui/system'
import React, { Component } from 'react'

import img_loading from '../../Assets/Imgs/icos/loading3.gif'

export default class Loading extends Component {
    render() {
        return (
            <React.Fragment>
                <Box
                    sx={{
                        width: '100%',
                        height: 'min-content',
                        position: 'relative',
                        top: '100px',
                        textAlign: 'center'
                    }}
                >
                    <img
                        src={img_loading} alt="Cargando" />
                    <br /><br />
                    <Typography
                        variant='h5'
                        sx={{ width: '100%', color: '#232' }}
                    >
                        Esperar es parte del proceso...
                    </Typography>
                </Box>
            </React.Fragment>
        )
    }
}
