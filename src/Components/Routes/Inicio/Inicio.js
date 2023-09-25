import React, { Component } from 'react'

//recursos
import './Inicio.css'

//librerias

//components

import Loading from '../../Comun/Loading'
import Header from './Partials/Header/Header'
import Main from './Partials/Main/Main'
import Aside from './Partials/Aside/Aside'
import AlertCookies from '../Comun/Politicas/cookies/AlertCookies'
import Footer from './Partials/Footer/Footer'

//funcionaidades
import Cookies from 'universal-cookie'
import ValideCookies from '../../Comun/ModulosSis/ValideCookies'
import RestarApp from '../../Comun/ModulosSis/RestarApp'

import AlertDialogs from '../../Comun/DescriptionAlerts'
import ValideInputREGEXP from '../../Comun/ModulosSis/ValideInputREGEXP'
import { Box } from '@mui/material'
import { WindPower } from '@mui/icons-material'

//componentes

export default class Inicio extends Component {
  constructor (props) {
    super(props)
    this.state = {
      //loading
      estadoAlert: 'none',
      mensajeAlerta: '',
      severityAlert: 'info',
      //alertDialog
      state_loading: false,
      stateAlertDialogs: true,
      AlertSeverity: null,
      AlertTilte: null,
      AlertMsjLow: null,
      AlertMsjHight: null,
      //cookies
      stat_acept_cookies: false,
      stat_inicio_sesion: false
    }
  }

  //VALIDACIÓN DE COOKIES
  cookies = new Cookies()
  resptValideCookies = ValideCookies('Inicio', this.cookies, [
    'aceptLegacy',
    'resp',
    'email_',
    'product',
    'pswUser_',
    'area_'
  ])

  //FUNCIONALIDAD PARA CLIENTES
  CambiarEstadoDescriptionAlerts (
    stateAlertDialogs_,
    AlertSeverity_,
    AlertTilte_,
    AlertMsjLow_,
    AlertMsjHight_
  ) {
    this.setState({
      stateAlertDialogs: stateAlertDialogs_,
      AlertSeverity: AlertSeverity_,
      AlertTilte: AlertTilte_,
      AlertMsjLow: AlertMsjLow_,
      AlertMsjHight: AlertMsjHight_
    })
  }
  CambiarEstadoLoading = () => {
    this.setState({
      state_loading: !this.state.state_loading
    })
  }

  AceptacionCookies = () => {
    this.cookies.set('aceptLegacy', true, {
      path: '/',
      secure: true,
      sameSite: 'strict',
      maxAge: 360000
    })
    this.setState({
      stat_acept_cookies: true
    })
    this.setState({
      stat_inicio_sesion: true
    })
    this.CambiarEstadoDescriptionAlerts(
      true,
      'success',
      'Políticas de manejo de datos',
      'Ahora puedes usar al aplicación.',
      'Da clic en inicio de seión para continuar'
    )
  }
  DenegarCookies = () => {
    this.CambiarEstadoDescriptionAlerts(
      true,
      'warning',
      'Políticas de manejo de datos',
      'Lo sentimos, las cookies son necesarias para el funcionamiento del sistema',
      'Puedes ver y usar otros servicios'
    )
  }

  //CICLO DE VIDA
  componentDidMount = () => {
    RestarApp(this.cookies, ['aceptLegacy', 'token', 'id_prod'])
    if (
      this.resptValideCookies.value &&
      this.resptValideCookies.msj.length > 3
    ) {
      this.CambiarEstadoDescriptionAlerts(
        true,
        'warning',
        'APLICACIÓN VERIFICADA',
        'Recuerda limpiar las cookies de tu browser y tener control sobre ellas',
        this.resptValideCookies.msj
      )
      setTimeout(() => {
        window.location = `https://arcontroller.vercel.app/${this.resptValideCookies.routeTarjet}`
      }, 3000)
    }
    if (
      !this.resptValideCookies.value &&
      this.resptValideCookies.msj.length > 3
    ) {
      this.CambiarEstadoDescriptionAlerts(
        true,
        'warning',
        'APLICACIÓN VERIFICADA',
        'Recuerda limpiar las cookies de tu browser y tener control sobre ellas',
        this.resptValideCookies.msj
      )
      setTimeout(() => {
        window.location = `https://arcontroller.vercel.app/${this.resptValideCookies.routeTarjet}`
      }, 3000)
    }
  }

  componentDidUpdate () {
    if (this.state.stateAlertDialogs)
      setTimeout(
        () => this.CambiarEstadoDescriptionAlerts(false, '', '', '', ''),
        4000
      )
    console.log(this.cookies.getAll())
  }

  render () {
    return (
      <React.Fragment>
        <Box
          sx={{
            display: this.state.state_loading ? 'flex' : 'none',
            backgroundColor: 'rgba(238, 221, 238, 0.742)',
            zIndex: 10,
            position: 'absolute',
            width: '100%',
            height: '125%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Loading />
        </Box>
        <Box
          sx={{
            display: this.state.stateAlertDialogs ? 'flex' : 'none',
            zIndex: 10,
            width: '100%',
            height: '60%',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <AlertDialogs
            AlertSeverity={this.state.AlertSeverity}
            AlertTilte={this.state.AlertTilte}
            AlertMsjLow={this.state.AlertMsjLow}
            AlertMsjHight={this.state.AlertMsjHight}
          />
        </Box>
        <header>
          <Header
            CambiarEstadoLoading={this.CambiarEstadoLoading}
            stat_inicio_sesion={this.state.stat_inicio_sesion}
          />
        </header>
        <section
          className='section_alertCookies'
          style={{ display: this.state.stat_acept_cookies ? 'none' : 'block' }}
        >
          <AlertCookies
            AceptacionCookies={this.AceptacionCookies}
            DenegarCookies={this.DenegarCookies}
          />
        </section>
        <section className='section_inicio'>
          <main>
            <Main />
          </main>
          <aside className='aside_inicio'>
            <Aside />
          </aside>
        </section>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    )
  }
}
