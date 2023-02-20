/** 
 * 初期取得選手情報
 */
export interface DefaultMemberModel {
    /** ID */
    Id: number;
    /** 背番号 */
    Number: number;
    /** 登録名 */
    Name: string;
    /** 行番号 */
    RowNumber: number;
}

/** 
 * 出場選手情報
 */
export class ParticipationMemberModel {
    /** 背番号 */
    Number: number;
    /** 守備位置 */
    Position: string;
    /** 名前 */
    Name: string;
    /** 打者 */
    Batter: boolean;
    /** 走者 */
    Runner: boolean;
    /** 次回先頭 */
    NextRead: boolean;
}

/** 
 * 出場選手情報（1チーム単位）
 */
export class ParticipationMemberPerTeamModel {
    /** 1番 */
    LeadOff: ParticipationMemberModel;
    /** 2番 */
    Second: ParticipationMemberModel;
    /** 3番 */
    Third: ParticipationMemberModel;
    /** 4番 */
    Forth: ParticipationMemberModel;
    /** 5番 */
    Fifth: ParticipationMemberModel;
    /** 6番 */
    Sixth: ParticipationMemberModel;
    /** 7番 */
    Seventh: ParticipationMemberModel;
    /** 8番 */
    Eighth: ParticipationMemberModel;
    /** 9番 */
    Ninth: ParticipationMemberModel;
    /** 投手 */
    Pitcher: ParticipationMemberModel;
}

/**
 * 打者成績
 */
export interface BatterStatsModel {
    /** 背番号 */
    Number: number;
    /** 名前 */
    Name: string;
    /** 打率 */
    AVG: string;
    /** 本塁打 */
    HR: number;
    /** 打点 */
    RBI: number;
    /** 盗塁 */
    SB: number;
    /** 出塁率 */
    OBP: string;
    /** OPS */
    OPS: string;
    /** RC27 */
    RC27: number;
}

/**
 * 投手成績
 */
export interface PitcherInfoModel {
    /** 背番号 */
    Number: number;
    /** 名前 */
    Name: string;
    /** 投球数 */
    PitchCount: number;
    /** 奪三振 */
    SO: number;
    /** 与四球 */
    BB: number;
}

/**
 * 打席結果
 */
interface AtBatResultModel {
    /** イニング */
    Inning: number;
    /** 結果 */
    Result: string;
}

/** 選手成績 */
interface PlayerResultAtGameModel {
    /** 背番号 */
    Number: number;
    /** 守備位置 */
    Position: string;
    /** 名前 */
    Name: string;
    /** 打席結果 */
    AtBatResult: AtBatResultModel[];
}

/**
 * 選手成績（1チーム単位）
 */
export interface PlayerResultPerTeamModel {
    /** 1番 */
    LeadOff: PlayerResultAtGameModel[];
    /** 2番 */
    Second: PlayerResultAtGameModel[];
    /** 3番 */
    Third: PlayerResultAtGameModel[];
    /** 4番 */
    Forth: PlayerResultAtGameModel[];
    /** 5番 */
    Fifth: PlayerResultAtGameModel[];
    /** 6番 */
    Sixth: PlayerResultAtGameModel[];
    /** 7番 */
    Seventh: PlayerResultAtGameModel[];
    /** 8番 */
    Eighth: PlayerResultAtGameModel[];
    /** 9番 */
    Ninth: PlayerResultAtGameModel[];
}

/**
 * 走者の状態
 */
export interface RunnerStateModel {
    /** 1塁 */
    First: boolean;
    /** 2塁 */
    Second: boolean;
    /** 3塁 */
    Third: boolean;
}

/**
 * 守備位置
 */
export interface PositionModel {
    /** 投手 */
    P: string;
    /** 捕手 */
    C: string;
    /** 一塁手 */
    FB: string;
    /** 二塁手 */
    SB: string;
    /** 三塁手 */
    TB: string;
    /** 遊撃手 */
    SS: string;
    /** 左翼手 */
    LF: string;
    /** 中堅手 */
    CF: string;
    /** 右翼手 */
    RF: string;
}

/**
 * 審判
 */
export interface UnpireModel {
    /** 球審 */
    PL: string;
    /** 1塁 */
    FB: string;
    /** 2塁 */
    SB: string;
    /** 3塁 */
    TB: string;
    /** 左翼 */
    LL: string;
    /** 右翼 */
    RL: string;
}

/**
 * 入力欄変更状況
 */
interface InputIsChangedModel {
    /** 守備位置 */
    Position: boolean;
    /** 背番号 */
    Number: boolean;
}

/**
 * 入力欄変更状況（チーム単位）
 */
export interface InputIsChangedPerTeamModel {
    /** 1番 */
    LeadOff: InputIsChangedModel;
    /** 2番 */
    Second: InputIsChangedModel;
    /** 3番 */
    Third: InputIsChangedModel;
    /** 4番 */
    Fourth: InputIsChangedModel;
    /** 5番 */
    Fifth: InputIsChangedModel;
    /** 6番 */
    Sixth: InputIsChangedModel;
    /** 7番 */
    Seventh: InputIsChangedModel;
    /** 8番 */
    Eighth: InputIsChangedModel;
    /** 9番 */
    Ninth: InputIsChangedModel;
}