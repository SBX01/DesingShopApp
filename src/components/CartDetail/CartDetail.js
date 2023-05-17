import { Component } from 'react'
import RemoveItemCart from '../Buttons/RemoveItemCart'
import './style.css'

class CartDetail extends Component {


    render(){
        const {carro,removeItem,setTotal } = this.props
        const Total = carro.reduce((total, x) =>total + x.subtotal,0)
        return(
            <div className='drop-menu'>
                    <ul className='cart-list'>
                        {carro.map(x => 
                        <li className='cart-item' key={x.name}>
                            <img alt={x.name} src={x.img} width='50' height='32'></img>
                            {x.name} <span>{x.cantidad}</span> <span>${x.subtotal}</span>
                            
                            <RemoveItemCart
                            carro={carro}
                            producto = {x}
                            total={Total}
                            removeItem={removeItem}
                            setTotal={setTotal}
                            ></RemoveItemCart>
                        </li>
                        )}
                        {carro.length !== 0 ?                        
                        <li className='cart-item'>
                        <span>Total:</span>
                        <span>${Total}</span>
                        </li>
                        : null
                        }

                    </ul>
            </div>
        )
    }
}

export default CartDetail