// 可选的，通过 `node <script>`的方式执行的时候需要导入
// 使用`npx hardhat run <script>`执行脚本的时候会自动导入
// const hre = require("hardhat");

const main = async () => {
    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();
    
    console.log(`Contact deployed at ${counter.address}`);

    let counts = await counter.getCounts();
    console.log(`Current counts (1): ${counts}`);

    await counter.add();
    counts = await counter.getCounts();
    console.log(`Current counts (2): ${counts}`);

    await counter.add();
    counts = await counter.getCounts();
    console.log(`Current counts (3): ${counts}`);
}

main().then(() => {
    console.log(`success!`);
    process.exit(0);
}).catch((err) => {
    console.error(err);
    process.exit(1);
})