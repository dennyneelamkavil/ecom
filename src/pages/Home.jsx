import { Col, Container, Row } from "react-bootstrap"
import HomeBanner from "../components/HomeBanner"
import { useEffect } from "react"
import SingleProduct from "../components/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";



function Home() {

    const dispatch = useDispatch();
    
    const products = useSelector((state) => state.products.data);

    
    useEffect(() => {

        fetch('./products.json')
            .then((data) => data.json())
            .then((res) => dispatch(getProducts(res.products)));

    }, [dispatch]);

    console.log(products);


    // Life cycle events of a components
    // Mounting Un-Mounting Updating

    // function based components & Class based components
    // class based - stateful
    // function based - stateless
    // State is an object to store data or information within a component for a short period of time

    // Hooks - methods/functions - > to get/add features that are not available in the components by default

    // const [products, setProducts] = useState([]); // state is immutable - not possible to change/update
    // useState used for creating a state to store data

    // useEffect(() => {   // example of hooks
    //     // Mounting

    //     fetch('./products.json')
    //         .then((data) => data.json())
    //         .then((res) => setProducts(res.products));

    //     // return(
    //     //     // Un-mounting
    //     //     ''
    //     // )


    // }, []); // dependency array - used to re-render/update
    // // useEffect // used to manage life cycle events
    // console.log(products);




    return (
        <>
            <HomeBanner />
            <Container className="d-flex flex-column align-items-center">
                <Row>
                    <Col className="my-3">
                        <h2>
                            Latest Products
                        </h2>
                    </Col>
                </Row>
                <Row>

                    {products.map((product, id) => (
                        <SingleProduct key={id} product={product} /> // Props - Unidirectional - parent to child only
                        // props drilling
                    ))}
                </Row>
            </Container>
        </>

    )

}

export default Home