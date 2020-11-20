//`interface/class for leaderboard
//same with api
export interface LeaderBoardVoteResponseModel
{
    username: string;
    wins: number;//!its number not string not this error not affect the winratio
    turnsPlayed: number;
    winRatio: number;
}