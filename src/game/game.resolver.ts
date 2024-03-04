import {Resolver, Query, Mutation, Args, ResolveField, Parent} from '@nestjs/graphql'
import { PlayerService } from 'src/Player/player.service';
import { CreatePlayerInput, Player } from 'src/graphql';

@Resolver('Game')
export class GameResolver {
  constructor(
    private playerService: PlayerService,
    //private gamesService: GamesService,
  ) {}

  @Query('player')
  async player(@Args('id') id: number) :Promise<Player> {
    return this.playerService.findOneById(id);
  }

  @Query('players')
  async players() :Promise<Player[]>{
    return this.playerService.allPlayers();
  }

  @Mutation('createPlayer')
  async createPlayer(@Args('createPlayerInput') createPlayerInput: CreatePlayerInput) :Promise<Player>{
    return this.playerService.createPlayer(createPlayerInput);
  }
  /*
  @ResolveField()
  async posts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
  */
}