import React from "react";
import { Box, Button, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import moment from "moment";
export default function ProcessOrders() {
  return (
    <TabPanel value="2">
      <Stack>
        {[1, 2].map((ele, index) => (
          <Box key={index} className="order-main-box">
            <Box className="order-box-scroll">
              {[1, 2, 3].map((ele2, index2) => (
                <Box key={index2} className="orders-name-price">
                  <img src="/img/lavash.webp" className="order-dish-img" />
                  <p className="title-dish">Lavash</p>
                  <Box className="price-box">
                    <p>$9</p>
                    <img src="/icons/close.svg" />
                    <p>2</p>
                    <img src="/icons/pause.svg" />
                    <p>$24</p>
                  </Box>
                </Box>
              ))}
              <Box className={"calculation"}>
                <span>Product price</span>
                <p>$60</p>
                <img src="/icons/plus.svg" />
                <span>Delivery cost</span>
                <p>$5</p>
                <img src="/icons/pause.svg" />
                <span>Total </span>
                <p>$65</p>
              </Box>
              <p className={"process-order-ful time"}>
                {moment().format("YY-MM-DD HH:mm")}
              </p>
              <button className={"process-order-ful verify"}>
                <p>Verify to Fulfil</p>
              </button>
            </Box>
          </Box>
        ))}
      </Stack>
      <Stack className="user-detail">
        <img src="/img/justin.webp" />
        <p className={"user-name"}>Justin</p>
        <p className={"user-type"}>user</p>

        <Box className={"user-bottom"}>
          <LocationOnIcon />
          <p>South Korea, Busan</p>
        </Box>
      </Stack>
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
// import Button from "@mui/material/Button";
// import TabPanel from "@mui/lab/TabPanel";
// import moment from "moment";

// export default function ProcessOrders() {
//   return (
//     <TabPanel value="2">
//       <Stack>
//         {[1, 2].map((ele, index) => (
//           <Box key={index} className="order-main-box">
//             <Box className="order-box-scroll">
//               {[1, 2].map((ele2, index2) => (
//                 <Box key={index2} className="orders-name-price">
//                   <img src="/img/kebab.webp" className="order-dish-img" />
//                   <p className="title-dish">Kebab</p>
//                   <Box className="price-box">
//                     <p>$11</p>
//                     <img src="/icons/close.svg" />
//                     <p>2</p>
//                     <img src="/icons/pause.svg" />
//                     <p style={{ marginLeft: "15px" }}>$22</p>
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//             <Box>
//               <p>Product price</p>
//               <p>$22</p>
//               <img
//                 src="/icons/plus.svg"
//                 alt="Plus icon"
//                 style={{ marginLeft: "20px" }}
//               />
//               <p>Delivery cost</p>
//               <p>$2</p>
//               <img
//                 src="/icons/pause.svg"
//                 alt="Pause icon"
//                 style={{ marginLeft: "20px" }}
//               />
//               <p>Total</p>
//               <p>$24</p>
//               <p className="data-compl">{moment().format("YY-MM-DD HH:mm")}</p>
//               <Button variant="contained" className="verify-button">
//                 Verify to Fulfil
//               </Button>
//             </Box>
//           </Box>
//         ))}
//         {false && (
//           <Box display="flex" flexDirection="row" justifyContent="center">
//             <img
//               src="/icons/noimage-list.svg"
//               style={{ width: 300, height: 300 }}
//             />
//           </Box>
//         )}
//       </Stack>
//     </TabPanel>
//   );
// }
