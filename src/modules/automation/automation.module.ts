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
import { Ds18b20Controller } from "./presentation/controllers/ds18b20-sensor.controller";
import { Ds18b20Service } from "./application/services/ds18b20.service";
import { CreateDs18b20UseCase } from "./application/use-cases/ds18b20/create-ds18b20.use-case";
import { GetDs18b20sUseCase } from "./application/use-cases/ds18b20/get-ds18b20.use-case";
import { Ds18b20Repository } from "./domain/repositories/ds18b20.repository";
import { Ds18b20PrismaRepository } from "./infrastructure/presistence/ds18b20.prisma.repository";
import { PhService } from "./application/services/ph.service";
import { CreatePhUseCase } from "./application/use-cases/ph/create-ph.use-case";
import { GetPhsUseCase } from "./application/use-cases/ph/get-phs.use-case";
import { PhRepository } from "./domain/repositories/ph.repository";
import { PhPrismaRepository } from "./infrastructure/presistence/ph.prisma.repository";
import { PhController } from "./presentation/controllers/ph.controller";
import { UltrasonicDistanceSensorController } from "./presentation/controllers/ultrasonic-distance-sensor.controller";
import { UltrasonicDistanceSensorService } from "./application/services/ultrasonic-distance-sensor.service";
import { CreateUltrasonicDistanceSensorUseCase } from "./application/use-cases/ultrasonic/create-ultrasonic-distance-sensor.use-case";
import { GetUltrasonicDistanceSensorsUseCase } from "./application/use-cases/ultrasonic/get-ultrasonic-distance-sensors.use-case";
import { UltrasonicDistanceSensorRepository } from "./domain/repositories/ultrasonic-distance-sensor.repository";
import { UltrasonicDistanceSensorPrismaRepository } from "./infrastructure/presistence/ultrasonic-distance-sensor.prisma.repository";


@Module({
    imports: [], 
    controllers: [ActuatorController,Dht22Controller,Ds18b20Controller,PhController,UltrasonicDistanceSensorController],
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
        },

        //Ds18b20
        Ds18b20Service,
        CreateDs18b20UseCase,
        GetDs18b20sUseCase,
        { provide: Ds18b20Repository, useClass: Ds18b20PrismaRepository },

        //sensor ph
        PhService,
        CreatePhUseCase,
        GetPhsUseCase,
        { provide: PhRepository, useClass: PhPrismaRepository},

        //sensor ultrasonido
        UltrasonicDistanceSensorService,
        CreateUltrasonicDistanceSensorUseCase,
        GetUltrasonicDistanceSensorsUseCase,
        { provide: UltrasonicDistanceSensorRepository, useClass: UltrasonicDistanceSensorPrismaRepository},
    ],
    exports: [],
})
export class AutomationModule {}
