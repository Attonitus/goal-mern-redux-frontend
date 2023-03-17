import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled.div`
    nav{
        display: flex;
        align-items: center;
        gap: 1rem;
        border-block-end: 1px solid #444444;
        padding: 1rem;
        justify-content: space-between;
    }
    .actions{
        display: flex;
        gap: 2rem;
        align-items: center;
    }
    a{
        color: white;
        text-decoration: none;
    }
`

function Header() {
    return (
        <HeaderStyled>
            <header>
                <nav>
                    <NavLink to="/">GOALTORUN</NavLink>
                    <div className="actions">
                        <NavLink to="/login"><span className="material-symbols-outlined">login</span></NavLink>
                        <NavLink to="/register"><span className="material-symbols-outlined">person_add</span></NavLink>
                    </div>
                </nav>
            </header>
        </HeaderStyled>
    )
}

export default Header
