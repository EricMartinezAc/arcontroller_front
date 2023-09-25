export default function ValideCookies (route, cookies) {
  let resp = { value: false, msj: '', routeTarjet: 'http://localhost:3000/' }
  // let valide_email = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

  try {
    //consulta comparación cookies
    //-- si estoy en APP sin token retorne llevame a inicio
    if (route === 'Dashboard' && cookies.get('token') === undefined) {
      console.log(cookies.getAll())
      resp.msj = 'DEBE LOGUEARSE PARA USAR LA APP'
    }
    if (
      route === 'Dashboard' &&
      cookies.get('token') !== undefined &&
      cookies.get('id_prod') !== undefined &&
      cookies.get('user') !== undefined
    ) {
      resp.value = true
      resp.msj = 'Verificación de credenciales es correcta'
    }

    //--- si estoy en logeo y encuentra un token retorne true y lleveme a App
    if (route === 'Singin' && cookies.get('token') !== undefined) {
      resp.value = true
      resp.msj = 'Ya se encuentra una sesión activa'
      resp.routeTarjet =
        'http://localhost:3000/acrcontroller/web/main/Dashboard'
    }
  } catch (error) {
    resp.routeTarjet = 'Inicio'
    resp.msj = `Ha ocurrido un error en validación de datos: ${error}`
  }

  return resp
}
