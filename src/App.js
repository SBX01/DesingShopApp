import { Component } from 'react'
import './App.css'
import Productos from './components/Productos/Productos'
import Layout from './components/Layout/Layout'
import Tittle from './components/Tittle/Tittle'
import Navbar from './components/Navs/Menu-nav'

class App extends Component{
  state = {
    productos:[
      { name:'Tomates', price: 1500, img:'/productos/tomate.jpg'},
      { name:'Arvejas', price: 2500, img:'/productos/arveja.jpg'},
      { name:'Lechugas', price: 500, img:'/productos/lechuga.jpg'},
    ],
    carro : [],
    esCarroVisisble: false
  }

  mostrarCarro = () =>{
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  addToCart = (producto) =>{
    const { carro } = this.state
    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
      ? ({
        ...x,
        cantidad: x.cantidad + 1
      })
      : x)
      return this.setState({carro :newCarro})
    }
    return this.setState({  
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }
  render(){
    const { esCarroVisible } = this.state
    return(
      
      <div>
        <Navbar 
        carro={this.state.carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={this.mostrarCarro}/>
       <Layout>
        <Tittle></Tittle>
        <Productos 
          addCart={this.addToCart }
          productos={this.state.productos}
          />
       </Layout>
      </div>
    )
  }
}

export default App;
