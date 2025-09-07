import { Injectable } from "@nestjs/common";
import { Actuator } from "src/modules/automation/domain/entities/actuator.entity";
import { ActuatorRepository } from "src/modules/automation/domain/repositories/actuator.repository";

@Injectable()
export class GetActuatorsUseCase {
  constructor(private readonly repo: ActuatorRepository) {}
  async execute(): Promise<Actuator[]> {
    return this.repo.findAll();
  }
}