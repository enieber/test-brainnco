const fetch = require("node-fetch");

// execute the parent operation in Hasura
const execute = async (variables, query) => {
  const meta = {
    "Content-Type": "application/json",
  };
  const headers = meta
  const baseUrl = process.env.GITHUB_API_URL;
  if (!baseUrl) {
    throw new Error('InternalServerError');
  }
  const fetchResponse = await fetch(`${baseUrl}/v1/graphql`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );
  const data = await fetchResponse.json();
  return data;
};

module.exports = execute
