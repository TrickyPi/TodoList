import React, { Component } from 'react'

export default class InputCust extends Component {
    constructor() {
        super()
        this.time = 300;
        this.hadput = false;
        this.changeSet = null;
    }
    render() {
        return (
            <React.Fragment>
                <div className="tip" style={tipStyle}>{this.props.inputItem.tip}</div>
                <input
                    type="text"
                    placeholder={`请输入正确的${this.props.inputItem.tip}`}
                    style={inputStyle}
                    onChange={this.props.addValue.bind(this,this.props.inputItem.id)}
                    value={this.props.inputItem.value} />
            </React.Fragment>
        )
    }
    //防抖
    // loadash(e) {
    //     if (this.hadput) {
    //         clearTimeout(this.changeSet)
    //         this.changeSet = setTimeout(() => {
    //             this.changeValue(e)
    //         }, this.time);
    //     } else {
    //         this.hadput = true;
    //         this.changeSet = setTimeout(() => {
    //             this.changeValue(e)
    //         }, this.time);
    //     }
    // }
}

const tipStyle ={
    
}

const inputStyle = {
    width: '70%',
    height: '30px',
    border: '1px solid #fff',
}
