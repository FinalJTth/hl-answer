import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller("users")
export class UsersController {
    @Get()
    findAll() {
        return {

        }
    }

    @Get(":id")
    find(@Param("id") id: number) {
        return id;
    }

    @Post()
    create(@Body() input: string) { }

    @Patch(":id")
    update(@Param("id") id: number) { }

    @Delete(":id")
    remove(@Param('id') id: number, @Body() input: string) { }
}