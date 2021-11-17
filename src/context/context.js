import React, { useState, useEffect, useContext } from 'react'
import tempUser from './tempData.js/tempUser'
import tempRepos from './tempData.js/tempRepos'
import tempFollowers from './tempData.js/tempFollowers'
import axios from 'axios'

// GitHub API 说明:
// 以下 url 中的 userName 替换成要搜索的用户名
// Get User: 'https://api.github.com/users/userName'
// Repos: 'https://api.github.com/users/userName/repos?per_page=100'
// Followers: 'https://api.github.com/users/userName/followers?per_page=100'

const rootUrl = 'https://api.github.com'
const rateLimitUrl = 'https://api.github.com/rate_limit'

// create context API
const AppCtx = React.createContext()

// context provider wrapper
const CtxProvider = ({ children }) => {
    // user info
    const [user, setUser] = useState(tempUser)
    const [repos, setRepos] = useState(tempRepos)
    const [followers, setFollowers] = useState(tempFollowers)

    // requests and loading
    const [req, setReq] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    // error
    const [error, setError] = useState({ show: false, msg: '' })

    // handle search
    const searchUser = async (user) => {
        // clear error msg and set loading
        toggleError()
        setIsLoading(true)
        // fetch data from api
        let userUrl = `${rootUrl}/users/${user}`
        const response = await axios(userUrl).catch((error) =>
            console.log(error)
        )
        if (response) {
            // get user data
            setUser(response.data)

            const { login, followers_url } = response.data
            let reposUrl = `${rootUrl}/users/${login}/repos?per_page=100`
            let followersUrl = `${followers_url}?per_page=100`

            // get repos and followers data
            // 使用 Promise.allSecttled 封装多个 axios 请求
            // 目的是等所有数据拿到后，再去更新页面
            await Promise.allSettled([axios(reposUrl), axios(followersUrl)])
                .then((responses) => {
                    const [repos, followers] = responses
                    if (repos.status === 'fulfilled') {
                        setRepos(repos.value.data)
                    }
                    if (followers.status === 'fulfilled') {
                        setFollowers(followers.value.data)
                    }
                })
                .catch((error) => console.log(error))
        } else {
            toggleError(true, '抱歉，您输入的用户名不存在')
        }
        // update request limit and set loading
        checkRemaining()
        setIsLoading(false)
    }

    // check request remaining from api
    const checkRemaining = () => {
        axios(rateLimitUrl)
            .then(({ data }) => {
                let {
                    rate: { remaining },
                } = data
                setReq(remaining)
                if (remaining === 0) {
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

    useEffect(() => checkRemaining(), [])

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
