import React, { Component } from 'react'

import '../Elementos.css';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';


export default class Copyright extends Component {
    render() {
        return (
            <Box sx={{ width: '100%', textAlign: 'center', margin: '20px 0px' }}>
                <Typography >
                    created by ISE engineering group. All right reserved 2021
                </Typography>
                {'Copyright © '}
                <Link color="inherit" href="https://isenvengineering.com/">
                    ARController
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Box >
        )
    }
}
