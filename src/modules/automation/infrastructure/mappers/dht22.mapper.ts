import { Dht22Sensor } from "../../domain/entities/dht22-sensor.entity";
import { Dht22SensorResponseDto } from "../../presentation/dto/output/dht22-sensor/dht22-sensor.response.dto";

export class Dht22Mapper {
  static toDomain(raw: any): Dht22Sensor {
    return new Dht22Sensor(
      raw.dht22SensorId,
      raw.temperatureCelsius,
      raw.humidity,
      raw.temperatureFahrenheit,
      raw.temperatureKelvin,
      raw.automationId,
      raw.createdAt,
    );
  }

  static toResponse(entity: Dht22Sensor): Dht22SensorResponseDto {
    return {
        dht22SensorId: entity.dht22SensorId,
        temperatureCelsius: entity.temperatureCelsius,
        temperatureFahrenheit: entity.temperatureFahrenheit,
        temperatureKelvin: entity.temperatureKelvin,
        humidity: entity.humidity,
        automationId: entity.automationId,
        createdAt: entity.createdAt,
    };
  }
}