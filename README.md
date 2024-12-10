# OAuth2 Client Library

## Introduction
This project is a JavaScript client library that facilitates the OAuth 2.0 authorization flow. The library is designed to be platform-agnostic, functioning in both server and browser environments, and supports integration with various OAuth providers. A demo application is included to demonstrate the library's functionality.

## Features
- OAuth 2.0 Authorization Code Flow
- Works in both browser and server environments
- Flexible for various OAuth providers (e.g., Auth0, Clerk, Kinde)
- Secure token management
- Demo application with a login button and user information display

## Library Methods
The library exports the following methods:

### `startAuthFlow(client: OAuthClient): string`
Generates the authorization URL to initiate the OAuth flow.

### `handleCallback(client: OAuthClient, callbackParams: object): Promise<TokenResponse>`
Handles the callback from the OAuth provider and retrieves tokens.

### `refreshToken(client: OAuthClient, refreshToken: string): Promise<TokenResponse>`
Uses a refresh token to obtain a new access token.

## Demo Application
The demo application demonstrates how to:
1. Use the library to initiate the OAuth flow.
2. Handle the callback to manage tokens securely.
3. Display user information after successful authentication.

### Features
- Login button to start the OAuth flow.
- Callback handling for token retrieval.
- User information display post-authentication.

## Installation

### Clone the Repository
```bash
git clone https://github.com/yourusername/oauth2-client-library.git
cd oauth2-client-library
```

### Install Dependencies
```bash
npm install
```

## Usage

### Environment Setup
Create a `.env` file in the root directory with the following variables:
```env
CLIENT_ID=your-client-id
CLIENT_SECRET=your-client-secret
REDIRECT_URI=http://localhost:3000/callback
AUTH_URL=https://example.com/oauth/authorize
TOKEN_URL=https://example.com/oauth/token
```

### Library Example
Use the OAuth2 client library in your project:
```javascript
const OAuthClient = require('./src/oauth-client');

const client = new OAuthClient({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
    authUrl: process.env.AUTH_URL,
    tokenUrl: process.env.TOKEN_URL,
});

// Generate the authorization URL
const authUrl = client.getAuthUrl('profile email');
console.log('Visit this URL to authenticate:', authUrl);

// Handle callback and retrieve tokens
async function handleCallback(callbackParams) {
    const tokenResponse = await client.getToken(callbackParams.code);
    console.log('Access Token:', tokenResponse.access_token);
}
```

### Run the Demo Application
1. Start the demo application server:
   ```bash
   node src/demo/server.js
   ```
2. Visit `http://localhost:3000` in your browser to test the login flow.

## Optional Server-Side Implementation
For advanced use cases, you can:
- Handle the OAuth flow server-side.
- Set tokens as cookies after successful authorization.
- Integrate the library with a server-rendered React application (SSR).

## Security Considerations
- Use environment variables to store sensitive credentials.
- Implement HTTPS for secure communication.
- Validate and sanitize callback parameters to prevent attacks.

## Challenges
- Handling browser and server environments required designing platform-agnostic methods.
- Ensuring secure storage and transmission of tokens.

## Resources
- [OAuth 2.0 specification](https://oauth.net/2/)
- [OAuth.com Documentation](https://www.oauth.com/)

## Questions
For any clarifications, feel free to reach out at [sudhanshu@noscrubs.io](mailto:sudhanshu@noscrubs.io).

## License
This project is licensed under the [MIT License](LICENSE).
