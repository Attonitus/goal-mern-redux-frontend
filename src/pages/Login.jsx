import styled from 'styled-components'
import { useForm } from '../hooks/useForm'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {registerThunk, reset} from '../features/auth/authSlice'
import { useEffect, useState } from 'react'

const LoginStyled = styled.div`
    display: flex;
    justify-content: center;
    h3{
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 2rem;
    }
    span{
        font-size: 2rem;
        font-weight: 600;
    }
    h5{
        font-size: 1.2rem;
        color: #acacac;
    }
    form{
        display: flex;
        flex-direction: column;
        max-inline-size: 30rem;
        gap: 1rem;
    }
    .title{
        display: flex;
        flex-direction: column;
        align-items: center;
        h3{
            margin: 0;
            margin-block: 1rem;
        }
        h5{
            margin: 0;
            margin-block: 1rem;
        }
    }
`

function Login() {

    const {form, onInputChange} = useForm({
        email: '',
        password: '',
    })

    const {email, password} = form

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async(e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        if(!email || !password){
            setLoading(false)
            return setError('Todos los campos son obligatorios')
        }

        const data = new FormData()
        data.append("email", email)
        data.append("password", password)

        dispatch(registerThunk(data))

        navigate("/feed")
        
        return setError('Hubo un error')
    } 

    useEffect(()=> {
        if(isError){
            setError(message)
        }
        if(isSuccess || user){
            navigate('/feed')
        }
        dispatch(reset())

    },[user, isError, isSuccess, message, navigate, dispatch])

    return (
        <LoginStyled>
            <form onSubmit={onSubmit}>
                <div className="title">
                    <h3><span className="material-symbols-outlined">login</span>Login</h3>
                    <h5>Complete that goals!</h5>
                </div>

                <input className='inputAuth' type="email" name="email" id="email" placeholder='Enter your email' value={email} onChange={onInputChange} />
                <input className='inputAuth' type="password" name="password" id="password" placeholder='Enter your password min. 6 length' value={password} onChange={onInputChange} />    
                {
                    !error ? null :
                    ( <div className='errorDiv'>{error}</div> ) 
                }
                {
                    !loading ? null :
                    ( <div className='loadingDiv'>Cargando...</div> ) 
                }       
                <button className='buttonAuth' type="submit">Submit</button>

            </form>
        </LoginStyled>
    )
}

export default Login
