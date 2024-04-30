import React from 'react'
import ProductCard from './ProductCard';


const productsData = [
    {
        img: "/jacket.png",
        title: "JACKET",
        desc: "MEN Yarn Fleece FUll-Zip Jacket",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/skirt.png",
        title: "SKIRT",
        desc: "Black Floral Wrap Midi Skirt",
        rating: 5,
        price: "55.00",
    },
    {
        img: "/partywear.png",
        title: "PARTY WEAR",
        desc: "Women's Part Wear Shoes",
        rating: 3,
        price: "25.00",
    },
    {
        img: "/shirt.png",
        title: "SHIRT",
        desc: "Pure Garment Dyed Cotton Shirt",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/sports.png",
        title: "SPORTS",
        desc: "Trekking & Running Shoes - Black",
        rating: 3,
        price: "48.00",
    },
    {
        img: "/watch-1.png",
        title: "WATCHES",
        desc: "Smart Watches Vital Plus",
        rating: 4,
        price: "48.00",
    },
    {
        img: "/watch-2.png",
        title: "WATCHES",
        desc: "Pocket Watch Leather Pouch",
        rating: 4,
        price: "48.00",
    },
  ];

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {productsData.map((item, index) => (
                    <ProductCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default NewProducts;