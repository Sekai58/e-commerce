import React, { useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import "../App.css";
import FilterProducts from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "./Reducer";

const Products = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.products.value);
  console.log(userList);

  const [items, setItems] = useState("");
  console.log(items);
  const item = FilterProducts(items);

  console.log(items);
  const handleOnclick = (categ) => {
    setItems(categ);
    console.log(items);
  };

  return (
    <div>
      {item ? (
        <div className="p-3 ">
          <div className="p-3 ">
            <ul className="d-flex title">
              <Button onClick={() => handleOnclick("")}>All</Button>
              <Button onClick={() => handleOnclick("watch")}>Watch</Button>
              <Button onClick={() => handleOnclick("accessories")}>
                Accessories
              </Button>
              <Button onClick={() => handleOnclick("gloves")}>Gloves</Button>
              <Button onClick={() => handleOnclick("bags")}>Bags</Button>
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
