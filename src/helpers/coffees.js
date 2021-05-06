import coffees from '@db/coffees'

export const getCoffees = () => coffees

export const getCategories = () => [
  ...coffees.reduce(
    (acc, current) => acc.add(current.category),
    new Set(['All Coffees'])
  )
]

export const filterCoffees = ({ coffees, selectedCategory, searchText }) => {
  if (!searchText && !selectedCategory) return coffees

  return coffees.filter(coffee => {
    if (
      selectedCategory !== 'All Coffees' &&
      selectedCategory !== coffee.category
    ) {
      return false
    }

    if (
      searchText &&
      !coffee.title.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return false
    }

    return true
  })
}
