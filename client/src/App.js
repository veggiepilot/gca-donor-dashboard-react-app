import SignIn from "./views/signIn";
import Header from "./components/header";
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider 
} from "@apollo/client";

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
