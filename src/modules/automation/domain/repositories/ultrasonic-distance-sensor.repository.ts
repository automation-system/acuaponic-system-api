import { UltrasonicDistanceSensor } from "../entities/ultrasonic-distance-sensor.entity";

export abstract class UltrasonicDistanceSensorRepository {
  abstract create(data: UltrasonicDistanceSensor): Promise<UltrasonicDistanceSensor>;
  abstract findAll(): Promise<UltrasonicDistanceSensor[]>;
}
