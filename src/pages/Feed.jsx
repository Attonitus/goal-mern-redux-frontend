import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import { useForm } from '../hooks/useForm'
import { createGoal, getGoals, reset } from '../features/goals/goalSlice'
import { useEffect } from 'react'
import Goal from '../components/Goal'

const FeedStyled = styled.div`
    max-inline-size: 75rem;
    margin: auto;
    .page{
        padding-inline: 1rem;
        max-inline-size: 75rem;
        margin: auto;
    }
    .titles{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3{
            text-align: center;
            color: #b6b6b6;
        }  
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;
    }
    input{
        padding-inline: 1rem;
        padding-block: .5rem;
        font-size: 1rem;
        border-radius: .5rem;
    }
    .add{
        padding-block: .5rem;
        padding-inline: 1rem;
        border-radius: .5rem;
        font-size: 1rem;
        font-weight: 600;
        background-color: #111111;
        color: white;
        border: 1px solid #111111;
    }
    .add:hover{
        background-color: white;
        color: #111111;
        cursor: pointer;
        transition: .2s ease-in-out;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        padding-block: 1.5rem;
    }
`

function Feed() {

    const {user} = useSelector((state) => state.auth)
    const {goals, isLoading, isError} = useSelector((state) => state.goals)

    const {form, onInputChange} =  useForm({
        text: ''
    })

    const {text} = form
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("text", text)
        dispatch(createGoal(data))
    }

    useEffect(()=> {
        dispatch(getGoals())
        return () => {
            dispatch(reset())
        }
    }, [])

    return (
        <FeedStyled>
            <div className="page">
                <div className="titles">
                    <h1>Welcome {user ? user.name : null}!</h1>
                    <h3>Know your limits, but never stop trying to exceed them</h3>
                </div>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder='Goal' name='text' id='text' value={text} onChange={onInputChange} />
                    <button className='add' type="submit">Add</button>
                </form>
                <div className="flex">
                    {
                        !goals ? <h3>Create your own goals</h3> :
                        goals.map(goal => {
                            return <Goal key={goal._id} id={goal._id} {...goal} />
                        })
                    }
                </div>
            </div>
        </FeedStyled>
    )
    
}

export default Feed
