import {CallHandler,ExecutionContext,Injectable,NestInterceptor,} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        return next.handle().pipe(
        map((data) => {
            const statusCode =
            request.method === "POST"
                ? 201
                : request.method === "DELETE"
                ? 204
                : 200;

            return {
            status: "success",
            code: statusCode,
            message: data?.message || this.getDefaultMessage(request.method),
            data: data?.data ?? data,
            };
        }),
        );
    }

    private getDefaultMessage(method: string): string {
        switch (method) {
        case "POST":
            return "Recurso creado con éxito";
        case "GET":
            return "Datos obtenidos con éxito";
        case "PUT":
            return "Recurso actualizado con éxito";
        case "DELETE":
            return "Recurso eliminado con éxito";
        default:
            return "Operación realizada con éxito";
        }
    }
}
  