import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import Popular from '../Popular/Popular';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Chef></Chef>
            <Popular></Popular>
            <Review></Review>
        </div>
    );
};

export default Home;