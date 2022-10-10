import { IPacienteDTO } from "../dtos/paciente.dto";
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class IPacienteDAO {
    private static _instance: IPacienteDAO;
    private _paciente: IPacienteDTO[];

    private constructor(){
        this._paciente = [];
        log('Criando nova instancia de IPsicologoDAO');
    }

    public static getInstance(): IPacienteDAO {
        if (!IPacienteDAO._instance) {
            IPacienteDAO._instance = new IPacienteDAO();
        }

        return IPacienteDAO._instance;
    }

    cadastrar(paciente: IPacienteDTO): IPacienteDTO {
        let objPessoa;
        
        paciente.indexId = this._paciente.length;
        objPessoa = paciente;
        this._paciente.push(objPessoa);

        return objPessoa;
    }

    atualizar(paciente: IPacienteDTO): IPacienteDTO | undefined {
        let objPessoa;
        
        objPessoa = paciente;

        if(objPessoa.indexId === undefined)
            return;
        
        this._paciente[objPessoa.indexId] = objPessoa;

        return objPessoa;
    }

    listar(): (IPacienteDTO)[] {
        let objPessoas: (IPacienteDTO)[] = [];

        for(let paciente of this._paciente)
            objPessoas.push(paciente);

        return objPessoas;
    }

    excluir(cpf: number): void {

        const indexId = this._paciente.findIndex((obj: IPacienteDTO) => {
            if('cpf' in obj)
                return obj.cpf === cpf;
            else   
                return obj.cpf === cpf;
        });
        log(`Delete Index: ${indexId}`);
        this._paciente.splice(indexId, 1);
    }

    buscar(cpf: number): IPacienteDTO | undefined {

        const paciente = this._paciente.find((obj: IPacienteDTO) => {
            if('cpf' in obj)
                return obj.cpf === cpf;
            else   
                return obj.cpf === cpf;
        });

        if(!paciente)
            return;

        return paciente;
    }
}

export default IPacienteDAO.getInstance();