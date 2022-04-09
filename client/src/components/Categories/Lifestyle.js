// Lifestyle category component : list of all the products

import { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Lifestyle = () => {
  const lifestyle = { category: "Lifestyle" };
  const [item, setItem] = useState([]);
  useEffect(() => {
    const fetchingData = async () => {
      const data = await fetch("/product/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lifestyle),
      });
      const json = await data.json();
      setItem(json);
    };
    fetchingData().catch(console.error);
  }, []);

  const arrayData = item.data;

  if (!item.data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Banner>
        <Text>Lifestyle</Text>
      </Banner>
      <Dropdown>
        <SortBy placeholder="SORT BY                          +"></SortBy>
      </Dropdown>
      <ListContainer>
        {arrayData &&
          arrayData.map((e) => (
            <Item key={e._id}>
              <NavigationLink to={`/category/lifestyle/${e._id}`}>
                <ItemContainer>
                  <Picture src={e.imageSrc} alt={e.id} />
                  <Name>{e.name}</Name>
                  <Price>{e.price}</Price>
                </ItemContainer>
              </NavigationLink>
            </Item>
          ))}
      </ListContainer>
    </>
  );
};

export default Lifestyle;

// Styles :

// Banner container
const Banner = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  /* margin-bottom: 50px; */
`;

const Text = styled.h2`
  font-size: 35px;
  color: black;
  border-bottom: 6px solid #003399;
`;

const Dropdown = styled.div`
  height: 50px;
  /* background-color: white; */
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
  /* background-color: white; */
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
  border-left: 5px solid red;
  border-bottom: 5px solid red;
  border: 3px solid black;
  /* width: 180px;
  height: 200px; */

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
  /* font-weight: normal; */
`;

const Price = styled.h2`
  color: black;
  font-size: 18px;
  font-weight: normal;
`;

// Notes :
// https://contactmentor.com/how-to-add-loading-spinner-react-js/
//https://travis.media/how-to-easily-style-a-select-dropdown/
