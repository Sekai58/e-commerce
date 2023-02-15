import React, { useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import "./Products.css";
import FilterProducts from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "./Reducer";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Products = () => {
  const users = localStorage.getItem("auth");
  const auth = JSON.parse(users).map((user) => user.role);
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.products.value);

  const [items, setItems] = useState("");

  const item = FilterProducts(items);

  const handleOnclick = (categ) => {
    setItems(categ);
  };

  return (
    <div>
      {item && userList ? (
        <div className="p-3 ">
          <div className="p-3 ">
            <div className=" d-flex title">
              <InputGroup className="mb-3">
                <InputGroup.Text>Category</InputGroup.Text>
                <Form.Control aria-label="category" />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text>Product Name</InputGroup.Text>
                <Form.Control aria-label="name" />
              </InputGroup>
              <>
                <Form.Range />
              </>
              {auth == "ADMIN" ? (
                <Button
                  onClick={() => {
                    dispatch(
                      addProducts({
                        id: userList[userList.length - 1].id + 1,
                        image: "./img/image1.jpg",
                        title: "Accessoriee-XY",
                        price: "300",
                        category: "bags",
                      })
                    );
                  }}
                >
                  Add
                </Button>
              ) : (
                <Button disabled>Add</Button>
              )}
            </div>
            <ul className="d-flex title">
              <Button onClick={() => handleOnclick("")}>All</Button>
              <Button onClick={() => handleOnclick("watch")}>Watch</Button>
              <Button onClick={() => handleOnclick("accessories")}>
                Accessories
              </Button>
              <Button onClick={() => handleOnclick("gloves")}>Gloves</Button>
              <Button onClick={() => handleOnclick("bags")}>Bags</Button>
            </ul>
          </div>
          <div className="p-4 d-flex boxs">
            {item.map((product) => {
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
        </div>
      ) : (
        <div className="">NO PRODUCTS IN STORE</div>
      )}
    </div>
  );
};

export default Products;
