import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { DatabaseService } from "../database/database.service";
import { UserDTO } from "./dto";
import { User } from "@prisma/client";

describe("UserService", () => {
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserService, DatabaseService],
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
});
