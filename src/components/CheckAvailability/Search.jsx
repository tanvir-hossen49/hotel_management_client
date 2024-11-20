import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const Search = () => {
  return (
    <Button
      className="flex gap-2 p-2 rounded-md md:flex-row md:gap-3 md:p-4"
      ariaLabel="search"
    >
      <Icon name="search" />
      Search
    </Button>
  );
};

export default Search;
