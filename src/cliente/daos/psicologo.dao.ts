import { IPsicologoDTO } from "../dtos/psicologo.dto";
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class IPsicologoDAO {
    private static _instance: IPsicologoDAO;
    private _psicologo: IPsicologoDTO[];

    private constructor(){
        this._psicologo = [];
        log('Criando nova instancia de IPsicologoDAO');
    }

    public static getInstance(): IPsicologoDAO {
        if (!IPsicologoDAO._instance) {
            IPsicologoDAO._instance = new IPsicologoDAO();
        }

        return IPsicologoDAO._instance;
    }

    cadastrar(psicologo: IPsicologoDTO): IPsicologoDTO {
        let objPessoa;
        
        psicologo.indexId = this._psicologo.length;
        objPessoa = psicologo;
        this._psicologo.push(objPessoa);

        return objPessoa;
    }

    atualizar(psicologo: IPsicologoDTO): IPsicologoDTO | undefined {
        let objPessoa;
        
        objPessoa = psicologo;

        if(objPessoa.indexId === undefined)
            return;
        
        this._psicologo[objPessoa.indexId] = objPessoa;

        return objPessoa;
    }

    listar(): (IPsicologoDTO)[] {
        let objPessoas: (IPsicologoDTO)[] = [];

        for(let psicologo of this._psicologo)
            objPessoas.push(psicologo);

        return objPessoas;
    }

    excluir(cpf: number): void {

        const indexId = this._psicologo.findIndex((obj: IPsicologoDTO) => {
            if('cpf' in obj)
                return obj.cpf === cpf;
            else   
                return obj.cpf === cpf;
        });
        log(`Delete Index: ${indexId}`);
        this._psicologo.splice(indexId, 1);
    }

    buscar(cpf: number): IPsicologoDTO | undefined {

        const psicologo = this._psicologo.find((obj: IPsicologoDTO) => {
            if('cpf' in obj)
                return obj.cpf === cpf;
            else   
                return obj.cpf === cpf;
        });

        if(!psicologo)
            return;

        return psicologo;
    }
}

export default IPsicologoDAO.getInstance();