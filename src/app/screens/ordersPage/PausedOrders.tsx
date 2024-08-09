import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { serverApi } from "../../../lib/config";
import { Product } from "../../../lib/types/product";
import { Order, OrderItem } from "../../../lib/types/order";

//REDUX SLICE SELECTOR

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({
    pausedOrders,
  })
);
export default function PausedOrders() {
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
  return (
    <TabPanel value="1">
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        {pausedOrders?.map((order: Order) => (
          <Box key={order._id} className="order-main-box">
            <Box className="order-box-scroll">
              {order?.orderItems?.map((item: OrderItem) => {
                const product: Product = order.productData.filter(
                  (ele: Product) => item.productId === ele._id
                )[0];
                const imagePath = `${serverApi}/${product.productImages[0]}`;

                return (
                  <Box key={item._id} className="orders-name-price">
                    <img src={imagePath} className="order-dish-img" />
                    <p className="title-dish">{product.productName}</p>
                    <Box className="price-box">
                      <p>${item.itemPrice}</p>
                      <img src="/icons/close.svg" />
                      <p>{item.itemQuantity}</p>
                      <img src="/icons/pause.svg" />
                      <p>${item.itemQuantity * item.itemPrice}</p>
                    </Box>
                  </Box>
                );
              })}
              <Box className={"calculation"}>
                <span>Product price</span>
                <p>${order.orderTotal - order.orderDelivery}</p>
                <img src="/icons/plus.svg" />
                <span>Delivery cost</span>
                <p>${order.orderDelivery}</p>
                <img src="/icons/pause.svg" />
                <span>Total </span>
                <p>${order.orderTotal}</p>
                <div className={"buttons"}>
                  <button className={"first"}>Cancel</button>
                  <button className={"second"}>Payment</button>
                </div>
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
      {!pausedOrders ||
        (pausedOrders.length === 0 && (
          <Stack className="user-detail">
            <img src="/img/justin.webp" />
            <p className={"user-name"}>Justin</p>
            <p className={"user-type"}>user</p>

            <Box className={"user-bottom"}>
              <LocationOnIcon />
              <p>South Korea, Busan</p>
            </Box>
          </Stack>
        ))}

      <Stack className="user-payment">
        <Stack className={"user-pay"}>
          <input
            type="number"
            placeholder="Card number : 5243 4090 2002 7495"
          />
          <div className={"two-input"}>
            <input type="number" placeholder="07 / 24" />
            <input
              type="number"
              className={"ssecond"}
              placeholder="CVV : 010"
            />
          </div>
          <input type="text" placeholder="Justin Robertson" />
        </Stack>
        <div className={"four-cards"}>
          <img src="/icons/master-card.svg" alt="" />
          <img src="/icons/paypal-card.svg" alt="" />
          <img src="/icons/western-card.svg" alt="" />
          <img src="/icons/visa-card.svg" alt="" />
        </div>
      </Stack>
    </TabPanel>
  );
}

// import React from "react";
// import { Box, Stack } from "@mui/material";
// import TabPanel from "@mui/lab/TabPanel";

// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Button from "@mui/material/Button";
// import { useSelector } from "react-redux";
// import { createSelector } from "reselect";
// import { retrievePausedOrders } from "./selector";
// import { serverApi } from "../../../lib/config";
// import { Product } from "../../../lib/types/product";
// import { Order, OrderItem } from "../../../lib/types/order";

// //REDUX SLICE SELECTOR

// const pausedOrdersRetriever = createSelector(
//   retrievePausedOrders,
//   (pausedOrders) => ({
//     pausedOrders,
//   })
// );

// export default function PausedOrders() {
//   const { pausedOrders } = useSelector(pausedOrdersRetriever);
//   return (
//     <TabPanel value="1">
//       <Stack gap={4}>
//         {pausedOrders?.map((order: Order) => {
//           return (
//             <Box key={order._id} className="order-main-box">
//               {order?.orderItems?.map((item: OrderItem) => {
//                 const product: Product = order.productData.filter(
//                   (ele: Product) => item.productId === ele._id
//                 )[0];
//                 const imagePath = `${serverApi}/${product.productImages[0]}`;
//                 return (
//                   <Box key={item._id} className="order-name-price">
//                     <Box className="order-first-box">
//                       <img
//                         src={imagePath}
//                         className="orders-dish-img"
//                         alt="Dish"
//                       />
//                       <p className="title-dish">{product.productName}</p>
//                     </Box>

//                     <Box className="price-box">
//                       <p>${item.itemPrice}</p>
//                       <img src="/icons/close.svg" alt="Close" />
//                       <p>{item.itemQuantity}</p>
//                       <img src="/icons/pause.svg" alt="Pause" />
//                       <p style={{ marginLeft: "15px" }}>
//                         ${item.itemQuantity * item.itemPrice}
//                       </p>
//                     </Box>
//                   </Box>
//                 );
//               })}
//               <Box className="total-price-box">
//                 <Box className="box-total" display="flex" alignItems="center">
//                   <p>Product Price</p>
//                   <p style={{ marginLeft: "10px", marginRight: "10px" }}>
//                     ${order.orderTotal - order.orderDelivery}
//                   </p>
//                   <img
//                     src="/icons/plus.svg"
//                     style={{ marginLeft: "10px", marginRight: "10px" }}
//                     alt="Plus"
//                   />
//                   <p>Delivery cost</p>
//                   <p style={{ marginLeft: "10px", marginRight: "10px" }}>
//                     ${order.orderDelivery}
//                   </p>
//                   <img
//                     src="/icons/pause.svg"
//                     style={{ marginLeft: "10px", marginRight: "10px" }}
//                     alt="Pause"
//                   />
//                   <p>Total</p>
//                   <p style={{ marginLeft: "10px", marginRight: "10px" }}>
//                     ${order.orderTotal}
//                   </p>
//                 </Box>

//                 <Button
//                   variant="contained"
//                   color="secondary"
//                   className="cancel-button"
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="success"
//                   className="pay-button"
//                 >
//                   Payment
//                 </Button>
//               </Box>
//             </Box>
//           );
//         })}

//         {false && (
//           <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
//             <img
//               src={"/icons/noimage-list.svg"}
//               style={{ width: "300px", height: "300px" }}
//             />
//           </Box>
//         )}
//       </Stack>
//     </TabPanel>
//   );
// }
