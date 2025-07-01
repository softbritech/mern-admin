
export const FETCH_CONFIG_SUCCESS = "FETCH_CONFIG_SUCCESS";
export const FETCH_CONFIG_PENDING = "FETCH_CONFIG_PENDING";
export const FETCH_CONFIG_FAILURE = "FETCH_CONFIG_FAILURE";


interface SiteConfig {
    _id: string;
    group: string;
    key: string;
    value: string | string[];
    lang: string;
}