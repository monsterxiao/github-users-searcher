import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

// 定制一个 PrivateRoute
const PrivateRoute = ({ children, ...restProps }) => {
    // 拿到 Auth0 用户登录认证的相关数据
    const { isAuthenticated, user } = useAuth0()
    // 判断是否登录成功
    const isLogin = isAuthenticated && user

    // 使用 Route 组件的 render 方法
    // 如果 isLogin 是 true，渲染 children，即'/'页面
    // 如果 isLogin 是 false，渲染 Redirect 组件重定向链接到 '/login' 页面
    return (
        <Route
            {...restProps}
            render={() => {
                return isLogin ? children : <Redirect to='/login'></Redirect>
            }}
        />
    )
}
export default PrivateRoute
