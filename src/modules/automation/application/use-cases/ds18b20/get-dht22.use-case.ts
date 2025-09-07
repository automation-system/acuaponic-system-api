import { Injectable } from "@nestjs/common";
import { Dht22Sensor } from "src/modules/automation/domain/entities/dht22-sensor.entity";
import { Dht22Repository } from "src/modules/automation/domain/repositories/dht22.repository";


@Injectable()
export class GetDht22sUseCase {
  constructor(private readonly repo: Dht22Repository) {}
  async execute(): Promise<Dht22Sensor[]> {
    return this.repo.findAll();
  }
}