import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
     const chefData = useLoaderData();
     const {bio, experience, likes, name, number_of_recipes, picture, recipes} = chefData;
     console.log(chefData);
    return (
        <div className="container my-5 py-3">
            <div className="d-flex flex-column flex-md-row gap-5">
                <img src={picture} alt={name} />
                <div>
                <h2>{name}</h2>
                <p className="text-secondary" style={{textAlign: 'justify'}}>{bio}</p>
                <p className="fw-semibold">Total Number of Likes : <span className="text-success">{likes}</span></p>
                <p className="fw-semibold">Number of Recipes : <span className="text-danger">{number_of_recipes}</span></p>
                <p className="fw-semibold">Total Year of Experience : <span className="text-primary">{experience}</span></p>
                </div>
            </div>
            <section className="my-5 py-5">
                <h2 className="text-center">{name} <span className="text-danger">Recipes</span></h2>
                <div className='my-4'>
                <Row xs={1} md={3} className="g-4">
                    {
                    recipes.map((recipe, index) => <Col key={index}>
                        <Card className='h-100 p-3'>
                        <Card.Body className=''>
                            <Card.Title>{recipe?.recipe_name}</Card.Title>
                            <h6 className='mb-1 text-decoration-underline'>Ingredients :</h6>
                            {recipe?.ingredients?.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                            <h6 className='mt-2 mb-1 text-decoration-underline'>Cooking Method : </h6>
                            <p className='text-secondary'>{recipe?.cooking_method}</p>
                            <h6>Ratings : <span className='text-warning'>{recipe?.rating}</span></h6>
                        </Card.Body>
                            <Button variant='success' size='lg'>Favorite</Button>
                        </Card>
                    </Col>)
                    }

                    </Row>
                </div>
            </section>
        </div>
    );
};

export default ChefRecipes;