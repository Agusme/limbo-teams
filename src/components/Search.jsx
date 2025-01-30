/* eslint-disable react/prop-types */
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";

const Search = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchTerm(value);
  };

  return (
    <div className="w-75 my-5">
      <InputGroup>
        <InputGroup.Text id="basic-addon1">
          <FaSearch />
        </InputGroup.Text>
        <Form.Control
          value={inputValue}
          placeholder="Buscar publicaciones..."
          aria-label="Buscador"
          aria-describedby="basic-addon1"
          onChange={handleSearchChange}
        />
      </InputGroup>
    </div>
  );
};

export default Search;
