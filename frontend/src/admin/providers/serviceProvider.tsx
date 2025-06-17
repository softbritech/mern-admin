import {
    CreateParams, CreateResult,
    DataProvider, DeleteParams, DeleteResult,
    GetListParams,
    GetListResult,
    GetOneParams,
    GetOneResult, Identifier,
    RaRecord, UpdateParams, UpdateResult
} from "react-admin";
import serviceService from "../../app/services/serviceService.tsx";


interface Service extends RaRecord {
    _id: string;
    id: Identifier;

    [key: string]: any;
}

const serviceProvider: DataProvider = {
    getList: async <RecordType extends RaRecord = Service>(
        resource: string,
        _params: GetListParams
    ): Promise<GetListResult<RecordType>> => {
        const response = await serviceService.getServices();
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
        const response = await serviceService.getServiceById(params.id);

        return {data: {...response, id: response._id}}
    },
    getMany: async () => {
        throw new Error('Not implemented');
    },
    getManyReference: async () => {
        throw new Error('Not implemented');
    },
    create: async (resource: string, params: CreateParams<{
        title: string;
        description: string
    }>): Promise<CreateResult<{ title: string; description: string }>> => {
        const response = await serviceService.createService(params.data);
        return {data: {...response, id: response._id},};
    },
    update: async (_resource: string, {id, data}: UpdateParams):Promise<UpdateResult> => {
        const response = await serviceService.updateServiceById(id, data);
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
        const response = await serviceService.deleteServiceById(id);
        console.log(response, response._id)
        return { data: {id: response._id},}
    },
    deleteMany: async () => {
        throw new Error('Not implemented');
    },

}
export default serviceProvider;