import {DataProvider, GetListParams, GetListResult, Identifier, RaRecord} from 'react-admin';
import pageService from "../../app/services/pageService.tsx";

interface Page extends RaRecord {
    _id: string;
    id: Identifier;

    [key: string]: any;
}

const pageProvider: DataProvider = {
    getList: async <RecordType extends RaRecord = Page>(
        resource: string,
        _params: GetListParams
    ): Promise<GetListResult<RecordType>> => {
        const response = await pageService.getPages();
        return {
            data: response.map((item: any) => ({
                ...item,
                id: item._id,
            })),
            total: response.length,
        };

    },
    getOne: async () => {
        throw new Error('Not implemented');
    },
    getMany: async () => {
        throw new Error('Not implemented');
    },
    getManyReference: async () => {
        throw new Error('Not implemented');
    },
    create: async () => {
        throw new Error('Not implemented');
    },
    update: async () => {
        throw new Error('Not implemented');
    },
    updateMany: async () => {
        throw new Error('Not implemented');
    },
    delete: async () => {
        throw new Error('Not implemented');
    },
    deleteMany: async () => {
        throw new Error('Not implemented');
    },

}
export default pageProvider;