import Carousel from 'react-bootstrap/Carousel';
import "./HomeBanner.css";

function HomeBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://d3vlhkqyz4y38a.cloudfront.net/media/offerImage/phpo2SUmu_1640015367.png" alt="" className='carousel-image' />
        <Carousel.Caption className='carousel-caption'>
          <h3>Big Billion Days</h3>
          <p>Hurry before stocks run out!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://d3vlhkqyz4y38a.cloudfront.net/media/offerImage/phpMDPgK1_1662723890.png" alt="" className='carousel-image' />
        <Carousel.Caption className='carousel-caption'>
          <h3>Super Sale</h3>
          <p>Special offer | Limited time only</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="" className='carousel-image' />
        <Carousel.Caption className='carousel-caption'>
          <h3>Fresh stock arrived</h3>
          <p>offer available on selected stocks only</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeBanner;