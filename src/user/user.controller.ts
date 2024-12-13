import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('user')
export class UserController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async GetUser() {
    const user = await this.prismaService.user.findMany();
    console.log(user);
  }

  @Post()
  async PostUser() {
    await this.prismaService.user.upsert({
      where: { id: 1 },
      update: { name: 'Alice' },
      create: { name: 'Alice', email: 'alice@example.com' },
    });
  }
}
