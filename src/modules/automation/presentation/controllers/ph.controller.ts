import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreatePhDto } from "../dto/input/ph/create-ph.dto";
import { PhResponseDto } from "../dto/output/ph/ph.response.dto";
import { PhService } from "../../application/services/ph.service";

@Controller("ph")
export class PhController {
  constructor(private readonly service: PhService) {}

  @Post()
  async create(@Body() dto: CreatePhDto): Promise<PhResponseDto> {
    return this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<PhResponseDto[]> {
    return this.service.findAll();
  }
}
