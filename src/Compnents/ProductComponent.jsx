import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card ,Button} from "react-bootstrap";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div style={{padding: "0px 44px 39px"}} key={id}>
        <Link to={`/product/${id}`}>
          <Card style={{width:"300px",height:"600px",}} >
            <Card.Img src={image} width="400" height="400" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {category}
              </Card.Text>
              <h3>₹ {price}</h3>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Link>
     </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
