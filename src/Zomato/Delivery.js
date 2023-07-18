import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './zomato.css';


function Delivery() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 12
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
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
    <div id='background'>
    <div id='dilivery-content'>
      <h2 id='delivery-heading'>Inspiration for your first order</h2>
      <Carousel responsive={responsive}>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png" alt="" srcset="" /><p className='Item-name'>Biryani</p></div>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="" srcset="" /><p className='Item-name'>Pizza</p></div>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png" alt="" /><p className='Item-name'>Burger</p></div>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" alt="" /><p className='Item-name'>Rolls</p></div>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png" alt="" /><p className='Item-name'>Cake</p></div>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png" alt="" /><p className='Item-name'>Chicken</p></div>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png" alt="" /><p className='Item-name'>Thali</p></div>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png" alt="" /><p className='Item-name'>Momos</p></div>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png" alt="" /><p className='Item-name'>Dosa</p></div>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png" alt="" /><p className='Item-name'>Sandwitch</p></div>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png" alt="" /><p className='Item-name'>Chawmien</p></div>
  <div className="Items"><img className='carousel-img' src="https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png" alt="" /><p className='Item-name'>Fried rice</p></div>
</Carousel>

    </div>
    </div>
  )
}

export default Delivery
