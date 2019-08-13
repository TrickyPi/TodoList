import React, { Component } from 'react'
import InputCust from '../InputCust'
import Button from '../Button'
export default class LoginSign extends Component {
    state = {
        inputItems:[
            {
                id:0,
                tip:'手机号码',
                value:''
            },
            {
                id:1,
                tip:'验证码',
                value:''

            }
        ]
    }
    addValue(id,event){
        console.log(this)
        this.setState({
            inputItems:this.state.inputItems.map(item=>{
                if(item.id === id){
                    console.log(Object.assign(item,{value:event.target.value}))
                    return Object.assign(item,{value:event.target.value})
                }else{
                    return item
                }
            })
        })
    }
    putInfo(){
        let judgeloading = false
        this.state.inputItems.map(item =>{
            if(item.value.trim() === ''){
                judgeloading = true
            }
        })
        if(!judgeloading){
            this.props.changePage(true)
        }
    }
    render() {
        return (
            <div style={loginStyle}>
                {
                    this.state.inputItems.map(item=>{
                        return <InputCust inputItem={item} key={item.id} addValue={this.addValue.bind(this)}></InputCust>
                    })
                }
                <Button popclick={this.putInfo.bind(this)} text={'sign in'}></Button>
            </div>
        )
    }
}

const loginStyle ={
    width:'auto',
    height:'auto',
    position:'absolute',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)'
}