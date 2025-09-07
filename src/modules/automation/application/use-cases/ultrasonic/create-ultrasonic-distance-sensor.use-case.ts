import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { UltrasonicDistanceSensor } from "src/modules/automation/domain/entities/ultrasonic-distance-sensor.entity";
import { UltrasonicDistanceSensorRepository } from "src/modules/automation/domain/repositories/ultrasonic-distance-sensor.repository";
import { CreateUltrasonicDistanceSensorDto } from "src/modules/automation/presentation/dto/input/ultrasonic/create-ultrasonic-distance-sensor.dto";


@Injectable()
export class CreateUltrasonicDistanceSensorUseCase {
  constructor(private readonly repo: UltrasonicDistanceSensorRepository) {}

  async execute(data: CreateUltrasonicDistanceSensorDto): Promise<UltrasonicDistanceSensor> {
    const sensor = new UltrasonicDistanceSensor(
      randomUUID(),
      data.distance,
      data.time,
      data.automationId?.trim(),
    );

    return this.repo.create(sensor);
  }
}
