import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Dht22Sensor } from "src/modules/automation/domain/entities/dht22-sensor.entity";
import { Dht22Repository } from "src/modules/automation/domain/repositories/dht22.repository";
import { CreateDht22SensorDto } from "src/modules/automation/presentation/dto/input/dht22-sensor/create-dht22-sensor.dto";


@Injectable()
export class CreateDht22UseCase {
  constructor(private readonly repo:Dht22Repository) {}

  async execute(data:CreateDht22SensorDto ): Promise<Dht22Sensor> {
        
    const temperatureFahrenheit = data.temperatureFahrenheit || undefined;
    const temperatureKelvin = data.temperatureKelvin || undefined;
    const automationId = data.automationId?.trim() || undefined;

    const actuator=new Dht22Sensor(
      randomUUID(),
      data.temperatureCelsius,
      data.humidity,
      temperatureFahrenheit,
      temperatureKelvin,
      automationId
    );

    return this.repo.create(actuator);
  }
}