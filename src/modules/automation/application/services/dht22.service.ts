import { Injectable } from "@nestjs/common";
import { Dht22Mapper } from "../../infrastructure/mappers/dht22.mapper";
import { CreateDht22SensorDto } from "../../presentation/dto/input/dht22-sensor/create-dht22-sensor.dto";
import { Dht22SensorResponseDto } from "../../presentation/dto/output/dht22-sensor/dht22-sensor.response.dto";
import { CreateDht22UseCase } from "../use-cases/dht22/create-dht22.use-case";
import { GetDht22sUseCase } from "../use-cases/dht22/get-dht22.use-case";

@Injectable()
export class Dht22Service {
  constructor(
    private readonly createUC: CreateDht22UseCase,
    private readonly getAllUC: GetDht22sUseCase,
  ) {}

  async create(data: CreateDht22SensorDto): Promise<Dht22SensorResponseDto> {
    const entity = await this.createUC.execute(data);
    return Dht22Mapper.toResponse(entity);
  }

  async findAll(): Promise<Dht22SensorResponseDto[]> {
    const entities = await this.getAllUC.execute();
    return entities.map(Dht22Mapper.toResponse);
  }
}