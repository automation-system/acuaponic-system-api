import { Injectable } from "@nestjs/common";
import { Ds18b20Sensor } from "../../domain/entities/ds18b20-sensor.entity";
import { Ds18b20Repository } from "../../domain/repositories/ds18b20.repository";
import { Ds18b20Mapper } from "../mappers/ds18b20.mapper";
import { PrismaService } from "src/config/prisma.service";

@Injectable()
export class Ds18b20PrismaRepository implements Ds18b20Repository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Ds18b20Sensor): Promise<Ds18b20Sensor> {
    const raw = await this.prisma.ds18b20Sensor.create({ data });
    return Ds18b20Mapper.toDomain(raw);
  }

  async findAll(): Promise<Ds18b20Sensor[]> {
    const raws = await this.prisma.ds18b20Sensor.findMany();
    return raws.map(Ds18b20Mapper.toDomain);
  }
}
