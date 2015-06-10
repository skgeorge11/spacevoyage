var episodeType = ["resourceType","combatType", "medicalType" , "scienceType"]; //add  any new types

var combatType = {problemTitle:["You discover a new alien."],
    plotTwistOne:{problemPicture: "sickbayone.jpg", problemAttribute: ["speedAttribute" , "firstMateAttribute"] , problemNegative: ["speedAttribute"] ,problemDescription: ["randomName" , ", a seemingly altruistic and powerful alien, has made it his job to take care of a pre-warp civilization. From his perch 'on high,' his orbiting ", "randomMadeObject", " is shielding the planet below from all threats, but also preventing the civilization from advancing. Spacefleet would not approve of this tampering with a civilizations normal evolution. The alien's technology might be powerful enough to get you home quickly; If you could get a hold of it one way or another..."], resultPossitive:"You have the crystal!", resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[["passivo: 'who cares!' blurts out captain ", "captainName"], "neutralo","aggressivo"]},
    plotTwistTwo:{problemPicture: "allcrew.jpg", problemAttribute: ["speedAttribute" , "firstMateAttribute"] , problemNegative: ["shieldAttribute"] ,problemDescription: ["The " ,"randomItem","! I must have it."], resultPossitive:"You have the crystal!", resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[["passivo: 'who cares!' blurts out captain ", "captainName"], "neutralo","aggressivo"]}};

var medicalType = {problemTitle:["Medical Emergency!"],
    plotTwistOne:{problemPicture: "sickbayone.jpg", problemAttribute: ["speedAttribute" , "firstMateAttribute"] , problemNegative: ["speedAttribute"] ,problemDescription: ["randomItem", "s.... 'who needs em!"], resultPossitive:"You have the crystal!", resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[["passivo: 'who cares!' blurts out captain ", "captainName"], "neutralo","aggressivo"]},
    plotTwistTwo:{problemPicture: "allcrew.jpg", problemAttribute: ["speedAttribute" , "firstMateAttribute"] , problemNegative: ["shieldAttribute"] ,problemDescription: ["The " ,"randomItem","! I must have it."], resultPossitive:"You have the crystal!", resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[["passivo: 'who cares!' blurts out captain ", "captainName"], "neutralo","aggressivo"]}};

var scienceType = {problemTitle:["Ooooo! a flyiing rock..."],
    plotTwistOne:{problemPicture: "sickbayone.jpg", problemAttribute: ["speedAttribute" , "firstMateAttribute"] , problemNegative: ["speedAttribute"] ,problemDescription: ["randomItem", "s.... 'who needs em!"], resultPossitive:"You have the crystal!", resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[["passivo: 'who cares!' blurts out captain ", "captainName"], "neutralo","aggressivo"]},
    plotTwistTwo:{problemPicture: "allcrew.jpg", problemAttribute: ["speedAttribute" , "firstMateAttribute"] , problemNegative: ["shieldAttribute"] ,problemDescription: ["The " ,"randomItem","! I must have it."], resultPossitive:"You have the crystal!", resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[["passivo: 'who cares!' blurts out captain ", "captainName"], "neutralo","aggressivo"]}};

var resourceType = {problemTitle:["Space Resources"],
    plotTwistOne:{problemPicture: "sickbayone.jpg", problemAttribute: ["speedAttribute" , "firstMateAttribute"] , problemNegative: ["speedAttribute"] ,problemDescription: ["randomItem", "s.... 'who needs em!"], resultPossitive:"You have the crystal!", resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[["passivo: 'who cares!' blurts out captain ", "captainName"], "neutralo","aggressivo"]},
    plotTwistTwo:{problemPicture: "allcrew.jpg", problemAttribute: ["speedAttribute" , "firstMateAttribute"] , problemNegative: ["shieldAttribute"] ,problemDescription: ["The " ,"randomItem","! I must have it."], resultPossitive:"You have the crystal!", resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[["passivo: 'who cares!' blurts out captain ", "captainName"], "neutralo","aggressivo"]}};

var randomObjectType = ["randomName" , "randomMadeObject" , "randomItem","shipName","captainName","firstMateName"]; //this has to be manually set to reflect all the var objects below it.
var randomName =["Ardwin", "Batok", "Catarin" , "Dour-gin"];
var randomMadeObject =["spaceship", "spacestation" , "colony"];
var randomItem = ["crystal" ,"warp conduit"];
var shipName = ["USS Treker"];
var captainName = ["Juneway"];
var firstMateName = ["Albert"];
