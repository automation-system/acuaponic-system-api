import { Ds18b20Sensor } from "../../domain/entities/ds18b20-sensor.entity";
import { Ds18b20SensorResponseDto } from "../../presentation/dto/output/ds18b20-sensor/ds18b20-sensor.response.dto";

export class Ds18b20Mapper {
  static toDomain(raw: any): Ds18b20Sensor {
    return new Ds18b20Sensor(
      raw.ds18b20SensorId,
      raw.temperatureCelsius,
      raw.temperatureFahrenheit,
      raw.temperatureKelvin,
      raw.automationId,
      raw.createdAt      
    );
  }

  static toResponse(entity: Ds18b20Sensor): Ds18b20SensorResponseDto {
    return {
      ds18b20SensorId: entity.ds18b20SensorId,
      temperatureCelsius: entity.temperatureCelsius,
      temperatureFahrenheit: entity.temperatureFahrenheit,
      temperatureKelvin: entity.temperatureKelvin,
      automationId: entity.automationId,
      createdAt: entity.createdAt,      
    };
  }
}