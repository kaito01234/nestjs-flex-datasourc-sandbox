import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('user')
export class UserController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async GetUser() {
    return this.prismaService.user.findMany();
  }

  @Post()
  async PostUser(@Body() body: { id: number; name: string; email: string }) {
    await this.prismaService.user.upsert({
      where: { id: body.id },
      update: { name: body.name, email: body.email },
      create: { name: body.name, email: body.email },
    });
  }
}
