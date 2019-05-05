import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import { connect } from 'react-redux';

import './App.css';

const EXAMPLE_QUERY = gql`
  {
    pokemon(name: "Pikachu") {
      id
      number
      name
      attacks {
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

const App = () => (
  <Query query={EXAMPLE_QUERY}>
    {({ data, loading }) => {
      if (loading) {
        return <div>Loading ...</div>;
      }

      return (
        <pre>
          {JSON.stringify(data, null, "\t")}
        </pre>
      );
    }}
  </Query>
);
export default App;
