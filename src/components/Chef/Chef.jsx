import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Chef = () => {
  const [chef, setChef] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/chef')
    .then(res => res.json())
    .then(data => setChef(data))
  },[])

    return (
       <div className='my-5 py-5'>
        <h2 className='display-6'>Our Top Chefs</h2>
        <hr className='mb-5'/>
         <Row xs={1} md={3} className="g-4">
          {
            chef.map((c, index) => <Col key={index}>
              <Card className='h-100'>
                <Card.Img variant="top" src={c?.picture} alt={c?.name} style={{height: '400px'}}/>
                <Card.Body>
                  <Card.Title>{c?.name}</Card.Title>
                  <p className='text-secondary'>{c?.experience} years of experience</p>
                  <hr />
                  <h6>Total Recipes : <span className='text-danger'>{c?.number_of_recipes}</span></h6>
                  <h6>Total Likes: <span className='text-success'>{c?.likes}</span></h6>
                  <Link to={`/chef/${c.id}`}>
                    <Button variant="danger">View Recipes</Button>
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