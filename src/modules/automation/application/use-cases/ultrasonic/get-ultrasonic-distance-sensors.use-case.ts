import { Injectable } from "@nestjs/common";
import { UltrasonicDistanceSensor } from "src/modules/automation/domain/entities/ultrasonic-distance-sensor.entity";
import { UltrasonicDistanceSensorRepository } from "src/modules/automation/domain/repositories/ultrasonic-distance-sensor.repository";

@Injectable()
export class GetUltrasonicDistanceSensorsUseCase {
  constructor(private readonly repo: UltrasonicDistanceSensorRepository) {}

  async execute(): Promise<UltrasonicDistanceSensor[]> {
    return this.repo.findAll();
  }
}
