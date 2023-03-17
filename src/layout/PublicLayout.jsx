import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'

const PublicLayoutStyled = styled.div`

`

function PublicLayout() {
    return (
        <PublicLayoutStyled>
            <Header />
            <Outlet />
        </PublicLayoutStyled>
    )
}

export default PublicLayout
