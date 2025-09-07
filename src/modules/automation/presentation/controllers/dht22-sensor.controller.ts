import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateDht22SensorDto } from "../dto/input/dht22-sensor/create-dht22-sensor.dto";
import { Dht22SensorResponseDto } from "../dto/output/dht22-sensor/dht22-sensor.response.dto";
import { Dht22Service } from "../../application/services/dht22.service";

@Controller("dht22")
export class Dht22Controller {
    constructor(private readonly service: Dht22Service) {}

    @Post()
    async create(@Body() dto: CreateDht22SensorDto): Promise<Dht22SensorResponseDto> {
        return this.service.create(dto);
    }

    @Get()
    async findAll(): Promise<Dht22SensorResponseDto[]> {
        return this.service.findAll();
    }
}