//new game objects
var firstEpisodeState = 777;
var innerEpisodeState = "";

var changeModifier = 1;
var speedOrigin = speedAttribute = 50;
var weaponOrigin = weaponAttribute = 40;
var shieldOrigin = shieldAttribute = 30;
var resourceOrigin = resourceAttribute = 100;

var captainOrigin = captainAttribute = 60;
var captainHealthOrigin = captainHealthAttribute = 100;
var firstMateOrigin = firstMateAttribute = 60;
var firstHealthOrigin = firstHealthAttribute = 100;
var securityOrigin = securityAttribute = 60;
var securityHealthOrigin = securityHealthAttribute = 100;
var medicalOrigin = medicalAttribute = 60;
var medicalHealthOrigin = medicalHealthAttribute = 100;
var chiefOrigin = chiefAttribute = 60;
var chiefHealthOrigin = chiefHealthAttribute = 100;

var randomObjectLength = totalObjectType.length;
var txtEpisodeType = episodeType[randomNumberGenerator(episodeType.length)];
var currentEpisodeType = window[txtEpisodeType]; //console.log (txtEpisodeType +currentEpisodeType);
var episodeTypeState = "originPlot";
var currentProblemAttributeArray = [];
var distanceHome = 70000;

//console.logs to make sure the program has booted ok
    console.log( "myscript is connected.");

    $(document).ready(console.log("JQuery ready"));

if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log ("Yes!  Web Storage support..");
} else {
    alert("Oh no! Your browser doesn't support saving this game. It is most likely time for you to update your browser software.")
    console.log ("Sorry! No Web Storage support..");
}

//functions

// function findObjectLength(){
//     var count = 0;
//     var i;
//     console.log ("function value " +txtEpisodeType +currentEpisodeType);
//     for (i in currentEpisodeType) {
//         if (currentEpisodeType[episodeTypeState].hasOwnProperty(i)) {
//         count++;
//         }
//     }
// }

function loadLocal () {
    speedOrigin = localStorage.speedOrigin;
    speedAttribute = localStorage.speedAttribute;
    console.log("session Storage speed: " + speedAttribute);
    updateStats();
    fillSelectOptions();
}

function updateStats(){
    $('#shipList').text(shipName);
    $('#shipSpeedList').text("Speed: (" +speedOrigin + ")" + speedAttribute );
    $('#shipWeaponList').text("Weapons: (" +weaponOrigin + ")" + weaponAttribute );
    $('#shipShieldList').text("Shields: (" +shieldOrigin + ")" + shieldAttribute );
    $('#shipResourceList').text("Resources: (" +resourceOrigin + ")" + resourceAttribute );

    $('#captainList').text("Captain: " +captainName);
    $('#captainAttributeList').text("Leadership: (" +captainOrigin + ")" + captainAttribute );
    $('#captainHealthList').text("Health: (" +captainHealthOrigin + ")" + captainHealthAttribute );

    $('#firstMateList').text("First-mate: " +firstMateName);
    $('#firstAttributeList').text("Negotiation: (" +firstMateOrigin + ")" + firstMateAttribute );
    $('#firstHealthList').text("Health: (" +firstHealthOrigin + ")" + firstHealthAttribute );

    $('#securityList').text("Security Officer: " +securityName);
    $('#securityAttributeList').text("Tactics: (" +securityOrigin + ")" + securityAttribute );
    $('#securityHealthList').text("Health: (" +securityHealthOrigin + ")" + securityHealthAttribute );

    $('#medicalList').text("Medical Officer: " + medicalName);
    $('#medicalAttributeList').text("Medicine: (" +medicalOrigin + ")" + medicalAttribute );
    $('#medicalHealthList').text("Health: (" +medicalHealthOrigin + ")" + medicalHealthAttribute );

    $('#chiefList').text("Chief Engineer: " +chiefName);
    $('#chiefAttributeList').text("Engineering: (" +chiefOrigin + ")" + chiefAttribute );
    $('#chiefHealthList').text("Health: (" +chiefHealthOrigin + ")" + chiefHealthAttribute );
}

function saveLocal () {
    if (episodeTypeState !== "originPlot"){
        alert ("Sorry, you can't save in the middle of an episode... silly captain.");
        return;
    }
    window.localStorage.clear();
    localStorage.speedOrigin = speedOrigin;
    localStorage.speedAttribute = speedAttribute;
    console.log("local Storage speed " + localStorage.speedAttribute);
}

function buildPhrase (buildPhraseName){
    var i = 0;
    var y = 0;
    var completedPhrase = "";
    var buildPhraseLength = buildPhraseName.length; // subtract 1 if you are finding the array positions
    while (i<buildPhraseLength){
        //console.log(i);
        var checkPhrasePiece = buildPhraseName[i];
        //console.log (checkPhrasePiece);
        while (y<randomObjectLength){
            //console.log (totalObjectType[y]);
            if (checkPhrasePiece === totalObjectType[y]){
                var phrasePieceObject = window[checkPhrasePiece];
                //console.log (phrasePieceObject[2]);
                var madLibLength = phrasePieceObject.length -1; // subtract 1 if you are finding the array positions
                var madLibPlace = randomNumberGenerator(madLibLength);
                checkPhrasePiece = phrasePieceObject[madLibPlace];
                }
            ++y;
        }
        var y = 0;
        var completedPhrase = completedPhrase + checkPhrasePiece;
        ++i;
    }
    return completedPhrase;
}

function randomNumberGenerator(maxValue)
    {
        var randNom = Math.floor(Math.random() * maxValue);
        return randNom;
    }

function fillSelectOptions()
    {
        //console.log (txtEpisodeType + episodeTypeState);
        $('#banner').attr( "src", "images/"+ currentEpisodeType[episodeTypeState].problemPicture );
        var episodeProblemDescription = buildPhrase (currentEpisodeType[episodeTypeState].problemDescription);
        //console.log("this episode: " + episodeProblemTitle);
        $('#episodeDescription').text(episodeProblemDescription);
        var i =0;
        var y = currentEpisodeType[episodeTypeState].problemAnswer.length
        //console.log(y);
        while (i < y) {
            //console.log(i);
            var optionText = currentEpisodeType[episodeTypeState].problemAnswer[i];
            i++;
            $("#mySelect option:eq(" +i+")").text(optionText);
            }
        $('select').prop('selectedIndex', 0);
        // console.log( "fillSelectOptions has been run.");
        // console.log(i);
    }

function retrieveAttributeValue()
    {
        currentProblemAttributeArray = [];
        var currentProblemAttributeLength = currentEpisodeType[episodeTypeState].problemAttribute.length;
        var i =1;
        while (i < currentProblemAttributeLength){
            var tempAttribute = window[currentEpisodeType[episodeTypeState].problemAttribute[i]];
            currentProblemAttributeArray.push (tempAttribute);
            ++i;
        }
        // console.log (currentProblemAttributeArray);
        // console.log (currentEpisodeType[episodeTypeState].problemAttribute);
        return currentProblemAttributeArray;

    }

function adjustAttribute(maxChange)
{
    var adjustAttributeValue = (randomNumberGenerator(maxChange))+ maxChange ;
    return adjustAttributeValue;
}

function checkAttribute(tempAttributeType){
    if (window[tempAttributeType] > 100) {window[tempAttributeType] = 100;}
    if (window[tempAttributeType] < 1) {window[tempAttributeType] = 0;}
}

function changeAttribute(negOrPos, attributeType)
{
    if (attributeType === "problemAttribute"){
        var pointAttributeType = currentEpisodeType[episodeTypeState].problemAttribute;
    }
    if (attributeType === "immediateAttribute"){
        var pointAttributeType = currentEpisodeType[episodeTypeState].immediateAttribute;
    }
    var currentProblemAttributeLength = pointAttributeType.length;
    changeModifier = (pointAttributeType[0])* negOrPos;
    //console.log("change modifier is "+changeModifier);
    var i = 1;
            while (i < currentProblemAttributeLength){
                // manually enter each attribute type
                if (pointAttributeType[i]==="speedAttribute"){
                    speedAttribute = speedAttribute + adjustAttribute(changeModifier);
                    checkAttribute("speedAttribute");
                    if (speedAttribute > speedOrigin) {speedOrigin = speedAttribute;}
                }
                if (pointAttributeType[i]==="weaponAttribute"){weaponAttribute =weaponAttribute + adjustAttribute(changeModifier);
                    checkAttribute("weaponAttribute");
                }
                if (pointAttributeType[i]==="shieldAttribute"){shieldAttribute = shieldAttribute + adjustAttribute(changeModifier);
                    checkAttribute("shieldAttribute");
                }
                if (pointAttributeType[i]==="resourceAttribute"){resourceAttribute = resourceAttribute + adjustAttribute(changeModifier);
                    checkAttribute("resourceAttribute");
                }
                if (pointAttributeType[i]==="captainAttribute"){captainAttribute =captainAttribute + changeModifier;
                    checkAttribute("captainAttribute");
                }
                if (pointAttributeType[i]==="captainHealthAttribute"){captainHealthAttribute =captainHealthAttribute + changeModifier;
                    checkAttribute("captainHealthAttribute");
                }
                if (pointAttributeType[i]==="firstMateAttribute"){firstMateAttribute =firstMateAttribute + changeModifier;
                    checkAttribute("firstMateAttribute");
                }
                if (pointAttributeType[i]==="firstHealthAttribute"){firstHealthAttribute =firstHealthAttribute + changeModifier;
                    checkAttribute("firstHealthAttribute");
                }
                if (pointAttributeType[i]==="securityAttribute"){securityAttribute =securityAttribute + changeModifier;
                    checkAttribute("securityAttribute");
                }
                if (pointAttributeType[i]==="securityHealthAttribute"){securityHealthAttribute =securityHealthAttribute + changeModifier;
                    checkAttribute("securityHealthAttribute");
                }
                if (pointAttributeType[i]==="medicalAttribute"){medicalAttribute =medicalAttribute + changeModifier;
                    checkAttribute("medicalAttribute");
                }
                if (pointAttributeType[i]==="medicalHealthAttribute"){medicalHealthAttribute =medicalHealthAttribute + changeModifier;
                    checkAttribute("medicalHealthAttribute");
                }
                if (pointAttributeType[i]==="chiefAttribute"){chiefAttribute =chiefAttribute + changeModifier;
                    checkAttribute("chiefAttribute");
                }
                if (pointAttributeType[i]==="chiefHealthAttribute"){chiefHealthAttribute =chiefHealthAttribute + changeModifier;
                    checkAttribute("chiefHealthAttribute");
                }
                ++i;
             }
}

// function immediateChange(){
//         var currentProblemAttributeLength = currentEpisodeType[episodeTypeState].immediateAttribute.length;
//         changeModifier = currentEpisodeType[episodeTypeState].immediateAttribute[0];
//         //console.log(changeModifier);
//         var i = 1;
//             while (i < currentProblemAttributeLength){
//                 // manually enter each attribute type
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="speedAttribute"){
//                     speedAttribute = speedAttribute + changeModifier;
//                     checkAttribute("speedAttribute");
//                     if (speedAttribute > speedOrigin) {speedOrigin = speedAttribute;}
//                 }
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="weaponAttribute"){weaponAttribute =weaponAttribute + changeModifier;
//                     checkAttribute("weaponAttribute");
//                 }
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="shieldAttribute"){shieldAttribute = shieldAttribute + changeModifier;
//                     checkAttribute("shieldAttribute");
//                 }
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="resourceAttribute"){resourceAttribute = resourceAttribute + changeModifier;
//                     checkAttribute("resourceAttribute");
//                 }

//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="captainAttribute"){captainAttribute =captainAttribute + changeModifier;
//                     checkAttribute("captainAttribute");
//                 }
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="captainHealthAttribute"){captainHealthAttribute =captainHealthAttribute + changeModifier;
//                     checkAttribute("captainHealthAttribute");
//                 }
//                   if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="firstMateAttribute"){firstMateAttribute =firstMateAttribute + changeModifier;
//                     checkAttribute("firstMateAttribute");
//                 }
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="firstHealthAttribute"){firstHealthAttribute =firstHealthAttribute + changeModifier;
//                     checkAttribute("firstHealthAttribute");
//                 }
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="securityAttribute"){securityAttribute =securityAttribute + changeModifier;
//                     checkAttribute("securityAttribute");
//                 }
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="securityHealthAttribute"){securityHealthAttribute =securityHealthAttribute + changeModifier;
//                     checkAttribute("securityHealthAttribute");
//                 }
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="medicalAttribute"){medicalAttribute =medicalAttribute + changeModifier;
//                     checkAttribute("medicalAttribute");
//                 }
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="medicalHealthAttribute"){medicalHealthAttribute =medicalHealthAttribute + changeModifier;
//                     checkAttribute("medicalHealthAttribute");
//                 }
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="chiefAttribute"){chiefAttribute =chiefAttribute + changeModifier;
//                     checkAttribute("chiefAttribute");
//                 }
//                 if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="chiefHealthAttribute"){chiefHealthAttribute =chiefHealthAttribute + changeModifier;
//                     checkAttribute("chiefHealthAttribute");
//                 }
//                 ++i;
//              }
// }

function handleClick()
      {
        var selectValue = (document.getElementById("mySelect").value) -1;

        if (firstEpisodeState === 777) {
            firstEpisodeState = 1;
            var episodeProblemTitle = currentEpisodeType.problemTitle;
        $('#episodeTitle').text("Episode " + firstEpisodeState + ": " + episodeProblemTitle);
            fillSelectOptions();
            return;
        }

        if (episodeTypeState === "winner")
        {
            ++firstEpisodeState;
            episodeTypeState = "originPlot";
            txtEpisodeType = episodeType[randomNumberGenerator(episodeType.length)];
            currentEpisodeType =window[txtEpisodeType];
            var episodeProblemTitle = currentEpisodeType.problemTitle;
            $('#episodeTitle').text("Episode " + firstEpisodeState + ": " + episodeProblemTitle);
            fillSelectOptions();
            return;
        }

        resourceAttribute = resourceAttribute - 3;
        if (resourceAttribute <1) {endGame(); return;}

        var attributeArray = retrieveAttributeValue();
        var attributeTotal = 0;
        $.each(attributeArray,function() {
            attributeTotal += this;
        });
        var attributeModifier = Math.floor((attributeTotal / attributeArray.length) / 3);
        //console.log("the attributeModifier is " + attributeModifier);
        var correctAnswerThreshold = 40 + attributeModifier;
        //console.log ("the threshold is "+ correctAnswerThreshold);
        var correctAnswerRoll = randomNumberGenerator(100);

        var currentProblemAttributeLength = currentEpisodeType[episodeTypeState].problemAttribute.length;

        if (correctAnswerThreshold > correctAnswerRoll){

            if (firstEpisodeState > 172){endGame(); return;}

            changeAttribute(1, "problemAttribute");

            distanceHome = distanceHome - (speedAttribute * 8);
            if (distanceHome <1) {
                    endGame();
                    return;
            }
            $('#distanceHomeMeter').text("Your ship is now " + distanceHome + " light years from home.");

        episodeTypeState = "winner";
        var episodeResultPositive = currentEpisodeType[episodeTypeState].resultPossitive;
        $('#finalResultsDescription').text(episodeResultPositive);

        } else {
            episodeTypeState = currentEpisodeType[episodeTypeState].resultNegative[selectValue];

            if (episodeTypeState === "failure")
            {
                changeAttribute(-1, "problemAttribute");
                endGame();
            }

            changeAttribute(-1, "immediateAttribute")
            $('#finalResultsDescription').text(currentEpisodeType[episodeTypeState].failureText);
            //console.log (episodeTypeState);
        }
        //console.log( "The correct Answer was number " + correctAnswerRoll);
        fillSelectOptions();
        updateStats();
}


function endGame ()
{
    //dont know yet.
}