import { DELETE_CURRENT,DELETE_ITEM,ADD_ITEM,CHANGE_INPUT_VALUE  } from './actions'
const defaultState = {
    inputValue:'',
    list:[]
}

export default (state = defaultState,action)=>{
    if( action.type === CHANGE_INPUT_VALUE ){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        console.log(newState)
        return newState 
    }
    if( action.type === ADD_ITEM ){
        const newState = JSON.parse(JSON.stringify(state))
        console.log(newState)
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState 
    }
    if( action.type === DELETE_ITEM ){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }
    if( action.type === DELETE_CURRENT ){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }
    return state
}