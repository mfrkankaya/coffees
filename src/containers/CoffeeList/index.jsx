import React from 'react'
import classes from './coffee-list.module.scss'
import CoffeesContext from 'src/contexts/CoffeesContext'
import Coffee from '@components/Coffee'

const CoffeeList = () => {
  const { coffees } = React.useContext(CoffeesContext)

  return (
    <ul className={classes.coffeeList}>
      {coffees.map(coffee => (
        <Coffee key={coffee.id} {...coffee} />
      ))}
    </ul>
  )
}

export default CoffeeList
