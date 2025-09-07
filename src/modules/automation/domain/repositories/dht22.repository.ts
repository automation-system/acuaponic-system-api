import { Dht22Sensor } from "../entities/dht22-sensor.entity";

export abstract class Dht22Repository {
    abstract create(data: Dht22Sensor): Promise<Dht22Sensor>;
    abstract findAll(): Promise<Dht22Sensor[]>;
}