import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import loginImg from '../images/login-img.svg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Wrapper>
            <div className='container'>
                <img src={loginImg} alt='login' />
                <h1>GitHub 用户搜索器</h1>
                <button className='btn'>登陆 / 注册</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    .container {
        width: 90vw;
        max-width: 600px;
        text-align: center;
    }
    img {
        margin-bottom: 2rem;
    }
    h1 {
        margin-bottom: 1.5rem;
    }
`
export default Login
