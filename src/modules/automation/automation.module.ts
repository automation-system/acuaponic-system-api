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
import { Dht22Service } from "./application/services/dht22.service";
import { CreateDht22UseCase } from "./application/use-cases/dht22/create-dht22.use-case";
import { GetDht22sUseCase } from "./application/use-cases/dht22/get-dht22.use-case";
import { Dht22Repository } from "./domain/repositories/dht22.repository";
import { Dht22PrismaRepository } from "./infrastructure/presistence/dht22.prisma.repository";
import { Dht22Controller } from "./presentation/controllers/dht22-sensor.controller";


@Module({
    imports: [], 
    controllers: [ActuatorController,Dht22Controller],
    providers: [
        PrismaService,

        //Actuator
        ActuatorService,
        CreateActuatorUseCase,
        DeleteActuatorUseCase,
        GetActuatorByIdUseCase,
        GetActuatorsUseCase,
        UpdateActuatorUseCase,
        {
            provide: ActuatorRepository, useClass: ActuatorPrismaRepository
        }, 
        
        //Dht22
        Dht22Service,
        CreateDht22UseCase,
        GetDht22sUseCase,
        {
            provide: Dht22Repository, useClass:Dht22PrismaRepository
        }
    ],
    exports: [],
})
export class AutomationModule {}
