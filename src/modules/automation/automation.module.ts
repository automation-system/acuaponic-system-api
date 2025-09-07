import { Module } from "@nestjs/common";
import { PrismaService } from "src/config/prisma.service";
import { ActuatorService } from "./application/services/actuator.service";
import { CreateActuatorUseCase } from "./application/use-cases/actuator/create-actuator.use-case";
import { DeleteActuatorUseCase } from "./application/use-cases/actuator/delete-actuator.use-case";
import { GetActuatorByIdUseCase } from "./application/use-cases/actuator/get-actuator-by-id.use-case";
import { GetActuatorsUseCase } from "./application/use-cases/actuator/get-actuator.use-case";
import { UpdateActuatorUseCase } from "./application/use-cases/actuator/update-actuator.use-case";
import { ActuatorRepository } from "./domain/repositories/actuator.repository";
import { ActuatorPrismaRepository } from "./infrastructure/presistence/actuator.prisma.repository";
import { ActuatorController } from "./presentation/controllers/actuator.controller";


@Module({
    imports: [], 
    controllers: [ActuatorController],
    providers: [
        PrismaService,
        ActuatorService,
        CreateActuatorUseCase,
        DeleteActuatorUseCase,
        GetActuatorByIdUseCase,
        GetActuatorsUseCase,
        UpdateActuatorUseCase,
        {
            provide:ActuatorRepository,useClass:ActuatorPrismaRepository
        }        
    ],
    exports: [],
})
export class AutomationModule {}
