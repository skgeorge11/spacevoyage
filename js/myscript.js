//new game objects
var firstEpisodeState = 777;
var innerEpisodeState = "";

var changeModifier = 1;
var speedOrigin = speedAttribute = 50;
var weaponOrigin = weaponAttribute = 40;
var shieldOrigin = shieldAttribute = 30;
var resourceOrigin = resourceAttribute = 100;
var firstMateOrigin = firstMateAttribute = 60;

var randomObjectLength = randomObjectType.length;
var txtEpisodeType = episodeType[randomNumberGenerator(episodeType.length)];
var currentEpisodeType = window[txtEpisodeType]; //console.log (txtEpisodeType +currentEpisodeType);
var episodeTypeState = "originPlot";
var currentProblemAttributeArray = [];
var distanceHome = 70000;

//console.logs to make sure the program has booted ok
    console.log( "myscript is connected.");

    $(document).ready(console.log("JQuery ready"));

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
            //console.log (randomObjectType[y]);
            if (checkPhrasePiece === randomObjectType[y]){
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
        var i =0;
        while (i < currentProblemAttributeLength){
            var tempAttribute = window[currentEpisodeType[episodeTypeState].problemAttribute[i]];
            currentProblemAttributeArray.push (tempAttribute);
            ++i;
        }
        // console.log (currentProblemAttributeArray);
        // console.log (currentEpisodeType[episodeTypeState].problemAttribute);
        return currentProblemAttributeArray;

    }

function adjustAttribute(posOrNeg)
{
    var adjustAttributeValue = posOrNeg * randomNumberGenerator(10);
    return adjustAttributeValue;
}

function checkAttribute(tempAttributeType){
    if (window[tempAttributeType] > 100) {window[tempAttributeType] = 100;}
    if (window[tempAttributeType] < 1) {window[tempAttributeType] = 0;}
}

function changeAttribute(negOrPos)
{
    var currentProblemAttributeLength = currentEpisodeType[episodeTypeState].problemAttribute.length;
    var i = 0;
            while (i < currentProblemAttributeLength){
                // manually enter each attribute type
                if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="speedAttribute"){
                    speedAttribute = speedAttribute + adjustAttribute(changeModifier);
                    checkAttribute("speedAttribute");
                    if (speedAttribute > speedOrigin) {speedOrigin = speedAttribute;}
                }
                if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="weaponAttribute"){weaponAttribute =weaponAttribute + adjustAttribute(changeModifier);
                    checkAttribute("weaponAttribute");
                }
                if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="shieldAttribute"){shieldAttribute = shieldAttribute + adjustAttribute(changeModifier);
                    checkAttribute("shieldAttribute");
                }
                if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="resourceAttribute"){resourceAttribute = resourceAttribute + adjustAttribute(changeModifier);
                    checkAttribute("resourceAttribute");
                }
                if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="firstMateAttribute"){firstMateAttribute =firstMateAttribute + adjustAttribute(changeModifier);
                    checkAttribute("firstMateAttribute");
                }else{
                    changeModifier = (currentEpisodeType[episodeTypeState].problemAttribute[i])* negOrPos;
                    console.log(changeModifier);
                }
                ++i;
             }
}

function immediateChange(){
        var currentProblemAttributeLength = currentEpisodeType[episodeTypeState].immediateAttribute.length;
        var i = 0;
            while (i < currentProblemAttributeLength){
                // manually enter each attribute type
                if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="speedAttribute"){
                    speedAttribute = speedAttribute + changeModifier;
                    checkAttribute("speedAttribute");
                    if (speedAttribute > speedOrigin) {speedOrigin = speedAttribute;}
                }
                if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="weaponAttribute"){weaponAttribute =weaponAttribute + changeModifier;
                    checkAttribute("weaponAttribute");
                }
                if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="shieldAttribute"){shieldAttribute = shieldAttribute + changeModifier;
                    checkAttribute("shieldAttribute");
                }
                if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="resourceAttribute"){resourceAttribute = resourceAttribute + changeModifier;
                    checkAttribute("resourceAttribute");
                }
                if (currentEpisodeType[episodeTypeState].immediateAttribute[i]==="firstMateAttribute"){firstMateAttribute =firstMateAttribute + changeModifier;
                    checkAttribute("firstMateAttribute");
                }else{
                    changeModifier = currentEpisodeType[episodeTypeState].immediateAttribute[i];
                    console.log(changeModifier);
                }
                ++i;
             }
}

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
            $('#distanceHomeMeter').text("Your ship is now " + distanceHome + " light years from home.");
            txtEpisodeType = episodeType[randomNumberGenerator(episodeType.length)];
            currentEpisodeType =window[txtEpisodeType];
            var episodeProblemTitle = currentEpisodeType.problemTitle;
            $('#episodeTitle').text("Episode " + firstEpisodeState + ": " + episodeProblemTitle);
            fillSelectOptions();
            return;
        }

        immediateChange();

        resourceAttribute = resourceAttribute - 1;
        if (resourceAttribute <1) {endGame(); return;}

        var attributeArray = retrieveAttributeValue();
        var attributeTotal = 0;
        $.each(attributeArray,function() {
            attributeTotal += this;
        });
        var attributeModifier = Math.floor((attributeTotal / attributeArray.length) / 2);
        //console.log("the attributeModifier is " + attributeModifier);
        var correctAnswerThreshold = 35 + attributeModifier;
        var correctAnswerRoll = randomNumberGenerator(100);

        var currentProblemAttributeLength = currentEpisodeType[episodeTypeState].problemAttribute.length;

        if (correctAnswerThreshold > correctAnswerRoll){

            if (firstEpisodeState > 172){endGame(); return;}

            changeAttribute(1);
            // var i = 0;
            // while (i < currentProblemAttributeLength){
            //     // manually enter each attribute type
            //     if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="speedAttribute"){
            //         speedAttribute = speedAttribute + adjustAttribute(1);
            //         checkAttribute("speedAttribute");
            //         if (speedAttribute > speedOrigin) {speedOrigin = speedAttribute;}
            //     }
            //     if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="weaponAttribute"){weaponAttribute =weaponAttribute + adjustAttribute(1);
            //         checkAttribute("weaponAttribute");
            //     }
            //     if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="shieldAttribute"){shieldAttribute = shieldAttribute + adjustAttribute(1);
            //         checkAttribute("shieldAttribute");
            //     }
            //     if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="resourceAttribute"){resourceAttribute = resourceAttribute + adjustAttribute(1);
            //         checkAttribute("resourceAttribute");
            //     }
            //     if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="firstMateAttribute"){firstMateAttribute =firstMateAttribute + adjustAttribute(1);
            //         checkAttribute("firstMateAttribute");
            //     }
            //     ++i;
            //  }
             distanceHome = distanceHome - (speedAttribute * 8);
                if (distanceHome <1) {
                    endGame();
                    return;
                }

            episodeTypeState = "winner";
            var episodeResultPositive = currentEpisodeType[episodeTypeState].resultPossitive;
            $('#finalResultsDescription').text(episodeResultPositive);

        } else {
        var episodeResultNegative = currentEpisodeType[episodeTypeState].resultNegative[selectValue];
        if (episodeResultNegative === "failure")
            {
                changeAttribute(-1);
            // var i = 0;
            // while (i < currentProblemAttributeLength)
            //     {
            //     // manually enter each attribute type
            //     if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="speedAttribute")
            //         {speedAttribute = speedAttribute + adjustAttribute(-1);
            //         checkAttribute("speedAttribute");
            //         }
            //     if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="weaponAttribute")
            //         {weaponAttribute =weaponAttribute + adjustAttribute(-1);
            //         checkAttribute("weaponAttribute");
            //         }
            //     if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="shieldAttribute")
            //         {shieldAttribute = shieldAttribute + adjustAttribute(-1);
            //         checkAttribute("shieldAttribute");
            //         }
            //     if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="resourceAttribute")
            //         {resourceAttribute = resourceAttribute + adjustAttribute(-1);
            //         checkAttribute("resourceAttribute");
            //     }
            //     if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="firstMateAttribute")
            //         {firstMateAttribute =firstMateAttribute + adjustAttribute(-1);
            //         checkAttribute("firstMateAttribute");
            //         }
            //     ++i;
            //     }

            }

            $('#finalResultsDescription').text(episodeResultNegative);
            episodeTypeState = currentEpisodeType[episodeTypeState].resultNegative[selectValue];
            //console.log (episodeTypeState);
        }
        //console.log( "The correct Answer was number " + correctAnswerRoll);
        fillSelectOptions();
        $('#shipList').text(shipName);
        $('#shipSpeedList').text("Speed: (" +speedOrigin + ")" + speedAttribute );
        $('#shipWeaponList').text("Weapons: (" +weaponOrigin + ")" + weaponAttribute );
        $('#shipShieldList').text("Shields: (" +shieldOrigin + ")" + shieldAttribute );
        $('#shipResourceList').text("Resources: (" +resourceOrigin + ")" + resourceAttribute );
        $('#firstMateList').text("First Mate " +firstMateName + ": (" +firstMateOrigin + ")" + firstMateAttribute );
}


function endGame ()
{
    //dont know yet.
}