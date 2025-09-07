import { Injectable } from "@nestjs/common";
import { Dht22Sensor } from "../../domain/entities/dht22-sensor.entity";
import { PrismaService } from "src/config/prisma.service";
import { Dht22Repository } from "../../domain/repositories/dht22.repository";
import { Dht22Mapper } from "../mappers/dht22.mapper";

@Injectable()
export class Dht22PrismaRepository implements Dht22Repository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Dht22Sensor): Promise<Dht22Sensor> {
    const raw = await this.prisma.dht22Sensor.create({ data });
    return Dht22Mapper.toDomain(raw);
  }

  async findAll(): Promise<Dht22Sensor[]> {
    const raws = await this.prisma.dht22Sensor.findMany();
    return raws.map(Dht22Mapper.toDomain);
  }
}