import { Component } from 'react'
import './style.css'

class CartDetail extends Component {
    render(){
        const {carro} = this.props
        return(
            <div className='drop-menu'>
                    <ul className='cart-list'>
                        {carro.map(x => 
                        <li className='cart-item' key={x.name}>
                            <img alt={x.name} src={x.img} width='50' height='32'></img>
                            {x.name} <span>{x.cantidad}</span>
                        </li>
                        )}
                    </ul>
            </div>
        )
    }
}

export default CartDetail