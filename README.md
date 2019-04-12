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
            
