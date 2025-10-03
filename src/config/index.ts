export const graphQLHost = process.env.GRAPHQL_HOST

export const GRAPHQL_SERVER_HOST = {
  DCT: `${process.env.GRAPHQL_HOST}/graphql/query`,
  IDM: `${process.env.GRAPHQL_HOST_IDM}/query`
}

export const idmHost = process.env.IDM_HOST
export const dctHost = process.env.DCT_HOST
export const authHost = process.env.AUTH_HOST

// TODO: Update with real domain
export const ALLOWED_DOMAINS = ['xtrip.link', 'xapiens.id', 'localhost', 'tripatra.com']
