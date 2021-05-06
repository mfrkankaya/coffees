import React from 'react'
import classes from '@styles/home.module.scss'
import Searchbar from '@components/Searchbar'
import CategoryList from 'src/containers/CategoryList'
import CoffeeList from 'src/containers/CoffeeList'

const Home = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.drawer}>
        <Searchbar />
        <CategoryList />
      </div>
      <main className={classes.main}>
        <CoffeeList />
      </main>
    </div>
  )
}

export default Home
