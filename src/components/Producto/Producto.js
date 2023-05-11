import { Component } from 'react'
import './style.css'
import ButtonCart from '../Buttons/ButtonCart'
class Producto extends Component {
    render(){
        const {producto , addCart} = this.props
        return(
           <div className='product-card'>
            <img className="imgProduct" alt={producto.name} src={producto.img}></img>
            <h3>{producto.name}</h3>
            <p>{producto.price}</p>
            <ButtonCart onClick={() => addCart(producto)}>
                Agregar al carro
            </ButtonCart>
           </div>
        )
    }
} 

export default Producto