const express = require("express");
const OAuthClient = require("../oauth-client");

const app = express();
const client = new OAuthClient({
    clientId: "your-client-id",
    clientSecret: "your-client-secret",
    redirectUri: "http://localhost:3000/callback",
    authUrl: "https://example.com/oauth/authorize",
    tokenUrl: "https://example.com/oauth/token",
});

app.get("/callback", async(req, res) => {
    const code = req.query.code;
    try {
        const tokenResponse = await client.getToken(code);
        res.send(tokenResponse);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});