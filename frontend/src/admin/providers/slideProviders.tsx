import {
    DataProvider, DeleteParams, DeleteResult,
    GetListParams,
    GetListResult,
    GetOneParams,
    GetOneResult,
    Identifier,
    RaRecord, UpdateParams, UpdateResult
} from "react-admin";
import slideService from "../../app/services/slideService.tsx";

interface Slide extends RaRecord {
    _id: string;
    id: Identifier;
    [key: string]: any;
}

const slideProvider: DataProvider = {
    getList: async <RecordType extends RaRecord = Slide>(
        resource: string,
        _params: GetListParams
    ): Promise<GetListResult<RecordType>> => {
        const response = await slideService.getSlides();
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
        const response = await slideService.getSlideById(params.id);

        return {data: {...response, id: response._id}}
    },
    getMany: async () => {
        throw new Error('Not implemented');
    },
    getManyReference: async () => {
        throw new Error('Not implemented');
    },
    // create: async (resource: string, params: CreateParams<{
    //     title: string;
    //     description: string
    // }>): Promise<CreateResult<{ title: string; description: string }>> => {
    //     const response = await postService.createPost(params.data);
    //     return {data: {...response, id: response._id},};
    // },
    update: async (_resource: string, {id, data}: UpdateParams):Promise<UpdateResult> => {

        const response = await slideService.updateSlideById(id, data);

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

        const response = await slideService.deleteSlideById(id);

        return { data: {id: response._id},}
    },
    deleteMany: async () => {
        throw new Error('Not implemented');
    },

}
export default slideProvider;