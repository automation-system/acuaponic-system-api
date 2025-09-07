import { Injectable } from "@nestjs/common";
import { CreateDs18b20SensorDto } from "../../presentation/dto/input/ds18b20-sensor/create-ds18b20-sensor.dto";
import { Ds18b20SensorResponseDto } from "../../presentation/dto/output/ds18b20-sensor/ds18b20-sensor.response.dto";
import { CreateDs18b20UseCase } from "../use-cases/ds18b20/create-ds18b20.use-case";
import { GetDs18b20sUseCase } from "../use-cases/ds18b20/get-ds18b20.use-case";
import { Ds18b20Mapper } from "../../infrastructure/mappers/ds18b20.mapper";

@Injectable()
export class Ds18b20Service {
  constructor(
    private readonly createUC: CreateDs18b20UseCase,
    private readonly getAllUC: GetDs18b20sUseCase,
  ) {}

  async create(data: CreateDs18b20SensorDto): Promise<Ds18b20SensorResponseDto> {
    const entity = await this.createUC.execute(data);
    return Ds18b20Mapper.toResponse(entity);
  }

  async findAll(): Promise<Ds18b20SensorResponseDto[]> {
    const entities = await this.getAllUC.execute();
    return entities.map(Ds18b20Mapper.toResponse);
  }
}