import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import avatar from '../images/avatar.svg'

const Navbar = () => {
    // 拿到 Auth0 用户登录相关数据
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
    // 判断是否登录成功
    const isUser = isAuthenticated && user

    return (
        <Wrapper>
            {isUser && <img src={avatar} alt='avatar' />}
            {isUser && user.name && (
                <h4>
                    欢迎回来, <strong>{user.name.toUpperCase()}</strong>
                </h4>
            )}
            {isUser ? (
                <button
                    onClick={() => {
                        logout({ returnTo: window.location.origin })
                    }}
                >
                    登出
                </button>
            ) : (
                <button onClick={loginWithRedirect}>登录 / 注册</button>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    padding: 1.5rem;
    margin-bottom: 4rem;
    background: var(--clr-white);
    text-align: center;
    display: grid;
    grid-template-columns: auto auto 100px;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    h4 {
        margin-bottom: 0;
        font-weight: 400;
    }
    img {
        width: 35px !important;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
    }
    button {
        background: transparent;
        border: transparent;
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        color: var(--clr-grey-5);
        cursor: pointer;
    }
    button:hover {
        color: var(--clr-primary-5);
    }
`

export default Navbar
