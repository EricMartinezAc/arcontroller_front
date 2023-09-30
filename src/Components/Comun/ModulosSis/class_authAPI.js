import pages from '../../../const/pages'

export default class ReqResDatos_auth_API {
  constructor () {
    this.user = ''
    this.pswLogin = ''
    this.id_prod = ''
    this.clav_prodct = ''
  }

  SetDatsToAPI = async (user_, pswLogin_, id_prod_, clav_prodct_) => {
    this.user = user_
    this.pswLogin = pswLogin_
    this.id_prod = id_prod_
    this.clav_prodct = clav_prodct_
    return await true
  }

  GetDatosAuth = async () => {
    return await {
      user: this.user,
      pswLogin: this.pswLogin,
      id_prod: this.id_prod,
      clav_prodct: this.clav_prodct
    }
  }

  SendDatsAPI = async (proceso, axios) => {
    console.log(
      `solicitando credenciales para ${this.user} en ${this.id_prod}: ${proceso} a ${pages.server}`
    )
    const path_API = `https://${pages.server}/api/arcontroller/users/${proceso}`

    const datos = await this.GetDatosAuth()
    console.log(datos, 'enviando...')

    let return_ = null

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  GetAPP = async (auth1, axios) => {
    console.log(`transfiriendo a APP`)

    await axios
      .get(
        `https://arcontroller-backend-api.onrender.com/api/arcontroller/app/dashboard`,
        {
          headers: {
            autorization: `Bearer ${auth1}`
          }
        }
      )
      .then(resp => {
        console.log(resp.data.valor)
        setTimeout(() => {
          if (resp.data.valor === 100) {
            window.location = `https://arcontroller-front.vercel.app/acrcontroller/web/main/Dashboard`
          } else {
            alert(resp.data.msj)
            window.location = `https://arcontroller-front.vercel.app/`
          }
        }, 300)
      })
      .catch(err => {
        alert('Error en generación de token:', err)
        setTimeout(() => {
          window.location = `https://arcontroller-front.vercel.app/`
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
