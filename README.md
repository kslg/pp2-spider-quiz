<h1 align="center">Spider-Quiz</h1>


## Introduction

This is an unofficial online quiz game inspired by the comic book character Spider-man. 
This quiz will test the users general knowledge of spider-man with five multiple-choice questions.
The website is responsive so users can play the quiz on mobile and tablet devices, while on the go. 

![image](/docs/images/responsive-generator-image.png)

------

## Accessibility

I’ve added ARIA attributes to buttons and game sections. This is to help disabled users understand what the different are and their purpose. 

I’ve used Symantic HTML markup which helps browsers to understand the context of the content, and also helps with the accessibility for users with impairments.

I’ve used `role` Attribute on buttons and sections of the game to explain what they are.

------

## Accessibility Score: Google Lighthouse Test

The site ran through Google Lighthouse for Desktop and Mobile:

### Desktop Scores:

![image](/docs/images/google-lighthouse-score-desktop.png)

### Mobile Scores:

![image](/docs/images/google-lighthouse-score-mobile.png)

------

## SEO (Search Engine Optimisation)

I've added `meta data` and a `title` to the .html page. This helps Search engines like Google when looking for matches based on what the user searches for. 

I added a `description`, `keywords` and `author`. Search Engines will display the title and description information in their search results.

------

## Features List

### 1. Countdown timer with a conditional window alert.

The challenge element of the game is a countdown timer. The player has sixty seconds to answer all five questions in time. 
If the player cannot answer all five questions then the player is presented with a window alert letting the player know that the time is up.
If the player completes the quiz with the time, then the alert does not display.


![image](/docs/images/window-alert.png)

### 2. Modal for game instructions

Instructions are provide for the player in the form of a modal.
When you click 'How to Play' the modal pops up.

![image](/docs/images/how-to-play-modal.png)

### 3. Dark Mode

The player is given a toggle to enable dark-mode which benefits the user's health and wellbeing. 
Dark mode can help reduce eye strain and can also benefit prolong battery life for mobie devices. 

![image](/docs/images/dark-mode-enabled.png)

### 4. Quiz Reset Button

The player can reset the quiz anytime by clicking the `Reset` button. This refreshes the page.

![image](/docs/images/reset-button.png)

### 5. ShareThis social sharing widget

The player can share the game with family and friends via social media using the widget.
This is a 3rd party service and includes a `Privacy Policy` to protect users, so they can control what personal browsing data is shared. 

![image](/docs/images/share-this.png)

![image](/docs/images/privacy-policy.png)

### 5. Check Answers Area

The player is not told what the answers are for the quiz but the player can check thier answers after the quiz to see what they got wrong and got right.

![image](/docs/images/answers-check.png)

------

## Testing

### Responsive Testing

I have tested that the site is responsive by applying specific styles for the most common `CSS breakpoints`

#### Breakpoints used for mobile devices:

`max-width: 480px`
`max-width: 320px`

#### Breakpoints used for tablet devices:

1. `max-width: 820px`
2. `max-width: 768px`

I used the Chrome inspect element to check the different CSS breakpoints.

## User Stories

### Quiz Logic

`As a` Player.
`I want to` answer five multi-choice questions.
`So that` i can complete the quiz.

### Correct and Incorrect Answer Logic

`As a` Player.
`I want to` see if the answers i select turn red or green.
`So that` during the quiz i can see which of my answers are right or wrong.

### Countdown Timer

`As a` Player.
`I want to` click 'START' to start the countdown timer.
`So that` i have sixty seconds to complete the quiz.

### Window Alert

`As a` Player.
`I want to` be shown a window alert if I do not complete the quiz in time.
`So that` the game tells me that I have ran out of time.
`Otherwise` I will not be shown the alert.

### Dark Mode

`As a` Player.
`I want to` be able to toggle between dark mode and light mode.
`So that` i can view the game at night to reduce eye strain.

### How to Play Modal

`As a` Player.
`I want to` be able to see a modal displayed.
`So that` i can see instrucitons how to play the quiz.

### Reset Button

`As a` Player.
`I want to` be able to restart the quiz and the countdown timer.
`So that` i can see try to complete the quiz on time.

### Social Share functionality

`As a` Player.
`I want to` share the game on social media and see the icons in the footer.
`So that` i can share the game with my family and friends.

### Score area

`As a` Player.
`I want to` see my final score out of five.
`So that` i know how many questions i got right.

### Check Answers area

`As a` Player.
`I want to` be able to see my answers `but not` the actual answers.
`So that` i know what questions i may have gotten wrong.

### Privacy Policy

`As a` Player.
`I want to` control what data of mine is tracked and shared.
`So that` i know what data of mine being tracked and shared.

### Responsive Layout

`As a` Player.
`I want to` be able to play the quiz on my mobile phone, tablet and laptop.
`So that` i can play the quiz anywhere and anytime i choose.


## Test Cases

### Quiz Logic
I can go through the quiz which has five multiple-choice questions `PASSED`

![image](/docs/images/fith-question.png)

### Correct and Incorrect Answer Logic
I should see my selection highlightd in red or green to show which answers are right and wrong. `PASSED`

![image](/docs/images/correct-answer-green.png)
![image](/docs/images/wrong-answer-red.png)

### Countdown Timer

When I click 'START' the countdown timer starts and I have sixty seconds.`PASSED`

![image](/docs/images/countdown-timer.png)


### Window Alert

1. The window alert is displayed if I run out of tie to complete the quiz `PASSED`
2. The alert should not display if I complete the quiz on time. `PASSED`

![image](/docs/images/window-alert-times-up.png)

### Dark Mode

I should be able to toggle between normal and dark mode. `PASSED`

### How to Play Modal

I should be able to open and close the modal via the button. `PASSED`

### Reset Button

I should be able to restart the quiz by clicking the button `PASSED`

### Social Share functionality

I can see the social share icons in the footer `PASSED`


### Score area

I can see my final score out of five. `PASSED`

### Check Answers area

I can see my answers in the dedicated area. `PASSED`

### Privacy Policy

I can manage my privacy settings `FAILED`. 
Not able to see the privacy link on certain devices and layouts.

### Responsive Layout

I can view the game on the standard reponsive views. `PASSED`


## HTML and CSS Code Validation

Both the W3C Markup HTML Validator and W3C CSS Validator were used to to confirm there are no errors in the codebase.

<a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fkslg.github.io%2Fpp2-spider-quiz%2F" target="_blank">W3C Markup Validator Report</a>

![image](/docs/images/html-validation.png)

<a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkslg.github.io%2Fpp2-spider-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en" target="_blank">W3C CSS Validator Report</a>

![image](/docs/images/css-validation.png)

------

## Deployment

I worked on my local repository before deploying the code to Staging and then Production (Live Site).

### Deployment to Staging

I first deploy my changes to the `Staging Area` so I can preview the changes before deploying to Production.

`$ git add .` - Adding this to the editor terminal commits files to the Staging area.
The period (.) at the end will add all files to the commit.

`$ git commit -m “{Commit Details}”` - Pushes the latest changes to the GIT Repository.
`-m` means "message" which is common practice to add so you and other developers know what changes were being made.


### Deployment to Production

Once I verified and tested by changes, I then deploy thr changes to Production.

`$ git push` deploys the code to the GitHub and into the main branch of code which is connected to Production (the Live Public URL).

## Bugs Encountered during Testing

### Issue 1 - Stop the window alert from displaying

The window alert was still displaying even when you completed the quiz on time. 

![image](/docs/images/window-alert-issue.png)

## Fix

I had to delete the window alert after the quiz was over by using the `delete keyword` for the window object.

![image](/docs/images/window-alert-fix.png)

### Issue 2 - Modal code conflict

Added a Javascript/CSS Modal to the quiz but this broke the answers section as the colours on the answers did not clear after you select an answer. There was a conflict in the code. 
I was using the modal from W3C https://www.w3schools.com/howto/howto_css_modals.asp

![image](/docs/images/modal-issue.png)

## Fix

I found a simple Javascript CCS Modal workaround instead and styled it. 

## UX Planning

I used the 5 Planes of UX to provide a conceptual framework. 

### The Strategy Plane

#### Mission Objectives / The What:

 - Trivia Quiz game for Spider-man enthusiasts.
 - Fun and visually entertaining.
 - An unofficial quiz game.

 #### The Why:

- To celebrate the comic book hero.
- For fans to test their general knowledge about Spider-man.


### Ideas & Inspiration Mind Map
![image](/docs/images/mindmap-screenshot.png)

### Demographic

 - Target Audience between: 9 years - 40 years
 - All genders Welcome.


### Colour Palette Ideas
- Primary colours for easy accessibility and clear communication.
- Also, matches the theme of the quiz.

![image](/docs/images/colour-pallette-ideas.png)

### Content Strategy
- Challening questions for the quiz
- Instructions for the user
- Clear and simple language for the users to understand and operate the quiz.

### Typography
Fonts selected are `Heebo` and `Bebas Neue` from Google Fonts which are clear and easy to read. https://fonts.google.com/

![image](/docs/images/google-fonts-screenshot.png)

---

## The Scope Plane

### Functional Requirements

1. Problem: If the users want to play the quiz at night, they may strain their eyes playing this. 

    Solution: Implement night/dark mode for the quiz UI.

2. Problem: To move to the next question, the user needs to click next to display the next question.

    Solution: Make an event where the user clicks or taps on an answer which then moves on to
the next question.

3. Problem: Users need to be limited to a certain amount of time to play the quiz. This is one of the challenge aspects of the quiz

    Solution: Add a countdown timer for one minute. 
    If the time runs out before the quiz ends then the user is prompted with a message “Oh no! Times Up. Don’t worry, you can try again.”
    Users can restart the quiz.
    If the user completes the quiz within one minute the timer stops and the user sees the scores page.

4. Problem: If the player wants to start the quiz they would need to refresh the browser.

    Solution: Create a more intuitive refresh function by having a button to refresh the quiz.

5. Problem: The player might not understand the aim of the game i.e how to play.

    Solution: Create a popup with instructions on how to play.

6. Problem: The player has no method to share the game with friends.

    Solution: Add a share functionality so users can share the game with friends and family.

### Content Requirements

- Quiz questions and answers which can be easily updated via js file. 
- Content on the site will be a mix of copy text and a background image.

### Interaction Design

- All CTA (Call to Action) buttons will change colour to let the customers know that the buttons and links are clickable. 

- Once all five questions have been answered the player is directed to the score area.

- Once the timer has run out the player is notified. 

- The player is presented with an alert when the time has run out. Player has to click on the alert to close it.

- The player cna find out how to play the game by opening up a modal popup giving instructions on how to play the game.

### Scope of MVP

Using the `MoSCoW prioritisation method` which is used in Agile project delivery to outline the importance of each requirement and what needs to be delivered in the MVP.

#### MoSCoW Definition:
![image](/docs/images/moscow-screenshot.png)
 
---
## The Structure Plane

### Site Architecture
- Only one page is presented to the user with a dynamic elements being the question area, and the scoreboard area.

![image](/docs/images/site-structure-screenshot.png)

### Header and Footer
- Normal Mode: Light Blue Background and Yellow Gold Text. 
- Dark Mode: Dark Blue Background and Red Text. 

Examples
![image](/docs/images/header-mock-up.png)

![image](/docs/images/footer-mock-up.png)

## CTA Buttons
Non-clicked State: 
- White text box
- Dark Blue text

Hover State:
- Dark Blue text box
- Yellow Gold text

![image](/docs/images/hover-state-screenshot.png)

## Colour Palette:

![image](/docs/images/colour-pallette-screenshot.png)

## Iconography:

- Toggle icons will match the colours from normal and dark mode.
- Social share icons/buttons will be served by the 3rd party ShareThis widget.

![image](/docs/images/darkmode-toggle-icons.png)
![image](/docs/images/sharethis-preview.png)

## The Surface Plane / Final Concept

### Game Area Wireframe
![image](/docs/images/gamearea-wireframe.png)

### Score Area Wireframe
![image](/docs/images/scorearea-wireframe.png)

------

### Credits / Borrowed Resources / Tools

- Favicon 
https://www.pngaaa.com/ - PNG Images For Free

- Font Library 
https://fonts.google.com/

- Quiz Questions
https://www.funtrivia.com/en/Movies/Spider-Man-4653.html


- Share This widget
https://sharethis.com/platform/share-buttons/
- Dark Mode Functionality
https://www.futurecodersweb.com/2021/06/create-dark-and-light-mode-toggle.html
- Setup Alerting for the timer
https://techfunda.com/howto/595/stop-timer
https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Restart Button Functionality: 
https://stackoverflow.com/questions/5611119/how-to-make-a-refresh-button-using-javascript
- Quiz Structure Inspiration
https://www.youtube.com/watch?v=2jwdyO_UunE&t=2421s
- Javascript CCS Modal Inspiration
https://www.youtube.com/watch?v=uUCpopjPZdI
- Spider-Man Background Image:
https://wallpapersafari.com/w/19SZQb
- RGBA Generator
https://rgbacolorpicker.com/hex-to-rgba
- Dark Mode Research
https://blog.weekdone.com/why-you-should-switch-on-dark-mode/
- Agile User Stories Support Documentation
https://www.atlassian.com/agile/project-management/user-stories 
- Inspired by the Love Maths Project. 
- Wireframes produced using Balsamic
- Support from my mentor Gerard McBride, Slack Community and Tutor Support (Ger)
- Online Code Support and References: W3C Schools and Stackoverflow Community.

------

### Descoped Requirements / Future Enhancements
- Some requirements had to be descoped from the project due to time contraints. 
- Descoping is a process which is part or Agile Project Management, and can be requirements that are brought back into a sprint or project at a later date.

1. You are able to play the quiz without starting the timer.
2. You can got the the next questions without answering any of them.
3. Add more questions to the question bank and serve random questions to the player.
4. Share your score with friends.
5. Display a cover page intrducing the quiz. 
6. A 3,2,1 countdown before starting the quiz.

------

### Unfixed Bug
 Due to time constraints the following bugs are still unfixed. Following Agile practises, these bugs can go into a backlog of requirements and prioritised accordingly.

- Make sure Privacy Policy link is displayed on all layouts.

------

<p align="center">End of document.</p>












