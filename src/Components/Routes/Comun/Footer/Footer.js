import React, { Component } from 'react'

//import Copyright from '../etiquetas/Copyright'
import './Footer.css';
import '../Elementos.css'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-1'>
                <div className='menu-footer'>
                    <div className='menu-footer-soporte'>
                        <h4>Soporte técnico</h4>
                        <a href='www.iseenggroup.com/soporte-tecnico'>Contacta un soporte técnico</a>
                        <a href='www.iseenggroup.com/soporte-tecnico/pregFrec'>Preguntas frecuentes</a>
                        <a href='www.iseenggroup.com/soporte-tecnico/manUsu'>Manual de usuario</a>
                        <a href='www.iseenggroup.com/soporte-tecnico/manFallasEqu'>Manual de fallas de equipos</a>
                    </div>
                    <div className='menu-footer-dev'>
                        <h4>Desarrolla con nosotros</h4>
                        <a href='www.iseenggroup.com/developer'>Necesitas un sistema?</a>
                        <a href='www.iseenggroup.com/developer/ARController/solicitud'>Solicita mejoras</a>
                        <a href='www.iseenggroup.com/developer/ARController/comentarios'>Comentarios del producto</a>
                    </div>
                    <div className='menu-footer-contac'>
                        <h4>Contáctanos</h4>
                        <a href='https://www.facebook.com/groups/993522477707507/'>Facebook</a>
                        <a href='https://twitter.com/iseeg1'>Twitter</a>
                        <a href='t.me/iseegco'>Telegram</a>
                        <a href='https://wa.link/fvnio8'>WhatsApp</a>
                    </div>
                </div>
                <div className='menu-footer-contactanos'>
                    Celular:  <a href='tel:+573002951136'>3002951136</a>
                    | - |Emails: <a href='email:isenv.projects@outlook.com'> isenv.projects@outlook.com</a>
                    | - |<a href='email:arcontroller.support@gmail.com.com'> arcontroller.support@gmail.com.com</a>
                    <br />
                </div>
                {/* <Copyright /> */}
            </div>
        )
    }
}
