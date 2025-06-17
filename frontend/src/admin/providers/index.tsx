import {combineDataProviders} from "react-admin";
import postProvider from "./postProvider.tsx";
import pageProvider from "./pageProvider.tsx";
import slideProvider from "./slideProviders.tsx";
import serviceProvider from "./serviceProvider.tsx";

export const dataProvider = combineDataProviders((resource) => {
    switch (resource) {
        case 'posts':
            return postProvider;
        case 'pages':
            return pageProvider;
        case 'slides':
            return slideProvider;
        case 'services':
            return serviceProvider;
        default:
            throw new Error(`Unknown resource: ${resource}`);
    }
});
