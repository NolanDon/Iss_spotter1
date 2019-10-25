const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passover) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  comingSoon(passover);
});

const comingSoon = function (passover) {
  
  for (nextPass of passover) {
    const realtime = new Date(0);//credit help at end of page
    realtime.setUTCSeconds(nextPass.risetime);
    const minutes = Math.round(nextPass.duration / 60)
   
    console.log(`The next pass will rise at ${realtime} and last ${minutes} minutes.`)  
  }

}
