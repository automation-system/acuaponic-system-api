import { Injectable } from "@nestjs/common";
import { ActuatorRepository } from "src/modules/automation/domain/repositories/actuator.repository";

@Injectable()
export class DeleteActuatorUseCase {
  constructor(private readonly repo: ActuatorRepository) {}
  async execute(id: string): Promise<void> {
    return this.repo.delete(id);
  }
}