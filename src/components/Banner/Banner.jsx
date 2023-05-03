import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <div className='mt-5'>
            <Carousel>
                <h2>Top Recipes of the day</h2>
                <p>Sliding recipes are much more tasty as food than sliding images. :D</p>
            <Carousel.Item>
                <img
                style={{width: '100%', height: '500px'}}
                className="d-block"
                src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956"
                alt="Norimaki Sushi"
                />
                <Carousel.Caption>
                <h3>Norimaki Sushi</h3>
                <p>Sushi rice and seafood, etc. rolled in dried seaweed sheets. There are countless varieties of sushi rolls differing in ingredients and thickness. Sushi rolls prepared inside out are very popular outside of Japan, but rarely found in Japan</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
                <img
                style={{width: '100%', height: '500px'}}
                className="d-block"
                src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956"
                alt="Norimaki Sushi"
                />
                <Carousel.Caption>
                <h3>Norimaki Sushi</h3>
                <p>Sushi rice and seafood, etc. rolled in dried seaweed sheets. There are countless varieties of sushi rolls differing in ingredients and thickness. Sushi rolls prepared inside out are very popular outside of Japan, but rarely found in Japan</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{width: '100%', height: '500px'}}
                className="d-block"
                src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956"
                alt="Norimaki Sushi"
                />
                <Carousel.Caption>
                <h3>Norimaki Sushi</h3>
                <p>Sushi rice and seafood, etc. rolled in dried seaweed sheets. There are countless varieties of sushi rolls differing in ingredients and thickness. Sushi rolls prepared inside out are very popular outside of Japan, but rarely found in Japan</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    </div>
    );
};

export default Banner;