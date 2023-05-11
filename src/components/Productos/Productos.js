import { Component } from "react"
import Producto from '../Producto/Producto'
import './componentStyle.css'

class  Productos extends Component {
 render() { 
    const {productos, addCart} = this.props
    return(
       <div className="productList">
            {productos.map(producto =>
                <Producto
                addCart={addCart}
                key={producto.name}
                producto={producto}
                />)}
       </div>
    )
 }
}

export default Productos