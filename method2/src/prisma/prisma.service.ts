import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(private readonly config: ConfigService) {
    super({
      datasources: {
        db: {
          url: PrismaService.getDatabaseUrl(config),
        },
      },
    });
  }

  private static getDatabaseUrl(config: ConfigService): string {
    const protocol = config.get<string>('DB_PROTOCOL');
    const user = config.get<string>('DB_USER');
    const password = config.get<string>('DB_PASSWORD');
    const host = config.get<string>('DB_HOST');
    const port = config.get<number>('DB_PORT');
    const database = config.get<string>('DB_DATABASE');
    const connectionLimit = config.get<number>('DB_CONNECTION_LIMIT');
    const poolTimeout = config.get<number>('DB_POOL_TIMEOUT');

    let url = `${protocol}://${user}:${password}@${host}:${port}/${database}`;
    const params = [];
    if (connectionLimit) {
      params.push(`connection_limit=${connectionLimit}`);
    }
    if (poolTimeout) {
      params.push(`pool_timeout=${poolTimeout}`);
    }
    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }
    return url;
  }

  async onModuleInit() {
    await this.$connect();
  }
}
