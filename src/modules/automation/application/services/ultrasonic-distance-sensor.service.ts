import { Injectable } from "@nestjs/common";
import { CreateUltrasonicDistanceSensorDto } from "../../presentation/dto/input/ultrasonic/create-ultrasonic-distance-sensor.dto";
import { UltrasonicDistanceSensorResponseDto } from "../../presentation/dto/output/ultrasonic/ultrasonic-distance-sensor.response.dto";
import { CreateUltrasonicDistanceSensorUseCase } from "../use-cases/ultrasonic/create-ultrasonic-distance-sensor.use-case";
import { GetUltrasonicDistanceSensorsUseCase } from "../use-cases/ultrasonic/get-ultrasonic-distance-sensors.use-case";
import { UltrasonicDistanceSensorMapper } from "../../infrastructure/mappers/ultrasonic-distance-sensor.mapper";

@Injectable()
export class UltrasonicDistanceSensorService {
  constructor(
    private readonly createUC: CreateUltrasonicDistanceSensorUseCase,
    private readonly getAllUC: GetUltrasonicDistanceSensorsUseCase,
  ) {}

  async create(data: CreateUltrasonicDistanceSensorDto): Promise<UltrasonicDistanceSensorResponseDto> {
    const entity = await this.createUC.execute(data);
    return UltrasonicDistanceSensorMapper.toResponse(entity);
  }

  async findAll(): Promise<UltrasonicDistanceSensorResponseDto[]> {
    const entities = await this.getAllUC.execute();
    return entities.map(UltrasonicDistanceSensorMapper.toResponse);
  }
}
