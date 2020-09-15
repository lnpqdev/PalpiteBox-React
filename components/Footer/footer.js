import React from 'react'

const Footer = () => {

    return(
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
            Projeto desenvolvido por: Lucivaldo Queiroz / {' '}
            <a className='hover:underline' href="https://www.linkedin.com/in/lucivaldo-queiroz/">Linkedin</a> / {' '} 
            <a className='hover:underline' href="https://github.com/lnpqdev">Github</a>
            <br />DEVPLENO AULAS - TULIO FARIA.
            <div className='mt-2'>
                <img className='inline' src='/logo_semana_fsm.png'/>
                <img className='inline' src='/logo_devpleno.png'/>
            </div>
        </div>
        </div>
    )
}
export default Footer