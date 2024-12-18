import {
    ForbiddenException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { UserDTO } from "../dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { DatabaseService } from "../../database/services/database.service";

@Injectable()
export class UserService {
    constructor(private databaseService: DatabaseService) {}

    async findAll() {
        const users = await this.databaseService.user.findMany();

        return users;
    }

    async find(id: number) {
        try {
            const user = await this.databaseService.user.findUniqueOrThrow({
                where: {
                    id: id,
                },
            });

            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                // P2025 : An operation failed because it depends on one or more records that were required but not found. {cause}
                if (error.code === "P2025") {
                    throw new NotFoundException("User doesn't exist");
                }
            }

            throw error;
        }
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
                // P2002 : Unique constraint failed on the {constraint}
                if (error.code === "P2002") {
                    throw new ForbiddenException("Email existed");
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
