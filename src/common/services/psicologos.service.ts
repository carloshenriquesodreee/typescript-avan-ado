import IPsicologoDAO from "../../psicologo/daos/psicologo.dao";
import { Read } from "../../common/interface/read";
import { IPsicologoDTO } from "../../psicologo/dtos/psicologo.dto";

export class PsicologoCommonService implements Read {
    async readById(resourceId: number): Promise<IPsicologoDTO | undefined> {
        return IPsicologoDAO.buscar(resourceId);
    }
}

export default new PsicologoCommonService();