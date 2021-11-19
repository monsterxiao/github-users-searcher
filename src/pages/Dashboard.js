import React from 'react'
import { Info, Repos, User, Search, Navbar,Footer } from '../components'
import loadingImage from '../images/loading-img.gif'
import { AppCtx } from '../context/context'

const Dashboard = () => {
    const { isLoading } = React.useContext(AppCtx)

    if (isLoading) {
        return (
            <main>
                <Navbar />
                <Search />
                <img src={loadingImage} className='loading-img' alt='loading' />
            <Footer/>
            </main>
        )
    }

    return (
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />
            <Footer/>
        </main>
    )
}

export default Dashboard
