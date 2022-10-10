import { IPessoaDTO } from "../../common/dtos/pessoa.dto";

export interface IPacienteDTO extends IPessoaDTO {
    email: string,
}