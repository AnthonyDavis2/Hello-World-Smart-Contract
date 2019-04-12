pragma solidity ^0.5.0;


contract HelloEthSalon {

    string message = "I know testing of a contract!!";

  constructor() public {

  }

  function GetMessage() public returns (string memory _message) {
    return message;
  }

}
