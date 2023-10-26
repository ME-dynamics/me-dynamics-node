import * as httpResultSuccess from "./success";
import * as httpResultClientError from "./clientError";
import * as httpResultInformation from "./information";
import * as httpResultServerError from "./serverError";
import * as httpResultRedirection from "./redirection";
export declare const httpResult: {
    success: typeof httpResultSuccess;
    clientError: typeof httpResultClientError;
    information: typeof httpResultInformation;
    serverError: typeof httpResultServerError;
    redirection: typeof httpResultRedirection;
};
