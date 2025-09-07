import { Ph } from "../../domain/entities/ph.entity";
import { PhResponseDto } from "../../presentation/dto/output/ph/ph.response.dto";

export class PhMapper {
  static toDomain(raw: any): Ph {
    return new Ph(
      raw.phId,
      raw.phValue,
      raw.analogDigitalConverter,
      raw.voltaje,
      raw.automationId,
      raw.createdAt,
    );
  }

  static toResponse(entity: Ph): PhResponseDto {
    return {
      phId: entity.phId,
      phValue: entity.phValue,
      analogDigitalConverter: entity.analogDigitalConverter,
      voltaje: entity.voltaje,
      automationId: entity.automationId,
      createdAt: entity.createdAt,
    };
  }
}
