import React from 'react';

const Categories = ({ categoriesId, setCategoriesId }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((text, i) => (
          <li
            key={i}
            onClick={() => setCategoriesId(i)}
            className={categoriesId === i ? 'active' : ''}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
