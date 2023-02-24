const main = async () => {
    //creating signers accounts
    const [owner, randomPerson] = await hre.ethers.getSigners();
    //creating artifacts for our contract
    //const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    //create local eth network
    //const waveContract = await waveContractFactory.deploy();
    //deploy our contract to the local eth network, USE IT NOW!!
    //await waveContract.deployed();
  
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
  
    await waveContract.getTotalWaves();
  
    const firstWaveTxn = await waveContract.connect(randomPerson).wave();
    await firstWaveTxn.wait();
  
    await waveContract.getTotalWaves();
  
    const secondWaveTxn = await waveContract.connect(owner).wave();
    await secondWaveTxn.wait();
  
    await waveContract.getTotalWaves();
  };
  

  //RUN
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();