const { nextISSTimesForMyLocation } = require('./iss_promised')



nextISSTimesForMyLocation()
  .then((passover) => {
    comingSoon(passover)
  })
  .catch((error) =>{
    console.log("It didn't work: ", error.message)
  })
  const comingSoon = function (passover) {
  
    for (nextPass of passover) {
      const realtime = new Date(0);//credit help at end of page
      realtime.setUTCSeconds(nextPass.risetime);
      const minutes = Math.round(nextPass.duration / 60)
     
      console.log(`The next pass will be at ${realtime} and last ${minutes} minutes. SO GUTCHA POPCORN READY!`)  
    }
  
  }