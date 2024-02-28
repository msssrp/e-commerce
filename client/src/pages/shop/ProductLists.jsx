import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [selected, setSelected] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(8);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("/product.json");
      if (resp.ok) {
        const data = await resp.json();
        setProducts(data);
        setFilterItems(data);
        setCategories(["all", ...new Set(data.map((item) => item.category))]);
      } else {
        console.log(resp.json());
      }
    };
    fetchData();
  }, []);

  const filterItem = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilterItems(filtered);
    setSelected(category);
    handlerSortChange(sortOption, filtered);
    setCurrentPage(1);
  };

  const handlerSortChange = (option, product) => {
    setSortOption(option);
    let sortedItem = [...product];
    switch (option) {
      case "A-Z":
        sortedItem.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItem.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Low-to-High":
        sortedItem.sort((a, b) => a.price - b.price);
        break;
      case "High-to-Low":
        sortedItem.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilterItems(sortedItem);
    setCurrentPage(1);
  };

  const indexOfLastItem = itemPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = filterItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="section-container">
        <div className="py-48 flex flex-col justify-center items-center">
          <div className="text-center space-y-7 px-4">
            <h2 className="md:text-4xl text-4xl font-bold md:leading-snug leading-snug">
              Unleash Your Inner <span className="text-red">Geek</span> <br />{" "}
              Shop Our Exclusive Tect-themed Merchandises{" "}
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              est repudiandae error assumenda, iure perspiciatis exercitationem
              esse numquam adipisci cum facilis. Libero explicabo magni maxime
              dignissimos facere est nesciunt? Debitis.
            </p>
            <button className="btn btn-red px-8 py-3 font-semibold text-white rounded-full bg-red">
              Oder Now
            </button>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => filterItem(category)}
                className={`px-4 py-2 rounded-full ${
                  selected === category && "active"
                }`}>
                <p className="capitalize">{category}</p>
              </button>
            ))}
          </div>
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <select
                id="sort"
                className="bg-black text-white px-2 rounded-sm"
                onChange={(e) => handlerSortChange(e.target.value, filterItems)}
                value={sortOption}>
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="Low-to-High">Low to High</option>
                <option value="High-to-Low">High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {currentItems.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        <div className="flex justify-center items-center my-8 flex-wrap gap-2">
          {Array.from({
            length: Math.ceil(filterItems.length / itemPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${
                currentPage === index + 1 ? "bg-red text-white" : "bg-gray-200"
              }`}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
