import { Injectable } from '@nestjs/common';
import { Player, CreatePlayerInput } from '../graphql'

@Injectable()
export class PlayerService {
    private players: Player[] = [];
    async findOneById(id: number): Promise<Player> {
        let rv = null;
        this.players.forEach(async (player) => {
            if (player.id == id) {
                rv = player;
            }
        })
        return rv;
    };

    async allPlayers(): Promise<Player[]> {
        return this.players;
    }
    async createPlayer(createPlayerInput: CreatePlayerInput): Promise<Player> {
        let rv: Player = {
            id: this.players.length + 1,
            name: createPlayerInput.name
        };
        //console.log(rv)
        this.players.push(rv)
        return rv;
    }
}
