import IPsicologoDAO from "../daos/psicologo.dao";
import { Read } from "../common/interface/read";
import { IPsicologoDTO } from "../dtos/psicologo.dto";

export class PsicologoCommonService implements Read {
    async readById(resourceId: number): Promise<IPsicologoDTO | undefined> {
        return IPsicologoDAO.buscar(resourceId);
    }
}

export default new PsicologoCommonService();