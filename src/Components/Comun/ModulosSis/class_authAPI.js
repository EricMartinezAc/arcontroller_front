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
      `solicitando credenciales para ${this.user} en ${this.id_prod}: ${proceso} `
    )
    const path_API = `${pages.remoteAPI}/api/arcontroller/users/${proceso}`

    const datos = await this.GetDatosAuth()
    console.log(datos, 'enviando...')
    try {
      return fetch(path_API, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'access-control-allow-origin': '*'
        },
        body: JSON.stringify({
          process_: proceso,
          datos_: datos
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          return data
        })
    } catch (error) {
      return null
    }
  }

  GetAPP = async (auth1, axios) => {
    console.log(`transfiriendo a APP`)

    await axios
      .get(`${pages.remoteAPI}/api/arcontroller/app/dashboard`, {
        headers: {
          autorization: `Bearer ${auth1}`
        }
      })
      .then(resp => {
        console.log(resp.data.valor)
        setTimeout(() => {
          if (resp.data.valor === 100) {
            window.location = `${pages.this}/acrcontroller/web/main/Dashboard`
          } else {
            alert(resp.data.msj)
            window.location = `${pages.this}`
          }
        }, 300)
      })
      .catch(err => {
        alert('Error en generación de token:', err)
        setTimeout(() => {
          window.location = `${pages.this}`
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
