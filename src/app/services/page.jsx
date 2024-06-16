import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div className='min-h-screen'>
            <div className='w-full flex items-start justify-between'>
                <img src="/public/logo.png" alt="logo"/>
            </div>
        </div>
    )
}

export default page