export const FETCH_SERVICES_SUCCESS = "FETCH_SERVICES_SUCCESS";
export const FETCH_SERVICES_PENDING = "FETCH_SERVICES_PENDING";
export const FETCH_SERVICES_FAILURE = "FETCH_SERVICES_FAILURE";

export interface Service {
    _id: string;
    id: string;
    title: string;
    [key: string]: any;
}