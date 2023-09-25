export const AsigneCookies = (key, dato, cookies) => {
    cookies.set(key, dato, {
        path: '/',
        secure: true,
        sameSite: 'strict',
        maxAge: 36000
    })
}