import React, { Component } from "react";
import AddressService from '../service/AddressService';
import { Link } from 'react-router-dom';


class AllMedicineComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

            userName: JSON.parse(localStorage.getItem('detail')),
            productQuantity: 1,
            product: []


        }

        this.addToCart = this.addToCart.bind(this)

    }

    componentDidMount() {
        AddressService.getAllMedicine().then((res) => {
            this.setState({ product: res.data });
            console.log(res.data);

            
            
        });
    }

    




    addToCart = (data) => {
        let cartDetail = {productName:data.productName,productPic:data.productPic,productPrice:data.productPrice,salePrice:data.salePrice,userName:JSON.parse(localStorage.getItem('detail'))};
        
        AddressService.addToCart(cartDetail).then(res =>{
            this.props.history.push("/add-to-cart");
            
        })


    }


    render() {
        const details = JSON.parse(localStorage.getItem('detail'));
        if (details) {
            return (
                <>
                    <div className="container">
                        <div className="row mt-5">
                            {this.state.product.map(data =>
                                <div className="col-md-3 mt-5 mb-2">
                                    <div className="card">
                                        <img className="card-img-top" src={data.productPic} alt="Card image cap" style={{ height: "200px" }} />
                                        <div className="card-body">
                                            
                                                <h5 className="card-title text-center">{data.productName}</h5>
                                                <h6>Product Price  :  <del><span>&#8377;{data.productPrice}</span></del></h6>
                                                <h6>Sale Price  :  <span>&#8377;{data.salePrice}</span></h6>
                                                <p className="card-text text-justify">{data.productDesc}</p>
                                                <button onClick={() => this.addToCart(data)} className="btn btn-success">AddToCart</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div className="container">
                        <div className="row mt-5">
                            {this.state.product.map(data =>
                                <div className="col-md-3 mt-5 mb-2">
                                    <div className="card">
                                        <img className="card-img-top" src={data.productPic} alt="Card image cap" style={{ height: "200px" }} />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{data.productName}</h5>
                                            <hr></hr>
                                            <h6>Product Price  :  <del><span>&#8377;{data.productPrice}</span></del></h6>
                                            <hr></hr>
                                            <h6>Sale Price  :  <span>&#8377;{data.salePrice}</span></h6>
                                            <hr></hr>
                                            <p className="card-text text-justify">{data.productDesc}</p>
                                            <hr></hr>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </>
            )
        }

    }

}
export default AllMedicineComponent;