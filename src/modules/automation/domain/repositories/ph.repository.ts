import { Ph } from "../entities/ph.entity";

export abstract class PhRepository {
  abstract create(data: Ph): Promise<Ph>;
  abstract findAll(): Promise<Ph[]>;
}
