import React from "react";
import instag from "../../assets/imgs/instag.png"
import what from "../../assets/imgs/what.png"
import Map from "../map/Map";
import "./Footer.css"

const Footer = () => {
    return <div className="footer_general">
        <div className="footer_information">
            <div className="contact">
                <h2>Контакты</h2>
                <a href="#" id="telefon"><h1>+972 53 470 0448</h1></a>
            </div>
            <div className="social">
                    <a href="#" className="instagram">
                        <img src={instag} alt="Instagram" />
                        <span>Instagram</span>
                    </a>
                    <a href="#" className="whatsup">
                        <img src={what} alt="What's up" />
                        <span>What's App</span>
                    </a>
                </div>
            <div className="adress">
                <div className="adress_1">
                    <h2>Наш адрес</h2>
                    <a href="https://maps.app.goo.gl/K3xAPedMqQEC9Z5e9" target="_blank"><p>Трифоновская ул., 47Б, Москва, 129272</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
}
export default Footer