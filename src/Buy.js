import React, {Component} from 'react';
import './Buy.css';

const products = [
    { id: 1, name: '"BREAK ME PLEASE" T-SHIRT WHITE', price: 3000, image: 'https://via.placeholder.com/150'},
    { id: 2, name: '"BREAK ME PLEASE" T-SHIRT BLACK', price: 3000, image: 'https://via.placeholder.com/150' },

];


function Buy() {
    return (
        <div className="headers">


            <div className="product-list">
                {products.map(product => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name}/>
                        <h3>{product.name}</h3>
                        <p>{product.price}&#8381;</p>
                        <button className='product-btn'>Купить</button>
                    </div>
                ))}
            </div>


            <div className="footer">
                <p className='footer-information'>
                    © HEARTBREAKER 2024
                </p>

            </div>




        </div>





            );
}

export default Buy;