import { Injectable } from "@nestjs/common";
import { ActuatorRepository } from "../../domain/repositories/actuator.repository";
import { Actuator } from "../../domain/entities/actuator.entity";
import { PrismaService } from "src/config/prisma.service";
import { ActuatorResponseDto } from "../../presentation/dto/output/actuator/actuator.response.dto";
import { ActuatorMapper } from "../mappers/actuator.mapper";

@Injectable()
export class ActuatorPrismaRepository implements ActuatorRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Actuator): Promise<Actuator> {
    const raw = await this.prisma.actuator.create({ data });
    return ActuatorMapper.toDomain(raw);
  }

  async findAll(): Promise<Actuator[]> {
    const raws = await this.prisma.actuator.findMany();
    return raws.map(ActuatorMapper.toDomain);
  }

  async findById(id: string): Promise<Actuator | null> {
    const raw = await this.prisma.actuator.findUnique({ where: { actuatorId: id } });
    return raw ? ActuatorMapper.toDomain(raw) : null;
  }

  async findByType(type: string): Promise<Actuator | null> {
    const raw = await this.prisma.actuator.findUnique({ where: { type } });
    return raw ? ActuatorMapper.toDomain(raw) : null;
  }

  async update(id: string, data: Partial<Actuator>): Promise<Actuator> {
    const raw = await this.prisma.actuator.update({ where: { actuatorId: id }, data });
    return ActuatorMapper.toDomain(raw);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.actuator.delete({ where: { actuatorId: id } });
  }
}