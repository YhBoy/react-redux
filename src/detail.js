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
                                    <li key = { index }>
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
    console.log(state.list)
    return {
        list:state.list
    }
}
export default connect(mapStateToProps,null)(detail)
