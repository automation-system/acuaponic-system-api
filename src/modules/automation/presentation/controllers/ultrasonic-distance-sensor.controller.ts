import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUltrasonicDistanceSensorDto } from "../dto/input/ultrasonic/create-ultrasonic-distance-sensor.dto";
import { UltrasonicDistanceSensorResponseDto } from "../dto/output/ultrasonic/ultrasonic-distance-sensor.response.dto";
import { UltrasonicDistanceSensorService } from "../../application/services/ultrasonic-distance-sensor.service";

@Controller("ultrasonic")
export class UltrasonicDistanceSensorController {
  constructor(private readonly service: UltrasonicDistanceSensorService) {}

  @Post()
  async create(@Body() dto: CreateUltrasonicDistanceSensorDto): Promise<UltrasonicDistanceSensorResponseDto> {
    return this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<UltrasonicDistanceSensorResponseDto[]> {
    return this.service.findAll();
  }
}
