import IPsicologoDAO from "../../psicologo/daos/psicologo.dao";
import { List } from "../../common/interface/list";
import { Create } from "../../common/interface/create";
import { Read } from "../../common/interface/read";
import { Update } from "../../common/interface/update";
import { Delete } from "../../common/interface/delete";
import { IPsicologoDTO } from "../../psicologo/dtos/psicologo.dto";
import { PsicologoCommonService } from "../../common/services/psicologos.service";

class PsicologoService extends PsicologoCommonService implements  Read, List, Create, Update, Delete  {
    async  create ( recurso : IPsicologoDTO ) : Promise < IPsicologoDTO >  {
        return  IPsicologoDAO.cadastrar ( recurso ) ;
    }

    async  deleteById ( resourceId : number ) : Promise < void >  {
        return  IPsicologoDAO.excluir ( resourceId ) ;
    }

     async list ( ) : Promise < IPsicologoDTO [ ] >  {
        return  IPsicologoDAO.listar ( ) ;
    }

    async  readById ( resourceId : number ) : Promise < IPsicologoDTO  |  undefined >  {
        return  IPsicologoDAO.buscar ( resourceId ) ;
    }

    async  updateById ( recurso : IPsicologoDTO ) : Promise < IPsicologoDTO  |  undefined >  {
        return  IPsicologoDAO.atualizar ( recurso ) ;
    }
}

export default new PsicologoService (); 






    