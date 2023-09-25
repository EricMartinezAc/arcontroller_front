export default class ReqResDatos_API {
  constructor () {
    this.user = ''
    this.pswLogin = ''
    this.token = ''
  }

  SetDatsToAPI = async (user_, pswLogin_, token) => {
    this.user = user_
    this.pswLogin = pswLogin_
    this.token = token
    return await true
  }

  GetDatosToAPI = async () => {
    return await {
      user: this.user,
      pswLogin: this.pswLogin,
      token: this.token
    }
  }

  ConsumirDatos = async (auth1, id_prod, user, proceso, axios) => {
    await axios
      .get(
        `https://arc-backend-api.vercel.app/api/arcontroller/load/data/startapp`,
        {
          headers: {
            autorization: `Bearer ${auth1} ${id_prod} ${user} ${proceso}`
          }
        }
      )
      .then(resp => {
        console.log(resp)
      })
      .catch(err => {
        alert('Error en generación de token:', err)
        setTimeout(() => {
          window.location = `https://arcontroller.vercel.app/`
        }, 300)
        console.error('Error :', err)
      })
  }

  // SetConexionAPI = () => {
  //     ws.onopen = () => {|
  //         console.log('conexion abierta..')
  //     }
  //     ws.onerror = () => {
  //         console.log('Error de conexion websocket <--> App')
  //         alert('Error de conexion websocket <--> App')
  //         setTimeout(() => {
  //             window.location = '/'
  //         }, 7000);
  //     }
  //     return ws
  // }
}
