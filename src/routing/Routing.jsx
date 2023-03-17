import styled from 'styled-components'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PublicLayout from '../layout/PublicLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateLayout from '../layout/PrivateLayout'
import Feed from '../pages/Feed'

const RoutingStyled = styled.div`

`

function Routing() {
    return (
        <RoutingStyled>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PublicLayout/>}>
                        <Route index element={<Login />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                    </Route>

                    <Route path='/feed' element={<PrivateLayout />} >
                        <Route index element={<Feed />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </RoutingStyled>
    )
}

export default Routing
