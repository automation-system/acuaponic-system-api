import { Injectable } from "@nestjs/common";
import { Ds18b20Sensor } from "src/modules/automation/domain/entities/ds18b20-sensor.entity";
import { Ds18b20Repository } from "src/modules/automation/domain/repositories/ds18b20.repository";

@Injectable()
export class GetDs18b20sUseCase {
  constructor(private readonly repo: Ds18b20Repository) {}
  async execute(): Promise<Ds18b20Sensor[]> {
    return this.repo.findAll();
  }
}