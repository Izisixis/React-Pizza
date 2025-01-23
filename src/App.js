import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/Skeleton';
import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoriesId, setCategoriesId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'Популярные',
    sort: 'rating',
  });

  React.useEffect(() => {
    const changeSort = `sortBy=${sortType.sort.replace('-', '')}`;
    const order = sortType.sort.includes('-') ? 'asc' : 'desc'; //Need to fix
    const changeCategory = categoriesId > 0 ? `category=${categoriesId}` : '';
    fetch(
      `https://64aaf4ed0c6d844abedf06f1.mockapi.io/items?${changeCategory}&${changeSort}&order=${order}}`,
    )
      .then((res) => {
        setIsLoading(true);
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
        console.log(order);
      });

    window.scrollTo(0, 0);
  }, [categoriesId, sortType]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories
                categoriesId={categoriesId}
                setCategoriesId={(id) => setCategoriesId(id)}
              />
              <Sort sortType={sortType} setSortType={(id) => setSortType(id)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                : items.map((obj) => (
                    <PizzaBlock
                      key={obj.id}
                      types={obj.types}
                      imageUrl={obj.imageUrl}
                      title={obj.title}
                      sizes={obj.sizes}
                      price={obj.price}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
