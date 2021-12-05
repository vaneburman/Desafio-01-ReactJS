import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div>
            <h1>404 Page not Found</h1>
            <Link to='/'> Redirigir al Home </Link> 
        </div>
    )
}
