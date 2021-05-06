import Category from '@components/Category'
import React from 'react'
import CoffeesContext from 'src/contexts/CoffeesContext'
import classes from './category-list.module.scss'

const CategoryList = () => {
  const { categories } = React.useContext(CoffeesContext)

  return (
    <ul className={classes.categoryList}>
      {categories.map(category => (
        <Category key={category} category={category} />
      ))}
    </ul>
  )
}

export default CategoryList
