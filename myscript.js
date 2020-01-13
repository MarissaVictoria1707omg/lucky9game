function randImg(){
    //CARD 1
    var randNum1 = Math.floor(Math.random() * 13) + 1;
    var randCard1 = Math.floor(Math.random() * 4) + 1;
    var imgName1;
    var cardName1;
    var cardVal1;

    //type of card 1
    if(randCard1 == 1){
        cardName1 = "clubs";
    }
    else if(randCard1 == 2){
        cardName1 = "diamonds";
    }
    else if(randCard1 == 3){
        cardName1 = "hearts";
    }
    else if(randCard1 == 4){
        cardName1 = "spades"
    }

    //number value of card 1
    if(randNum1 == 1){
        cardVal1 = 1
        imgName1 = "ace_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 2){
        cardVal1 = 2
        imgName1 = "2_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 3){
        cardVal1 = 3
        imgName1 = "3_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 4){
        cardVal1 = 4
        imgName1 = "4_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 5){
        cardVal1 = 5
        imgName1 = "5_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 6){
        cardVal1 = 6
        imgName1 = "6_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 7){
        cardVal1 = 7
        imgName1 = "7_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 8){
        cardVal1 = 8
        imgName1 = "8_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 9){
        cardVal1 = 9
        imgName1 = "9_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 10){
        cardVal1 = 10
        imgName1 = "10_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 11){
        cardVal1 = 11
        imgName1 = "jack_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 12){
        cardVal1 = 12
        imgName1 = "queen_of_" + cardName1 + ".png";
    }
    else if(randNum1 == 13){
        cardVal1 = 13
        imgName1 = "king_of_" + cardName1 + ".png";
    }

    //CARD 2
    var randNum2 = Math.floor(Math.random() * 13) + 1;
    var randCard2 = Math.floor(Math.random() * 4) + 1;
    var imgName2;
    var cardName2;
    var cardVal2;

    //type of card 2
    if(randCard2 == 1){
        cardName2 = "clubs";
    }
    else if(randCard2 == 2){
        cardName2 = "diamonds";
    }
    else if(randCard2 == 3){
        cardName2 = "hearts";
    }
    else if(randCard2 == 4){
        cardName2 = "spades"
    }

    //number value of card 2
    if(randNum2 == 1){
        cardVal2 = 1
        imgName2 = "ace_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 2){
        cardVal2 = 2
        imgName2 = "2_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 3){
        cardVal2 = 3
        imgName2 = "3_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 4){
        cardVal2 = 4
        imgName2 = "4_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 5){
        cardVal2 = 5
        imgName2 = "5_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 6){
        cardVal2 = 6
        imgName2 = "6_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 7){
        cardVal2 = 7
        imgName2 = "7_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 8){
        cardVal2 = 8
        imgName2 = "8_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 9){
        cardVal2 = 9
        imgName2 = "9_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 10){
        cardVal2 = 10
        imgName2 = "10_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 11){
        cardVal2 = 11
        imgName2 = "jack_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 12){
        cardVal2 = 12
        imgName2 = "queen_of_" + cardName2 + ".png";
    }
    else if(randNum2 == 13){
        cardVal2 = 13
        imgName2 = "king_of_" + cardName2 + ".png";
    }

    //linking to html
    document.getElementById("card1").src = "./assets/" + imgName1;
    document.getElementById("card2").src = "./assets/" + imgName2;

    var total = cardVal1 + cardVal2;
    document.getElementById("total").innerHTML = total;
    if (total == 9){
        document.getElementById("result").innerHTML = "You Win!";
    }
    else {
        document.getElementById("result").innerHTML = "Try Again!";
    }
}
