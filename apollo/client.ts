import {
    ApolloClient,
    InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://oneonta.stepzen.net/api/crusty-toucan/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization:
            'Apikey [API_KEY]',
    },
});

export default client;