import { Actuator } from "../../domain/entities/actuator.entity";
import { ActuatorResponseDto } from "../../presentation/dto/output/actuator/actuator.response.dto";

export class ActuatorMapper {
  static toDomain(raw: any): Actuator {
    return new Actuator(
      raw.actuatorId,
      raw.type,
      raw.status,
      raw.automationId,
      raw.createdAt,
      raw.updatedAt
    );
  }

  static toResponse(entity: Actuator): ActuatorResponseDto {
    return {
      actuatorId: entity.actuatorId,
      type: entity.type,
      status: entity.status,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      automationId: entity.automationId ?? undefined,
    };
  }
}
