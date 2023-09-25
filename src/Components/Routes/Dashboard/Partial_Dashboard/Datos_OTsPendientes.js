import React, { Component } from 'react';

import Link from '@mui/material/Link';
import Title from './Title_dashboard';



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { grey, common, amber, cyan, teal, indigo } from '@mui/material/colors';

class Datos_OTsPendientes extends Component {

    //globales

    datas = []
    fecha = this.props.fecha
    Sistema = this.props.Sistema
    CambiarEstadoAlert = this.props.CambiarEstadoAlert
    datosSolictudAPI = {
        proceso_: 'APP/globalDashboard/Datos_OTsPendientes',
        datos_: {
            a: this.Sistema.emailApp,
            b: this.Sistema.keyPsApp,
            c: this.Sistema.sedeApp,
            d: this.Sistema.App
        }
    }
    createData = (name, cant) => {
        return { name, cant };
    }

    rows = [
        this.createData('Frozen yoghurt', 159),
        this.createData('Ice cream', 237),
        this.createData('Eclair', 262),
        this.createData('Cupcake', 305),
        this.createData('Gingerbread', 356)
    ];

    render() {
        return (
            <React.Fragment>
                <Title children={`OTs atrasadas`} />



                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 'max-content' }} size="small" aria-label="a dense table">
                        <TableHead style={{ background: grey[600] }}>
                            <TableRow>
                                <TableCell style={{ color: 'white' }}>Localidad</TableCell>
                                <TableCell style={{ color: 'white' }} align="right">Cant.</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.cant}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <br />

                <div>
                    <Link color="primary" href="#" >
                        Ver detalles
                    </Link>
                </div>
                <br />
            </React.Fragment>
        );
    }
}

export default Datos_OTsPendientes

