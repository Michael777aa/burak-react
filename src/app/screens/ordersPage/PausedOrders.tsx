import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function PausedOrders() {
  return (
    <TabPanel value="1">
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
                <div className={"buttons"}>
                  <button className={"first"}>Cancel</button>
                  <button className={"second"}>Payment</button>
                </div>
              </Box>
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
