import {combineDataProviders} from "react-admin";
import postProvider from "./postProvider.tsx";
import pageProvider from "./pageProvider.tsx";

export const dataProvider = combineDataProviders((resource) => {
    switch (resource) {
        case 'posts':
            return postProvider;
        case 'pages':
            return pageProvider;
        default:
            throw new Error(`Unknown resource: ${resource}`);
    }
});
