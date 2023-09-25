import React, { Component } from 'react';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';
import InsightsIcon from '@mui/icons-material/Insights';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';


class ListItemsPrincDashboard extends Component {

    constructor(props) {
        super(props);
        this.handleWindow = this.props.handleWindow
    }

    render() {
        return (
            <div>
                {/* Dashboard */}
                <ListItem button onClick={() => this.handleWindow(0)} >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                {/* contabilidad */}
                <ListItem button onClick={() => this.handleWindow(1)} >
                    <ListItemIcon>
                        <InsightsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contabilidad" />
                </ListItem>
                {/* mtto */}
                <ListItem button onClick={() => this.handleWindow(2)}>
                    <ListItemIcon>
                        <EngineeringIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mantenimiento" />
                </ListItem>
            </div>
        );
    }
}

export default ListItemsPrincDashboard;
