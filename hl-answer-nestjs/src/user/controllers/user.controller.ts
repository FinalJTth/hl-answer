import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from "@nestjs/common";
import { UserService } from "../services/user.service";
import { UserDTO } from "../dto";

@Controller("user")
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(":id")
    find(@Param("id") id: number) {
        return this.userService.find(id);
    }

    @Post()
    create(@Body() dto: UserDTO) {
        return this.userService.create(dto);
    }

    @Patch(":id")
    update(@Param("id") id: number, @Body() dto: UserDTO) {
        return this.userService.update(id, dto);
    }

    @Delete(":id")
    remove(@Param("id") id: number) {
        return this.userService.remove(id);
    }
}
