import { Box, Button, Container, Input, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import { setChosenProduct, setProducts, setRestaurant } from "./slice";
import { Product, ProductInquiry } from "../../../lib/types/product";
import { retrieveProducts } from "./selector";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { useDispatch, useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";

//REDUX SLICE SELECTOR
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

export default function Products() {
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 8,
    order: "createdAt",
    productCollection: ProductCollection.DISH,
    search: "",
  });
  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  /** HANDLERS **/

  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };

  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };

  const chooseDishHandler = (id: string) => {
    history.push(`/products/${id}`);
  };
  //

  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"}>
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
                  type="search"
                  className={"avatar-box"}
                  placeholder="type here"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") searchProductHandler();
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="single_button_search"
                  endIcon={<SearchIcon />}
                  onClick={searchProductHandler}
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Stack>
          <Stack className="dishes-filter-section">
            <Stack className="dishes-filter-box">
              <Button
                variant="contained"
                className="order"
                color={
                  productSearch.order === "createdAt" ? "primary" : "secondary"
                }
                onClick={() => searchOrderHandler("createdAt")}
              >
                New
              </Button>
              <Button
                variant="contained"
                className="order"
                color={
                  productSearch.order === "productPrice"
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchOrderHandler("productPrice")}
              >
                Price
              </Button>
              <Button
                variant="contained"
                className="order"
                color={
                  productSearch.order === "productViews"
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchOrderHandler("productViews")}
              >
                Views
              </Button>
            </Stack>
          </Stack>
          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.DISH
                    ? "primary"
                    : "secondary"
                }
                className="order"
                onClick={() => searchCollectionHandler(ProductCollection.DISH)}
              >
                Dish
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.SALAD
                    ? "primary"
                    : "secondary"
                }
                className="order"
                onClick={() => searchCollectionHandler(ProductCollection.SALAD)}
              >
                Salad
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.DRINK
                    ? "primary"
                    : "secondary"
                }
                className="order"
                onClick={() => searchCollectionHandler(ProductCollection.DRINK)}
              >
                Drink
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.DESSERT
                    ? "primary"
                    : "secondary"
                }
                className="order"
                onClick={() =>
                  searchCollectionHandler(ProductCollection.DESSERT)
                }
              >
                Dessert
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.OTHER
                    ? "primary"
                    : "secondary"
                }
                className="order"
                onClick={() => searchCollectionHandler(ProductCollection.OTHER)}
              >
                Other
              </Button>
            </Stack>
            <Stack className="product-wrapper">
              {products.length !== 0 ? (
                products.map((product: Product, index) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + "litre"
                      : product.productSize + "size";
                  return (
                    <Stack
                      key={product._id}
                      className={"product-card"}
                      onClick={() => chooseDishHandler(product._id)}
                    >
                      <Stack
                        className="product-img"
                        sx={{
                          backgroundImage: `url(${imagePath})`,
                        }}
                      >
                        <div className="product-sale">{sizeVolume}</div>
                        <Stack className={"main-two"}>
                          <Button className="shop-btn">
                            <img src="/icons/shopping-cart.svg" />
                          </Button>
                          <Button className="view-btn">
                            <Badge
                              className={"badge"}
                              badgeContent={product.productViews}
                              color="secondary"
                            >
                              <RemoveRedEyeIcon
                                className="redeye"
                                sx={{
                                  color:
                                    product.productViews === 0
                                      ? "gray"
                                      : "white",
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
                          {product.productPrice}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className={"products-data3"}>
                  Products are not available!
                </Box>
              )}
            </Stack>
          </Stack>
          <Stack className={"pagination-section"}>
            <Pagination
              count={
                products.length !== 0
                  ? productSearch.page + 1
                  : productSearch.page
              }
              page={productSearch.page}
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
              onChange={paginationHandler}
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
