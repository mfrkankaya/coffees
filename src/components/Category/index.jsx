import React from 'react'
import classes from './category.module.scss'
import classNames from 'classnames'
import capitalize from '@helpers/capitalize'
import CoffeesContext from 'src/contexts/CoffeesContext'

const Category = ({ category }) => {
  const { selectedCategory, setSelectedCategory } = React.useContext(
    CoffeesContext
  )

  const isSelected = selectedCategory === category

  return (
    <li
      onClick={() => setSelectedCategory(category)}
      className={classNames(classes.category, {
        [classes.selected]: isSelected
      })}
    >
      {capitalize(category)}
    </li>
  )
}

export default Category
