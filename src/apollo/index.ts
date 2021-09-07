import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { WebSocketLink } from '@apollo/client/link/ws';
import { RetryLink } from '@apollo/client/link/retry';
import { getMainDefinition } from '@apollo/client/utilities';

import { setContext } from '@apollo/client/link/context';
import { getAccessToken } from '../utils/secure-store';

const client = new SubscriptionClient('ws://localhost:3333/graphql', {
  reconnect: true,
  connectionParams: async () => {
    try {
      const accessToken = await getAccessToken();

      if (!accessToken?.length) {
        return {};
      }

      return {
        authorization: `Bearer ${accessToken}`,
      };
    } catch (error) {
      console.log('error ', error);
      return {};
    }
  },
});

const httpLink = new HttpLink({
  uri: 'http://localhost:3333/graphql',
});

const wsLink = new WebSocketLink(client);

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const retryLink = new RetryLink({ attempts: { max: 3 } }).split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const asyncAuthLink = setContext(async (_, context) => {
  const { headers } = context;

  const accessToken = await getAccessToken();

  if (!accessToken) {
    return context;
  }

  return {
    ...context,
    headers: {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };
});

const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation }) => {
    if (graphQLErrors) {
      try {
        console.error(
          `%c [${operation.operationName} Error]: `,
          'color: red',
          JSON.parse(JSON.stringify(graphQLErrors)),
          ' with operation',
          operation,
        );

        const errors = graphQLErrors.map((error) => {
          const message =
            error.extensions?.exception?.response?.error || error.message;
          return {
            ...error,
            message: typeof message === 'object' ? message?.message : message,
          };
        });

        if (response) {
          response.errors = errors;
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (networkError) {
      try {
        const parsedNetworkError = JSON.parse(JSON.stringify(networkError));
        console.log('parsedNetworkError', parsedNetworkError);
      } catch (error) {
        console.error(error);
      }
    }
  },
);

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([asyncAuthLink, errorLink, retryLink]),
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      notifyOnNetworkStatusChange: true,
    },
  },
});
