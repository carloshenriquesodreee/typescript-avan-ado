import express from 'express';
import PacienteService from '../../common/services/paciente.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-middleware');

class PacienteMiddleware {
    async validateRequiredPacienteBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
        if (req.body && (req.body.cpf || req.body.cnpj)) {
            next();
        } else {
            res.status(400).send({error: `Você deve enviar o campo cpf ou cnpj.`});
        }
    }

    async validatePacienteExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await PacienteService.readById(Number(req.params.cpfCnpj));
        if (user) {
            next();
        } else {
            res.status(404).send({error: `Usuário ${req.params.cpfCnpj} não existe`});
        }
    }

    async validatePacienteRepeated(req: express.Request, res: express.Response, next: express.NextFunction) {
        let resourceID: number = ('cpf' in req.body ? req.body.cpf : req.body.cnpj);
        const user = await PacienteService.readById(resourceID);
        if (!user) {
            next();
        } else {
            res.status(409).send({error: `Usuário ${resourceID} já existe existe`});
        }
    }
}

export default new PacienteMiddleware();