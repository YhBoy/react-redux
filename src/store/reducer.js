
const defaultState = {
    inputValue:'',
    list:[]
}

export default (state = defaultState,action)=>{
    if( action.type === 'change_input_value' ){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        console.log(newState)
        return newState 
    }
    if( action.type === 'add_item' ){
        const newState = JSON.parse(JSON.stringify(state))
        console.log(newState)
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState 
    }
    if( action.type === 'delete_item' ){
        console.log(action.value)
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }
    return state
}