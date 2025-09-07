import { DomainError } from "./domain-error";

export class AutomationNotFoundError extends DomainError {
  constructor(id: string) {
    super(`No se encontró la automatización con id ${id}`);
  }
}
