/** 
 * 1. We will start this project by building an IFFE function ( Immediately Invoked Function Expression ). 
 * IFFE is a JavaScript function that runs as soon as it is defined.
 * 
 * 2. As can be seen below, the IFFE Expression has a semi-colon ";" before it. This has been added, in case the file is minified at any point of time and the preceding code does not have a semicolon
*/
;(function(window){
    
    class Game {
        constructor() {
            //Information Section
            //Deck
            //Discard Pile
            //Rules
        }
    }

    class Deck {
        constructor() {
            //Cards
            //Shuffle 
            //Stack
        }
    }

    class Card {
        constructor(suit, rank, value) {
            //Value
            this.value = value;
            //Suit
            this.suit = suit;
            //Rank
            this.rank = rank;
        }    

        cardFlip(){

        }

        cardDrag(){

        }

        cardDrop(){
            
        }
    }

    class DiscardPile {
        constructor(rules, count) {
            this.rules = rules;
            this.count = count;
        }

        cardDragOver(){
            
        }
    }



})(window);

