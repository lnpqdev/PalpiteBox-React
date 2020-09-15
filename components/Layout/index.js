import React from 'react'
import Header from '../header/index'
import Footer from '../footer/footer'

const Layout= ({ children }) => {

    return (

    <div>
        <Header />
    <div className='container mx-auto'>
        { children }
    </div>
    <Footer />
    </div>

    )
}

export default Layout