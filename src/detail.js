import React, { Component } from 'react'
import { connect } from 'react-redux'


class detail extends Component{
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                               return (
                                    <li onClick = { ()=>{ this.props.deleteCurrent(index) } } key = { index }>
                                            {
                                                item
                                            }
                                    </li>
                               )
                        })
                    }
                </ul>
            </div>
        )
    }


}
const mapStateToProps = (state)=>{
    return {
        list:state.list
    }
}

const mapDispatchToProps = ( dispatch )=>{
    return {
        deleteCurrent(index){
            const action = {
                type:'delete_current',
                value:index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(detail)
