import {
    CreateParams,
    CreateResult,
    DataProvider, DeleteParams, DeleteResult,
    GetListResult,
    GetOneParams,
    GetOneResult,
    Identifier,
    RaRecord
} from "react-admin";
import benefitService from "../../app/services/benefitService.tsx";
import configService from "../../app/services/configService.tsx";

interface Benefit extends RaRecord {
    _id: string,
    id: Identifier;
    [key: string]: any;
}

const benefitProvider: DataProvider = {
    getList: async <RecordType extends RaRecord = Benefit>(

    ): Promise<GetListResult<RecordType>> => {
        const response = await benefitService.getBenefits();
        return  {
            data: response.map((item: any) => ({
                ...item,
                    id: item._id,
            })),
            total: response.length,
        }
    },
    getOne: async (
        _resource: string,
        params: GetOneParams
    ): Promise<GetOneResult> =>  {
        const response = await benefitService.getBenefitById(params.id);
        return {data: {...response, id: response._id}}
    },
    create: async (_resource: string, params: CreateParams<any>): Promise<CreateResult<any>> => {
        const response = await benefitService.createBenefit(params.data);
        return {data: {...response, id: response._id}};
    },
    delete: async (_resource: string, { id }: DeleteParams): Promise<DeleteResult> => {
        const response = await benefitService.deleteBenefit(id as string);
        return { data: { id: response._id } };
    }
}

export default benefitProvider