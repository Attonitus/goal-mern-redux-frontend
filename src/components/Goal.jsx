import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deleteGoal } from '../features/goals/goalSlice'

const GoalStyled = styled.div`
    .goal{
        background-color: #5e5e5e;
        max-inline-size: 15rem;
        min-block-size: 8rem;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: .75rem;
        position: relative;
    }

    .close{
        position: absolute;
        top: .75rem;
        right: .75rem;
        cursor: pointer;
    }
    .text{
        font-size: 1.5rem;
        margin-block: 1rem;
    }
`

function Goal({text, createdAt, id}) {

    const dispatch = useDispatch()
    
    const onDelete = () => {
        dispatch(deleteGoal(id))
    }

    return (
        <GoalStyled>
            <div className="goal">
                <div className="up">
                    <span>{new Date(createdAt).toLocaleString('es-ES')}</span>
                    <span onClick={onDelete} className="material-symbols-outlined close">close</span>
                </div>
                <span className='text'>{text}</span>
            </div>
        </GoalStyled>
    )
}

export default Goal
