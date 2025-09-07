import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Ph } from "src/modules/automation/domain/entities/ph.entity";
import { PhRepository } from "src/modules/automation/domain/repositories/ph.repository";
import { CreatePhDto } from "src/modules/automation/presentation/dto/input/ph/create-ph.dto";

@Injectable()
export class CreatePhUseCase {
  constructor(private readonly repo: PhRepository) {}

  async execute(data: CreatePhDto): Promise<Ph> {
    const ph = new Ph(
      randomUUID(),
      data.phValue,
      data.analogDigitalConverter,
      data.voltaje,
      data.automationId?.trim(),
    );

    return this.repo.create(ph);
  }
}
