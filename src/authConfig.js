// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
    clientId: "d03226e5-1547-426a-8f2c-95722e00d42f",
    authority:
      "https://login.microsoftonline.com/68b865d5-cf18-4b2b-82a4-a4eddb9c5237",
    redirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "https://metis.uat.oceanusorigin.com/",
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
