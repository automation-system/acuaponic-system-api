import { Injectable } from "@nestjs/common";
import { ActuatorRepository } from "../../../domain/repositories/actuator.repository";
import { Actuator } from "src/modules/automation/domain/entities/actuator.entity";
import { CreateActuatorDto } from "src/modules/automation/presentation/dto/input/actuator/create-actuator.dto";
import { ActuatorAlreadyExistsError } from "src/modules/automation/domain/errors/actuator-already-exists.error";
import { randomUUID } from "crypto";


@Injectable()
export class CreateActuatorUseCase {
  constructor(private readonly repo: ActuatorRepository) {}

  async execute(data: CreateActuatorDto): Promise<Actuator> {
    
    const exists = await this.repo.findByType(data.type);
    if (exists) {
      throw new ActuatorAlreadyExistsError(data.type);
    }

    const automationId = data.automationId?.trim() || null;

    const actuator=new Actuator(
      randomUUID(),
      data.type,
      data.status,
      automationId
    );

    return this.repo.create(actuator);
  }
}