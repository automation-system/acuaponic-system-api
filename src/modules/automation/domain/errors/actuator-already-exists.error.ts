import { DomainError } from "./domain-error";

export class ActuatorAlreadyExistsError extends DomainError {
    constructor(type: string) {
        super(`Ya existe un actuador con tipo ${type}`, 409);
    }
}
  