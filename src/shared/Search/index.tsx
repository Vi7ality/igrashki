import SearchIcon from "./SearchIcon";
import styles from "./Search.module.scss";
import { FC, useState } from "react";

interface SearchProps {
  handleSearch: (search: string) => void;
}

const Search: FC<SearchProps> = ({ handleSearch }) => {
  const [search, setSearch] = useState<string>("")
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <div onClick={() => handleSearch(search)}>
          <SearchIcon />
        </div>

        <input type="text" placeholder="Пошук" value={search} onChange={e => setSearch(e.target.value)} />
      </div>
    </div>
  );
};

export default Search;
