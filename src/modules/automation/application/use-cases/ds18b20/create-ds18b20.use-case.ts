import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Ds18b20Sensor } from "src/modules/automation/domain/entities/ds18b20-sensor.entity";
import { Ds18b20Repository } from "src/modules/automation/domain/repositories/ds18b20.repository";
import { CreateDs18b20SensorDto } from "src/modules/automation/presentation/dto/input/ds18b20-sensor/create-ds18b20-sensor.dto";


@Injectable()
export class CreateDs18b20UseCase {
  constructor(private readonly repo:Ds18b20Repository) {}

  async execute(data:CreateDs18b20SensorDto): Promise<Ds18b20Sensor> {
        
    const temperatureFahrenheit = data.temperatureFahrenheit || undefined;
    const temperatureKelvin = data.temperatureKelvin || undefined;
    const automationId = data.automationId?.trim() || undefined;

    const actuator=new Ds18b20Sensor(
      randomUUID(),
      data.temperatureCelsius,
      temperatureFahrenheit,
      temperatureKelvin,
      automationId
    );

    return this.repo.create(actuator);
  }
}