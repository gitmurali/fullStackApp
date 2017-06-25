const env = process.env;

export const logStars = function(message) {
    console.log('**************************');
    console.log(message);
    console.log('**************************');
}

export const nodeEnv = env.NODE_ENV || 'development';

export default {
    port: env.PORT || 8080
};