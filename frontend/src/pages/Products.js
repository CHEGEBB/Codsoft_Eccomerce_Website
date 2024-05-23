import React from 'react';
import '../pages/Products.scss';
import Footer from '../components/Footer';
import { useState,useEffect } from 'react';
import Nav from '../components/Navbar';
import Modal from '../components/Modal';


const Products = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            images: [
                require("../images/webp/c1.webp"),
                require("../images/webp/shirt2.webp"),
                require("../images/webp/a6.webp"),
                require("../images/webp/a5.webp")
            ],
            title: "T-Shirts",
            desc: "Our T-Shirts are made from the finest cotton in the world. They are soft, comfortable, and durable. They are available in a variety of colors and sizes."
        },
        {
            id: 2,
            images: [
                require("../images/webp/suit1.webp"),
                require("../images/webp/suit2.webp"),
                require("../images/webp/suit3.webp"),
                require("../images/webp/suit4.webp")
            ],
            title: "Suits",
            desc: "We sell high-class suits that are made from the finest materials. They are available in a variety of colors and sizes."
        },
        {
            id: 3,
            images: [
                require("../images/womshoe.jpg"),
                require("../images/jumpman-mvp-shoes-wm0F96.png"),
                require("../images/webp/shoewom.webp"),
                require("../images/webp/form2.webp")
            ],
            title: "Shoes",
            desc: "Our shoes are made from the finest leather in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 4,
            images: [
                require("../images/pants2.jpg"),
                require("../images/pants3.jpg"),
                require("../images/pants4.jpg"),
                require("../images/pants5.jpg")
            ],
            title: "Trousers",
            desc: "Our trousers are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 5,
            images: [
                require("../images/hodie1.avif"),
                require("../images/hoodie7.jpg"),
                require("../images/hoodie3.jpg"),
                require("../images/hoodie6.jpg")
            ],
            title: "Hoodies",
            desc: "See our wide array of hoodies"
        },
        {
            id: 6,
            images: [
                require("../images/dress2.jpg"),
                require("../images/dress3.jpg"),
                require("../images/dress4.jpg"),
                require("../images/dress5.jpg")
            ],
            title: "Dresses",
            desc: "At our store, we have a wide array of dresses ranging from casual to formal. Our dresses are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 7,
            images: [
               require("../images/ses5.jpg"),
                require("../images/ses6.jpg"),
                require("../images/ses7.jpg"),
                require("../images/ses4.avif")
            ],
            title: "Accessories",
            desc: "Our accessories are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 8,
            images: [
                require("../images/bag2.avif"),
                require("../images/bag3.jpg"),
                require("../images/bag4.jpg"),
                require("../images/bag5.jpg")
            ],
            title: "Bags",
            desc: "Our bags are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 9,
            images: [
                require("../images/hat1.jpg"),
                require("../images/hat2.jpg"),
                require("../images/hat3.jpg"),
                require("../images/hat4.jpg")
            ],
            title: "Hats",
            desc: "Our hats are made from the finest materials in the world. They are comfortable, durable, and stylish"
        },
        {
            id: 10,
            images: [
               require("../images/jacket1.jpg"),
                require("../images/jacket2.jpg"),
                require("../images/jacket3.jpg"),
                require("../images/jacket4.jpg")
            ],
            title: "Jackets",
            desc: "Our jackets are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 11,
            images: [
                require("../images/shorts1.jpg"),
                require("../images/shorts9.jpg"),
                require("../images/shorts6.jpg"),
                require("../images/shorts7.jpg")
            ],
            title: "Shorts",
            desc: "Our shorts are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        },
        {
            id: 12,
            images: [
                require("../images/skirt1.jpg"),
                require("../images/skirt2.jpg"),
                require("../images/skirt3.jpg"),
                require("../images/skirt4.jpg")
            ],
            title: "Skirts",
            desc: "Our skirts are made from the finest materials in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
        }
    ]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
        setSelectedImageIndex(0);
    };
    
    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1));
    };
    const handlePrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1));
    };

     
    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prevCards => 
                prevCards.map(product => {
                    const rotatedImages = [...product.images.slice(1), product.images[0]];
                    return { ...product, images: rotatedImages };
                })
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="products-page">
             <div className="header-container">
    <Nav />
    </div>
            {cards.map(product => (
                <div className="product-card" key={product.id}>
                    <div className="product-images"  onClick={() => handleOpenModal(product)}>
                        <img src={product.images[0]} alt={product.title} />
                    </div>
                    <div className="product-info">
                        <h2>{product.title}</h2>
                        <p>{product.desc}</p>
                        <button onClick={() => handleOpenModal(product)}>Buy Now</button>
                    </div>
                </div>
            ))}
            <Modal
                isOpen={isModalOpen}
                handleClose={handleCloseModal}
                product={selectedProduct}
                selectedImageIndex={selectedImageIndex}
                handleNextImage={handleNextImage}
                handlePrevImage={handlePrevImage}
            />
            <Footer />
        </div>
    );
}

export default Products;