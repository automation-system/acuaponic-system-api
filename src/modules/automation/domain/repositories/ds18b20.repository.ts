import { Ds18b20Sensor } from "../entities/ds18b20-sensor.entity";

export abstract class Ds18b20Repository {
  abstract create(data: Ds18b20Sensor): Promise<Ds18b20Sensor>;
  abstract findAll(): Promise<Ds18b20Sensor[]>;
}
