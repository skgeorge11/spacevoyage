//new game objects
var firstEpisodeState = 777;

var speedOrigin = speedAttribute = 50;
var weaponOrigin = weaponAttribute = 40;
var shieldOrigin = shieldAttribute = 30;
var firstMateOrigin = firstMateAttribute = 60;

var randomObjectLength = randomObjectType.length;
var txtEpisodeType = episodeType[randomNumberGenerator(episodeType.length -1)];
var currentEpisodeType = window[txtEpisodeType]; //console.log (txtEpisodeType +currentEpisodeType);
var episodeTypeState = "plotTwistOne";
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
        var episodeProblemTitle = currentEpisodeType.problemTitle;
        $('#episodeTitle').text("Episode " + firstEpisodeState + ": " + episodeProblemTitle);
        var episodeProblemDescription = buildPhrase (currentEpisodeType[episodeTypeState].problemDescription);
        //console.log("this episode: " + episodeProblemTitle);
        $('#episodeDescription').text(episodeProblemDescription);
        var i =0;
        while (i < 3) {
        //console.log(i);
        var optionText = currentEpisodeType[episodeTypeState].problemAnswer[i];
        i++;
        $("#mySelect option:eq(" +i+")").text(optionText);
        }

        //console.log( "fillSelectOptions has been run.");
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
    adjustAttributeValue = posOrNeg * randomNumberGenerator(101);
    return adjustAttributeValue;
}

function checkAttribute(tempAttributeType){
    if (window[tempAttributeType] > 100) {window[tempAttributeType] = 100;}
    if (window[tempAttributeType] < 1) {window[tempAttributeType] = 0;}
}

function handleClick()
      {
        $('select').prop('selectedIndex', 0);

        if (firstEpisodeState == 777) {
            firstEpisodeState = 0;
            fillSelectOptions();
            return;
        }
        ++firstEpisodeState;

        fillSelectOptions();
        var selectValue = document.getElementById("mySelect").value;

        var attributeArray = retrieveAttributeValue();
        var attributeTotal = 0;
        $.each(attributeArray,function() {
            attributeTotal += this;
        });
        var attributeModifier = Math.floor((attributeTotal / attributeArray.length) / 2);
        //console.log("the attributeModifier is " + attributeModifier);
        var correctAnswerThreshold = 30 + attributeModifier;
        var correctAnswerRoll = randomNumberGenerator(100);
        var currentProblemAttributeLength = currentEpisodeType[episodeTypeState].problemAttribute.length;

        if (correctAnswerThreshold > correctAnswerRoll){
            var i = 0;
            while (i < currentProblemAttributeLength){
                // manually enter each attribute type
                if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="speedAttribute"){
                    speedAttribute = speedAttribute + adjustAttribute(1);
                    checkAttribute("speedAttribute");
                }
                if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="weaponAttribute"){weaponAttribute =weaponAttribute + adjustAttribute(1);
                    checkAttribute("weaponAttribute");
                }
                if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="shieldAttribute"){shieldAttribute = shieldAttribute + adjustAttribute(1);
                    checkAttribute("shieldAttribute");
                }
                if (currentEpisodeType[episodeTypeState].problemAttribute[i]==="firstMateAttribute"){firstMateAttribute =firstMateAttribute + adjustAttribute(1);
                    checkAttribute("firstMateAttribute");
                }
                distanceHome = distanceHome - (speedAttribute * 8);
                if (distanceHome <1) {
                    endGame();
                    return;
                }
                $('#distanceHomeMeter').text("Your ship is now " + distanceHome + " light years from home.");
                 ++i;
             }
            var episodeResultPositive = currentEpisodeType[episodeTypeState].resultPossitive;
            $('#finalResultsDescription').text(episodeResultPositive);
            txtEpisodeType = episodeType[randomNumberGenerator(episodeType.length -1)];
            currentEpisodeType =window[txtEpisodeType];

        } else {
            var i = 0;
            while (i < currentProblemAttributeLength){
                // manually enter each attribute type
                if (currentEpisodeType[episodeTypeState].problemNegative[i]==="speedAttribute"){speedAttribute = speedAttribute + adjustAttribute(-1);
                    checkAttribute("speedAttribute");
                }
                if (currentEpisodeType[episodeTypeState].problemNegative[i]==="weaponAttribute"){weaponAttribute =weaponAttribute + adjustAttribute(-1);
                    checkAttribute("weaponAttribute");
                }
                if (currentEpisodeType[episodeTypeState].problemNegative[i]==="shieldAttribute"){shieldAttribute = shieldAttribute + adjustAttribute(-1);
                    checkAttribute("shieldAttribute");
                }
                if (currentEpisodeType[episodeTypeState].problemNegative[i]==="firstMateAttribute"){firstMateAttribute =firstMateAttribute + adjustAttribute(-1);
                    checkAttribute("firstMateAttribute");
                }
                 ++i;
             }
            var episodeResultNegative = currentEpisodeType[episodeTypeState].resultNegative;
            $('#finalResultsDescription').text(episodeResultNegative);
            $("#banner").attr( "src", "images/shipexplosion.jpg" );
        }
        //console.log( "The correct Answer was number " + correctAnswerRoll);
        $('#shipList').text(shipName);
        $('#shipSpeedList').text("Speed: (" +speedOrigin + ")" + speedAttribute );
        $('#shipWeaponList').text("Weapons: (" +weaponOrigin + ")" + weaponAttribute );
        $('#shipShieldList').text("Shields: (" +shieldOrigin + ")" + shieldAttribute );
        $('#firstMateList').text("First Mate " +firstMateName + ": (" +firstMateOrigin + ")" + firstMateAttribute );
      }

function endGame () {
    //dont know yet.
}