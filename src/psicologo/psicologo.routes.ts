import { CommonRoutesConfig } from "../common/common.routs.confing";
import PsicologoController from "../psicologo/controller/psicologo.controller";
import PsicologoMiddleware from "../psicologo/middlewares/psicologo.middlewares";
import express from "express";

export class PsicologoRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/Psicologo`)
            .get(PsicologoController.listPsicologo)
            .post(
                PsicologoMiddleware.validateRequiredPsicologoBodyFields,
                PsicologoMiddleware.validatePsicologoRepeated,
                PsicologoController.createPsicologo
            );

            this.app.route(`/clients/:cpf`)
                        .all(PsicologoMiddleware.validatePsicologoExists)
                        .get(PsicologoController.getPsicologotById)
                        .put(
                            PsicologoMiddleware.validateRequiredPsicologoBodyFields,
                            PsicologoController.updatePsicologo
                        )
                        .delete(PsicologoController.removePsicologo);

        return this.app;
    }
}