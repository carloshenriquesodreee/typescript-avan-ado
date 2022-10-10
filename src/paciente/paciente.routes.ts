import { CommonRoutesConfig } from "../common/common.routs.confing";
import PacienteController from "../paciente/controller/paciente.controller";
import PacienteMiddleware from "../paciente/middlewares/paciente.middlewares";
import express from "express";

export class PacienteRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/Paciente`)
            .get(PacienteController.listPaciente)
            .post(
                PacienteMiddleware.validateRequiredPacienteBodyFields,
                PacienteMiddleware.validatePacienteRepeated,
                PacienteController.createPaciente
            );

            this.app.route(`/clients/:cpf`)
                        .all(PacienteMiddleware.validatePacienteExists)
                        .get(PacienteController.getPacientetById)
                        .put(
                            PacienteMiddleware.validateRequiredPacienteBodyFields,
                            PacienteController.updatePaciente
                        )
                        .delete(PacienteController.removePaciente);

        return this.app;
    }
}