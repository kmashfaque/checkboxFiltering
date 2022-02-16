import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import ProductCard from "../components/ProductCard";
import CheckBox from "../components/CheckBox";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
  loader: {
    marginTop: "5rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    marginBottom: "1rem",
    padding: "13px",
  },
});

const Product = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [products, setrProducts] = useState([]);
  const [Filters, setFilters] = useState({ brand: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (brandName, name) => {
    // console.log(brandName);
    try {
      setLoading(true);
      const { data } = await axios.post("/api/v1/products", brandName);

      setrProducts(data.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const showFilterResults = (brandName) => {
    // const variables = { filters: filters, name: name };

    fetchData(brandName);
  };

  const handleFilters = (filters, name, category) => {
    const newFilters = { ...Filters };
    // newFilters[category] = filters;
    newFilters[category] = name;

    showFilterResults(newFilters);
    setFilters(newFilters);
  };

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={12}>
            <Typography gutterBottom>Filters</Typography>
            <CheckBox
              handleFilters={(filters, name) =>
                handleFilters(filters, name, "brand")
              }
            />
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={2}>
        {loading ? (
          <div className={classes.loader}>
            <CircularProgress size="3rem" thickness={5} />
          </div>
        ) : (
          products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Product;
