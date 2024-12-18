"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const database_service_1 = require("../../database/services/database.service");
let UserService = class UserService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async findAll() {
        const users = await this.databaseService.user.findMany();
        return users;
    }
    async find(id) {
        try {
            const user = await this.databaseService.user.findUniqueOrThrow({
                where: {
                    id: id,
                },
            });
            return user;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === "P2025") {
                    throw new common_1.NotFoundException("User doesn't exist");
                }
            }
            throw error;
        }
    }
    async create(dto) {
        try {
            const user = await this.databaseService.user.create({
                data: {
                    name: dto.name,
                    email: dto.email,
                },
            });
            return user;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new common_1.ForbiddenException("Email existed");
                }
            }
            throw error;
        }
    }
    async update(id, dto) {
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
    async remove(id) {
        const user = await this.databaseService.user.delete({
            where: {
                id: id,
            },
        });
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UserService);
//# sourceMappingURL=user.service.js.map