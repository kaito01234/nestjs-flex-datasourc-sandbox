import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { UserController } from 'src/user/user.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
})
export class UserModule {}
