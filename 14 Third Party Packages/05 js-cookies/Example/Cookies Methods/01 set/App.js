
// import Cookies for storing data on client-side with expiry duration.
import Cookies from 'js-cookie'


// Functional Component
const App = () => {
  // set data with cookies
  Cookies.set('ACCESS_TOKEN', '123456789', {expires: 1})

  return (
    <h1>JWT Token</h1>
  )
  
  }

export default App

