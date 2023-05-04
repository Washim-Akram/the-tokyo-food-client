import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Marquee from "react-fast-marquee";

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
      fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReviews(data))
    },[])

    return (
        <section className='my-5 py-5'>
            <h2 className='display-6 text-center mb-4'>What they Say</h2>
            <p className='text-center text-secondary mb-5'>Most Valuable comments and reviews from our honorable customers. All types of thoughts, comments and reviews are Acceptable.</p>
            <Marquee pauseOnHover={true}>
            {
                reviews.map(review => <Card key={review.id} className='p-3 me-5 text-center' style={{width: '350px', height: '350px', cursor: 'grab'}}>
                <Card.Img variant="top" src={review?.image} alt={review?.username} style={{height: '70px', width: '70px'}} className='rounded-circle mx-auto'/>
                <Card.Body>
                  <Card.Text>{review?.comment}</Card.Text>
                  <Card.Title>{review?.username}</Card.Title>
                  <p><small className='text-secondary'>{review?.date}</small></p>
                  <p className='text-warning'>Ratings : {review?.rating}</p>
                </Card.Body>
              </Card>)
            }
            </Marquee>
        </section>
    );
};

export default Review;