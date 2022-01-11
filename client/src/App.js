import SignIn from "./views/signIn";
import Header from "./components/header";
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//import { fa-solid fa-user-graduate } from '@fortawesome/free-solid-svg-icons'


import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider 
} from "@apollo/client";

//library.add(fab, faUserGraduate)


//Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <SignIn/>
    </ApolloProvider>
  )
}

export default App;
