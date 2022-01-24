import React from 'react';
import { Button } from 'semantic-ui-react';
import {ApolloProvider} from "@apollo/client";
import client from "./config/apollo.js";


export default function App() {
  return (
    <ApolloProvider client={client}>
        <div>
          <h1>Estamos en App.js</h1>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
        </div>
    </ApolloProvider>
  );
}


