import React from 'react'
import CoffeesContext from 'src/contexts/CoffeesContext'
import classes from './searchbar.module.scss'

const Searchbar = () => {
  const { searchText, setSearchText } = React.useContext(CoffeesContext)

  return (
    <input
      className={classes.searchbar}
      value={searchText}
      onChange={e => setSearchText(e.target.value)}
      placeholder="Search"
    />
  )
}

export default Searchbar
