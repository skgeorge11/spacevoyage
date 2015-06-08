var episodeType = ["combatType", "medicalType" , "scienceType"
];

var combatType = {problemTitle:["You discover a new alien."], problemAttribute: ["weaponAttribute" , "firstMateAttribute"] , problemDescription: ["randomName" , ", a seemingly altruistic and powerful alien, has made it his job to take care of a pre-warp civilization. From his perch 'on high,' his orbiting ", "randomMadeObject", " is shielding the planet below from all threats, but also preventing the civilization from advancing. Spacefleet would not approve of this tampering with a civilizations normal evolution. The alien's technology might be powerful enough to get you home quickly; If you could get a hold of it one way or another..."], resultPossitive:"good job!",
            resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[{optionOneText:"passivo", optionOneShip: "speed", optionOneCrew: "captain"}, "neutralo","aggressivo"]};

var medicalType = {problemTitle:["Medical emergency."], problemAttribute: ["shieldAttribute" , "firstMateAttribute"] , problemDescription: ["randomName" , "randomItem", "randomMadeObject"], resultPossitive:"he survives!",
            resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[{optionOneText:"passivo", optionOneShip: "speed", optionOneCrew: "captain"}, "neutralo","aggressivo"]};

var scienceType = {problemTitle:["Space Weirdness."], problemAttribute: ["speedAttribute" , "firstMateAttribute"] , problemDescription: ["randomItem"], resultPossitive:"You have the crystal!",
            resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[{optionOneText:"passivo", optionOneShip: "speed", optionOneCrew: "captain"}, "neutralo","aggressivo"]};

var randomObjectType = ["randomName" , "randomMadeObject" , "randomItem"]; //this has to be manually set to reflect all the var objects below it.
var randomName =["Ardwin", "Batok", "Catarin" , "Dour-gin"];
var randomMadeObject =["spaceship", "spacestation" , "colony"];
var randomItem = ["crystal"];


var episodes = [
{problemTitle:"Pilot", problemDescription:"While searching for a missing Rebel ship with a Spacefleet spy aboard, your ship is swept away to the Gamma quadrant, more than 70,000 light-years from home, by an incredibly powerful being known as the 'Carebear.' Your crew is in dishevel. You need to regroup your crew and give them a common purpose. What are your orders captain?", resultPossitive:"thesaurus the word yea", resultNegative:"Uh oh!", problemAnswer:["'Carebear! you are now my enemy.' Give the order to ready the weapons and demand that Carebear return you to the Alpha quadrant.","'The alien is clearly powerful...' Give the order to turn all non-esential systems off. Go into dark mode and 'lets hope Carebear doesn't notice us.'","'We must accept our fates.' Give the order to start heading home... it will only take 75 years..."]}

,{problemTitle:"Carebear", problemDescription:"Carebear, a seemingly altruistic and powerful alien, has made it his job to take care of a pre-warp civilization. From his perch 'on high,' his orbiting space station is shielding the planet below from all threats, but also preventing the civilization from advancing. The Carebea r's technology could be powerful enough to get you home quickly; If you could get a hold of it one way or another...", resultPossitive:"good job!",
            resultNegative:"Uh oh! the ship blew up :(", problemAnswer:[{optionOneText:"passivo", optionOneShip: "speed", optionOneCrew: "captain"}, "neutralo","aggressivo"]}

,{problemTitle:"2nd episode", problemDescription:"Meet an unexpected alien", resultPossitive:"good job2!",
 resultNegative:"Uh oh! the ship blew again :(", problemAnswer:["passive2","neutral2","aggressive2"]}

,{problemTitle:"3rd episode", problemDescription:"Take on new shipmates", resultPossitive:"good job3!",
 resultNegative:"Uh oh! the ship blew up a third time", problemAnswer:["passive3","neutral3","aggressive3"]}
];

var exampleEpisodeSytax =

{problemTitle:"episode title", problemDescription:"discription here", resultPossitive:"thesaurus the word yea", resultNegative:"Uh oh!", problemAnswer:["one","two","three"]}

;