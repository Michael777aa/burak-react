import React from "react";
import { Box, Button, Container, Input, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TextField, InputAdornment, IconButton } from "@mui/material";

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "F.Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Steak", imagePath: "/img/steak.webp" },
  { productName: "Steak", imagePath: "/img/steak.webp" },
  { productName: "Steak", imagePath: "/img/steak.webp" },
];

export default function Products() {
  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack
            className={"avatar-big-box"}
            direction="row"
            alignItems="center"
            justifyContent="center"
            mt={5}
          >
            <Box
              className="top_text"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p className={"restaurant-name"}>Burak Restaurant</p>
              <Box>
                <input
                  type="text"
                  className={"avatar-box"}
                  placeholder="type here"
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="single_button_search"
                  endIcon={<SearchIcon />}
                  type="button"
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Stack>
          <Stack className="dishes-filter-section">
            <Stack className="dishes-filter-box">
              <Button variant="contained" color="primary" className="order">
                New
              </Button>
              <Button variant="contained" color="secondary" className="order">
                Price
              </Button>
              <Button variant="contained" color="secondary" className="order">
                Views
              </Button>
            </Stack>
          </Stack>
          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <Button variant="contained" color="primary" className="order">
                NEW
              </Button>
              <Button variant="contained" color="secondary" className="order">
                PRICE
              </Button>
              <Button variant="contained" color="secondary" className="order">
                VIEWS
              </Button>
              <Button variant="contained" color="secondary" className="order">
                VIEWS
              </Button>
              <Button variant="contained" color="secondary" className="order">
                OTHERS
              </Button>
            </Stack>
            <Stack className="product-wrapper">
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className="product-card">
                      <Stack
                        className="product-img"
                        sx={{
                          backgroundImage: `url(${product.imagePath})`,
                        }}
                      >
                        <div className="product-sale">
                          NORMAL <span>size</span>
                        </div>
                        <Stack className={"main-two"}>
                          <Button className="shop-btn">
                            <img src="/icons/shopping-cart.svg" />
                          </Button>
                          <Button className="view-btn">
                            <Badge badgeContent={20} color="secondary">
                              <RemoveRedEyeIcon
                                sx={{
                                  color: 20 ? "gray" : "white",
                                }}
                              />
                            </Badge>
                          </Button>
                        </Stack>
                      </Stack>
                      <Box className="product-desc">
                        <span className="product-title">
                          {product.productName}
                        </span>
                        <div className="product-des">
                          <MonetizationOnIcon />
                          {15}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className={""}>Products are not available!</Box>
              )}
            </Stack>
          </Stack>
          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color="secondary"
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>
      <div className={"brands-logo"}>
        <Container>
          <Stack flexDirection={"column"} alignItems={"center"}>
            <Stack className={"main-brand-frame"}>
              <p className={"brand-logo"}>Our Family Brands</p>
              <Stack className={"four-main"}>
                <Box className={"image"}>
                  <img src="/img/gurme.webp" alt="" />
                </Box>
                <Box className={"image"}>
                  <img src="/img/sweets.webp" alt="" />
                </Box>
                <Box className={"image"}>
                  <img src="/img/doner.webp" alt="" />
                </Box>
                <Box className={"image"}>
                  <img src="/img/seafood.webp" alt="" />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </div>
      <div className={"address"}>
        <Container>
          <Stack className="address-area">
            <Box className="title">Our address</Box>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.358377995709!2d144.9630583153163!3d-37.81362797975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775a46d9c0c3d0!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1636203122104!5m2!1sen!2sus"></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
