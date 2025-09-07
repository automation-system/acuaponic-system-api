import { Injectable } from "@nestjs/common";
import { CreatePhDto } from "../../presentation/dto/input/ph/create-ph.dto";
import { PhResponseDto } from "../../presentation/dto/output/ph/ph.response.dto";
import { CreatePhUseCase } from "../use-cases/ph/create-ph.use-case";
import { GetPhsUseCase } from "../use-cases/ph/get-phs.use-case";
import { PhMapper } from "../../infrastructure/mappers/ph.mapper";

@Injectable()
export class PhService {
  constructor(
    private readonly createUC: CreatePhUseCase,
    private readonly getAllUC: GetPhsUseCase,
  ) {}

  async create(data: CreatePhDto): Promise<PhResponseDto> {
    const entity = await this.createUC.execute(data);
    return PhMapper.toResponse(entity);
  }

  async findAll(): Promise<PhResponseDto[]> {
    const entities = await this.getAllUC.execute();
    return entities.map(PhMapper.toResponse);
  }
}
