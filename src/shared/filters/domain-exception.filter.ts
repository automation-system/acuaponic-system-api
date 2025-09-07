import {ExceptionFilter,Catch,ArgumentsHost,ConflictException,NotFoundException,} from "@nestjs/common";
import { ActuatorAlreadyExistsError } from "src/modules/automation/domain/errors/actuator-already-exists.error";
import { AutomationNotFoundError } from "src/modules/automation/domain/errors/automation-not-found.error";
  
@Catch()
export class DomainExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception instanceof ActuatorAlreadyExistsError) {
      return response.status(409).json({
        status: "error",
        code: 409,
        message: exception.message,
      });
    }

    if (exception instanceof AutomationNotFoundError) {
      return response.status(404).json({
        status: "error",
        code: 404,
        message: exception.message,
      });
    }

    return response.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error",
    });
  }
}  