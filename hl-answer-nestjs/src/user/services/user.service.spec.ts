import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { DatabaseService } from "../../database/services/database.service";
import { UserDTO } from "../dto";
import { ForbiddenException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

describe("UserService", () => {
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserService, ConfigService, DatabaseService],
        }).compile();

        service = module.get<UserService>(UserService);
    });

    const testUserDTO1: UserDTO = {
        name: "test",
        email: "test@gmail.com",
    };

    const testUserDTO2: UserDTO = {
        name: "anothertest",
        email: "anothertest@hotmail.com",
    };

    let testUserId: number;

    /* Doing CRUD Test */

    // Create
    it("User CRUD Test : Create", async () => {
        const testUser = await service.create(testUserDTO1);
        testUserId = testUser.id;

        expect(testUser).toMatchObject(testUserDTO1);
    });

    // Read
    it("User CRUD Test : Read", async () => {
        const testUser = await service.find(testUserId);

        expect(testUser).toMatchObject(testUserDTO1);
    });

    // Read All
    it("User CRUD Test : Read All", async () => {
        const testUser = await service.find(testUserId);
        const testUsers = await service.findAll();

        expect(testUsers).toHaveLength(1);
        expect(testUsers).toContainEqual(testUser);
    });

    // Update
    it("User CRUD Test : Update", async () => {
        const testUser = await service.update(testUserId, testUserDTO2);

        expect(testUser).toMatchObject(testUserDTO2);
    });

    // Delete
    it("User CRUD Test : Delete", async () => {
        const testUser = await service.remove(testUserId);

        expect(testUser).toMatchObject(testUserDTO2);
    });

    /* Validation Test */

    // Find non-exist id
    it("User Validation Test : Find on non-exist id", async () => {
        expect(service.find(1)).rejects.toThrow(ForbiddenException);
    });

    // Create duplicate email
    it("User Validation Test : Duplicate Email", async () => {
        const user = await service.create(testUserDTO1);

        expect(service.create(testUserDTO1)).rejects.toThrow(
            ForbiddenException,
        );

        await service.remove(user.id);
    });
});
