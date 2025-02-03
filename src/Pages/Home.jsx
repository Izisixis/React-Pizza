import React, { useContext, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import { SearchContext } from '../App';
import { useSelector } from 'react-redux';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);
  const changed = useSelector((state) => state.category.categoryValue);
  const sorted = useSelector((state) => state.category.sortValue);

  React.useEffect(() => {
    setIsLoading(true);

    const changeSort = `sortBy=${sorted.sortProperty.replace('-', '')}`;
    const order = sorted.sortProperty.includes('-') ? 'asc' : 'desc';
    const changeCategory = changed > 0 ? `category=${changed}` : '';
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
  }, [changed, sorted, searchValue]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
    </div>
  );
};

export default Home;
