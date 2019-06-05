
var BigNumber = require('../../node_modules/bignumber.js');
var ERC721Mintable = artifacts.require("./ERC721Mintable.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var Verifier = artifacts.require("./Verifier.sol");

var proofJSON = {
    "proof":
    {
		"A":["0x1a18a833c90a9ac04131c4e3ec1de72b183bd1a4df285b5ededbd95ff2a07803", "0x1b000610d30683c1e0495201e4bbbab1f8eefdfddf583ddb64f6186fe0c79913"],
		"A_p":["0x118a96097b41b33772fde894f430fa2594fdc06c1bab064b1fb049fbe02ae714", "0x5df57f0a507290aa5a2df5a4c2c6ca12586c9cae055e187ff960ba7a6af34ef"],
		"B":
			[["0x1caa1d841430682e34f6d66004fada12faa294aa70a5213921e794276ab3b981", "0x148cd86e50e0de46ea7bcfd8e714b67408bbfffd5b37db893aac1ad6a2b89424"], ["0x263717d0ffee28fcf11d399f2c0ce76ce5d6233ad77617fc55697431135b5e06", "0xdc27563be64363f2551af6a3ecc97db28aecbc0a1604f45d4044daecc077ce4"]],
		
		"B_p":["0x2081568d45c3a50200fc9fb6202b4043fb22e9ef7026563ccbe1450be5fc65a6", "0x103a665bbb1d84b1dc59d23a49af5c231553a25dbd1ccdcf98a67b9fb6dc0f84"],
		"C":["0x16574362e71afe6d3fdaf0530867e698c1c4a838197c792f53bd5379a210408b", "0x2777339019d50d363fdf4239d39d119cb453c825b3ad7a7d6404a6bcbb4e71b0"],
		"C_p":["0x196483fb9fc90299389894a8afc2bdbf39c632da43479c90d287368e4b3650e3", "0x2c5c8d77c97daf8d10a4379c94426b659a6d3e0e5513678457a2b7a062304bc4"],
		"H":["0x7e6d0b16096c9da20bc4563970f11986237763fafcdeece62bf46f6358b83fe", "0x1cca7875a94a94136fa67b1b22b3d53e876326540a8f99811e487a0e941e75ee"],
		"K":["0x13c8206b21055629a3e27b1bbd740e7ca879704d1a08e269208226d255bb4bce", "0x15da72f0771501678fa142a6880f4e6717a15777b9af66fc9754d6486999b666"]
	},
    "input": [9, 1]
}


var Config = async function (accounts) {

    const _owner = accounts[0];
    const _account_one = accounts[0];
    const _account_two = accounts[1];

    const proof = proofJSON['proof'];
    const input = proofJSON['input'];

    const _symbol = 'URT'
    const _name = 'Udacity Real Estate Title'
    const _baseTokenURI = 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/'
    const _firstTokenId = 1
    const _lastTokenId = 10

    let erc721Mintable = await ERC721Mintable.new(_name, _symbol, _baseTokenURI);
    let verifier = await Verifier.new();
    let solnSquareVerifier = await SolnSquareVerifier.new(verifier.address, _name, _symbol, _baseTokenURI);



    return {
        owner: _owner,
        account_one: _account_one,
        account_two: _account_two,
        firstTokenId: _firstTokenId,
        lastTokenId: _lastTokenId,
        proof: proof,
        input: input,
        name: _name,
        symbol: _symbol,
        baseTokenURI: _baseTokenURI,
        weiMultiple: (new BigNumber(10)).pow(18),
        myToken: erc721Mintable,
        solnSquareVerifier: solnSquareVerifier,
        verifier: verifier
    }
}

module.exports = {
    Config: Config
};