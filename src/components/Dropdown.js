import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { loremIpsum } from "lorem-ipsum";
const IconContainer = styled.div`
  cursor: pointer;
`;
const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const DropdownListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const SearchInput = styled.input`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 8px 16px;
`;
const DropdownLists = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const DropdownListItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  :hover {
    background-color: aliceblue;
  }
`;

const temp = loremIpsum({ count: 16, units: "word" });
export default function Dropdown() {
  const [show, setShow] = useState(false);
  const [listItems, setListItems] = useState();
  const dropdownData = temp.split(" ");
  const [current, setCurrent] = useState("");
  useEffect(() => {
    setCurrent(dropdownData[0]);
    setListItems(dropdownData);
  }, []);
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const filterData = dropdownData.filter((item) => item.toLowerCase().includes(searchText.toLowerCase()));
    const newFilterData = filterData;
    setListItems(newFilterData);
  };
  return (
    <div style={{ marginBottom: 300, width: "300px" }}>
      <DropdownContainer>
        {current}
        <IconContainer
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
        </IconContainer>
      </DropdownContainer>
      {show && (
        <DropdownListContainer>
          <SearchInput placeholder="Search LoremIpsum" onChange={(e) => handleSearch(e)} />
          <DropdownLists>
            {listItems.map((listItem, i) => (
              <DropdownListItem
                onClick={() => {
                  setShow(false);
                  setCurrent(listItem);
                }}
                key={i}
              >
                {listItem}
              </DropdownListItem>
            ))}
          </DropdownLists>
        </DropdownListContainer>
      )}
    </div>
  );
}
