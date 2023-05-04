const Blog = () => {
    return (
        <section className="container my-5 py-5">
            <h2 className='text-center fw-bold mb-5'>Welcome to our blogs!</h2>
            <div>
                <article className='bg-light p-5 rounded-2 mb-5'>
                    <h3 className='fw-bold mb-2'>Differences between uncontrolled and controlled components ?</h3>
                    <hr className='mb-3' />
                    <p className='fw-medium lead'>
                    <b>Uncontrolled Component : </b>
                    An uncontrolled component is a component that manages its own state internally, without any external control or management.
                    <br />
                    <br />
                    <b>Controlled Component : </b>
                     A controlled component is a component that has its state managed by a parent or higher-level component. It manage state via props.
                    </p>
                </article>

                <article className='bg-light p-5 rounded-2 mb-5'>
                    <h3 className='fw-bold mb-2'>How to validate React props using PropTypes ?</h3>
                    <hr className='mb-3' />
                    <p className='fw-medium lead'>
                        The PropTypes utility give us a wide range of validators.
                        Below given the validators name :
                        <ol>
                            <li>Basic types</li>
                            <li>Render able types</li>
                            <li>Instance types</li>
                            <li>Multiple types</li>
                            <li>Collection types</li>
                            <li>Required types</li>
                            <li>Custom types</li>
                        </ol>
                    </p>
                </article>

                <article className='bg-light p-5 rounded-2 mb-5'>
                    <h3 className='fw-bold mb-2'>Differences between nodejs and express js ?</h3>
                    <hr className='mb-3' />
                    <p className='fw-medium lead'>
                    <b>Node.js : </b>
                    Node.js is an open source and cross-platform runtime environment for executing JavaScript code. Node.js is not a programming language. its a JavaScript runtime. We use Node.js for back-end services like CRUD operations.
                    <br />
                    <br />
                    <b>Express.js : </b>
                    Express.js is a node.js framework. Also its not a programming language. its a node.js framework. We can write code more easily by express.js compare to node.js. Express.js also gives us middleware and routing features.
                    </p>
                </article>

                <article className='bg-light p-5 rounded-2 mb-5'>
                    <h3 className='fw-bold mb-2'>What is a custom hook, and why will you create a custom hook ?</h3>
                    <hr className='mb-3' />
                    <p className='fw-medium lead'>Custom React JS hooks are reusable functions that we can use to add special and unique functionality to our React applications. Its a convention to make a custom hook that name starts with the use word. Custom hooks make code clean, reuseable and more readable.</p>
                </article>
            </div>
        </section>
    );
};

export default Blog;