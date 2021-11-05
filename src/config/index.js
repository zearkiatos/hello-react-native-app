console.log(process.env);
const config = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    JSON_PLACEHOLDER_API_BASE_URL: process.env.JSON_PLACEHOLDER_API_BASE_URL
};

export default config;