import React from 'react';
import logo from '../../assets/logo1.jpg'

export default function SignUp() {
    return (
        <>
            <img src={ logo } alt="Igreija renascer"/>
            <form>
                <input type="email" placeholder="Seu login"/>
                <input type="password" placeholder="Sua senha"/>
                <button type="submit">Acessar </button>
            </form>
        </>
    )
}