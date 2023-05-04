import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Popular = () => {
    const [popular, setPopular] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/popular')
    .then(res => res.json())
    .then(data => setPopular(data))
  },[])
    return (
        <div className='my-5 py-5'>
        <h2 className='display-6'>Popular Recipes</h2>
        <hr className='mb-5'/>
        <Row xs={1} md={3} className="g-5">
         {
           popular.map((pop) => <Col key={pop.id}>
             <Card className='h-100 p-3'>
               <Card.Img variant="top" src={pop?.image} alt={pop?.name} style={{height: '300px'}} className='rounded-2'/>
               <Card.Body>
                 <Card.Text>
                    Category : <span className='text-danger fw-medium fst-italic'>{pop?.category}</span></Card.Text>
                 <Card.Title>{pop?.name}</Card.Title>
                 <p>Ratings : <span className='text-warning fw-bold fst-italic'>{pop?.rating}</span></p>
                 <p className='text-secondary'>{pop?.description}</p>
               </Card.Body>
             </Card>
           </Col>)
         }

       </Row>
      </div>
    );
};

export default Popular;