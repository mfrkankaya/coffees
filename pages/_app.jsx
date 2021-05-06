import { CoffeesProvider } from 'src/contexts/CoffeesContext'
import '../src/styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <CoffeesProvider>
      <Component {...pageProps} />
    </CoffeesProvider>
  )
}

export default MyApp
