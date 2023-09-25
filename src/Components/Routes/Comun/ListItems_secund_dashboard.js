import React, { Component } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import FactoryIcon from '@mui/icons-material/Factory';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BuildIcon from '@mui/icons-material/Build'
import CloudCircleIcon from '@mui/icons-material/CloudCircle'
import { CloudQueue } from "@mui/icons-material"
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import { Divider } from "@mui/material";

class ListItemsSecundDashboard extends Component {

    constructor(props) {
        super(props);
        this.handleWindow = this.props.handleWindow
    }

    render() {
        return (
            <div>
                <ListSubheader inset>Gestión de activos</ListSubheader>
                <ListItem button onClick={() => this.handleWindow(3)}>
                    <ListItemIcon >
                        <FactoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Localidades" />
                </ListItem>
                <ListItem button onClick={() => this.handleWindow(4)}>
                    <ListItemIcon>
                        <ManageAccountsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Recursos humanos" />
                </ListItem>
                <ListItem button onClick={() => this.handleWindow(5)}>
                    <ListItemIcon>
                        <AccountTreeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Planeación" />
                </ListItem>
                <ListItem button onClick={() => this.handleWindow(6)}>
                    <ListItemIcon>
                        <CallSplitIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logística" />
                </ListItem>
                <ListItem button onClick={() => this.handleWindow(7)}>
                    <ListItemIcon>
                        < VerifiedUserIcon />
                    </ListItemIcon>
                    <ListItemText primary="HSEQ" />
                </ListItem>
                <ListItem button onClick={() => this.handleWindow(8)}>
                    <ListItemIcon >
                        <AccountBalanceIcon />
                    </ListItemIcon>
                    <ListItemText primary="Marco legal" />
                </ListItem>
                <br /><br />
                <Divider />

                <ListSubheader inset>Dispositivo</ListSubheader>
                <ListItem button onClick={() => this.handleWindow(9)}>
                    <ListItemIcon >
                        <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary="Configuraciones" />
                </ListItem>
                <ListItem button onClick={() => this.handleWindow(10)}>
                    <ListItemIcon >
                        <CloudQueue />
                    </ListItemIcon>
                    <ListItemText primary="Nube virtual" />
                </ListItem>
                <ListItem button onClick={() => this.handleWindow(11)}>
                    <ListItemIcon >
                        <HelpCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ayuda" />
                </ListItem>

                <br /><br />
            </div>
        );
    }

}

export default ListItemsSecundDashboard;