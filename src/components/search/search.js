import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api";

const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  const loadOptions = (inputValue) => {
    const minPopulation = 1000000;

    return fetch(
      `${GEO_API_URL}/cities?minPopulation=${minPopulation}&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((data) => {
        const options = data.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name} ${city.countryCode}`,
        }));

        return {
          options
        };
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {console.log(search)}
      <AsyncPaginate
        placeholder="Search for city"
        value={search}
        debounceTimeout={600}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
