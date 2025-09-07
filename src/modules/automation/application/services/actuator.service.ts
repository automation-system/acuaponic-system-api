import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateActuatorUseCase } from "../use-cases/actuator/create-actuator.use-case";
import { GetActuatorByIdUseCase } from "../use-cases/actuator/get-actuator-by-id.use-case";
import { UpdateActuatorUseCase } from "../use-cases/actuator/update-actuator.use-case";
import { DeleteActuatorUseCase } from "../use-cases/actuator/delete-actuator.use-case";
import { GetActuatorsUseCase } from "../use-cases/actuator/get-actuator.use-case";
import { CreateActuatorDto } from "../../presentation/dto/input/actuator/create-actuator.dto";
import { UpdateActuatorDto } from "../../presentation/dto/input/actuator/update-actuator.dto";
import { ActuatorResponseDto } from "../../presentation/dto/output/actuator/actuator.response.dto";
import { ActuatorMapper } from "../../infrastructure/mappers/actuator.mapper";

@Injectable()
export class ActuatorService {
  constructor(
    private readonly createUC: CreateActuatorUseCase,
    private readonly getAllUC: GetActuatorsUseCase,
    private readonly getByIdUC: GetActuatorByIdUseCase,
    private readonly updateUC: UpdateActuatorUseCase,
    private readonly deleteUC: DeleteActuatorUseCase,
  ) {}

  async create(data: CreateActuatorDto): Promise<ActuatorResponseDto> {
    const entity = await this.createUC.execute(data);
    return ActuatorMapper.toResponse(entity);
  }

  async findAll(): Promise<ActuatorResponseDto[]> {
    const entities = await this.getAllUC.execute();
    return entities.map(ActuatorMapper.toResponse);
  }

  async findById(id: string): Promise<ActuatorResponseDto> {
    const entity = await this.getByIdUC.execute(id);
    if (!entity) {
      throw new NotFoundException(`Actuador con id ${id} no encontrado`);
    }
    return ActuatorMapper.toResponse(entity);
  }

  async update(id: string, data: UpdateActuatorDto): Promise<ActuatorResponseDto> {
    const entity = await this.updateUC.execute(id, data);
    return ActuatorMapper.toResponse(entity);
  }

  async delete(id: string): Promise<void> {
    return this.deleteUC.execute(id);
  }
}
