import {
    CreateParams, CreateResult,
    DataProvider, DeleteParams, DeleteResult,
    GetListParams,
    GetListResult,
    GetOneParams,
    GetOneResult,
    Identifier,
    RaRecord, UpdateParams, UpdateResult
} from 'react-admin';
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
        const { image, ...otherData } = params.data;

        const formData = new FormData();

        Object.entries(otherData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        if (image && image.rawFile instanceof File) {
            formData.append('image', image.rawFile);
        }

        const response = await pageService.createPage(formData);

        return {data: {...response, id: response._id},};
    },
    update: async (_resource: string, {id, data}: UpdateParams):Promise<UpdateResult> => {
        const { image, ...rest } = data;

        if (image && image.rawFile && image.rawFile instanceof File) {
            const formData = new FormData();

            Object.entries(rest).forEach(([key, value]) => {
                formData.append(key, value);
            });

            formData.append('image', image.rawFile, image.rawFile.name);


            const response = await pageService.updatePageById(id, formData);
            return {
                data: {
                    ...response, id: response._id
                }
            };
        }

        const response = await pageService.updatePageById(id, rest);

        return {
            data: {
                ...response, id: response._id
            }
        };
    },
    updateMany: async () => {
        throw new Error('Not implemented');
    },
    delete: async (_resource: string, { id }: DeleteParams):Promise<DeleteResult> =>
    {
        const response = await pageService.deletePage(id);
        return {
            data: {
                 id: response._id
            }
        }
    },
    deleteMany: async () => {
        throw new Error('Not implemented');
    },

}
export default pageProvider;