//`interface/class for leaderboard
//same with api
export interface LeaderBoardVoteResponseModel
{
    username: string;
    wins: number;//!its number not string this is one of the error cause winratio not showing
    turnsPlayed: number;
    winRatio: number;
}