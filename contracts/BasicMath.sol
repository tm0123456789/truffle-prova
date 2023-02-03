// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BasicMath {
    uint256 private constant MAX_UINT256 = 2**256 - 1;

    function add(uint256 _num1, uint256 _num2) public pure returns (uint256) {
        return _num1 + _num2;
    }
}
