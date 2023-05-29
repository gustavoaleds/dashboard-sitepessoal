import api from './api';

export interface Projetos{
    id: number;
    nome: string;
    descricao: string;
    link: string;
}

export async function createProjetos(projetos:Projetos): Promise<Projetos>{
    const response = await api.post<Projetos>('/projetos', projetos);
    return response.data;
}

export async function getProjetos(): Promise<Projetos[]> {
    const response = await api.get<Projetos[]>('/projetos');
    return response.data;
}

export const updateProjeto = async (projetos: Projetos) => {
    const response = await api.put(`/projetos/${projetos.id}`, projetos);
    return response.data
}

export const deleteProjeto = async (id: number) => {
    const response = await api.delete(`/projetos/${id}`);
    return response.data;
}

export const createOrEditProjeto = async (projetos: Projetos) => {
    if (projetos.id === 0){
        return await createProjetos(projetos);
    }else {
        return await updateProjeto(projetos)
    }
}