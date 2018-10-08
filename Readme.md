TIC TAC TOE react
=======
###### v1.1.0

### Overview

   This project aims at creating tic-tac-toe with react.js
   to scout possibilites it has to offer.
   Also training ground.

## Design brief

   Every major chunk of the program has been assigned it's own
   react component.

   Game grid consists is generated dynamicly from state of `gameGrid` which initially is defined as `gameGrid=Array(9).fill(null)`
   which is latter used to render grid game with `.map` method.

 **1** | **2** | **3**
 :---: |:---:| :---:
 **4** | **5** | **6**
 **7** | **8** | **9**

## Looking for winner
### Check if array contains all specified elements

For this task function `findCharsFunction(a,b)` was created that checks every single element of every nested array with `.includes()` method against `player#Score`. Function takes arguments of `source` and `condition`, where default has been set for `condition` to be `winCondition`. This clears up code a bit by allowing to pass only one argument that is either `player1Score` or `player2Score` as `source`.
This function is utilized as logical check for `if` winning conditions and is invoked inside of `checkForWinnerFunction()`.

#### Input lock
This is simply achieved by assigning CSS class to an element with attribute `pointer-events: none`.
