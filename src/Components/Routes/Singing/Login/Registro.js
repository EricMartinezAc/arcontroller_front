import React, { Component } from 'react'

//librerias
import Cookies from 'universal-cookie'
import { Box, FormControlLabel, Hidden, Link, Switch } from '@mui/material'
import axios from 'axios'
import * as XLSX from 'xlsx'

//recursos
import Logo from '../../../../Assets/Imgs/logos/logo_632x512.png'
import './Login.css'
import ReqResDatos_auth_API from '../../../Comun/ModulosSis/class_authAPI'
import Loading from '../../../Comun/Loading'
import AlertDialogs from '../../../Comun/DescriptionAlerts'

//métodos
import {
  ValideInputPassword,
  ValideInputEmail,
  ValideInputUsuario
} from '../../../Comun/ModulosSis/ValideInputREGEXP'
import { AsigneCookies } from '../../../Comun/ModulosSis/AsigneCookies'

const cookies = new Cookies()
const reqResDatos_auth_API = new ReqResDatos_auth_API()

export default class Registro extends Component {
  constructor (props) {
    super(props)
    this.state = {
      //formulario
      id_prod: '',
      clav_prodct: '',
      user: '',
      pswLogin: '',
      PO_: true
    }
  }

  CambiarEstadoDescriptionAlerts = this.props.CambiarEstadoDescriptionAlerts
  CambiarEstadoLoading = this.props.CambiarEstadoLoading

  ValidacionFormAuth = () => {
    return ValideInputUsuario(this.state.user) &&
      ValideInputPassword(this.state.pswLogin) &&
      ValideInputPassword(this.state.id_prod)
      ? true
      : false
  }

  EnviarDatosReg = async e => {
    e.preventDefault()

    this.CambiarEstadoLoading()
    if (this.ValidacionFormAuth()) {
      try {
        //Datos a consultar
        await reqResDatos_auth_API.SetDatsToAPI(
          this.state.user,
          this.state.pswLogin,
          this.state.id_prod,
          this.state.PO_ ? this.state.clav_prodct : 'PM'
        )
        await console.log('Preparación de usuario completa')

        //envio de datos
        await setTimeout(async () => {
          let RespAPI = await reqResDatos_auth_API.SendDatsAPI('regtr', axios)
          if (RespAPI === null) {
            //RestartApp()
            alert('no se obtubo respuesta del servidor')
          }
          await this.CambiarEstadoLoading()
          await this.CambiarEstadoDescriptionAlerts(
            true,
            RespAPI.valor === 300 ? 'success' : 'warning',
            'REGISTRO DE USUARIO',
            'Recuerda limpiar las cookies de tu browser y tener control sobre ellas. ',
            RespAPI.msj
          )
          setTimeout(() => {
            window.location = `http://localhost:3000/Singin`
          }, 4000)
        }, 2000)
      } catch (error) {
        alert('error enviando datos al servidor, revise su conexion: ' + error)
        console.log(
          'error enviando datos al servidor, revise su conexion: ',
          error
        )
      }
    } else {
      alert('Datos ingresados no cumplen requerimientos')
      setTimeout(() => {
        window.location = 'http://localhost:3000/Singin'
      }, 5000)
    }
  }

  // TransformDataExcelToJSON = (refFile) => {
  //     const promise = new Promise((resolve, reject) => {
  //         const fileReader = new FileReader();
  //         fileReader.readAsArrayBuffer(refFile);

  //         fileReader.onload = (e) => {
  //             const buffer = e.target.result;
  //             const wbooks = XLSX.read(buffer, { type: "buffer" });
  //             const wsname = wbooks.SheetNames[0];
  //             const wsName = wbooks.Sheets[wsname];
  //             const datosEnJSON = XLSX.utils.sheet_to_json(wsName);
  //             resolve(datosEnJSON);
  //         };

  //         fileReader.onerror = (error) => {
  //             reject(error);
  //         };
  //     });

  //     promise.then((result) => {
  //         this.setState({
  //             fileDatas: result,
  //         });
  //     });

  // }

  Onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })

    // if (e.target.name === 'fileInput') {
    //     this.TransformDataExcelToJSON(e.target.files[0])
    // }
  }

  handleChangeSwitch = () => this.setState({ PO_: !this.state.PO_ })

  render () {
    return (
      <Box
        sx={{
          display: 'block',
          padding: '0 auto',
          margin: '0 auto',
          textAlign: 'center',
          color: '#232'
        }}
      >
        <img alt='logo' className='logo' src={Logo} />

        <h3 className='title'>REGISTRO</h3>

        <form className='FormAuth' onSubmit={this.EnviarDatosReg}>
          <input
            type='text'
            name='id_prod'
            id='id_prod'
            className='form-control input_text_index'
            autoComplete='off'
            placeholder='INGRESE ID DEL PRODUCTO'
            value={this.state.id_prod}
            onChange={this.Onchange}
          />
          <Box sx={{ display: this.state.PO_ ? 'inherit' : 'none' }}>
            <input
              type='text'
              name='clav_prodct'
              id='clav_prodct'
              className='form-control input_text_index'
              autoComplete='off'
              placeholder='INGRESE CLAVE DE PRODUCTO'
              value={this.state.clav_prodct}
              onChange={this.Onchange}
            />
          </Box>
          <input
            type='text'
            id='user'
            name='user'
            className='form-control input_text_index'
            placeholder='INGRESE SU USUARIO'
            value={this.state.user}
            onChange={this.Onchange}
          />
          <input
            type='password'
            name='pswLogin'
            id='pswLogin'
            className='form-control input_text_index'
            autoComplete='off'
            placeholder='INGRESA TU CONTRASEÑA'
            value={this.state.pswLogin}
            onChange={this.Onchange}
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.PO_}
                onChange={this.handleChangeSwitch}
                name='checkedB'
                color='primary'
              />
            }
            label='Product Owner'
          />
          <br /> <br />
          <br />
          <input className='btn btn-success' type='submit' value='REGISTRAR' />
          <br />
        </form>
        <br />
      </Box>
    )
  }
}
