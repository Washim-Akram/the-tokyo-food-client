import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <div className='my-5 py-5'>
            <h2 className='display-6'>Top Recipes of the day</h2>
            <p className='lead'>Sliding recipes are much more tasty as food than sliding images. :D</p>
            <Carousel>
                <Carousel.Item>
                    <img
                    style={{height: '500px'}}
                    className="d-block w-100"
                    src="https://d1nwfvw9iqnfnz.cloudfront.net/filters:autojpg()/filters:quality(80)/fit-in/1024x1024/gowithguide/posts/1549/130289.jpg"
                    alt="Onigiri"
                    />
                    <Carousel.Caption>
                    <h3>Onigiri</h3>
                    <p>This is the most popular snack in Japan. No matter what time is it, or where you are, if you are hungry and you do not have time, you can buy an onigiri. Onigiris are rice balls seasoned in a variety of ways. Some of them are filled with chicken, vegetables, fish, pork, egg, and can be covered with a piece of seaweed. Some of them have just rice mixed with some sauce, vegetables, beans, furikake, and other simple ingredients. As you can see, you can find a huge variety of flavors for all palates. There are shops that only make onigiris, but aside from those, you can also just grab an onigiri and go from any convenience store or supermarket</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    style={{height: '500px'}}
                    className="d-block w-100"
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
                    style={{height: '500px'}}
                    className="d-block w-100"
                    src="https://d1nwfvw9iqnfnz.cloudfront.net/filters:autojpg()/filters:quality(80)/fit-in/1024x1024/planetyze/guidebook/848/5830.jpg"
                    alt="Sashimi"
                    />
                    <Carousel.Caption>
                    <h3>Sashimi</h3>
                    <p>Sashimi is basically raw fish or seafood served with wasabi (a spicy Japanese condiment) and soy sauce. It generally comes with slices of radish on the side. The name sashimi comes from a tradition of presenting the fish itself with the meal to identify which kind of fish you are eating. Sashimi in kanji it is written like this: 刺身. The first kanji means spine and the second kanji means body.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>

    );
};

export default Banner;