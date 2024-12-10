const OAuthClient = require("../oauth-client");

const client = new OAuthClient({
    clientId: "your-client-id",
    clientSecret: "your-client-secret",
    redirectUri: "http://localhost:3000/callback",
    authUrl: "https://example.com/oauth/authorize",
    tokenUrl: "https://example.com/oauth/token",
});

document.getElementById("login-btn").onclick = () => {
    window.location.href = client.getAuthUrl("profile email");
};