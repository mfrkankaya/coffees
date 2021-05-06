import React from 'react'
import classes from './coffee.module.scss'

const Coffee = ({ title, description, ingredients }) => {
  return (
    <div className={classes.coffee}>
      <div className={classes.title}>{title}</div>
      <div className={classes.desc}>{description}</div>
      <div className={classes.ingredients}>
        Ingredients: {ingredients.join(', ')}
      </div>
    </div>
  )
}

export default Coffee
