import { Component } from 'react'
import './style.css'
import Logo from '../Logo/Logo'
import Cart from '../Cart/Cart'

class Navbar extends Component {
    render(){
        const {carro, esCarroVisible, mostrarCarro,removeItem,setTotal} = this.props
        return(
            <nav className='navbar'>
                <Logo/>
                <Cart 
                carro={carro}
                esCarroVisible={esCarroVisible}
                mostrarCarro={mostrarCarro}
                removeItem={removeItem}
                setTotal={setTotal}
                />
            </nav>
        )
    }
}

export default Navbar