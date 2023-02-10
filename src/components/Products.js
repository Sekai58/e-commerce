import React from "react";
import useFetch from "./useFetch";
import { Container } from "react-bootstrap";
import { Card, ListGroup, Button } from "react-bootstrap";
import "../App.css";

const Products = () => {
  const { data, loading, error } = useFetch("products.json");
  console.log(data, loading, error);
  if (loading) return <div>Loading</div>;
  return (
    <div>
      {data ? (
        <div className="p-4 d-flex boxs">
          {data.map((product) => {
            return (
              <Card
                style={{ width: "18rem" }}
                key={product.id}
                className="box res"
              >
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{product.category}</ListGroup.Item>
                  <ListGroup.Item>{product.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button>Add to chart</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="">NO PRODUCTS IN STORE</div>
      )}
    </div>
  );
};

export default Products;
