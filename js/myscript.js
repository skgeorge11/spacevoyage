//new game objects
var firstEpisodeState = 777;
var innerEpisodeState = "";

// below list a temp var for each episode random item
var episoderandomName =0;
var episoderandomMadeObject =0;
var episoderandomResource = 0;
var episoderandomItem =0;
var episoderandomJob = 0;
var episoderandomRace = 0;

var changeModifier = 1;
var speedOrigin = speedAttribute = 50;
var weaponOrigin = weaponAttribute = 40;
var shieldOrigin = shieldAttribute = 70;
var resourceOrigin = resourceAttribute = 100;

var captainOrigin = captainAttribute = 60;
var captainHealthOrigin = captainHealthAttribute = 100;
var firstMateOrigin = firstMateAttribute = 50;
var firstHealthOrigin = firstHealthAttribute = 100;
var securityOrigin = securityAttribute = 50;
var securityHealthOrigin = securityHealthAttribute = 100;
var medicalOrigin = medicalAttribute = 30;
var medicalHealthOrigin = medicalHealthAttribute = 100;
var chiefOrigin = chiefAttribute = 40;
var chiefHealthOrigin = chiefHealthAttribute = 100;
var allStatArray =["speedOrigin" , "speedAttribute","weaponOrigin","weaponAttribute", "shieldOrigin","shieldAttribute","resourceOrigin","resourceAttribute","firstEpisodeState","captainOrigin","captainAttribute","captainHealthOrigin","captainHealthAttribute","firstMateOrigin","firstMateAttribute","firstHealthOrigin","firstHealthAttribute","securityOrigin","securityAttribute","securityHealthOrigin","securityHealthAttribute","medicalOrigin","medicalAttribute","medicalHealthOrigin","medicalHealthAttribute","chiefOrigin","chiefAttribute","chiefHealthOrigin","chiefHealthAttribute","distanceHome"];
var allListArray = ["shipSpeedList","shipWeaponList","shipShieldList","shipResourceList","captainAttributeList","captainHealthList","firstAttributeList","firstHealthList","securityAttributeList","securityHealthList","medicalAttributeList","medicalHealthList","chiefAttributeList","chiefHealthList"];

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

function loadLocal () {
    var stringArray =["shipName","captainName","firstMateName","securityName","medicalName","chiefName"];
    // add ,"episodeTypeState","currentEpisodeType"

    //var numberArray =["speedOrigin" , "speedAttribute","weaponOrigin","weaponAttribute", "shieldOrigin","shieldAttribute","resourceOrigin","resourceAttribute","firstEpisodeState","captainOrigin","captainAttribute","captainHealthOrigin","captainHealthAttribute","firstMateOrigin","firstMateAttribute","firstHealthOrigin","firstHealthAttribute","securityOrigin","securityAttribute","securityHealthOrigin","securityHealthAttribute","medicalOrigin","medicalAttribute","medicalHealthOrigin","medicalHealthAttribute","chiefOrigin","chiefAttribute","chiefHealthOrigin","chiefHealthAttribute"];
    var i = 0;
    var y = 0;
    while (i < stringArray.length){
        var stringValue = stringArray[i];
        if (stringValue in localStorage) {
            var stringPoint = window[stringArray[i]];
            window[stringArray[i]] = localStorage[stringValue];
        }
        ++i
    }
    while (y < allStatArray.length){
        var numberValue = allStatArray[y];
        if (numberValue in localStorage) {
            var numberPoint = window[numberValue];
            window[allStatArray[y]]= Number(localStorage[numberValue]);
        }
        ++y
    }
    updateStats();
    fillSelectOptions();
}

function updateStats(){
    $('#shipList').text(shipName);
    $('#distanceHomeMeter').text("Your ship is now " + distanceHome + " light years from home.");
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
    var localArray = ["distanceHome","shipName","captainName","firstMateName","securityName","medicalName","chiefName","episodeTypeState","currentEpisodeType","speedOrigin" , "speedAttribute","weaponOrigin","weaponAttribute", "shieldOrigin","shieldAttribute","resourceOrigin","resourceAttribute","firstEpisodeState","captainOrigin","captainAttribute","captainHealthOrigin","captainHealthAttribute","firstMateOrigin","firstMateAttribute","firstHealthOrigin","firstHealthAttribute","securityOrigin","securityAttribute","securityHealthOrigin","securityHealthAttribute","medicalOrigin","medicalAttribute","medicalHealthOrigin","medicalHealthAttribute","chiefOrigin","chiefAttribute","chiefHealthOrigin","chiefHealthAttribute"];
    var i = 0;
    while (i < localArray.length){
        localStorage[localArray[i]] = window[localArray[i]];
        ++i
    }
    console.log("saved");
}

function newGame (){
    window.localStorage.clear();
    location.reload();
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
                var episodeRandomString ="episode"+checkPhrasePiece;
                //console.log(episodeRandomString);
                var episodeRandomCheck = window[episodeRandomString];
                //console.log(episodeRandomCheck);
                if (typeof phrasePieceObject == "object"){
                    if(episodeRandomCheck == 0){
                        var madLibLength = phrasePieceObject.length -1; // subtract 1 if you are finding the array positions
                        var madLibPlace = randomNumberGenerator(madLibLength);
                        checkPhrasePiece = phrasePieceObject[madLibPlace];
                        window[episodeRandomString] = checkPhrasePiece;
                        //console.log(checkPhrasePiece);
                    }else{
                        checkPhrasePiece = episodeRandomCheck;
                        //console.log("matched build phrase chunk to existing variable.")
                    }
                } else{
                    checkPhrasePiece = phrasePieceObject;
                    //console.log("its a string");
                }
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
            var optionText = buildPhrase(currentEpisodeType[episodeTypeState].problemAnswer[i]);
            i++;
            $("#mySelect option:eq(" +i+")").text(optionText);
            }
        $('select').prop('selectedIndex', 0);
        // console.log( "fillSelectOptions has been run.");
        // console.log(i);
        //window.location.href = "#resetSpot";
    }

function retrieveAttributeValue()
    {
        currentProblemAttributeArray = [];
        var modAttributeValue = 1;
        var currentProblemAttributeLength = currentEpisodeType[episodeTypeState].problemAttribute.length;
        var i =1;
        while (i < currentProblemAttributeLength){
            var tempAttribute = currentEpisodeType[episodeTypeState].problemAttribute[i];
            if (tempAttribute ==="captainAttribute"){modAttributeValue = captainHealthAttribute/100 ;}
            if (tempAttribute ==="firstMateAttribute"){modAttributeValue = firstHealthAttribute/100 ;}
            if (tempAttribute ==="securityAttribute"){modAttributeValue = securityHealthAttribute/100 ;}
            if (tempAttribute ==="medicalAttribute"){modAttributeValue = medicalHealthAttribute / 100;}
            if (tempAttribute ==="chiefAttribute"){modAttributeValue = chiefHealthAttribute /100 ;}
            //console.log ("modAttributeValue is: " + modAttributeValue);
            var tempAttributeValue = window[currentEpisodeType[episodeTypeState].problemAttribute[i]] *  modAttributeValue;
            currentProblemAttributeArray.push (tempAttributeValue);
            ++i;
        }
        // console.log (currentProblemAttributeArray);
        // console.log (currentEpisodeType[episodeTypeState].problemAttribute);
        return currentProblemAttributeArray;
    }

function adjustAttribute(maxChange)
{
    var halfMaxChange = maxChange/2;
    var adjustAttributeValue = (randomNumberGenerator(halfMaxChange));
    return adjustAttributeValue;
}

function checkAttribute(tempAttributeNew, tempAttributeOrigin){
    if (window[tempAttributeNew] > 100) {window[tempAttributeNew] = 100;}
    if (window[tempAttributeNew] < 1) {window[tempAttributeNew] = 0;}
    if (window[tempAttributeOrigin] < window[tempAttributeNew] ) {window[tempAttributeOrigin] = window[tempAttributeNew];}
}

function changeAttribute(negOrPos, attributeType)
{
    //for(var w in allListArray) {document.getElementById(allListArray[w]).style.color = "white";}

    var colorType = "green";
    if (negOrPos <1){colorType = "red";}

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
                if(pointAttributeType[i]==="decreaseDistance"){
                    distanceHome -= 400*(randomNumberGenerator(changeModifier)+changeModifier);
                    if (distanceHome <1) {
                        endGame();
                        return;}
                    $('#distanceHomeMeter').text("Your ship is now " + distanceHome + " light years from home.");
                }
                if (pointAttributeType[i]==="speedAttribute"){
                    document.getElementById("shipSpeedList").style.color = colorType;
                    speedAttribute = speedAttribute + adjustAttribute(changeModifier);
                    checkAttribute("speedAttribute","speedOrigin");
                }
                if (pointAttributeType[i]==="weaponAttribute"){
                    document.getElementById("shipWeaponList").style.color = colorType;
                    weaponAttribute =weaponAttribute + adjustAttribute(changeModifier);
                    checkAttribute("weaponAttribute", "weaponOrigin");
                }
                if (pointAttributeType[i]==="shieldAttribute"){
                    document.getElementById("shipShieldList").style.color = colorType;
                    shieldAttribute = shieldAttribute + adjustAttribute(changeModifier);
                    checkAttribute("shieldAttribute","shieldOrigin");
                }
                if (pointAttributeType[i]==="resourceAttribute"){
                    document.getElementById("shipResourceList").style.color = colorType;
                    resourceAttribute = resourceAttribute + adjustAttribute(changeModifier);
                    checkAttribute("resourceAttribute" , "resourceOrigin");
                }
                if (pointAttributeType[i]==="captainAttribute"){
                    document.getElementById("captainAttributeList").style.color = colorType;
                    captainAttribute =captainAttribute + adjustAttribute(changeModifier);
                    checkAttribute("captainAttribute","captainOrigin");
                }
                if (pointAttributeType[i]==="captainHealthAttribute"){
                    document.getElementById("captainHealthList").style.color = colorType;
                    captainHealthAttribute =captainHealthAttribute + adjustAttribute(changeModifier);
                    checkAttribute("captainHealthAttribute", "captainHealthOrigin");
                }
                if (pointAttributeType[i]==="firstMateAttribute"){
                    document.getElementById("firstAttributeList").style.color = colorType;
                    firstMateAttribute =firstMateAttribute + adjustAttribute(changeModifier);
                    checkAttribute("firstMateAttribute","firstMateOrigin");
                }
                if (pointAttributeType[i]==="firstHealthAttribute"){
                    document.getElementById("firstHealthList").style.color = colorType;
                    firstHealthAttribute =firstHealthAttribute + adjustAttribute(changeModifier);
                    checkAttribute("firstHealthAttribute","firstHealthOrigin");
                }
                if (pointAttributeType[i]==="securityAttribute"){
                    document.getElementById("securityAttributeList").style.color = colorType;
                    securityAttribute =securityAttribute + adjustAttribute(changeModifier);
                    checkAttribute("securityAttribute", "securityOrigin");
                }
                if (pointAttributeType[i]==="securityHealthAttribute"){
                    document.getElementById("securityHealthList").style.color = colorType;
                    securityHealthAttribute =securityHealthAttribute + adjustAttribute(changeModifier);
                    checkAttribute("securityHealthAttribute","securityHealthOrigin");
                }
                if (pointAttributeType[i]==="medicalAttribute"){
                    document.getElementById("medicalAttributeList").style.color = colorType;
                    medicalAttribute =medicalAttribute + adjustAttribute(changeModifier);
                    checkAttribute("medicalAttribute", "medicalOrigin");
                }
                if (pointAttributeType[i]==="medicalHealthAttribute"){
                    document.getElementById("medicalHealthList").style.color = colorType;
                    medicalHealthAttribute =medicalHealthAttribute + adjustAttribute(changeModifier);
                    checkAttribute("medicalHealthAttribute","medicalHealthOrigin");
                }
                if (pointAttributeType[i]==="chiefAttribute"){
                    document.getElementById("chiefAttributeList").style.color = colorType;
                    chiefAttribute =chiefAttribute + adjustAttribute(changeModifier);
                    checkAttribute("chiefAttribute","chiefOrigin");
                }
                if (pointAttributeType[i]==="chiefHealthAttribute"){
                    document.getElementById("chiefHealthList").style.color = colorType;
                    chiefHealthAttribute =chiefHealthAttribute + adjustAttribute(changeModifier);
                    checkAttribute("chiefHealthAttribute","chiefHealthOrigin");
                }
                if (pointAttributeType[i]==="allHealthAttribute"){allHealth(changeModifier);}
                if (pointAttributeType[i]==="allShipAttribute"){allShip(changeModifier);}
                ++i;
             }
}

function allShip (modValue){ // a value of max damage typically would be passed.
    var shipArray = ["speedAttribute","weaponAttribute","resourceAttribute","shieldAttribute"];
    var colorType ="red";
    if (modValue>0){colorType ="green";}
    document.getElementById("shipSpeedList").style.color = colorType;
    document.getElementById("shipWeaponList").style.color = colorType;
    document.getElementById("shipShieldList").style.color = colorType;
    document.getElementById("shipResourceList").style.color = colorType;
    var i =0;
    var shieldAdjust = modValue *((110 - shieldAttribute)/100); // this make a higher shield number better at reducing damage
    while (i<shipArray.length){
        window[shipArray[i]] += randomNumberGenerator(shieldAdjust);
        checkAttribute(shipArray[i]);
        ++i;
    }
    //--i; console.log("allHealth ran: " + healthArray[i]);
}

function allHealth(modValue){
    var healthArray = ["captainHealthAttribute","firstHealthAttribute","securityHealthAttribute","chiefHealthAttribute","medicalHealthAttribute"];
    var colorType ="green";
    if (modValue<1){colorType ="red";}
    document.getElementById("captainHealthList").style.color = colorType;
    document.getElementById("firstHealthList").style.color = colorType;
    document.getElementById("securityHealthList").style.color = colorType;
    document.getElementById("medicalHealthList").style.color = colorType;
    document.getElementById("chiefHealthList").style.color = colorType;

    var i =0;
    while (i<healthArray.length){
        window[healthArray[i]] += randomNumberGenerator(modValue); // most of the time medicine should be passed to modValue
        checkAttribute(healthArray[i]);
        ++i;
    }
    //--i; console.log("allHealth ran: " + healthArray[i]);
}

function resetEpisodeRandom ()
    {
        episoderandomName =0;
        episoderandomMadeObject =0;
        episoderandomResource = 0;
        episoderandomItem =0;
        episoderandomJob = 0;
        episoderandomRace = 0;
    }

function handleClick()
      {
        if (firstEpisodeState === 777) {
            firstEpisodeState = 1;
            var episodeProblemTitle = buildPhrase (currentEpisodeType.problemTitle);
        $('#episodeTitle').text("Episode " + firstEpisodeState + ": " + episodeProblemTitle);
            fillSelectOptions();
            return;
        }

        var selectValue = (document.getElementById("mySelect").value) -1;

        var resultNegativeCheck  = currentEpisodeType[episodeTypeState].resultNegative[selectValue];
        if (resultNegativeCheck === "nextEpisode"){
            resetEpisodeRandom();
            episodeTypeState = "originPlot";
            var episodePass = buildPhrase (currentEpisodeType[episodeTypeState].resultPass);
            $('#finalResultsDescription').text(episodePass);
            changeAttribute(-1, "immediateAttribute");
            updateStats();
            ++firstEpisodeState;
            txtEpisodeType = episodeType[randomNumberGenerator(episodeType.length)];
            currentEpisodeType =window[txtEpisodeType];
            var episodeProblemTitle = buildPhrase (currentEpisodeType.problemTitle);
            $('#episodeTitle').text("Episode " + firstEpisodeState + ": " + episodeProblemTitle);
            distanceHome = distanceHome - randomNumberGenerator(speedAttribute * 2);
                if (distanceHome <1) {
                    endGame();
                    return;
                }
            $('#distanceHomeMeter').text("Your ship is now " + distanceHome + " light years from home.");
            fillSelectOptions();
            return;
        }
        if (resultNegativeCheck === "continue"){
            ++firstEpisodeState;
            updateStats();
            txtEpisodeType = episodeType[randomNumberGenerator(episodeType.length)];
            currentEpisodeType =window[txtEpisodeType];
            resetEpisodeRandom();
            episodeTypeState = "originPlot";
            var episodeProblemTitle = buildPhrase (currentEpisodeType.problemTitle);
            $('#episodeTitle').text("Episode " + firstEpisodeState + ": " + episodeProblemTitle);
            fillSelectOptions();
            return;
        }
        if (episodeTypeState === "winner")
        {
            ++firstEpisodeState;
            currentEpisodeType = window[currentEpisodeType[episodeTypeState].resultNegative[selectValue]];
            var episodeProblemTitle = buildPhrase (currentEpisodeType.problemTitle);
            $('#episodeTitle').text("Episode " + firstEpisodeState + ": " + episodeProblemTitle);
            resetEpisodeRandom();
            episodeTypeState = "originPlot";
            fillSelectOptions();
            return;
        }

        resourceAttribute-=randomNumberGenerator(5);
        document.getElementById("shipResourceList").style.color = "red";

         if (speedAttribute<speedOrigin){
                document.getElementById("shipSpeedList").style.color = "green";
                speedAttribute = speedAttribute + adjustAttribute(chiefAttribute/8);
                checkAttribute("speedAttribute","speedOrigin");
          }
        if (weaponAttribute<weaponOrigin){
            document.getElementById("shipWeaponList").style.color = "green";
            weaponAttribute =weaponAttribute + adjustAttribute(chiefAttribute/8);
                    checkAttribute("weaponAttribute", "weaponOrigin");
                }
        if (shieldAttribute<shieldOrigin){
            document.getElementById("shipShieldList").style.color = "green";
            shieldAttribute = shieldAttribute + adjustAttribute(chiefAttribute/4);
                    checkAttribute("shieldAttribute","shieldOrigin");
        }
        var attributeArray = retrieveAttributeValue();
        var attributeTotal = 0;
        $.each(attributeArray,function() {
            attributeTotal += this;
        });
        var attributeModifier = Math.floor((attributeTotal / attributeArray.length) / 8);
        //console.log("the attributeModifier is " + attributeModifier);
        var correctAnswerThreshold = 40 + attributeModifier;
        //console.log ("the threshold is "+ correctAnswerThreshold);
        var correctAnswerRoll = randomNumberGenerator(100);

        var currentProblemAttributeLength = currentEpisodeType[episodeTypeState].problemAttribute.length;

        if (correctAnswerThreshold > correctAnswerRoll){
            if (firstEpisodeState > 172){
                endGame(); return;}

            changeAttribute(1, "problemAttribute");
            allHealth(medicalAttribute/2);

            distanceHome = distanceHome - randomNumberGenerator(speedAttribute * 16);
                if (distanceHome <1) {
                    endGame();
                    return;
                }

            $('#distanceHomeMeter').text("Your ship is now " + distanceHome + " light years from home.");

            episodeTypeState = "winner";

            var episodeResultPositive = buildPhrase(currentEpisodeType[episodeTypeState].resultPossitive);
            $('#finalResultsDescription').text(episodeResultPositive);
            changeAttribute(1,"immediateAttribute");

        } else {

            if (resultNegativeCheck === "failure"){
                episodeTypeState = currentEpisodeType[episodeTypeState].resultNegative[selectValue];
                changeAttribute(-1, "problemAttribute");
                allHealth(-1/4*medicalAttribute);
                var episodeFailureDescription = buildPhrase (currentEpisodeType[episodeTypeState].failureText);
                $('#finalResultsDescription').text(episodeFailureDescription);
                endGame();
            } else {
                episodeTypeState = currentEpisodeType[episodeTypeState].resultNegative[selectValue];
                var episodeFailureDescription = buildPhrase (currentEpisodeType[episodeTypeState].failureText);
                $('#finalResultsDescription').text(episodeFailureDescription);

                changeAttribute(-1, "immediateAttribute");
                endGame();
            }
            //console.log (episodeTypeState);
        }
        //console.log( "The correct Answer was number " + correctAnswerRoll);
        fillSelectOptions();
        updateStats();
}


function endGame ()
{
    if (firstEpisodeState > 172){
            document.location.href = "win.html"
      }
     if (distanceHome <1) {
            document.location.href = "win.html"
     }
     if(resourceAttribute <1){
            document.location.href = "fail.html"
     }
        if(captainAttribute <1){
            document.location.href = "fail.html"
        }
}