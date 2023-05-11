import { Component } from 'react'
import './styleButtonCart.css'
class ButtonCart extends Component {
    render() {
        return(
            <button className='button-add'  {...this.props}></button>
        )
    }

}

export default ButtonCart