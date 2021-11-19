import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import loginImg from '../images/login-img.svg'
// import { Link } from 'react-router-dom'

const Login = () => {
    const { loginWithRedirect } = useAuth0()
    return (
        <Wrapper>
            <div className='container'>
                <img src={loginImg} alt='login' />
                <h2>GitHub 用户搜索器</h2>
                <button className='btn' onClick={loginWithRedirect}>
                    登录 / 注册
                </button>
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
        max-width: 800px;
        text-align: center;
    }
    h2 {
        margin-bottom: 2rem;
    }
`
export default Login
