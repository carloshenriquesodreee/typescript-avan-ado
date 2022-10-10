import express from 'express';
import PsicologoService from '../services/psicologo.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:Psicologo-controller');

class PacienteController {
    async listPaciente(req: express.Request, res: express.Response){
        const clients = await PacienteController.list();
        res.status(200).send(clients);
    }

    async getPacientetById(req: express.Request, res: express.Response) {
        const client = await PacienteController.readById(Number(req.params.PacienteId));
        res.status(200).send(client);
    }

    async createPaciente(req: express.Request, res: express.Response) {
        const client = await PacienteController.create(req.body);
        res.status(201).send(client);
    }

    async updatePaciente(req: express.Request, res: express.Response) {
        const client = await PacienteController.updateById(req.body);
        res.status(200).send(client);
    }

    async removePaciente(req: express.Request, res: express.Response) {
        const client = await PsicologoService.deleteById(Number(req.params.cpf));
        res.status(204).send();
    }
}

export default new PacienteController();