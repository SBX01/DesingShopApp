import { Component } from 'react'

class RemoveItemCart extends Component{

    render(){
        
        return(
            <button className='button-remove' 
            onClick={() =>{
                this.props.setTotal(this.props.total)
                this.props.removeItem(this.props.producto)
            }}>-</button>
        )
    }
}

export default RemoveItemCart