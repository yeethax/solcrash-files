module.exports = global.config = {

    userAddress: null,
    pfpUri: null,
    pfpSrc: null,
    images: [],
    balance: { sol: 0, usdc: 0, dust: 0, forge: 0, puff: 0, jelly: 0 },
    connection: null,
    sound_on: true,
    deposit_audio: null,
    withdraw_audio: null,
    max_win: "?",
    min_bet: "?",
    max_bet: "?",

    gamesPlayed: 0,
    totalWagered: { sol: 0, usdc: 0, dust: 0, forge: 0, puff: 0, jelly: 0 },
    netProfit: 0,

    depositHistory: [],
    withdrawalHistory: [],

    storedGame: null,
    previous_bet: null,
    gameHistory: [],
    history: []

};