import React, {Component} from 'react';
import './App.css';
import Univ from './components/univ';

class App extends Component {
    render() {
        const univ = {
            "nama": "AKu",
            "fotoUrl": "https://bukulokomedia.com/foto/homestay-3.jpg ",
            "harga": 300
        };

        return (
            <div className="app">
                <div className="main">
                    <div className="homestays">
                        <Univ univ={univ}/>
                        <Univ univ ={univ}/>
                        <Univ univ ={univ}/>

                    </div>
                </div>
                <div className="peta"></div>
            </div>
        );
    }
}
export default App;