const withLess = require("@zeit/next-less");
module.exports = withLess({
    cssModules: true,
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: "secret"
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: "/static",
        mySecret: process.env.MY_SECRET // Pass through env variables
    }
});
