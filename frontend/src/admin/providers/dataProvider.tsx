import postService from "../../app/services/postService.tsx";
import {DataProvider, GetListParams, GetListResult, Identifier, RaRecord} from 'react-admin';

interface Post extends RaRecord {
    _id: string;
    id: Identifier;
    [key: string]: any;
}

const dataProvider: DataProvider = {
    getList: async <RecordType extends RaRecord = Post>(
        resource: string,
        _params: GetListParams
    ): Promise<GetListResult<RecordType>> => {
        if (resource === 'posts') {
            const response = await postService.getPosts();
            return {
                data: response.map((item: any) => ({
                    ...item,
                    id: item._id,
                })),
                total: response.length,
            };
        }
        throw new Error(`Unknown resource: ${resource}`);
    },
    getOne: async () => { throw new Error('Not implemented'); },
    getMany: async () => { throw new Error('Not implemented'); },
    getManyReference: async () => { throw new Error('Not implemented'); },
    create: async () => { throw new Error('Not implemented'); },
    update: async () => { throw new Error('Not implemented'); },
    updateMany: async () => { throw new Error('Not implemented'); },
    delete: async () => { throw new Error('Not implemented'); },
    deleteMany: async () => { throw new Error('Not implemented'); },

}
export default dataProvider;