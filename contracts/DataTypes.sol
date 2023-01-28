// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/*
 * @title Solidity data types
 * @author Torio
 * @notice Smart contract demonstrates simple data types available in Solidity
 *
 */

contract DataTypes {
    uint256 x = 9; // unsigned integer >= 0; 256-bit
    int256 i = -68; // can store negative integers
    uint8 j = 17; // 8-bit
    bool isBlockchainTheFuture = true;
    address owner = msg.sender; // msg.sender - eth address of the account that sent this transaction
    bytes32 bMsg = "hello";
    string sMsg = "hello";

    function getStateVariables()
        public
        view
        returns (
            uint256,
            int256,
            uint256,
            bool,
            address,
            bytes32,
            string memory
        )
    {
        return (x, i, j, isBlockchainTheFuture, owner, bMsg, sMsg);
    }

    function setbMsg(bytes32 newValue) private returns (bytes32) {
        bMsg = newValue;
        return bMsg;
    }
}
