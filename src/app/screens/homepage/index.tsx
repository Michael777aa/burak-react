import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUser";
import Events from "./Events";
import "../../../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

//REDUX SLICE SELECTOR
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Selector:Store => Data

  useEffect(() => {
    // Backend server data request => Data

    const result = [
      {
        _id: "669fa8ab97c4d6969ec049d7",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "shashlik",
        productPrice: 14,
        productLeftCount: 100,
        productSize: "LARGE",
        productVolume: "1",
        productDesc: "good",
        productImages: [
          "uploads/products/c3a0312d-ee42-49ac-96de-35e4df61e18e.pdf",
          "uploads/products/6d77bc27-a589-4e15-814f-ac34d69f2c36.jpg",
        ],
        productViews: 0,
        createdAt: "2024-07-23T12:57:15.602Z",
        updatedAt: "2024-07-23T13:00:14.983Z",
        __v: 0,
      },
      {
        _id: "668543acf1589a11e4d26efd",
        productStatus: "PROCESS",
        productCollection: "DRINK",
        productName: "Juice",
        productPrice: 10,
        productLeftCount: 20,
        productSize: "NORMAL",
        productVolume: "1",
        productDesc: "The taste u",
        productImages: [
          "uploads/products/e91c2660-c510-46d3-8b1c-2713aab1b8d4.jpg",
        ],
        productViews: 1,
        createdAt: "2024-07-03T12:27:24.663Z",
        updatedAt: "2024-07-24T09:50:15.359Z",
        __v: 0,
      },
    ];
    // Slice:Data => Store
    // @ts-ignore
    setPopularDishes(result);
  }, []);
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
