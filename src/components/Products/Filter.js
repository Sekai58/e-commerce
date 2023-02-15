import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../useFetch";
import "./Products.css";

const FilterProducts = (categItem) => {
  const userList = useSelector((state) => state.products.value);
  const { data, loading, error } = useFetch("products.json");
  const [load, setLoad] = useState(false);
  if (error) console.log(error);

  useEffect(() => {
    if (!data) {
      setLoad(false);
    } else {
      setLoad(true);
    }
  }, [loading, data]);

  if (load) {
    if (userList) {
      if (userList && categItem) {
        const categ = userList.filter((item) => item.category === categItem);
        return categ;
      }
      return userList;
    }

    if (data && categItem) {
      const categ = data.filter((item) => item.category === categItem);
      return categ;
    }
    return data;
  }
};

export default FilterProducts;
