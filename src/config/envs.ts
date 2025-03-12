import "dotenv/config";
import * as joi from "joi";

interface EnvVars {
    PORT:number;
    CONSUMER_SERVICE_HOST : string;
    CONSUMER_SERVICE_PORT : number;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    CONSUMER_SERVICE_HOST : joi.string().required(),
    CONSUMER_SERVICE_PORT : joi.number().required()
})
    .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if ( error ) {
    throw new Error (`Config validation error : ${error.message}`);
}
const envVars:EnvVars = value;
console.log('PORT', process.env.PORT );


export const envs = {
    port: process.env.PORT,
    consumerMicroserviceHost: process.env.CONSUMER_SERVICE_HOST,
    consumerMicroservicePort: process.env.CONSUMER_SERVICE_PORT,
}