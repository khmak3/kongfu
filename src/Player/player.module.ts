import { Module } from '@nestjs/common';
import { PlayerService } from "./player.service";

@Module({
    //imports: [PostsModule],
    providers: [PlayerService],
  })
  export class PlayerModule {}