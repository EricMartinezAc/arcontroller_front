import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function DescriptionAlerts(props) {

    // error
    // warning  {props.AlertSeverity}
    // info
    // success

    if (props.AlertSeverity === 'error') {
        return (
            <Box sx={{ width: '70%' }} spacing={2}>
                <Alert severity='error'>
                    <AlertTitle>{props.AlertTilte}</AlertTitle>
                    {props.AlertMsjLow}.
                    <strong>{props.AlertMsjHight}</strong>
                </Alert>
            </Box>
        );
    }

    if (props.AlertSeverity === 'warning') {
        return (
            <Box sx={{ width: '70%' }} spacing={2}>
                <Alert severity='warning'>
                    <AlertTitle>{props.AlertTilte}</AlertTitle>
                    {props.AlertMsjLow}.
                    <strong> {props.AlertMsjHight}</strong>
                </Alert>
            </Box>
        );
    }
    if (props.AlertSeverity === 'info') {
        return (
            <Box sx={{ width: '70%' }} spacing={2}>
                <Alert severity='info'>
                    <AlertTitle>{props.AlertTilte}</AlertTitle>
                    {props.AlertMsjLow}.
                    <strong> {props.AlertMsjHight}</strong>
                </Alert>
            </Box>
        );
    }
    if (props.AlertSeverity === 'success') {
        return (
            <Box sx={{ width: '70%' }} spacing={2}>
                <Alert severity='success'>
                    <AlertTitle>{props.AlertTilte}</AlertTitle>
                    {props.AlertMsjLow}.
                    <strong> {props.AlertMsjHight}</strong>
                </Alert>
            </Box>
        );
    }

}