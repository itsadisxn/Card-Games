----------------------------------------------
----------------------------------------------
             Project Description
----------------------------------------------
----------------------------------------------

This project builds a number of card games using reusable objects. The games that are being implemented are as follows:
1. Flash Card Game
2. Solitaire Game
3. Hearts Game

The reusable objects that are being used are as follows:

>>> GAME <<<
-----------------------
1. Game
-----------------------
Attributes
-----------------------
 - Deck (Object)
 - DiscardPile (Object)
-----------------------
Functions
-----------------------
 - play()
-----------------------

>>> DECK <<<
-----------------------
2. Deck
-----------------------
Attributes
-----------------------
 - Suits (Array)
 - Vals (Array)
-----------------------
Functions
-----------------------
 - shuffle()
 - deal()
 - stack()
-----------------------


>>> CARD <<<
-----------------------
3. Card
-----------------------
Attributes
-----------------------
 - Suit (String)
 - Val (String)
-----------------------
Functions
-----------------------
 - cardFlip()
 - cardDrag()
 - cardDrop()
-----------------------


>>> DISCARD PILE <<<
-----------------------
4. Discard Pile
-----------------------
Attributes
-----------------------
 - Rules (Array)
 - Count (Number)
-----------------------
Functions
-----------------------
 - cardDragOver()
-----------------------
