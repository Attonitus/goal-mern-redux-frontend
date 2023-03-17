import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import HeaderPrivate from '../components/HeaderPrivate'
import svgLoad from '../../assets/loading.svg'
import { useEffect } from 'react'

const PrivateLayoutStyled = styled.div`

`

function PrivateLayout() {

    const {isLoading, isSuccess, user} = useSelector((state) => state.auth)


    if(isLoading){
        <div>{svgLoad}</div>
    } else {
        return (
            <PrivateLayoutStyled>
                <HeaderPrivate />
                <section>
                    <Outlet />
                </section>
            </PrivateLayoutStyled>
        )

    }
}

export default PrivateLayout
