import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateActuatorDto } from "../dto/input/actuator/create-actuator.dto";
import { UpdateActuatorDto } from "../dto/input/actuator/update-actuator.dto";
import { ActuatorService } from "../../application/services/actuator.service";
import { ActuatorResponseDto } from "../dto/output/actuator/actuator.response.dto";

@Controller("actuators")
export class ActuatorController {
  constructor(private readonly service: ActuatorService) {}

  @Post()
  async create(@Body() dto: CreateActuatorDto): Promise<ActuatorResponseDto> {
    return this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<ActuatorResponseDto[]> {
    return this.service.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<ActuatorResponseDto> {
    return this.service.findById(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() dto: UpdateActuatorDto
  ): Promise<ActuatorResponseDto> {
    return this.service.update(id, dto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<void> {
    return this.service.delete(id);
  }
}