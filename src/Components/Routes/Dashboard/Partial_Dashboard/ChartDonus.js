import React, { PureComponent } from 'react';

import { CChart } from '@coreui/react-chartjs';
import { green, grey, yellow } from '@mui/material/colors';
import { Label, ResponsiveContainer } from 'recharts';

import Title from './Title_dashboard';


export default class ChartDonus extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            datasets: [
                {
                    backgroundColor: [green[600], yellow[800], grey[600]],
                    data: [40, 10, 30]
                }
            ],
            totalOTs: 0
        }
    }
    //globales
    // datas = []
    // fecha = this.props.fecha
    // Sistema = this.props.Sistema
    // CambiarEstadoAlert = this.props.CambiarEstadoAlert
    // datosSolictudAPI = {
    //     proceso_: 'APP/globalDashboard/Chart_donu_otsCurso_vs_otProgr',
    //     datos_: {
    //         a: this.Sistema.emailApp,
    //         b: this.Sistema.keyPsApp,
    //         c: this.Sistema.sedeApp,
    //         d: this.Sistema.App
    //     }
    // }

    render() {
        return (
            <React.Fragment>

                <Title children={`AVANCE DE OTs DE HOY`} />
                <ResponsiveContainer >
                    <CChart
                        style={{ marginLeft: '15px', width: '82%' }}
                        type="doughnut"
                        data={{
                            datasets: this.state.datasets,
                            labels: ['Finalizadas', 'En curso', 'Pendientes']
                        }}
                    />
                </ResponsiveContainer>
                <Title children={`Total: ${this.state.totalOTs}`} />
            </React.Fragment>
        );
    }
}
