import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div className='container-fluid bg-dark'>
                    <div className='row'>
                        <div className='col-md-4 p-0 text-center'>
                            <img src="" alt=""></img>
                            <span style={{ color: "white", fontSize: "20px" }}>MediLife</span>
                            <p style={{ color: "white" }}>
                                <small>U/G/F Uttam Nagar West,Om Vihar<br></br>
                                Near Metro Piller No.700, New Delhi-110059<br></br>
                                    +91 7973474237<br></br>
                                    maniskmr555@gmail.com</small></p>
                        </div>

                        <div class="col-md-4 p-3 text-center">
                            <p style={{ color: "white" }}>Useful Links</p>
                            <p><Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "15px" }}>Home /</Link>
                                <Link to="/medicine-list" style={{ color: "white", textDecoration: "none", fontSize: "15px" }}>Medicine List</Link>
                            </p>

                            <p><Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "15px" }}>About /</Link>
                                <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "15px" }}>Contact</Link>
                            </p>
                        </div>

                        <div class="col-md-4 p-3" style={{ color: "white" }}>
                            <p><em>We help </em> <ins>24*7</ins></p>
                            <p><em>Contact: <ins>+91 7973474237</ins></em></p>
                            <p><em>Email: <ins>maniskmr555@gmail.com</ins></em></p>

                        </div>
                        <div class="col-md-12 text-center">
                            <small style={{ color: "white" }}>Copyright ©2023 All rights reserved</small>

                        </div>

                    </div>
                </div>
            </>
        )


    }
}
export default FooterComponent;