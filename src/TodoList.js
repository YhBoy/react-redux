import React , { Component } from 'react'
import {connect} from 'react-redux'
import { DELETE_CURRENT,DELETE_ITEM,ADD_ITEM,CHANGE_INPUT_VALUE  } from './store/actions'

class TodoList extends Component{
    render(){
        return(
            <div style={{width:'300px',margin:'0 auto'}}>
                <div>
                    <input onChange = { this.props.handleInputChange } value = { this.props.inputValue }></input>
                    <button onClick = { this.props.handleClick }>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return (
                                <li onClick = { ()=>{ this.props.deleteItem(index) } }  key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    // handleInputChange(e){
    //     console.log(1)
    // }
}

const mapStateToProps = (state)=>{
    return {
        inputValue: state.inputValue,
        list:state.list
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleInputChange(e){
            const action = {
                type: CHANGE_INPUT_VALUE,
                value:e.target.value
            }    
            dispatch(action)
        },
        handleClick(){
            const action = {
                type: ADD_ITEM,
            }    
            dispatch(action)
        },
        deleteItem(index){
            const action = {
                type: DELETE_ITEM,
                value: index
            } 
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)

