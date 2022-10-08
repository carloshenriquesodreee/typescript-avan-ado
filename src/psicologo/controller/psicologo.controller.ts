import express from 'express';
import PsicologoService from '../services/psicologo.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:Psicologo-controller');

class PsicologoController {
    async listPsicologo(req: express.Request, res: express.Response){
        const clients = await PsicologoService.list();
        res.status(200).send(clients);
    }

    async getPsicologotById(req: express.Request, res: express.Response) {
        const client = await PsicologoService.readById(Number(req.params.PsicologoId));
        res.status(200).send(client);
    }

    async createPsicologo(req: express.Request, res: express.Response) {
        const client = await PsicologoService.create(req.body);
        res.status(201).send(client);
    }

    async updatePsicologo(req: express.Request, res: express.Response) {
        const client = await PsicologoService.updateById(req.body);
        res.status(200).send(client);
    }

    async removePsicologo(req: express.Request, res: express.Response) {
        const client = await PsicologoService.deleteById(Number(req.params.cpf));
        res.status(204).send();
    }
}

export default new PsicologoController();