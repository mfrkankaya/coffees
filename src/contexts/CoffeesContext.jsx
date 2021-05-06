import React from 'react'
import { getCoffees, getCategories, filterCoffees } from '@helpers/coffees'

const CoffeesContext = React.createContext({
  coffees: [],
  categories: [],
  selectedCategory: null,
  setSelectedCategory: () => null,
  searchText: '',
  setSearchText: () => null
})

const ALL_COFFIES = getCoffees()
const ALL_CATEGORIES = getCategories()

export const CoffeesProvider = ({ children }) => {
  const [coffees, setCoffees] = React.useState(ALL_COFFIES)
  const [selectedCategory, setSelectedCategory] = React.useState('All Coffees')
  const [searchText, setSearchText] = React.useState('')

  React.useEffect(() => {
    setCoffees(
      filterCoffees({ coffees: ALL_COFFIES, selectedCategory, searchText })
    )
  }, [selectedCategory, searchText])

  return (
    <CoffeesContext.Provider
      value={{
        searchText,
        setSearchText,
        selectedCategory,
        setSelectedCategory,
        categories: ALL_CATEGORIES,
        coffees
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

export default CoffeesContext
