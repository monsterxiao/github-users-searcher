import React from 'react'
import { AppCtx } from '../context/context'
import styled from 'styled-components'

const Followers = () => {
    const { followers } = React.useContext(AppCtx)
    if (followers.length === 0) {
        return (
            <Wrapper>
                <div className='followers'>Ta 的关注列表为空</div>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <div className='followers'>
                {followers.map((follower, index) => {
                    const { avatar_url, html_url, login } = follower
                    return (
                        <article key={index}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>{html_url}</a>
                            </div>
                        </article>
                    )
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    background: var(--clr-white);
    border-top-right-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    position: relative;

    &::before {
        content: ' 关注ta的人';
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-100%);
        background: var(--clr-white);
        color: var(--clr-grey-5);
        border-top-right-radius: var(--radius);
        border-top-left-radius: var(--radius);
        text-transform: capitalize;
        padding: 0.5rem 1rem 0 1rem;
        letter-spacing: var(--spacing);
        font-size: 1rem;
    }
    .followers {
        overflow: scroll;
        height: 260px;
        display: grid;
        grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
        gap: 1.25rem 1rem;
        margin: 1rem;
        padding: 0.5rem 2rem;
    }
    article {
        transition: var(--transition);
        padding: 0.15rem 0.5rem;
        border-radius: var(--radius);
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        column-gap: 1rem;
        img {
            height: 100%;
            width: 45px;
            border-radius: 50%;
            object-fit: cover;
        }
        h4 {
            margin-bottom: 0;
        }
        a {
            color: var(--clr-grey-5);
            transition: var(--transition);
            cursor: pointer;
            &:hover {
                color: var(--clr-primary-5);
            }
        }
    }
`
export default Followers
