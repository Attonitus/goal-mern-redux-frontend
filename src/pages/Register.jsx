import styled from 'styled-components'
import { useForm } from '../hooks/useForm'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { registerTrue } from '../features/auth/authServices'
import { useSelector } from 'react-redux'

const RegisterStyled = styled.div`
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

function Register() {

    const {form, onInputChange} = useForm({
        name: '',
        email: '',
        password: '',
        repassword: ''
    })

    const {name, email, password, repassword} = form
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const {user, isLoading, isSuccess} = useSelector((state) => state.auth)


    const onSubmit = async(e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        if(!name || !email || !password || !repassword){
            setLoading(false)
            return setError('Todos los campos son obligatorios')
        }
        if(password !== repassword){
            setLoading(false)
            return setError('Las contraseñas no coinciden')
        }
        
        const data = new FormData()
        data.append("email", email)
        data.append("name", name)
        data.append("password", password)

        const response = await registerTrue(data)
        
        setLoading(false)
        if(response.errors){
            return response.errors.map(error => {
                setError(`${error.msg}`)
            })
        }
        
        if(response){
            navigate("/login")
        }
        return setError('Hubo un error')
    } 

    useEffect(()=> {
        if(isSuccess || user){
            navigate('/feed')
        }
    }, [isSuccess, user])

    return (
        <RegisterStyled>
            <form onSubmit={onSubmit}>
                <div className="title">
                    <h3><span className="material-symbols-outlined">person</span>Register</h3>
                    <h5>Create an account to beat your goals!</h5>
                </div>

                <input className='inputAuth' type="text" name="name" id="name" placeholder='Enter your name' onChange={onInputChange} value={name} />
                <input className='inputAuth' type="email" name="email" id="email" placeholder='Enter your email' onChange={onInputChange} value={email} />
                <input className='inputAuth' type="password" name="password" id="password" placeholder='Enter your password min. 6 length' value={password}  onChange={onInputChange}/>           
                <input className='inputAuth' type="password" name="repassword" id="repassword" placeholder='Confirm your password' onChange={onInputChange} value={repassword} />
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
        </RegisterStyled>
    )
}

export default Register
