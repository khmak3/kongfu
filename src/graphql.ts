
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreatePlayerInput {
    name?: Nullable<string>;
}

export abstract class IQuery {
    abstract activeGames(): Nullable<Nullable<Game>[]> | Promise<Nullable<Nullable<Game>[]>>;

    abstract players(): Nullable<Nullable<Player>[]> | Promise<Nullable<Nullable<Player>[]>>;

    abstract player(id: string): Nullable<Player> | Promise<Nullable<Player>>;

    abstract game(id: string): Nullable<Game> | Promise<Nullable<Game>>;
}

export abstract class IMutation {
    abstract createGame(playerIds?: Nullable<number[]>): Nullable<Game> | Promise<Nullable<Game>>;

    abstract playCards(gameId: number, playerId: number, cardIds?: Nullable<number[]>): Nullable<Game> | Promise<Nullable<Game>>;

    abstract createPlayer(createPlayerInput?: Nullable<CreatePlayerInput>): Nullable<Player> | Promise<Nullable<Player>>;
}

export abstract class ISubscription {
    abstract lastPlayCards(): Nullable<Card[]> | Promise<Nullable<Card[]>>;
}

export class Game {
    id: number;
    playerInGames?: Nullable<PlayerInGame[]>;
    lastPlayCards?: Nullable<Card[]>;
    cardRemain: number;
    whosNext?: Nullable<Player>;
}

export class Player {
    id: number;
    name: string;
}

export class PlayerInGame {
    id: number;
    name: string;
    cards?: Nullable<Card[]>;
}

export class Card {
    id: number;
    name: string;
}

type Nullable<T> = T | null;
