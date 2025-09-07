import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateDs18b20SensorDto } from "../dto/input/ds18b20-sensor/create-ds18b20-sensor.dto";
import { Ds18b20SensorResponseDto } from "../dto/output/ds18b20-sensor/ds18b20-sensor.response.dto";
import { Ds18b20Service } from "../../application/services/ds18b20.service";

@Controller("ds18b20")
export class Ds18b20Controller {
  constructor(private readonly service: Ds18b20Service) {}

  @Post()
  async create(@Body() dto: CreateDs18b20SensorDto): Promise<Ds18b20SensorResponseDto> {
    return this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<Ds18b20SensorResponseDto[]> {
    return this.service.findAll();
  }
}
