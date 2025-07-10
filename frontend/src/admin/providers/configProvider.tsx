import {
    CreateParams, CreateResult,
    DataProvider, DeleteParams, DeleteResult,
    GetListParams,
    GetListResult,
    GetOneParams,
    GetOneResult,
    Identifier,
    RaRecord, UpdateParams, UpdateResult
} from "react-admin";
import configService from "../../app/services/configService.tsx";

interface Config extends RaRecord {
    _id: string;
    id: Identifier;
    [key: string]: any;
}

const configProvider: DataProvider = {
    getList: async <RecordType extends RaRecord = Config>(
        resource: string,
        _params: GetListParams
    ): Promise<GetListResult<RecordType>> => {
        const response = await configService.getConfig();
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
        const response = await configService.getConfigById(params.id);

        return {data: {...response, id: response._id}}
    },
    getMany: async () => {
        throw new Error('Not implemented');
    },
    getManyReference: async () => {
        throw new Error('Not implemented');
    },
    create: async (_resource: string, params: CreateParams<any>): Promise<CreateResult<any>> => {
        const response = await configService.createConfig(params.data);
        return {data: {...response, id: response._id}};
    },
    update: async (_resource: string, { id, data }: UpdateParams): Promise<UpdateResult> => {
        const response = await configService.updateConfig(id as string, data);
        return { data: { ...response, id: response._id } };
    },
    updateMany: async () => {
        throw new Error('Not implemented');
    },
    delete: async (_resource: string, { id }: DeleteParams): Promise<DeleteResult> => {
        const response = await configService.deleteConfig(id as string);
        return { data: { id: response._id } };
    },
    deleteMany: async () => {
        throw new Error('Not implemented');
    },

}
export default configProvider;