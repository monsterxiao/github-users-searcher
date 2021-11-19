import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import loadingImg from '../images/loading-img.gif'
import styled from 'styled-components'

// 点击 Login 调用 Auth0
// 用户完成登录设置后，开始渲染 App 页面
// 这个过程中 isLoading 的值从 true -> false
// isAuthenticated 和 user 的值从 false -> true
// 这个过程需要时间，使得 isAuthenticated && user 一开始为 false
// 会导致 app 一直会处于 '/login' 页面而无法跳转到 '/'
// 为了 app 正常工作，需要用 AuthWrapper 预处理，具体看 Auth0 的文档
const AuthWrapper = ({ children }) => {
    const { isLoading, error } = useAuth0()

    if (isLoading) {
        return (
            <Wrapper>
                <img src={loadingImg} alt='loading' />
                <h3>Loading . . .</h3>
            </Wrapper>
        )
    }
    if (error) {
        return (
            <Wrapper>
                <h1>{error.message}</h1>
            </Wrapper>
        )
    }
    return <>{children}</>
}

const Wrapper = styled.section`
    min-height: 80vh;
    display: grid;
    place-items: center;
    img {
        width: 400px;
    }
`

export default AuthWrapper
