import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slises/filterSlise';

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const dispatch = useDispatch();
  const category = useSelector((state) => state.filters.categoryId);

  return (
    <div className="categories">
      <ul>
        {categories.map((text, i) => (
          <li
            key={i}
            onClick={() => dispatch(setCategoryId(i))}
            className={category === i ? 'active' : ''}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
