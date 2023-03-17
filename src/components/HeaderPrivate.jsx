import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { logoutThunk, reset } from '../features/auth/authSlice'

const HeaderPrivateStyled = styled.div`
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
    .logout{
        cursor: pointer;
    }
`

function HeaderPrivate() {

    const {user} = useSelector((state) => state.auth)
    const dispatch =  useDispatch()
    const navigate = useNavigate()

    const onLogout = () => {
        dispatch(logoutThunk())
        dispatch(reset())
        navigate("/login")
    }

    return (
        <HeaderPrivateStyled>
            <header>
                <nav>
                    <NavLink to="/feed">GOALTORUN</NavLink>
                    <div className="actions">
                        <span>{user ?  user.name : null}</span>
                        <span onClick={onLogout} className="material-symbols-outlined logout">logout</span>
                    </div>
                </nav>
            </header>
        </HeaderPrivateStyled>
    )
    

}

export default HeaderPrivate
