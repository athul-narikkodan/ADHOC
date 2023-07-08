import axios from "axios";
import { useState, useEffect } from "react";
const List = () => {
  const [listData, setListData] = useState([]);
  const [listPrice, setListPrice] = useState("");
  console.log("listData", listPrice);
  useEffect(() => {
    listing();
  }, []);

  const listing = () => {
    axios
      .get(
        "http://ec2-65-0-17-118.ap-south-1.compute.amazonaws.com/smartpos/api/v1/products"
      )
      .then((response) => response.data)
      .then((data) => {
        setListData(data.data);
        setListPrice(data?.data[0].price.current_price);
      });
  };
  return (
    <>
      {listData?.map((data) => (
        <div key={data.id}>
          <img src={data.images[0].image} />
          <h1> Name: {data.name}</h1>
          <p>Price:{data?.price.current_price}</p>
          <p> description:{data.description}</p>
        </div>
      ))}
      <h1>.....</h1>
    </>
  );
};
export default List;
