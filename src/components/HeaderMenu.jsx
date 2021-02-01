import React from 'react';
import {Link} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <div className="header">
            <h2>Custom dieren winkel</h2>
            <Link to="/home" className="headerBtn">Home</Link>
            <Link to="/producten" className="headerBtn">Producten</Link>
            <Link to="/winkelmandje" className="headerBtn">Winkelmandje</Link>
        </div>
    )
}
export default HeaderMenu