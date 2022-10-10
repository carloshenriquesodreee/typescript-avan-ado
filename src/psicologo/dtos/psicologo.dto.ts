import { IPessoaDTO } from "../../common/dtos/pessoa.dto";

export interface IPsicologoDTO extends IPessoaDTO {
    numeroDePacientes: number,
    dataContratacao: Date,
    observacoes: string
}