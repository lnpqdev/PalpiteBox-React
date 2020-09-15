import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const sobre = () => {

    return ( 
        <div>
            <PageTitle title='Sobre' />
            <h1>Sobre</h1>
            <div>
                <Link href='/'>
                    <a>Index</a>
                </Link>
            </div>
        </div>
    
    )
}

export default sobre