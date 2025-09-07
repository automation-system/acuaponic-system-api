import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/config/prisma.service";
import { UltrasonicDistanceSensor } from "../../domain/entities/ultrasonic-distance-sensor.entity";
import { UltrasonicDistanceSensorRepository } from "../../domain/repositories/ultrasonic-distance-sensor.repository";
import { UltrasonicDistanceSensorMapper } from "../mappers/ultrasonic-distance-sensor.mapper";

@Injectable()
export class UltrasonicDistanceSensorPrismaRepository implements UltrasonicDistanceSensorRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: UltrasonicDistanceSensor): Promise<UltrasonicDistanceSensor> {
    const raw = await this.prisma.ultrasonicDistanceSensor.create({ data });
    return UltrasonicDistanceSensorMapper.toDomain(raw);
  }

  async findAll(): Promise<UltrasonicDistanceSensor[]> {
    const raws = await this.prisma.ultrasonicDistanceSensor.findMany();
    return raws.map(UltrasonicDistanceSensorMapper.toDomain);
  }
}
