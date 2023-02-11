import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import "../App.css";

const FilterProducts = (categItem) => {
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
    if (data && categItem) {
      const categ = data.filter((item) => item.category === categItem);
      return categ;
    }
    return data;
  }
};

export default FilterProducts;
