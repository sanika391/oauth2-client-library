const axios = require("axios");

class OAuthClient {
    constructor({ clientId, clientSecret, redirectUri, authUrl, tokenUrl }) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.redirectUri = redirectUri;
        this.authUrl = authUrl;
        this.tokenUrl = tokenUrl;
    }

    getAuthUrl(scope) {
        const params = new URLSearchParams({
            response_type: "code",
            client_id: this.clientId,
            redirect_uri: this.redirectUri,
            scope,
        });
        return `${this.authUrl}?${params.toString()}`;
    }

    async getToken(code) {
        const response = await axios.post(this.tokenUrl, {
            grant_type: "authorization_code",
            code,
            client_id: this.clientId,
            client_secret: this.clientSecret,
            redirect_uri: this.redirectUri,
        });
        return response.data;
    }

    async refreshToken(refreshToken) {
        const response = await axios.post(this.tokenUrl, {
            grant_type: "refresh_token",
            refresh_token: refreshToken,
            client_id: this.clientId,
            client_secret: this.clientSecret,
        });
        return response.data;
    }
}

module.exports = OAuthClient;