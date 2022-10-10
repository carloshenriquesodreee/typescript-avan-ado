import IPacienteDAO from "../../paciente/daos/paciente.dao";
import { List } from "../../common/interface/list";
import { Create } from "../../common/interface/create";
import { Read } from "../../common/interface/read";
import { Update } from "../../common/interface/update";
import { Delete } from "../../common/interface/delete";
import { IPacienteDTO } from "../../paciente/dtos/paciente.dto";
import { PacienteCommonService } from "../../common/services/paciente.service";

class PacienteService extends PacienteCommonService implements  Read, List, Create, Update, Delete  {
    async  create ( recurso : IPacienteDTO ) : Promise < IPacienteDTO >  {
        return  IPacienteDAO.cadastrar ( recurso ) ;
    }

    async  deleteById ( resourceId : number ) : Promise < void >  {
        return  IPacienteDAO.excluir ( resourceId ) ;
    }

     async list ( ) : Promise < IPacienteDTO [ ] >  {
        return  IPacienteDAO.listar ( ) ;
    }

    async  readById ( resourceId : number ) : Promise < IPacienteDTO  |  undefined >  {
        return  IPacienteDAO.buscar ( resourceId ) ;
    }

    async  updateById ( recurso : IPacienteDTO ) : Promise < IPacienteDTO |  undefined >  {
        return  IPacienteDAO.atualizar ( recurso ) ;
    }
}

export default new PacienteService (); 

