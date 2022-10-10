import IPacienteDAO from "../../paciente/daos/paciente.dao";
import { Read } from "../../common/interface/read";
import { IPacienteDTO } from "../../paciente/dtos/paciente.dto";

export class PacienteCommonService implements Read {
    async readById(resourceId: number): Promise<IPacienteDTO | undefined> {
        return IPacienteDAO.buscar(resourceId);
    }
}

export default new PacienteCommonService();