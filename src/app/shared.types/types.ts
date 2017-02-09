export class Competition {
    constructor(
        public _links?: Object,
        public id?: number,
        public caption?: string,
        public league?: string,
        public year?: string,
        public currentMatchday?: number,
        public numberOfMatchdays?:number,
        public numberOfTeams?: number,
        public numberOfGames?: number,
        public lastUpdated?: string
    ) {}
}
export class Statistic {
    constructor(
        public goals?: number,
        public goalsAgainst?: number,
        public wins?: number,
        public draws?: number,
        public losses?: number,
    ){}
}

export class Team {
    constructor(
        public _links?: Object,
        public position?: number,
        public teamName?: string,
        public crestURI?: string,
        public playedGames?: number,
        public points?: number,
        public goals?: number,
        public goalsAgainst?: number,
        public goalDifference?: number,
        public wins?: number,
        public draws?: number,
        public losses?: number,
        public home?: Statistic,
        public away?: Statistic,
    ){}
}