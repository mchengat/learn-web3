//SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

contract StringManipulate {
    string public greeting = "Hello World";

    function updateString(string memory _newString) public {
        greeting = _newString;
    }
}
