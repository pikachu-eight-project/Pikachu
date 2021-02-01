import React from 'react'

export default function App({Component, pageProps}) {
    return (
        <div>
            <Component {...pageProps}/>
        </div>
    )
}
