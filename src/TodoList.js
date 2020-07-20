import React , { Component } from 'react'
import {connect} from 'react-redux'

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
                type: 'change_input_value',
                value:e.target.value
            }    
            dispatch(action)
        },
        handleClick(){
            const action = {
                type: 'add_item',
            }    
            dispatch(action)
        },
        deleteItem(index){
            const action = {
                type: 'delete_item',
                value: index
            } 
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)

