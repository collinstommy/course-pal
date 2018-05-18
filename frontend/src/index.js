import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'

import Main from './components/Main'
import LocalizationContext from './utils/context';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


ReactDOM.render(
  
    <ApolloProvider client={client}>
      <LocalizationContext.Provider>
        <Main />
      </LocalizationContext.Provider>
    </ApolloProvider>
  , 
  document.getElementById('root')
)
registerServiceWorker()
