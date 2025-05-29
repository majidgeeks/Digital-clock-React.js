import Button from 'react-bootstrap/Button';
import { useReducer } from 'react';

const UpDownCounter = () => {
    
  const initialState = 1;
  const reducer = (state, action) => {
    if(action.type === "INCREMENT"){
      return state + 1;
    }
    else if(action.type === "DECREMENT" && state > 0){
      return state - 1;
    }
    else {
      return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

    return(
    <>
    <p>{state}</p>
    <Button variant="primary" onClick={() => dispatch({type : "INCREMENT"})}>increment</Button>
    <Button variant="primary" onClick={() => dispatch({type : "DECREMENT"})}>decrement</Button>
    </>
    )
}

export default UpDownCounter