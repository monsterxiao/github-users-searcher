import React, { useState, useEffect, useContext } from 'react'
import tempUser from './tempData.js/tempUser'
import tempRepos from './tempData.js/tempRepos'
import tempFollowers from './tempData.js/tempFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'
const rateLimitUrl = 'https://api.github.com/rate_limit'

// api 说明:
// 替换 userName 为要搜索的用户名
// Get User: 'https://api.github.com/users/userName'
// Repos: 'https://api.github.com/users/userName/repos?per_page=100'
// Followers: 'https://api.github.com/users/userName/followers'

// context API
const AppCtx = React.createContext()

// context provider wrapper
const CtxProvider = ({ children }) => {
    // user info
    const [user, setUser] = useState(tempUser)
    const [repos, setRepos] = useState(tempRepos)
    const [followers, setFollowers] = useState(tempFollowers)

    // requests and loading
    const [req, setReq] = useState(0)
    const [isLoading, SetIsLoading] = useState(false)

    // error
    const [error, setError] = useState({ show: false, msg: '' })

    // handle search
    const searchUser = async (user) => {
        // clear error msg
        toggleError()
        // setIsLoading
        const response = await axios(`${rootUrl}/users/${user}`).catch(
            (error) => console.log(error)
        )
        if (response) {
            console.log(response.data)
            setUser(response.data)
        } else {
            toggleError(true,"用户不存在，请重新输入")
        }
    }

    // check request limit by api
    const checkLimit = () => {
        axios(rateLimitUrl)
            .then(({ data }) => {
                let {
                    rate: { limit },
                } = data
                setReq(limit)
                if (limit === 0) {
                    // throw an error msg
                    toggleError(
                        true,
                        '不好意思，您已达到每小时搜索 60 次上限！'
                    )
                }
            })
            .catch((error) => console.log(error))
    }

    // handle error
    function toggleError(show = false, msg = '') {
        setError({ show, msg })
    }

    useEffect(() => {
        checkLimit()
    }, [])

    return (
        <AppCtx.Provider
            value={{
                user,
                repos,
                followers,
                req,
                error,
                searchUser,
                isLoading,
            }}
        >
            {children}
        </AppCtx.Provider>
    )
}

export { AppCtx, CtxProvider }
