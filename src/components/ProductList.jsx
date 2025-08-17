import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import SearchBar from "./SearchBar";

function ProductList() {
  const [product, setProduct] = useState([]); // original data
  const [filterProduct, setFilterProduct] = useState([]); // filtered/sorted data
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
      setFilterProduct(response.data); // copy for filtering
    } catch (error) {
      console.log("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const filterPrice = (e) => {
    const value = e.target.value;
    let sortedProducts = [...filterProduct];

    if (value === "low") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilterProduct(sortedProducts);
  };

  const filterCategory = (e) => {
    const value = e.target.value;
    if (value === "All") {
      setFilterProduct(product);
    } else {
      const categoryFilter = product.filter((item) => item.category === value);
      setFilterProduct(categoryFilter);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = product.filter(
      (item) =>
        item.title.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value)
    );
    setFilterProduct(filtered);
  };

  return (
    <div>
      <h3 className="text-center text-primary m-3">Product List</h3>
      <SearchBar search={search} handleSearch={handleSearch} />
      <ProductFilter
        product={product}
        filterCategory={filterCategory}
        filterPrice={filterPrice}
      />
      <ProductCard product={filterProduct} loading={loading} />
    </div>
  );
}

export default ProductList;
