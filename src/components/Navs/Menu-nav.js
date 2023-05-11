import { Component } from 'react'
import './style.css'
import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'

class Navbar extends Component {
    render(){
        const {carro, esCarroVisible, mostrarCarro } = this.props
        return(
            <nav className='navbar'>
                <Logo/>
                <Cart 
                carro={carro}
                esCarroVisible={esCarroVisible}
                mostrarCarro={mostrarCarro}
                />
            </nav>
        )
    }
}

export default Navbar