import {
    CreateParams, CreateResult,
    DataProvider,
    GetListParams,
    GetListResult,
    GetOneParams,
    GetOneResult,
    Identifier,
    RaRecord, UpdateParams, UpdateResult
} from 'react-admin';
import pageService from "../../app/services/pageService.tsx";
import postService from "../../app/services/postService.tsx";

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
    getOne: async (
        _resource: string,
        params: GetOneParams
    ): Promise<GetOneResult> =>  {
        const response = await pageService.getPageById(params.id);

        return {data: {...response, id: response._id}}
    },
    getMany: async () => {
        throw new Error('Not implemented');
    },
    getManyReference: async () => {
        throw new Error('Not implemented');
    },
    create: async (resource: string, params: CreateParams<{
        name: string;
        description: string
    }>): Promise<CreateResult<{ name: string; description: string }>> => {
        const response = await pageService.createPost(params.data);
        return {data: {...response, id: response._id},};
    },
    update: async (_resource: string, {id, data}: UpdateParams):Promise<UpdateResult> => {
        const response = await pageService.updatePostById(id, data);
        return {
            data: {
                ...response, id: response._id
            }
        }
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