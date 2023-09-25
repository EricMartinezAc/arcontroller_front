import { Container } from '@mui/material';
import React, { Component } from 'react';
import Title from './Title_dashboard';
import { CChart } from '@coreui/react-chartjs';

class Chart_contableMeses_dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    //globales
    datas = []
    fecha = this.props.fecha
    Sistema = this.props.Sistema
    CambiarEstadoAlert = this.props.CambiarEstadoAlert
    datosSolictudAPI = {
        proceso_: 'APP/globalDashboard/chart_dashboard',
        datos_: {
            a: this.Sistema.emailApp,
            b: this.Sistema.keyPsApp,
            c: this.Sistema.sedeApp,
            d: this.Sistema.App
        }
    }

    titleCard = `GASTOS TOTALES VS INGRESOS, EN MES ${this.fecha.mes} / ${this.fecha.año}`

    // Generate Sales Data
    createData = (time, amount) => {
        return { time, amount };
    }

    render() {

        return (
            <React.Fragment>
                <Title children={this.titleCard} />

                <React.Fragment>
                    <Container width="100%">
                        <CChart
                            height={100}
                            type="line"
                            data={{
                                labels: ["January", "February", "March", "April", "May", "June", "July"],
                                datasets: [
                                    {
                                        label: "My First dataset",
                                        backgroundColor: "rgba(220, 220, 220, 0.2)",
                                        borderColor: "rgba(220, 220, 220, 1)",
                                        pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                        pointBorderColor: "#fff",
                                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                    },
                                    {
                                        label: "My Second dataset",
                                        backgroundColor: "rgba(151, 187, 205, 0.2)",
                                        borderColor: "rgba(151, 187, 205, 1)",
                                        pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                        pointBorderColor: "#fff",
                                        data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                                    },
                                ],
                            }}
                        />
                    </Container>
                </React.Fragment>
            </React.Fragment>
        );
    }
}

export default Chart_contableMeses_dashboard;

