import { Injectable } from "@nestjs/common";
import { ActuatorRepository } from "../../../domain/repositories/actuator.repository";
import { Actuator } from "../../../domain/entities/actuator.entity";

@Injectable()
export class UpdateActuatorUseCase {
  constructor(private readonly repo: ActuatorRepository) {}

  async execute(id: string, data: Partial<Actuator>): Promise<Actuator> {
    return this.repo.update(id, data);
  }
}
