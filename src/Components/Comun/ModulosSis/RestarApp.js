export default function RestarApp (cookies, keyDatosCookies) {
  keyDatosCookies.map(dato => cookies.get(dato))
  keyDatosCookies.map(dato =>
    cookies.remove(dato, {
      path: '/',
      secure: true,
      sameSite: 'strict',
      maxAge: 36000
    })
  )

  console.log('app cerrada')
}
