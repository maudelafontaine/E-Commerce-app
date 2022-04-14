// Category component : list of all the products changes dynamically depending on which category is selected

import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import { ROUTE_CATEGORY_MAP } from "./CategoryMapping";
import Pagination from "../Pagination";
import Loader from "../Loader";

const Category = () => {
  // tracks the state of the service call to get all items in a category
  const [itemDataStatus, setItemDataStatus] = useState("loading");
  const [page, setPage] = useState(0);
  // tracks all the items in this category
  const [item, setItem] = useState([]);
  // what kind of items are we searching for?
  //create a state for Total of pages
  const [totalPages, setTotalPages] = useState(0);
  const { category } = useParams();
  const categoryTransformed = ROUTE_CATEGORY_MAP[category];
  const payload = { category: categoryTransformed };

  useEffect(async () => {
    setItemDataStatus("loading");
    const fetchingData = async () => {
      const data = await fetch(
        `/product/category?category=${categoryTransformed}&page=${page}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const json = await data.json();
      setItem(json);
    };
    const fetchingPage = async () => {
      const pages = await fetch(
        `/product/category/pages?category=${categoryTransformed}`
      );
      const jsonPages = await pages.json();
      setTotalPages(jsonPages.data);
    };

    await fetchingData().catch(console.error);
    await fetchingPage().catch(console.error);
    setItemDataStatus("idle");
  }, [category, page]);

  let arrayData = item.data;

  return (
    <>
      <Banner>
        <Text>{categoryTransformed}</Text>
      </Banner>
      <Dropdown>
        <SortBy placeholder="SORT BY                          +"></SortBy>
      </Dropdown>
      {itemDataStatus === "loading" && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}

      {itemDataStatus === "idle" && arrayData && (
        <ListContainer>
          {arrayData.map((e) => (
            <Item key={e._id}>
              <NavigationLink to={`/item/${e._id}`}>
                <ItemContainer>
                  <Picture src={e.imageSrc} alt={e.id} />
                  <Name>{e.name}</Name>
                  <Price>{e.price}</Price>
                </ItemContainer>
              </NavigationLink>
            </Item>
          ))}
        </ListContainer>
      )}

      <Pagination page={page} setPage={setPage} categoryPages={totalPages} />
    </>
  );
};

export default Category;

// Styles :

// Banner container
const Banner = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Text = styled.h2`
  font-size: 35px;
  color: black;
  padding-bottom: 4px;
  border-bottom: 6px solid #adebeb;
`;

const Dropdown = styled.div`
  height: 50px;
  margin-top: 15px;
  margin-bottom: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const SortBy = styled.input`
  font-size: 15px;
  margin-right: 20px;
`;

// List of items
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

// For each item
const Item = styled.div``;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const Picture = styled.img`
  border-radius: 2px;
  margin-bottom: 20px;
  align-self: center;
  border: 3px solid #ffe6e6;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const Name = styled.h2`
  color: black;
  font-size: 18px;
  margin-bottom: 8px;
  margin-top: 15px;
`;

const Price = styled.h2`
  color: black;
  font-size: 18px;
  font-weight: normal;
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
