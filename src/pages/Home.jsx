import { Col, Container, Row } from "react-bootstrap"
import HomeBanner from "../components/HomeBanner"
import { useEffect, useState } from "react"
import SingleProduct from "../components/SingleProduct";

function Home() {

    // Life cycle events of a components
    // Mounting Un-Mounting Updating

    // function based components & Class based components
    // class based - stateful
    // function based - stateless
    // State is an object to store data or information within a component for a short period of time

    // Hooks - methods/functions - > to get/add features that are not available in the components by default

    const [products, setProducts] = useState([]); // state is immutable - not possible to change/update
    // useState used for creating a state to store data

    useEffect(() => {   // example of hooks
        // Mounting

        fetch('./products.json')
            .then((data) => data.json())
            .then((res) => setProducts(res.products));

        // return(
        //     // Un-mounting
        //     ''
        // )


    }, []); // dependency array - used to re-render/update
    // useEffect // used to manage life cycle events
    console.log(products);




    return (
        <>
            <HomeBanner />
            <Container>
                <Row>
                    <Col className="my-3">
                        <h2>
                            Latest Products
                        </h2>
                    </Col>
                </Row>
                <Row>

                    {products.map((product) => (
                        <SingleProduct product={product} /> // Props - Unidirectional - parent to child only
                        // props drilling
                    ))}
                </Row>
            </Container>
        </>

    )

}

export default Home