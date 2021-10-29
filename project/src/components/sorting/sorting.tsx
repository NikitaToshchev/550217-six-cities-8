import { SortTypes } from '../../const';
import { useState } from 'react';

type SortingProps = {
  handleChangeSortType: (type: string) => void;
  sortType: string;
}

function SortingComponent({ handleChangeSortType, sortType }: SortingProps): JSX.Element {
  const [isOpenSort, setOpenSort] = useState(false);

  const handleToggleSort = () => {
    setOpenSort(!isOpenSort);
  };

  const handleClickItemSort = (type: string) => {
    handleChangeSortType(type);
    setOpenSort(!isOpenSort);
  };

  const getOpenSortClass = (openSort: boolean) => (openSort) ? 'places__options places__options--opened' : '';

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        tabIndex={0}
        onClick={handleToggleSort}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${getOpenSortClass(isOpenSort)}`}>
        {Object.values(SortTypes).map((item) => (
          <li
            key={item}
            className={`places__option ${sortType === item && 'places__option--active'}`}
            tabIndex={0}
            onClick={() => handleClickItemSort(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form >
  );
}


export default SortingComponent;
