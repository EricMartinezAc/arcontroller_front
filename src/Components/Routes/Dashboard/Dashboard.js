import {
  Alert,
  AppBar,
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List
} from '@mui/material'
import React, { Component } from 'react'

//recursos
import './Dashboard.css'
import Cookies from 'universal-cookie'
import ValideCookies from '../../Comun/ModulosSis/ValideCookies'
import RestarApp from '../../Comun/ModulosSis/RestarApp'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import NotificationsIcon from '@mui/icons-material/Notifications'
import clsx from 'clsx'
import Class_API from '../../Comun/ModulosSis/class_API'

//componentes
//-Header
import ToolbarDashboard from '../Comun/Toolbar_dashboard'
import ListItemsPrincDashboard from '../Comun/ListItems_princ_dashboard'
import ListItemsSecundDashboard from '../Comun/ListItems_secund_dashboard'

//-Main
import ViewAyuda from './Components/viewAyuda/View'
import ViewConfig from './Components/viewConfig/View'
import ViewDashboard from './Components/viewDashboard/View'
import ViewDashboardContable from './Components/viewDashboardContable/View'
import ViewDashboardMtto from './Components/viewDashboardMtto/View'
import ViewHSEQ from './Components/viewHSEQ/View'
import ViewLocalidades from './Components/viewLocalidades/View'
import ViewLogist from './Components/viewLogistica/View'
import ViewMarcoLegal from './Components/viewMarcoLeg/View'
import ViewNubeVirtual from './Components/viewNubeVirtual/View'
import ViewPlaneacion from './Components/viewPlaneacion/View'
import ViewRRHH from './Components/viewRRHH/View'

import Footer from '../Comun/Footer/Footer.js'

//alertas
import Loading from '../../Comun/Loading'
import AlertDialogs from '../../Comun/DescriptionAlerts'
import axios from 'axios'

export default class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      openDrawer: 'none',
      estadoAlert: 'none',
      mensajeAlerta: '',
      severityAlert: 'success',
      visibleVentana: {
        viewEmptyDatasDashboard: 'none',
        viewDashboard: 'block',
        viewDashboardContable: 'none',
        viewDashboardMtto: 'none',
        viewLocalidades: 'none',
        viewRRHH: 'none',
        viewLogist: 'none',
        viewPlaneacion: 'none',
        viewHSEQ: 'none',
        viewMarcoLegal: 'none',
        viewConfig: 'none',
        viewAyuda: 'none',
        viewNubeVirtual: 'none'
      },
      //funcionalidades
      state_loading: false,
      stateAlertDialogs: false,
      AlertSeverity: 'success',
      AlertTilte: '',
      AlertMsjLow: '',
      AlertMsjHight: '',
      //datos
      user: {
        name: 'juanchito',
        area: 'tumalk'
      },
      datas: {}
    }
  }

  //variables globales
  fecha = {
    dia: String(new Date(Date.now()).getDate()),
    mes: String(new Date(Date.now()).getMonth() + 1),
    anio: String(new Date(Date.now()).getFullYear())
  }
  Class_API_ = new Class_API()
  cookies = new Cookies()

  //funciones generales
  CambiarEstadoDescriptionAlerts = (
    stateAlertDialogs_,
    AlertSeverity_,
    AlertTilte_,
    AlertMsjLow_,
    AlertMsjHight_
  ) => {
    this.setState({
      stateAlertDialogs: stateAlertDialogs_,
      AlertSeverity: AlertSeverity_,
      AlertTilte: AlertTilte_,
      AlertMsjLow: AlertMsjLow_,
      AlertMsjHight: AlertMsjHight_
    })
  }
  CambiarEstadoLoading = () => {
    this.setState({ state_loading: !this.state.state_loading })
  }

  //consumo de API
  CargaInicial = () => {
    let RSPTaAPI = this.Class_API_.ConsumirDatos(
      this.cookies.get('token'),
      this.cookies.get('id_prod'),
      this.cookies.get('user'),
      'StartApp',
      axios
    )
    if (RSPTaAPI.valor === 200) {
      console.log('datos cargados')
      this.setState({
        user: RSPTaAPI.user,
        datas: RSPTaAPI.datas,
        visibleVentana: {
          viewEmptyDatasDashboard: 'none',
          viewDashboard: 'block',
          viewDashboardContable: 'none',
          viewDashboardMtto: 'none',
          viewLocalidades: 'none',
          viewRRHH: 'none',
          viewLogist: 'none',
          viewPlaneacion: 'none',
          viewHSEQ: 'none',
          viewMarcoLegal: 'none',
          viewConfig: 'none',
          viewAyuda: 'none',
          viewNubeVirtual: 'none'
        }
      })
    } else {
      this.setState({
        user: {},
        datas: {},
        visibleVentana: {
          viewEmptyDatasDashboard: 'block',
          viewDashboard: 'none',
          viewDashboardContable: 'none',
          viewDashboardMtto: 'none',
          viewLocalidades: 'none',
          viewRRHH: 'none',
          viewLogist: 'none',
          viewPlaneacion: 'none',
          viewHSEQ: 'none',
          viewMarcoLegal: 'none',
          viewConfig: 'none',
          viewAyuda: 'none',
          viewNubeVirtual: 'none'
        }
      })
    }
  }

  //funciones del sistema
  CerrarApp = msj => {
    this.CambiarEstadoDescriptionAlerts(
      true,
      'error',
      'LOGOUT',
      this.cookies.get('user') || 'sin usuario',
      msj || 'La aplicación a cerrado de forma segura. '
    )
    setTimeout(async () => {
      this.CambiarEstadoLoading()
      setTimeout(() => {
        window.location = '/'
      }, 800)
    }, 4500)
  }

  // handleDrawer = () => {
  //   this.state.openDrawer === 'none'
  //     ? this.setState({ openDrawer: 'block' })
  //     : this.setState({ openDrawer: 'none' })
  // }

  // handleWindow = value => {
  //   console.log(value)
  //   if (value === 0) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'block',
  //         viewDashboardContable: 'none',
  //         viewDashboardMtto: 'none',
  //         viewLocalidades: 'none',
  //         viewRRHH: 'none',
  //         viewLogist: 'none',
  //         viewPlaneacion: 'none',
  //         viewHSEQ: 'none',
  //         viewMarcoLegal: 'none',
  //         viewConfig: 'none',
  //         viewAyuda: 'none',
  //         viewNubeVirtual: 'none'
  //       }
  //     })
  //   }
  //   if (value === 1) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'none',
  //         viewDashboardContable: 'block',
  //         viewDashboardMtto: 'none',
  //         viewLocalidades: 'none',
  //         viewRRHH: 'none',
  //         viewLogist: 'none',
  //         viewPlaneacion: 'none',
  //         viewHSEQ: 'none',
  //         viewMarcoLegal: 'none',
  //         viewConfig: 'none',
  //         viewAyuda: 'none',
  //         viewNubeVirtual: 'none'
  //       }
  //     })
  //   }
  //   if (value === 2) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'none',
  //         viewDashboardContable: 'none',
  //         viewDashboardMtto: 'block',
  //         viewLocalidades: 'none',
  //         viewRRHH: 'none',
  //         viewLogist: 'none',
  //         viewPlaneacion: 'none',
  //         viewHSEQ: 'none',
  //         viewMarcoLegal: 'none',
  //         viewConfig: 'none',
  //         viewAyuda: 'none',
  //         viewNubeVirtual: 'none'
  //       }
  //     })
  //   }
  //   if (value === 3) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'none',
  //         viewDashboardContable: 'none',
  //         viewDashboardMtto: 'none',
  //         viewLocalidades: 'block',
  //         viewRRHH: 'none',
  //         viewLogist: 'none',
  //         viewPlaneacion: 'none',
  //         viewHSEQ: 'none',
  //         viewMarcoLegal: 'none',
  //         viewConfig: 'none',
  //         viewAyuda: 'none',
  //         viewNubeVirtual: 'none'
  //       }
  //     })
  //   }
  //   if (value === 4) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'none',
  //         viewDashboardContable: 'none',
  //         viewDashboardMtto: 'none',
  //         viewLocalidades: 'none',
  //         viewRRHH: 'block',
  //         viewLogist: 'none',
  //         viewPlaneacion: 'none',
  //         viewHSEQ: 'none',
  //         viewMarcoLegal: 'none',
  //         viewConfig: 'none',
  //         viewAyuda: 'none',
  //         viewNubeVirtual: 'none'
  //       }
  //     })
  //   }
  //   if (value === 5) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'none',
  //         viewDashboardContable: 'none',
  //         viewDashboardMtto: 'none',
  //         viewLocalidades: 'none',
  //         viewRRHH: 'none',
  //         viewLogist: 'block',
  //         viewPlaneacion: 'none',
  //         viewHSEQ: 'none',
  //         viewMarcoLegal: 'none',
  //         viewConfig: 'none',
  //         viewAyuda: 'none',
  //         viewNubeVirtual: 'none'
  //       }
  //     })
  //   }
  //   if (value === 6) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'none',
  //         viewDashboardContable: 'none',
  //         viewDashboardMtto: 'none',
  //         viewLocalidades: 'none',
  //         viewRRHH: 'none',
  //         viewLogist: 'none',
  //         viewPlaneacion: 'block',
  //         viewHSEQ: 'none',
  //         viewMarcoLegal: 'none',
  //         viewConfig: 'none',
  //         viewAyuda: 'none',
  //         viewNubeVirtual: 'none'
  //       }
  //     })
  //   }
  //   if (value === 7) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'none',
  //         viewDashboardContable: 'none',
  //         viewDashboardMtto: 'none',
  //         viewLocalidades: 'none',
  //         viewRRHH: 'none',
  //         viewLogist: 'none',
  //         viewPlaneacion: 'none',
  //         viewHSEQ: 'block',
  //         viewMarcoLegal: 'none',
  //         viewConfig: 'none',
  //         viewAyuda: 'none',
  //         viewNubeVirtual: 'none'
  //       }
  //     })
  //   }
  //   if (value === 8) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'none',
  //         viewDashboardContable: 'none',
  //         viewDashboardMtto: 'none',
  //         viewLocalidades: 'none',
  //         viewRRHH: 'none',
  //         viewLogist: 'none',
  //         viewPlaneacion: 'none',
  //         viewHSEQ: 'none',
  //         viewMarcoLegal: 'block',
  //         viewConfig: 'none',
  //         viewAyuda: 'none',
  //         viewNubeVirtual: 'none'
  //       }
  //     })
  //   }
  //   if (value === 9) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'none',
  //         viewDashboardContable: 'none',
  //         viewDashboardMtto: 'none',
  //         viewLocalidades: 'none',
  //         viewRRHH: 'none',
  //         viewLogist: 'none',
  //         viewPlaneacion: 'none',
  //         viewHSEQ: 'none',
  //         viewMarcoLegal: 'none',
  //         viewConfig: 'block',
  //         viewAyuda: 'none',
  //         viewNubeVirtual: 'none'
  //       }
  //     })
  //   }
  //   if (value === 10) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'none',
  //         viewDashboardContable: 'none',
  //         viewDashboardMtto: 'none',
  //         viewLocalidades: 'none',
  //         viewRRHH: 'none',
  //         viewLogist: 'none',
  //         viewPlaneacion: 'none',
  //         viewHSEQ: 'none',
  //         viewMarcoLegal: 'none',
  //         viewConfig: 'none',
  //         viewAyuda: 'block',
  //         viewNubeVirtual: 'none'
  //       }
  //     })
  //   }
  //   if (value === 11) {
  //     this.setState({
  //       visibleVentana: {
  //         viewDashboard: 'none',
  //         viewDashboardContable: 'none',
  //         viewDashboardMtto: 'none',
  //         viewLocalidades: 'none',
  //         viewRRHH: 'none',
  //         viewLogist: 'none',
  //         viewPlaneacion: 'none',
  //         viewHSEQ: 'none',
  //         viewMarcoLegal: 'none',
  //         viewConfig: 'none',
  //         viewAyuda: 'none',
  //         viewNubeVirtual: 'block'
  //       }
  //     })
  //   }
  // }

  //ciclo de vida del componente

  componentDidMount = () => {
    let resptValideCookies = ValideCookies('Dashboard', this.cookies)
    let compareTokens = true //se debe compara token de cookies con token de usuario
    if (resptValideCookies.value === false || !compareTokens) {
      this.CerrarApp(resptValideCookies.msj)
    } else {
      this.CambiarEstadoDescriptionAlerts(
        true,
        'success',
        'CREDENTIALES VERIFICADAS',
        this.cookies.get('user'),
        resptValideCookies.msj
      )
      setTimeout(() => {
        this.CambiarEstadoDescriptionAlerts(false, '', '', '', '')
      }, 3000)
      this.CargaInicial()
    }
  }

  componentDidUpdate = async () => {}

  render () {
    return (
      <Box>
        {/* ALERTAS */}
        <Box
          sx={{
            display: this.state.state_loading ? 'block' : 'none',
            backgroundColor: 'rgba(238, 221, 238, 0.742)',
            zIndex: 110,
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Loading />
        </Box>
        <Box
          sx={{
            display: this.state.stateAlertDialogs ? 'flex' : 'none',
            width: '100%',
            height: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#808b96 '
          }}
        >
          <AlertDialogs
            AlertSeverity={this.state.AlertSeverity}
            AlertTilte={this.state.AlertTilte}
            AlertMsjLow={this.state.AlertMsjLow}
            AlertMsjHight={this.state.AlertMsjHight}
          />
        </Box>

        {/* <header>
          <ToolbarDashboard
            fecha={this.fecha}
            user={this.state.user}
            handleDrawer={this.handleDrawer}
            openDrawer={this.state.openDrawer}
            CerrarApp={this.CerrarApp}
          />
        </header>
        {/* Menú lateral barra *

        <Grid container spacing={0}>
          <Grid item xs={2}>
            <aside>
              <Drawer
                style={{ display: this.state.openDrawer }}
                variant='temporary'
                open={true}
              >
                <div>
                  <IconButton onClick={this.handleDrawer}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
                <Divider />
                <List>
                  <ListItemsPrincDashboard
                    handleWindow={this.handleWindow.bind(this)}
                  />
                </List>
                <Divider />
                <List>
                  <ListItemsSecundDashboard
                    handleWindow={this.handleWindow.bind(this)}
                  />
                </List>
              </Drawer>
            </aside>
          </Grid>
          <Grid item xs={12}>
            <main className='mainContainer'>
              <Box style={{ display: this.state.visibleVentana.viewDashboard }}>
                <ViewDashboard />
              </Box>
              <Box
                style={{
                  display: this.state.visibleVentana.viewDashboardContable
                }}
              >
                <ViewDashboardContable />
              </Box>
              <Box
                style={{ display: this.state.visibleVentana.viewDashboardMtto }}
              >
                <ViewDashboardMtto />
              </Box>

              <Box
                style={{ display: this.state.visibleVentana.viewLocalidades }}
              >
                <ViewLocalidades />
              </Box>
              <Box style={{ display: this.state.visibleVentana.viewRRHH }}>
                <ViewRRHH />
              </Box>
              <Box style={{ display: this.state.visibleVentana.viewLogist }}>
                <ViewLogist />
              </Box>
              <Box
                style={{ display: this.state.visibleVentana.viewPlaneacion }}
              >
                <ViewPlaneacion />
              </Box>
              <Box style={{ display: this.state.visibleVentana.viewHSEQ }}>
                <ViewHSEQ />
              </Box>
              <Box
                style={{ display: this.state.visibleVentana.viewMarcoLegal }}
              >
                <ViewMarcoLegal />
              </Box>
              <Box style={{ display: this.state.visibleVentana.viewConfig }}>
                <ViewConfig />
              </Box>
              <Box style={{ display: this.state.visibleVentana.viewAyuda }}>
                <ViewAyuda />
              </Box>
              <Box
                style={{ display: this.state.visibleVentana.viewMarcoLegal }}
              >
                <ViewMarcoLegal />
              </Box>
            </main>
          </Grid>
        </Grid> */}

        <footer>
          <Footer />
        </footer>
      </Box>
    )
  }
}
