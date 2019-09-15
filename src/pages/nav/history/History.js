import React, { Component } from 'react'

import { connect } from 'react-redux'

class History extends Component {

    render() {
        return (
            <div className="history">
                {this.props.historyArr.map(item=>(
                    <div key={item.num} className="item">
                        <div className="item-img" style={{marginBottom:"10px"}}>
                            <img style={{width:"160px"}} src={require("../../../assets/images/" + item.num + ".jpg")}/>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default connect((state) => {
    return {
        historyArr: state.historyArr
    }
})(History)
