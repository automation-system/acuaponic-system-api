import { Actuator } from "../entities/actuator.entity";

export abstract class ActuatorRepository {
    abstract create(data: Actuator): Promise<Actuator>;
    abstract findAll(): Promise<Actuator[]>;
    abstract findById(id: string): Promise<Actuator | null>;
    abstract findByType(type: string): Promise<Actuator | null>;
    abstract update(id: string, data: Partial<Actuator>): Promise<Actuator>;
    abstract delete(id: string): Promise<void>;
}