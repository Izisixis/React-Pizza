import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/Skeleton';
import PizzaBlock from '../components/PizzaBlock';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoriesId, setCategoriesId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'Популярные',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    const changeSort = `sortBy=${sortType.sortProperty.replace('-', '')}`;
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'; //Need to fix
    const changeCategory = categoriesId > 0 ? `category=${categoriesId}` : '';
    setIsLoading(true);
    fetch(
      `https://64aaf4ed0c6d844abedf06f1.mockapi.io/items?${changeCategory}&${changeSort}&order=${order}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoriesId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoriesId} onClickCategory={(id) => setCategoriesId(id)} />
        <Sort sortValue={sortType} onClickSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
