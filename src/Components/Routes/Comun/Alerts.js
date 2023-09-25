import { Alert, Stack } from '@mui/material';
import React, { Component } from 'react'

export default class Alerts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            severity: this.props.severity,
            msj: this.props.msj
        }
    }


    render() {
        return (
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity={this.state.severity}>{this.state.msj}</Alert>
            </Stack>
        )
    }
}
