import postService from "../../app/services/postService.tsx";
import {
    CreateParams,
    CreateResult,
    DataProvider, DeleteParams, DeleteResult,
    GetListParams,
    GetListResult, GetOneParams, GetOneResult,
    Identifier,
    RaRecord, UpdateParams, UpdateResult
} from 'react-admin';

interface Post extends RaRecord {
    _id: string;
    id: Identifier;

    [key: string]: any;
}

const postProvider: DataProvider = {
    getList: async <RecordType extends RaRecord = Post>(
        resource: string,
        _params: GetListParams
    ): Promise<GetListResult<RecordType>> => {
        const response = await postService.getPosts();
        return {
            data: response.map((item: any) => ({
                ...item,
                id: item._id,
            })),
            total: response.length,
        };
        throw new Error(`Unknown resource: ${resource}`);
    },
    getOne: async (
        _resource: string,
        params: GetOneParams
    ): Promise<GetOneResult> =>  {
        const response = await postService.getPostById(params.id);

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
        description: string;
        author: string
    }>): Promise<CreateResult<{ name: string; description: string; author: string }>> => {
        const response = await postService.createPost(params.data);
        return {data: {...response, id: response._id},};
    },
    update: async (_resource: string, {id, data}: UpdateParams):Promise<UpdateResult> => {
        const response = await postService.updatePostById(id, data);
        return {
            data: {
                ...response, id: response._id
            }
        }
    },
    updateMany: async () => {
        throw new Error('Not implemented');
    },
    delete: async (_resource:string, {id}: DeleteParams):Promise<DeleteResult> => {
        const response = await postService.deletePostById(id);
        console.log(response, response._id)
        return { data: {id: response._id},}
    },
    deleteMany: async () => {
        throw new Error('Not implemented');
    },

}
export default postProvider;