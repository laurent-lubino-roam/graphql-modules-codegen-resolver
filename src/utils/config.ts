// You should not use .env files in your production environment
// though and rather set the values directly on the respective host.
// Therefore, you we want to wrap the dotenv load statement in an if-statement
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}

export const INTROSPECTION_ENABLED = process.env['INTROSPECTION_ENABLED'] === 'true';
export const SERVER_PORT = process.env['SERVER_PORT'] ?? 4000;
export const QUERY_DEPTH_LIMIT = process.env['QUERY_DEPTH_LIMIT'] ? parseInt(process.env['QUERY_DEPTH_LIMIT']) : 10;
