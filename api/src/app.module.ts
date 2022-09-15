import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ORM_CONFIG } from 'config/typeorm.config';
import * as path from 'path';
import { join } from 'path';
import { NotesModule } from './components/notes/notes.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
      autoSchemaFile: path.join(process.cwd(), 'src/graphql/schema.gql'),
      cors: {
        origin: '*',
        credentials: true,
      },
    }),
    TypeOrmModule.forRoot(ORM_CONFIG),
    NotesModule,
  ],
})
export class AppModule {}
