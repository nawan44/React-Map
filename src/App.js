import React, {Component} from 'react';
import './App.css';
import Homestay from './components/homestay.js';
import GoogleMapReact from 'google-map-react';
import Marker from './components/marker';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homestays: []
        };
    }

    componentDidMount() {
        fetch(
            "http://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json"
        )
            .then(response => response.json())
            .then((data) => {
                this.setState({homestays: data});
            })
    }
    render() {
        const center = {
            lat: -7.797068,
            lng: 110.371754
        }
        return (
            <div className="app">
                <div className="main">
                    <div className="homestays">
                        {
                            this
                                .state
                                .homestays
                                .map((homestay) => {
                                    return <Homestay key={homestay.id} homestay={homestay}/>
                                })
                        }
                    </div>
                </div>
                <div className="peta">
                    <GoogleMapReact center = {center}
                    zoom={15}
                    >
                        {this.state.homestays.map((homestay) => {
                            return <Marker 
                            key={homestay.id}
                            lat={homestay.lat}
                            lng={homestay.lang}
                            text={homestay.harga} />
                        })}
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}
export default App;