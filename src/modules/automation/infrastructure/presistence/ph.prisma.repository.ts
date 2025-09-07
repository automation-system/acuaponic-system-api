import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/config/prisma.service";
import { Ph } from "../../domain/entities/ph.entity";
import { PhRepository } from "../../domain/repositories/ph.repository";
import { PhMapper } from "../mappers/ph.mapper";

@Injectable()
export class PhPrismaRepository implements PhRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Ph): Promise<Ph> {
    const raw = await this.prisma.ph.create({ data });
    return PhMapper.toDomain(raw);
  }

  async findAll(): Promise<Ph[]> {
    const raws = await this.prisma.ph.findMany();
    return raws.map(PhMapper.toDomain);
  }
}
