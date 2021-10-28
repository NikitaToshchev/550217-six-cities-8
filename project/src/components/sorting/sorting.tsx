// import { SortOption } from "../../const";
import { useState } from 'react';

function SortingComponent(): JSX.Element {
  const [isOpenSort, setOpenSort] = useState(false);

  const handleToggleSort = () => {
    setOpenSort(!isOpenSort);
  };

  const getSortClass = (flag: boolean) => (flag) ? 'places__options places__options--opened places__options places__options--custom' : 'places__options places__options--custom';

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        tabIndex={0}
        onClick={handleToggleSort}
      >
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={getSortClass(isOpenSort)}>
        <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li className="places__option" tabIndex={0}>Price: low to high</li>
        <li className="places__option" tabIndex={0}>Price: high to low</li>
        <li className="places__option" tabIndex={0}>Top rated first</li>
        {/* {Object.values(SortOption).map((sort) = > <li
          key={sort}
          className="places__option"
          tabIndex={0}
        >{sort}</li>)} */}
      </ul>
    </form >
  );
}


export default SortingComponent;
