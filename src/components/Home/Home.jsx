import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Chef></Chef>
            <Popular></Popular>
        </div>
    );
};

export default Home;