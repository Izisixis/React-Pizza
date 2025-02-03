import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from './../redux/slises/filterSlise.js';

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const dispatch = useDispatch();
  const changed = useSelector((state) => state.category.categoryValue);

  return (
    <div className="categories">
      <ul>
        {categories.map((text, i) => (
          <li
            key={i}
            onClick={() => dispatch(changeCategory(i))}
            className={changed === i ? 'active' : ''}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
