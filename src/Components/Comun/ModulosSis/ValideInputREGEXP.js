const ExprRegulares = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    usuario: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // /^[a-zA-Z]{4,16}$/, // Letras entre 4 a 16,
    extCorreo: /^([^]+)@(\w+).(\w+)$/, // para extraer correo
}


export const ValideInputPassword = (password_) => {
    return ExprRegulares.password.test(password_) ? true : false
}
export const ValideInputEmail = (email_) => {
    return ExprRegulares.correo.test(email_) ? true : false
}
export const ValideInputUsuario = (usuario_) => {
    return ExprRegulares.usuario.test(usuario_) ? true : false
}
export const ValideInputExtraerEmail = (email_) => {
    return ExprRegulares.extCorreo.test(email_)
}