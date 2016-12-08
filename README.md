# cookie-game

## Description

This project would have you reverse engineer a game that is text based. 

1. http://orteil.dashnet.org/cookieclicker/

The above is an example.

## Context

This is important because creating this game would allow you to focus mainly on an interactive language and how it interacts with the elements on the page, which change over time. You would learn how the functionality of certain parts of the code depend on each other. 

## Specifications
- [x] As a user, I can save the game.  
- [x] As a user, I can "buy" items that increase the counter rate.  
- [x] As a user, I can see the amount of "currency" I have.  
- [x] As a user, I can reload my game data.  
- [ ] The game increases currency depending on an algorithm that calculates the rate.  

## Modified Specs
Need to have:
- Cookie
  - [x] Button
  - [x] Needs Graphic
  - [x] On click, increase total by 1
  - [x] Needs to show count
- “Ovens” 
  - [x] Button
	- [x] Need Graphic
	- [x] Functionality: Increase click multiplier by X
	- [x] On Click: Subtract 300 from cookieTotal
	- [ ] Needs to show count
- Grandmas
	- [x] Button
	- [x] Needs Graphic
	- [x] Functionality: Auto”clicks”
	- [x] On Click: Subtract 300 from cookieTotal
	- [ ] Needs to show count
- New Game button
	- [ ] Sets the values of the buttons to 0
- On Load
  - [x] Load existing data when loading the page

### Stretch Goals
- [ ] Create more shop items with different functionalities
- [ ] Stylesheet emulates actual Cookie Clicker game

### Required
- [x] The artifact produced is properly licensed, preferably with the [MIT license](https://opensource.org/licenses/MIT).

---

<!-- LICENSE -->

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
<br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
