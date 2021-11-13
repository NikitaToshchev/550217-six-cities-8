import { SortTypes } from '../../const';
import { useState } from 'react';
import { State } from '../../types/state';
import { changeSortType } from '../../store/actions/action';
import { connect, ConnectedProps } from 'react-redux';
import { getCurrentSortType } from '../../store/selectors/selectors';
import { Dispatch } from 'redux';


const mapStateToProps = (state: State) => ({
  currentSortType: getCurrentSortType(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeSortType(sortType: string) {
    dispatch(changeSortType(sortType));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function SortingComponent({ currentSortType, onChangeSortType }: ConnectedComponentProps): JSX.Element {
  const [isOpenSort, setOpenSort] = useState(false);

  const handleToggleSort = () => {
    setOpenSort(!isOpenSort);
  };

  const handleClickItemSort = (type: string) => {
    onChangeSortType(type);
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
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${getOpenSortClass(isOpenSort)}`}>
        {Object.values(SortTypes).map((item) => (
          <li
            key={item}
            className={`places__option ${currentSortType === item && 'places__option--active'}`}
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

export { SortingComponent };
export default connector(SortingComponent);
