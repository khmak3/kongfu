import { GameResolver } from "./game.resolver";
import { PlayerService } from 'src/Player/player.service';
import { Module } from '@nestjs/common';

@Module({
    //imports: [PlayerModule],
    providers: [PlayerService, GameResolver],
  })
  export class GameModule {}