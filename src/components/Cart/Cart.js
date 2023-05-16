import {Component } from 'react'
import './style.css'
import BubbleAlert from './BubbleAlert' 
import CartDetail from '../CartDetail/CartDetail'

class Cart extends Component{
    render(){
        const {carro,esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc,el)=> acc + el.cantidad, 0)
        return(
            <div>
                <span className='bubble'>
                    {cantidad !== 0
                    ? <BubbleAlert value={cantidad} />
                        : null
                    }
                </span>
                <button className='cart' onClick={mostrarCarro}>
                        Carro
                </button>
                {esCarroVisible ? 
                <CartDetail 
                carro={carro}
                ></CartDetail> 
                : null}
                 
            </div>
        )
    }
}

export default Cart