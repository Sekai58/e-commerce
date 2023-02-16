import React, { useState, useRef } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import "./Products.css";
import FilterProducts from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "./Reducer";

const Products = () => {
  const category = useRef();
  const name = useRef();
  const users = localStorage.getItem("auth");
  const auth = JSON.parse(users).map((user) => user.role);
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.products.value);

  const [items, setItems] = useState("");
  const [file, setFile] = useState();

  const item = FilterProducts(items);

  const handleOnclick = (categ) => {
    setItems(categ);
  };

  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      {item && userList ? (
        <div className="p-3 ">
          <div className="p-3 ">
            <div className=" d-flex titles">
              <input
                className="mb-3 p-1 inp"
                type="text"
                placeholder="Category"
                ref={category}
              />
              <input
                className="mb-3 p-1 inp"
                type="text"
                placeholder="Product Name"
                ref={name}
              />
              <input
                className="mb-3 p-1 inp"
                type="file"
                placeholder="Product Name"
                onChange={handleChange}
              />
              {auth == "ADMIN" ? (
                <Button
                  className="mb-3"
                  onClick={() => {
                    dispatch(
                      addProducts({
                        id: userList[userList.length - 1].id + 1,
                        image: file,
                        title: name.current.value,
                        price: "300",
                        category: category.current.values,
                      })
                    );
                  }}
                >
                  Add
                </Button>
              ) : (
                <Button disabled className="mb-3">
                  Add
                </Button>
              )}
            </div>
            <ul className="d-flex titles">
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
