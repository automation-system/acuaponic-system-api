import { UltrasonicDistanceSensor } from "../../domain/entities/ultrasonic-distance-sensor.entity";
import { UltrasonicDistanceSensorResponseDto } from "../../presentation/dto/output/ultrasonic/ultrasonic-distance-sensor.response.dto";

export class UltrasonicDistanceSensorMapper {
  static toDomain(raw: any): UltrasonicDistanceSensor {
    return new UltrasonicDistanceSensor(
      raw.ultrasonicDistanceSensorId,
      raw.distance,
      raw.time,
      raw.automationId,
      raw.createdAt,
    );
  }

  static toResponse(entity: UltrasonicDistanceSensor): UltrasonicDistanceSensorResponseDto {
    return {
      ultrasonicDistanceSensorId: entity.ultrasonicDistanceSensorId,
      distance: entity.distance,
      time: entity.time,
      automationId: entity.automationId,
      createdAt: entity.createdAt,
    };
  }
}
