import { Injectable } from "@nestjs/common";
import { Actuator } from "src/modules/automation/domain/entities/actuator.entity";
import { ActuatorRepository } from "src/modules/automation/domain/repositories/actuator.repository";

@Injectable()
export class GetActuatorByIdUseCase {
  constructor(private readonly repo: ActuatorRepository) {}
  async execute(id: string): Promise<Actuator | null> {
    return this.repo.findById(id);
  }
}