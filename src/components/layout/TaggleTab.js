import React, { Component } from 'react'
import TabeItem from '../TabeItem';
export default class TaggleBottom extends Component {
    state = {
        tabeList: [
            {
                name: 'Home',
                id:0,
                route:'/',
                active:true
            },
            {
                name: 'Interset',
                id:1,
                route:'/about',
                active:false
            },
            {
                name: 'My',
                id:2,
                route:'/',
                active:false
            }
        ]
    }
    changeTab (id){
        const changeList = this.state.tabeList.map(item=>{
            if(item.id === id){
                item.active = true
            }else{
                item.active = false
            }
            return item
        })
        this.setState({
            tabeList:changeList
        })
    }
    render() {
        return (
            <div style={tabeStyle}>
                {
                    this.state.tabeList.map(item =>
                        <TabeItem
                            tabeItem={item}
                            key={item.id}
                            changeTab={this.changeTab.bind(this)}
                            >
                        </TabeItem>
                    )
                }
            </div>
        )
    }
}
const tabeStyle = {
    position:'fixed',
    left:0,
    bottom:0,
    width:'100%',
    display:'flex'
}

