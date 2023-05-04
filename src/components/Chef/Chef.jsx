import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Chef = () => {
  const [chef, setChef] = useState([]);

  useEffect( () => {
    fetch('https://the-tokyo-food-server.vercel.app/chef')
    .then(res => res.json())
    .then(data => setChef(data))
  },[])

    return (
       <div className='my-5 py-5'>
        <h2 className='display-6'>Our Top Chefs</h2>
        <hr className='mb-5'/>
         <Row xs={1} md={2} className="g-5">
          {
            chef.map((c, index) => <Col key={index}>
              <Card>
                <Card.Img variant="top" src={c?.picture} alt={c?.name} style={{height: '400px'}}/>
                <Card.Body>
                  <Card.Title>{c?.name}</Card.Title>
                  <Card.Text>{c?.experience} years of experience</Card.Text>
                  <hr />
                  <p className='text-danger lead'>Total Number of Recipes: {c?.recipes}</p>
                  <p className='text-success lead'>Total Number of Likes: {c?.likes}</p>
                  <Link>
                    <Button variant="outline-danger">View Recipes</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>)
          }

        </Row>
       </div>
    );
};

export default Chef;