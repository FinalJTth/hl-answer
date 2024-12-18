import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";
export declare class DatabaseService extends PrismaClient {
    private config;
    constructor(config: ConfigService);
}
