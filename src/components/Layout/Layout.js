import {Component} from 'react';
import './style.css'
class Layout extends Component {
    render(){
        return(
            <div className='layout-view' >
                <div className='container'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout