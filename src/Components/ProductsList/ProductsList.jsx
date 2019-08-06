import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductsList.scss';
import ProductTemplate from './ProductTemplate';



class ProductsList extends PureComponent {
  state = { };

  sliderSettings = {
    dots: true,
    dragging: false,
    infinite: false,
    centerPadding: "60px",
    speed: 500,
    className: "slides",
    accessibility: true,
    focusOnSelect: true,
    lazyLoad: "ondemand",
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  render() {
    const { products } = this.props;

    return (
      <div className="productsList">
        {/* Slider */}
        {
          <Slider {...this.sliderSettings}>
            {[...products, ...products].map(product => (
              <ProductTemplate
                key={product.id}
                product={product}
              />
            ))}
          </Slider>
        }
      </div>
    );
  }
}

export default ProductsList;