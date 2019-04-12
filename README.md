<h1>Hello-World-Smart-Contract</h1>
<h2>Building a HelloWorld smart contract in solidity and truffle.</h2>
<hr>
    <h2>Process:</h2>
    <ol>
        <li>
            <h3>Installing solidity and truffle using npm.</h3>
            <pre>
                <code>
                    $ npm i -g solc
                    $ npm i -g truffle
                </code>
            </pre>
        </li>
        <li>
            <h3>Creating a project.</h3>
            <p> Creating a project called<em> hello-salon-contract</em> and enter the project/folder. While inside the folder use the <em>truffle init</em> command to init a project, this will create the structure of the project.</p>
            <pre>
                <code>
                  $ mkdir hello-ethereum-salon-contract
                  $ cd hello-ethereum-salon-contract
                  $ truffle init
                </code>
            </pre>
        </li>
        <li>
            <h3>Creating contract.</h3>
            <p>Creating a contract called <em>HelloEthSalon</em> inside of the contract folder using truffle. After this command the contracts folder will have two files inside called <em>HelloEthSalon.sol</em> and <em>Migrations.sol</em>.</p>
            <pre>
                <code>
                  $ truffle create contract HelloEthSalon  
                </code>
            </pre>
        </li>
        <li>
            <h3>Editing contract.</h3>
            <p>Adding two things within the contract thats been created. One add a global string variable called <em>message</em> and initialize it with <em>'Hello Ethereum Salon!'</em>. Secondly, add a new function called <em>GetMessage()</em> that will return the <em>message</em>.</p>
            <pre>
                <code>
                pragma solidity ^0.5.0;

                contract HelloEthSalon {
                    string message = "I know testing of a contract!!";
                    
                    constructor() public {
                    }
                    
                    function GetMessage() public returns (string memory _message) {
                    return message;
                    }
                }
                </code>
            </pre>
            <p>To check if everything is right use <em>truffle compile</em>.</p>
            <pre>
            <code>
            $ truffle compile
            </code>
            </pre>
        </li>
        <li>
            <h3>Installing ethereum network simulator.</h3>
            <p>Enter the command to download <em>truffle</em> and <em>ethereumjs-testrpc</em>.</p>
            <pre>
                <code>
                    $ npm i -g truffle ethereumjs-testrpc
                </code>
            </pre>
        </li>
        <li>
            <h3>To test contract.</h3>
            <p>Creating a testing file to test if the function within our contract will actually work. The <em>truffle create test</em> command to start a testing file. This command will create a testing file called <em>hello_eth_salon.js</em> under the <em>test</em> folder, which will need to be edited.</p>
            <pre>
            <code>
                $ truffle create test HelloEthSalon
            </code>
            </pre>
            <p>Within the test file should be the following code.</p>
            <pre>
            <code>
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
            </code>
            </pre>
            <p>Testing the test file using <em>truffle test</em> command.</p>
            <pre>
                <code>
                    $ truffle test ./test/hello_eth_salon.js
                </code>
            </pre>
        </li>
    </ol>
