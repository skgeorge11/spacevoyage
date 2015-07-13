var episodeType = ["resourceType","combatType", "medicalType" , "scienceType", "respiteType"]; //add

function episodeConstruct (title, oPicture, opAtt, oiAtt, oDecscip, orPass, orPos, orNeg, oAns1, oAns2, oAns3, oAns4, oAns5, pt1Picture, pt1pAtt, pt1iAtt, pt1Decscip, pt1rPass, pt1rPos, pt1rNeg, pt1Ans1, pt1Ans2, pt1Ans3, pt1Ans4, pt1Ans5, pt2Picture, pt2pAtt, pt1iAtt, pt2Decscip, pt2rPass, pt2rPos, pt2rNeg, pt2Ans1, pt2Ans2, pt2Ans3, pt2Ans4, pt2Ans5, fPicture, fpAtt, pt1iAtt, fDecscip, frPass, frPos, frNeg, fAns1, fAns2, fAns3, fAns4, fAns5, wPicture, wpAtt, pt1iAtt, wDecscip, wrPass, wrPos, wrNeg, wAns1, wAns2, wAns3, wAns4, wAns5){
    this.problemTitle = title;
    this.originPlot = plotConstruct(oPicture, opAtt, oiAtt, oDecscip, orPass, orPos, orNeg, oAns1, oAns2, oAns3, oAns4, oAns5);
    this.plotTwistOne = plotConstruct(pt1Picture, pt1pAtt, pt1iAtt, pt1Decscip, pt1rPass, pt1rPos, pt1rNeg, pt1Ans1, pt1Ans2, pt1Ans3, pt1Ans4, pt1Ans5);
    this.plotTwistTwo = plotConstruct(pt2Picture, pt2pAtt, pt1iAtt, pt2Decscip, pt2rPass, pt2rPos, pt2rNeg, pt2Ans1, pt2Ans2, pt2Ans3, pt2Ans4, pt2Ans5);
    this.failure = plotConstruct(fPicture, fpAtt, pt1iAtt, fDecscip, frPass, frPos, frNeg, fAns1, fAns2, fAns3, fAns4, fAns5);
    this.winner = plotConstruct(wPicture, wpAtt, pt1iAtt, wDecscip, wrPass, wrPos, wrNeg, wAns1, wAns2, wAns3, wAns4, wAns5);
}
function plotConstruct (picture, pAttribute, iAttribute, description, rPass, rPossitive, rNegative,answer1, answer2, answer3, answer4, answer5){
    this.problemPicture = picture;
    this.problemAttribute = pAttribute;
    this.immediateAttribute = iAttribute;
    this.problemDescription = description;
    this.resultPass = rPass;
    this.resultPossitive = rPossitive;
    this.resultNegative = rNegative;
    this.problemAnswer[0] = answer1;
    this.problemAnswer[1] =answer2;
    this.problemAnswer[2] =answer3;
    this.problemAnswer[3] =answer4;
    this.problemAnswer[4] =answer5;
}

//   Logic
//1 checks if the selection was to skip episode.
//2 immediate attribute in origin plot is applied only if skipped.
//3 checks for winner state: changes type, state to origin, fills, and break
//4 checks if successful
//5 success, changes attribute
//6 success, change to winner state
//7 success,  apply result positive
//7b success, applies winner immediate attributes, and break
//8 fail, checks if selection result is failure
//9 if failure,changes state to failure, applies attributes as negative, failure text
//10 if not failure state, changes state to match selection
//11 nfs, applies falure text
//12 nfs, applies negative immediate attribute of new state.


var resourceType = {problemTitle:["The Problem with ","randomResource"],
    originPlot:{problemPicture: "alienencounter.jpg", problemAttribute: [10, "firstMateAttribute","weaponAttribute"] ,problemDescription: ["randomName", "randomName","randomName","randomName"," is an alien " , "randomJob" , " looking to sell his information regarding the location of a ","randomResource"," source.  His ship floats in space in front of yours, and sensors show it to be near equal in technology. He smiles with a sharp toothed grin on the main viewer and he says he is only willing to negotiate with " , "firstMateName" , ".  As captain your concerned about this alien's motivations and the considerable risk to your First-mate on a solo away mission."], resultPass:"Your ship began to jump into warp just as the 'Trader' opened fire. Your shields took most of the brunt, but your got away with only minor additional damage." , immediateAttribute: [14,"allShipAttribute"] , resultPossitive:"Error", resultNegative:["plotTwistOne", "failure", "plotTwistTwo","nextEpisode", "nextEpisode"], failureText:"", problemAnswer:[["My name is.", "captainName",", I am the captain of this ship and you wont be making the terms of our negotion... I will."], "Order your First-mate to teleport to the alient ship to begin negotiations.",["securityName",", arm the photons. I dont like the look of this guy, im guessing we can take that information by force!"],"Quick! Ensign lay in any heading and engage to warp 6. This 'Trader' is lying. He is looking to take our vessel by force!",""]},
    plotTwistOne:{problemPicture: "alienresource.jpg", problemAttribute: [8,"captainAttribute"] , immediateAttribute: [4,"captainAttribute"] ,problemDescription: ["The alien warns you that he is not to be triffled with. Your aggressive attempt at diplomacy has set him on the defensive. This may make negotiations harder, but at least ","firstMateName"," is safe. The question is, how does your crew get the information from the alien now?"], resultPossitive: "Error", resultNegative:["plotTwistTwo", "plotTwistTwo", "plotTwistTwo", "nextEpisode" ,"plotTwistTwo"], failureText:"The alien informant raises shields and warns you that he will defend himself if his price will not be paid.", problemAnswer:[["randomResource", " is vital to our systems. We must have that information, but I will not hand over any of my crew."], "This 'Trader' is lying. He is looking for a hostage!" , ["securityName",", arm the photons. I dont like the look of this guy, im guessing we can take that information by force!"] , "Change tactics... teleport your First-mate over to see if peaceful negotiations is still possible",["chiefName",", could we download his sensor records if we disguise a virus in the hailing frequency?"]]},
    plotTwistTwo:{problemPicture: "shipphaser.jpg", problemAttribute: [6,"weaponAttribute" , "securityAttribute", "captainAttribute"] , immediateAttribute: [20,"allShipAttribute"] ,problemDescription: ["Both ships begin evasive manuvers. Several rounds of phaser fire have damaged both ships, but your shields are holding a little better. You could probably with this fight, but at what cost to crew and ship."], resultPossitive:"Error: plot two", resultNegative:["failure", "failure", "plotTwistOne", "failure","failure"], failureText:"The alien informant is ready for a fight, and his ship holds its own, as a battle breaks any hope of a peaceful negotiation.", problemAnswer:["Full power to shields, and get us out of here", ["securityName",", keep shooting until he gives us the information."] ,"Hail him! Give him twice what he was asking... Otherwise both ships may be destroyed.","Surrender. Show him we are serious about peace. I think this 'Trader' really just wants to sell the information.",""]},
    failure:{problemPicture: "shipexplosion.jpg", problemAttribute: [20,"allShipAttribute"] , immediateAttribute: [10,"weaponAttribute","shieldAttribute"] ,problemDescription: ["Captain, take a look over your ship and crew. What are your orders based on highest priority needs?"], resultPossitive:"Error: failure", resultNegative:["continue","continue","continue","continue","continue"], failureText:"Captain, your plan has failed! You were able to put up your shields before the shooting began, but the ship and crew took damage before the alien excaped into warp.", problemAnswer:["Continue.","","","",""]},
    winner:{problemPicture: "winResource.jpg", problemAttribute: [0,"Error"] , immediateAttribute: [20,"resourceAttribute"] ,problemDescription: "Captain, take a look over your ship and crew. What are your orders based on highest priority needs?", resultPossitive:["You were right captain, and your decsion has led your crew to the ","randomResource",".  You shake ","chiefName","'s hand, and say with a smile 'There you go. That ought to get our replicator rations back.'"], resultNegative:["resourceType", "combatType", "medicalType", "scienceType","respiteType"], problemAnswer:["We must find more resources, and soon. Scan our sector and set a course to the nearest Tri-Lithium deposit.","Ensign, set our course for home. Warp 8.","We have too many injured crewmen... all staff report to sick bay!","Sensors show a sub-space rift forming? lay in a course, maybe we will get home sooner than we think.",["securityName",", find me a M-class planet where we can land for repairs."]]}
};

var combatType = {problemTitle:["randomRace","ians don't negotiate"],
    originPlot:{problemPicture: "alienship1.jpg", problemAttribute: [6, "weaponAttribute", "chiefAttribute"] ,problemDescription: ["You have been making good progress on a direct route toward home, however this route has taken ","shipName"," into ","randomRace","ian space. They have refused to negotiate your passage through thier teritory. Their ship is weaker than yourown, but it is hard to know how many of thier ships could arrive to assist."], resultPass:["You navigate your ship out of ","randomRace" ,"ian space and plot a long trip around to avoid conflict. Unfortunately, this has used extra ship resources and not gotten you any closer to home"], immediateAttribute: [12,"resourceAttribute"] , resultPossitive:"Error: origin res-Pos", resultNegative:["plotTwistOne", "plotTwistOne", "plotTwistTwo","failure", "nextEpisode"], failureText:"Error: origin failure", problemAnswer:[["Surely we can come to some understanding. ","securityName"," keep hailing them."],"Ensign, raise shields. We won't be bullied, but were not going to start a fight either.","Tell them we aggree to thier terms. But as soon as they are outside scanning range, engage warp 8 previous heading", "Fire! full spread. No one will tell us where we can fly.","Ensign, plot a course around thiere territory. We can't risk taking more damage."]},
    plotTwistOne:{problemPicture: "shipphaser.jpg", problemAttribute: [8,"weaponAttribute","shieldAttribute"] , immediateAttribute: [4,"captainAttribute"] ,problemDescription: ["Your orders have made conflict almost unavoidable. The alien ships look poised to attack, leaving only a single escape route... back the way you came."], resultPossitive: "Error", resultNegative:["failure", "nextEpisode", "failure", "failure" ,"failure"], failureText:"The aliens arm laser cannons and warn you that they will attack if you do not retreat out of thier territory.", problemAnswer:["I don't care if there are 5 of them, blown them out of the sky. The sub-space disturbance should keep thier allies away long enough.","We surrender and apologize for our actions. we will turn around and leave your region immediately.","Ignore them, they pose no real threat. Impulse engines full and shields up.","",""]},
    plotTwistTwo:{problemPicture: "shipsurrounded.jpg", problemAttribute: [6,"captainAttribute" , "chiefAttribute", "speedAttribute"] , immediateAttribute: [6,"speedAttribute"] ,problemDescription: ["The situation is tense, and your trying to talk your way out of a conflict. Hopefully ","chiefName"," can find a way to get the warp engines engaged before the shooting begins."], resultPossitive:"Error: plot two", resultNegative:["plotTwistOne", "failure", "nextEpisode", "plotTwistOne","failure"], failureText:"At first, your ruse seems to work. However, it turns out this race's territory has a sub-space disturbance that has made warp travel impossible. You drop out of warp and are quickly surrounded by several of thier ships.", problemAnswer:[["Just keep them talking ","firstMateName",". ","chiefName" ," needs as much time as they can get to kick us back into warp."],"I don't care if there are 5 of them, blown them out of the sky. The sub-space disturbance should keep thier allies away long enough.","We apologize for our actions, we will turn around and leave your region immediately.","Ignore them, they pose no real threat. Impulse engines full and shields up.",""]},
    failure:{problemPicture: "shipexplosion.jpg", problemAttribute: [40,"allShipAttribute"] , immediateAttribute: [10,"allHealthAttribute"] ,problemDescription: "Captain, take a look over your ship and crew. What are your orders based on highest priority needs?", resultPossitive:"Error: failure", resultNegative:["continue","continue","continue","continue","continue"], failureText:"Captain, your plan has failed! Your ship has taken a beating, and eventually you had to admit defeat. You ordered a retreat and luckily the aliens didn't follow once you were out of their territory", resultPossitive:"Error: failure", problemAnswer:["Continue.","","","",""]},
    winner:{problemPicture: "winResource.jpg", problemAttribute: [0,"Error"] , immediateAttribute: [20,"resourceAttribute"] ,problemDescription: "Captain, take a look over your ship and crew. What are your orders based on highest priority needs?", resultPossitive:["You were right captain, and your decsion has led your crew to the ","randomResource",".  You shake ","chiefName","'s hand, and say with a smile 'There you go. That ought to get our replicator rations back.'"], resultNegative:["resourceType", "combatType", "medicalType", "scienceType","respiteType"], problemAnswer:["We must find more resources, and soon...","Ensign, set our course for home. Warp 8.","We have too many injured crewmen... all staff report to sick bay!","Sensors show a sub-space rift forming? lay in a course, maybe we will get home sooner than we think.",["securityName",", find me a M-class planet where we can land for repairs."]]}
};

var medicalType = {problemTitle:["Medical Emergency!"],
    originPlot:{problemPicture: "alienencounter.jpg", problemAttribute: [10, "firstMateAttribute","weaponAttribute"] ,problemDescription: ["randomName", " is an alien " , "randomJob" , " looking to sell his information regarding the location of a ","randomResource"," source.  His ship floats in space in front of yours, and sensors show it to be near equal in technology. He smiles with a sharp toothed grin on the main viewer and he says he is only willing to negotiate with " , "firstMateName" , ".  As captain your concerned about this alien's motivations and the considerable risk to your First-mate on a solo away mission."], resultPass:"Your ship began to jump into warp just as the 'Trader' opened fire. Your shields took most of the brunt, but your got away with only minor additional damage." , immediateAttribute: [14,"allShipAttribute"] , resultPossitive:"Error", resultNegative:["plotTwistOne", "failure", "plotTwistTwo","nextEpisode", "nextEpisode"], failureText:"", problemAnswer:[["My name is.", "captainName",", I am the captain of this ship and you wont be making the terms of our negotion... I will."], "Order your First-mate to teleport to the alient ship to begin negotiations.",["securityName",", arm the photons. I dont like the look of this guy, im guessing we can take that information by force!"],"Quick! Ensign lay in any heading and engage to warp 6. This 'Trader' is lying. He is looking to take our vessel by force!",""]},
    plotTwistOne:{problemPicture: "alienresource.jpg", problemAttribute: [8,"captainAttribute"] , immediateAttribute: [4,"captainAttribute"] ,problemDescription: ["The alien warns you that he is not to be triffled with. Your aggressive attempt at diplomacy has set him on the defensive. This may make negotiations harder, but at least ","firstMateName"," is safe. The question is, how does your crew get the information from the alien now?"], resultPossitive: "Error", resultNegative:["plotTwistTwo", "plotTwistTwo", "plotTwistTwo", "nextEpisode" ,"plotTwistTwo"], failureText:"The alien informant raises shields and warns you that he will defend himself if his price will not be paid.", problemAnswer:[["randomResource", " is vital to our systems. We must have that information, but I will not hand over any of my crew."], "This 'Trader' is lying. He is looking for a hostage!" , ["securityName",", arm the photons. I dont like the look of this guy, im guessing we can take that information by force!"] , "Change tactics... teleport your First-mate over to see if peaceful negotiations is still possible",["chiefName",", could we download his sensor records if we disguise a virus in the hailing frequency?"]]},
    plotTwistTwo:{problemPicture: "shipphaser.jpg", problemAttribute: [6,"weaponAttribute" , "securityAttribute", "captainAttribute"] , immediateAttribute: [20,"allShipAttribute"] ,problemDescription: ["Both ships begin evasive manuvers. Several rounds of phaser fire have damaged both ships, but your shields are holding a little better. You could probably with this fight, but at what cost to crew and ship."], resultPossitive:"Error: plot two", resultNegative:["failure", "failure", "plotTwistOne", "failure","failure"], failureText:"The alien informant is ready for a fight, and his ship holds its own, as a battle breaks any hope of a peaceful negotiation.", problemAnswer:["Full power to shields, and get us out of here", ["securityName",", keep shooting until he gives us the information."] ,"Hail him! Give him twice what he was asking... Otherwise both ships may be destroyed.","Surrender. Show him we are serious about peace. I think this 'Trader' really just wants to sell the information.",""]},
    failure:{problemPicture: "shipexplosion.jpg", problemAttribute: [20,"allShipAttribute"] , immediateAttribute: [10,"weaponAttribute","shieldAttribute"] ,problemDescription: ["Your ship has blown up."], resultPossitive:"Error: failure", resultNegative:["continue","continue","continue","continue","continue"], failureText:"Captain, your plan has failed! You were able to put up your shields before the shooting began, but the ship and crew took damage before the alien excaped into warp.", problemAnswer:["Continue.","","","",""]},
    winner:{problemPicture: "winResource.jpg", problemAttribute: [0,"Error"] , immediateAttribute: [20,"resourceAttribute"] ,problemDescription: "Captain, take a look over your ship and crew. What are your orders based on highest priority needs?", resultPossitive:["You were right captain, and your decsion has led your crew to the ","randomResource",".  You shake ","chiefName","'s hand, and say with a smile 'There you go. That ought to get our replicator rations back.'"], resultNegative:["resourceType", "combatType", "medicalType", "scienceType","respiteType"], problemAnswer:["We must find more resources, and soon...","Ensign, set our course for home. Warp 8.","We have too many injured crewmen... all staff report to sick bay!","Sensors show a sub-space rift forming? lay in a course, maybe we will get home sooner than we think.",["securityName",", find me a M-class planet where we can land for repairs."]]}
};

var scienceType = {problemTitle:["Ooooo! a flyiing rock..."],
     originPlot:{problemPicture: "alienencounter.jpg", problemAttribute: [10, "firstMateAttribute","weaponAttribute"] ,problemDescription: ["randomName", " is an alien " , "randomJob" , " looking to sell his information regarding the location of a ","randomResource"," source.  His ship floats in space in front of yours, and sensors show it to be near equal in technology. He smiles with a sharp toothed grin on the main viewer and he says he is only willing to negotiate with " , "firstMateName" , ".  As captain your concerned about this alien's motivations and the considerable risk to your First-mate on a solo away mission."], resultPass:"Your ship began to jump into warp just as the 'Trader' opened fire. Your shields took most of the brunt, but your got away with only minor additional damage." , immediateAttribute: [14,"allShipAttribute"] , resultPossitive:"Error", resultNegative:["plotTwistOne", "failure", "plotTwistTwo","nextEpisode", "nextEpisode"], failureText:"", problemAnswer:[["My name is.", "captainName",", I am the captain of this ship and you wont be making the terms of our negotion... I will."], "Order your First-mate to teleport to the alient ship to begin negotiations.",["securityName",", arm the photons. I dont like the look of this guy, im guessing we can take that information by force!"],"Quick! Ensign lay in any heading and engage to warp 6. This 'Trader' is lying. He is looking to take our vessel by force!",""]},
    plotTwistOne:{problemPicture: "alienresource.jpg", problemAttribute: [8,"captainAttribute"] , immediateAttribute: [4,"captainAttribute"] ,problemDescription: ["The alien warns you that he is not to be triffled with. Your aggressive attempt at diplomacy has set him on the defensive. This may make negotiations harder, but at least ","firstMateName"," is safe. The question is, how does your crew get the information from the alien now?"], resultPossitive: "Error", resultNegative:["plotTwistTwo", "plotTwistTwo", "plotTwistTwo", "nextEpisode" ,"plotTwistTwo"], failureText:"The alien informant raises shields and warns you that he will defend himself if his price will not be paid.", problemAnswer:[["randomResource", " is vital to our systems. We must have that information, but I will not hand over any of my crew."], "This 'Trader' is lying. He is looking for a hostage!" , ["securityName",", arm the photons. I dont like the look of this guy, im guessing we can take that information by force!"] , "Change tactics... teleport your First-mate over to see if peaceful negotiations is still possible",["chiefName",", could we download his sensor records if we disguise a virus in the hailing frequency?"]]},
    plotTwistTwo:{problemPicture: "shipphaser.jpg", problemAttribute: [6,"weaponAttribute" , "securityAttribute", "captainAttribute"] , immediateAttribute: [20,"allShipAttribute"] ,problemDescription: ["Both ships begin evasive manuvers. Several rounds of phaser fire have damaged both ships, but your shields are holding a little better. You could probably with this fight, but at what cost to crew and ship."], resultPossitive:"Error: plot two", resultNegative:["failure", "failure", "plotTwistOne", "failure","failure"], failureText:"The alien informant is ready for a fight, and his ship holds its own, as a battle breaks any hope of a peaceful negotiation.", problemAnswer:["Full power to shields, and get us out of here", ["securityName",", keep shooting until he gives us the information."] ,"Hail him! Give him twice what he was asking... Otherwise both ships may be destroyed.","Surrender. Show him we are serious about peace. I think this 'Trader' really just wants to sell the information.",""]},
    failure:{problemPicture: "shipexplosion.jpg", problemAttribute: [20,"allShipAttribute"] , immediateAttribute: [10,"weaponAttribute","shieldAttribute"] ,problemDescription: ["Your ship has blown up."], resultPossitive:"Error: failure", resultNegative:["continue","continue","continue","continue","continue"], failureText:"Captain, your plan has failed! You were able to put up your shields before the shooting began, but the ship and crew took damage before the alien excaped into warp.", problemAnswer:["Continue.","","","",""]},
    winner:{problemPicture: "winResource.jpg", problemAttribute: [0,"Error"] , immediateAttribute: [20,"resourceAttribute"] ,problemDescription: "Captain, take a look over your ship and crew. What are your orders based on highest priority needs?", resultPossitive:["You were right captain, and your decsion has led your crew to the ","randomResource",".  You shake ","chiefName","'s hand, and say with a smile 'There you go. That ought to get our replicator rations back.'"], resultNegative:["resourceType", "combatType", "medicalType", "scienceType","respiteType"], problemAnswer:["We must find more resources, and soon...","Ensign, set our course for home. Warp 8.","We have too many injured crewmen... all staff report to sick bay!","Sensors show a sub-space rift forming? lay in a course, maybe we will get home sooner than we think.",["securityName",", find me a M-class planet where we can land for repairs."]]}
};

var respiteType = {problemTitle:["Repairs"],
    originPlot:{problemPicture: "alienencounter.jpg", problemAttribute: [10, "firstMateAttribute","weaponAttribute"] ,problemDescription: ["randomName", " is an alien " , "randomJob" , " looking to sell his information regarding the location of a ","randomResource"," source.  His ship floats in space in front of yours, and sensors show it to be near equal in technology. He smiles with a sharp toothed grin on the main viewer and he says he is only willing to negotiate with " , "firstMateName" , ".  As captain your concerned about this alien's motivations and the considerable risk to your First-mate on a solo away mission."], resultPass:"Your ship began to jump into warp just as the 'Trader' opened fire. Your shields took most of the brunt, but your got away with only minor additional damage." , immediateAttribute: [14,"allShipAttribute"] , resultPossitive:"Error", resultNegative:["plotTwistOne", "failure", "plotTwistTwo","nextEpisode", "nextEpisode"], failureText:"", problemAnswer:[["My name is.", "captainName",", I am the captain of this ship and you wont be making the terms of our negotion... I will."], "Order your First-mate to teleport to the alient ship to begin negotiations.",["securityName",", arm the photons. I dont like the look of this guy, im guessing we can take that information by force!"],"Quick! Ensign lay in any heading and engage to warp 6. This 'Trader' is lying. He is looking to take our vessel by force!",""]},
    plotTwistOne:{problemPicture: "alienresource.jpg", problemAttribute: [8,"captainAttribute"] , immediateAttribute: [4,"captainAttribute"] ,problemDescription: ["The alien warns you that he is not to be triffled with. Your aggressive attempt at diplomacy has set him on the defensive. This may make negotiations harder, but at least ","firstMateName"," is safe. The question is, how does your crew get the information from the alien now?"], resultPossitive: "Error", resultNegative:["plotTwistTwo", "plotTwistTwo", "plotTwistTwo", "nextEpisode" ,"plotTwistTwo"], failureText:"The alien informant raises shields and warns you that he will defend himself if his price will not be paid.", problemAnswer:[["randomResource", " is vital to our systems. We must have that information, but I will not hand over any of my crew."], "This 'Trader' is lying. He is looking for a hostage!" , ["securityName",", arm the photons. I dont like the look of this guy, im guessing we can take that information by force!"] , "Change tactics... teleport your First-mate over to see if peaceful negotiations is still possible",["chiefName",", could we download his sensor records if we disguise a virus in the hailing frequency?"]]},
    plotTwistTwo:{problemPicture: "shipphaser.jpg", problemAttribute: [6,"weaponAttribute" , "securityAttribute", "captainAttribute"] , immediateAttribute: [20,"allShipAttribute"] ,problemDescription: ["Both ships begin evasive manuvers. Several rounds of phaser fire have damaged both ships, but your shields are holding a little better. You could probably with this fight, but at what cost to crew and ship."], resultPossitive:"Error: plot two", resultNegative:["failure", "failure", "plotTwistOne", "failure","failure"], failureText:"The alien informant is ready for a fight, and his ship holds its own, as a battle breaks any hope of a peaceful negotiation.", problemAnswer:["Full power to shields, and get us out of here", ["securityName",", keep shooting until he gives us the information."] ,"Hail him! Give him twice what he was asking... Otherwise both ships may be destroyed.","Surrender. Show him we are serious about peace. I think this 'Trader' really just wants to sell the information.",""]},
    failure:{problemPicture: "shipexplosion.jpg", problemAttribute: [20,"allShipAttribute"] , immediateAttribute: [10,"weaponAttribute","shieldAttribute"] ,problemDescription: ["Your ship has blown up."], resultPossitive:"Error: failure", resultNegative:["continue","continue","continue","continue","continue"], failureText:"Captain, your plan has failed! You were able to put up your shields before the shooting began, but the ship and crew took damage before the alien excaped into warp.", problemAnswer:["Continue.","","","",""]},
    winner:{problemPicture: "winResource.jpg", problemAttribute: [0,"Error"] , immediateAttribute: [20,"resourceAttribute"] ,problemDescription: "Captain, take a look over your ship and crew. What are your orders based on highest priority needs?", resultPossitive:["You were right captain, and your decsion has led your crew to the ","randomResource",".  You shake ","chiefName","'s hand, and say with a smile 'There you go. That ought to get our replicator rations back.'"], resultNegative:["resourceType", "combatType", "medicalType", "scienceType","respiteType"], problemAnswer:["We must find more resources, and soon...","Ensign, set our course for home. Warp 8.","We have too many injured crewmen... all staff report to sick bay!","Sensors show a sub-space rift forming? lay in a course, maybe we will get home sooner than we think.",["securityName",", find me a M-class planet where we can land for repairs."]]}
};

var totalObjectType = ["randomName" , "randomMadeObject" , "randomItem" , "randomResource", "randomJob","randomRace","shipName","captainName","firstMateName", "securityName","medicalName","chiefName"]; //this has to be manually set to reflect all the var objects below it.
var randomName =["Ardwin", "Batok", "Catarin" , "Dour-gin"];
var randomMadeObject =["spaceship", "spacestation" , "colony"];
var randomResource = ["Tri-Lithium","Uranium-oxide", "Latnum"];
var randomItem = ["crystal" ,"warp conduit","neural computer interface"];
var randomJob = ["trader" , "janitor" ,"ambasidor","engineer"];
var randomRace = ["Panuk", "Hilaari", "Upchu"];

var shipName = "USS Treker";
var captainName = "Juneway"; console.log(captainName);
var firstMateName = "Cha'Te";
var securityName ="Tabuk";
var medicalName ="The Doctor";
var chiefName ="Be'Tor";

function setUserChoice(){
    shipName = document.getElementById("shipChoice").value;
    captainName = document.getElementById("captainChoice").value;
    firstMateName = document.getElementById("firstChoice").value;
    securityName = document.getElementById("securityChoice").value;
    medicalName = document.getElementById("medicalChoice").value;
    chiefName = document.getElementById("chiefChoice").value;
// speedAttribute = document.getElementById("speedChoice").value;
    saveLocal();
    console.log("captainName: " + captainName);
}
