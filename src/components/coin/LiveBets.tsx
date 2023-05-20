import React, { useEffect, useState } from "react";

interface GameHistory {
    gameState: any;

    type: string;
}

const LiveBets: React.FC<GameHistory> = ({ gameState, type }) => {
    const [betsInfo, setBetsInfo] = useState<any>(null);
    const [totalBets, setTotalBets] = useState<number>(0);

    useEffect(() => {
        console.log(gameState)
        if (gameState) {
            let tempBetsInfo = type === "Heads" ? gameState.heads : gameState.tails;
            setBetsInfo(tempBetsInfo);

            let totalBets = 0;
            for (let player in tempBetsInfo.bets) {
                totalBets += tempBetsInfo.bets[player];
            }
            setTotalBets(totalBets);
        }
    }, [gameState]);

    return (
        <div className="flex flex-col p-4 bg-[#212031] rounded w-72 h-min">
            <div className="flex pb-4 items-center justify-between w-full">
                <span className="font-bold">{type}</span>
                <div className={`${type === "Heads" ? "bg-red-500" : "bg-green-500"} w-6 h-6 rounded-full`} />
            </div>
            <div className="flex border-t border-gray-700 flex-col">
                <div className="flex items-center justify-between py-4">
                    <span className="font-bold text-sm">Total Bets</span>
                    <span className="font-bold text-sm">C₽{totalBets}</span>
                </div>
                {betsInfo && betsInfo.players && Object.keys(betsInfo.players).map(playerId => {
                    const player = betsInfo.players[playerId];
                    const bet = betsInfo.bets[playerId];
                    return (
                        <div className="flex items-center justify-between py-2" key={playerId}>
                            <div className="flex items-center gap-2">
                                <img src={player.profilePicture} className="w-8 h-8 rounded-full" />
                                <span className="font-bold text-sm">{player.username}</span>
                            </div>
                            <span className="font-bold text-sm">C₽{bet}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default LiveBets;
