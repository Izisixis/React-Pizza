import React, { useContext, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import { SearchContext } from '../App';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesId, setCategoriesId] = useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'Популярные',
    sortProperty: 'rating',
  });
  const { searchValue } = useContext(SearchContext);

  React.useEffect(() => {
    setIsLoading(true);

    const changeSort = `sortBy=${sortType.sortProperty.replace('-', '')}`;
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const changeCategory = categoriesId > 0 ? `category=${categoriesId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://64aaf4ed0c6d844abedf06f1.mockapi.io/items?${changeCategory}&${changeSort}&order=${order}${search}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoriesId, sortType, searchValue]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoriesId} onClickCategory={(id) => setCategoriesId(id)} />
        <Sort sortValue={sortType} onClickSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
    </div>
  );
};

export default Home;
