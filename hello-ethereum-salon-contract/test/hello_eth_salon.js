// contract('HelloEthSalon', function(accounts) {
//   it("should assert true", function(done) {
//     var hello_eth_salon = HelloEthSalon.deployed();
//     assert.isTrue(true);
//     done();
//   });
// });
//importing contract from HelloEthSalon
var HelloEthSalon = artifacts.require("./HelloEthSalon.sol");

contract("HelloEthSalon:GetMessage", function(accounts) {
  it("should return a correct string", function(done){
    var hello_eth_salon = HelloEthSalon.deployed();
    hello_eth_salon.then(function(contract){
      return contract.GetMessage.call(); // **IMPORTANT
    }).then(function(result){
      assert.isTrue(result === "I know testing of a contract!!");
      done();
    })
  });
});
