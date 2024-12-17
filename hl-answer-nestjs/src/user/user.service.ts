import {
    Body,
    Delete,
    ForbiddenException,
    Get,
    Injectable,
    Param,
    Patch,
    Post,
} from "@nestjs/common";
import { UserDTO } from "./dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class UserService {
    constructor(private databaseService: DatabaseService) {}

    async findAll() {
        const users = await this.databaseService.user.findMany();

        return users;
    }

    async find(id: number) {
        const user = await this.databaseService.user.findUniqueOrThrow({
            where: {
                id: id,
            },
        });

        return user;
    }

    async create(dto: UserDTO) {
        try {
            const user = await this.databaseService.user.create({
                data: {
                    name: dto.name,
                    email: dto.email,
                },
            });

            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                // P2002 : Field has duplicated value
                if (error.code === "P2002") {
                    throw new ForbiddenException("Email taken");
                }
            }

            throw error;
        }
    }

    async update(id: number, dto: UserDTO) {
        const user = await this.databaseService.user.update({
            where: {
                id: id,
            },
            data: {
                name: dto.name,
                email: dto.email,
            },
        });

        return user;
    }

    async remove(id: number) {
        const user = await this.databaseService.user.delete({
            where: {
                id: id,
            },
        });

        return user;
    }
}
