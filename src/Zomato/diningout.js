import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './zomato.css';

function diningout() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 12
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <div className='diningout-background'>
       <div id='dilivery-content'>
      <h2 id='delivery-heading'>Collections</h2>
      <p id='diningout-para'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
      <Carousel responsive={responsive}>
  <div className="Items"><img className='carousel-photo' src="https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160970.png?output-format=webp" alt="" srcset="" /></div>
  <div className="Items"><img className='carousel-photo' src="https://b.zmtcdn.com/data/collections/16e3a8b363d4592a72b2c4f486c63fb8_1678096853.jpg?output-format=webp" alt="" srcset="" /></div>
  <div className="Items"><img className='carousel-photo' src="https://b.zmtcdn.com/data/collections/ef1c6eee407e8faa590c5fab1e5fd5c3_1679127320.jpg?output-format=webp" alt="" /></div>
  <div className="Items"><img className='carousel-photo' src="https://b.zmtcdn.com/data/collections/902ab00320f06e611d5118c61f1c6918_1675332681.jpg?output-format=webp" alt="" /></div>
  <div className="Items"><img className='carousel-photo' src="https://b.zmtcdn.com/data/collections/d04069dbde1a5e6283328d6aeb296540_1679126611.jpg?output-format=webp" alt="" /></div>
  <div className="Items"><img className='carousel-photo' src="https://b.zmtcdn.com/data/collections/8dd5adbf91d78c8d11796c6b230539ef_1674568824.jpg?output-format=webp" alt="" /></div>
  <div className="Items"><img className='carousel-photo' src="https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg?output-format=webp" alt="" /></div>
  <div className="Items"><img className='carousel-photo' src="https://b.zmtcdn.com/data/collections/633c8675a805dce153ee5f16ea9d9fd5_1679129823.jpg?output-format=webp" alt="" /></div>
</Carousel>

    </div>
    </div>
  )
}

export default diningout
