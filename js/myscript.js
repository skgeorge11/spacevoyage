//new game objects
var firstEpisodeState = [777];
var speedOrigin = speedAttribute = 50;
var weaponOrigin = weaponAttribute = 40;
var shieldOrigin = shieldAttribute = 30;
var firstMateOrigin = firstMateAttribute = 60;
var randomObjectLength = randomObjectType.length;
var txtEpisodeType = episodeType[randomNumberGenerator(episodeType.length -1)];
var currentEpisodeType =window[txtEpisodeType];
//console.log(currentEpisodeType);

//console.logs
    console.log( "myscript is connected.");

    $(document).ready(console.log("JQuery ready"));

//functions

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
        var i =0;
        var episodeProblemTitle = currentEpisodeType.problemTitle;
        $('#episodeTitle').text(episodeProblemTitle);
        var episodeProblemDescription = buildPhrase (currentEpisodeType.problemDescription);
        //console.log("this episode: " + episodeProblemTitle);
        $('#episodeDescription').text(episodeProblemDescription);
        while (i < 3) {
        //console.log(i);
        var optionText = currentEpisodeType.problemAnswer[i];
        i++;
        $("#mySelect option:eq(" +i+")").text(optionText);
        }

        console.log( "fillSelectOptions has been run.");
    }
function retrieveAttribute()
    { //break into two functions (or delay window effect) so that I can select attributes as well as thier values.
        var currentProblemAttributeArray = [];
        var currentProblemAttributeLength = currentEpisodeType.problemAttribute.length;
        var i =0;
        while (i < currentProblemAttributeLength){
            var tempAttribute = window[currentEpisodeType.problemAttribute[i]];
            currentProblemAttributeArray.push (tempAttribute);
            ++i;
        }
        console.log (currentProblemAttributeArray);
        return currentProblemAttributeArray;

    }

function handleClick()
      {
        $('select').prop('selectedIndex', 0);

        fillSelectOptions();
        if (firstEpisodeState[0] ==777) {
            firstEpisodeState = []; return;
            }

        var selectValue = document.getElementById("mySelect").value;

        var attributeArray = retrieveAttribute();
        var attributeTotal = 0;
        $.each(attributeArray,function() {
            attributeTotal += this;
        });
        var attributeModifier = (attributeTotal / attributeArray.length) / 2;
        console.log("the attributeModifier is " + attributeModifier);
        var correctAnswerThreshold = 25 + attributeModifier;
        var correctAnswerRoll = randomNumberGenerator(100);

        if (correctAnswerThreshold > correctAnswerRoll){
            ++ shieldAttribute; ++firstMateAttribute;
            var episodeResultPositive = currentEpisodeType.resultPossitive;
            $('#finalResultsDescription').text(episodeResultPositive);
            txtEpisodeType = episodeType[randomNumberGenerator(episodeType.length -1)];
            currentEpisodeType =window[txtEpisodeType];
            $("#banner").attr( "src", "images/allcrew.jpg" );

        } else {
            --speedAttribute; --firstMateAttribute;
            var episodeResultNegative = currentEpisodeType.resultNegative;
            $('#finalResultsDescription').text(episodeResultNegative);
            $("#banner").attr( "src", "images/shipexplosion.jpg" );
        }
        //console.log( "The correct Answer was number " + correctAnswerRoll);
        $('#shipSpeedList').text("Speed: (" +speedOrigin + ")" + speedAttribute );
        $('#shipWeaponList').text("Weapons: (" +weaponOrigin + ")" + weaponAttribute );
        $('#shipShieldList').text("Shields: (" +shieldOrigin + ")" + shieldAttribute );
        $('#firstMateList').text("First Mate: (" +firstMateOrigin + ")" + firstMateAttribute );
      }
