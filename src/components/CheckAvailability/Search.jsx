import React from "react";
import { Button, Icon } from "../index";

const Search = () => {
  return (
    <div className="select-none">
      <Button className="flex gap-2 p-2 rounded-md md:flex-row md:gap-3 md:p-4">
        <Icon name="search" />
        Search
      </Button>
    </div>
  );
};

export default Search;
