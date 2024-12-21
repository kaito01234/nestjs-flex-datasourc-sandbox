import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
})
export class AppModule {}
