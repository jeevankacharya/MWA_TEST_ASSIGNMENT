const os = require("os");

async function checkSystem() {
  console.log("Checking your system…");
  const osInfo = await getOsInfo();

  console.log(osInfo);

  if (osInfo.core > 2 && osInfo.ram >= 4) {
    console.log("System is checked successfully.");
  } else {
    console.log("This app needs at least 4 GB of RAM");
    console.log("Processor is not supported");
  }
}

function getOsInfo() {
  return {
    ram: os.totalmem() / 1e9, //to conver the byte to GB :)
    core: os.cpus().length
  };
}

checkSystem();
