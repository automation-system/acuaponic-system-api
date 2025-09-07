import { Injectable } from "@nestjs/common";
import { Ph } from "src/modules/automation/domain/entities/ph.entity";
import { PhRepository } from "src/modules/automation/domain/repositories/ph.repository";

@Injectable()
export class GetPhsUseCase {
  constructor(private readonly repo: PhRepository) {}

  async execute(): Promise<Ph[]> {
    return this.repo.findAll();
  }
}
