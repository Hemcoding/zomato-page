import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./zomato.css";

function nightlight() {

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
  
</Carousel>

    </div>
    </div>
  )
}

export default nightlight
