import { Component } from 'react'
import './App.css'
import Productos from './components/Productos/Productos'
import Layout from './components/Layout/Layout'
import Tittle from './components/Tittle/Tittle'
import Navbar from './components/Navs/Menu-nav'

class App extends Component{
  state = {
    productos:[
      { name:'Tomates', price: 1500, img:'https://www.quironsalud.es/idcsalud-client/cm/images?locale=es_ES&idMmedia=2299323'},
      { name:'Arvejas', price: 2500, img:'https://wongfood.vteximg.com.br/arquivos/ids/526925-750-750/154-1.jpg?v=637819234168930000'},
      { name:'Lechugas', price: 500, img:'https://static.libertyprim.com/files/familles/romaine-large.jpg?1569271844'},
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
