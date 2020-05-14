import React, {Component} from "react";
// import "./univ.css";

class Univ extends Component {
    render() {
        const judul = `${this.props.univ.nama} - Rp.${this.props.univ.harga} rb `
        const style = {
                backgroundImage: `url('${this.props.univ.fotoUrl}'
            )`
        };
        return (
            <div className="homestay">
                <div className="homestay-foto" style={style}></div>
                <div className="homestay-judul">{judul}</div>
            </div>
        );
    }
}

export default Univ;