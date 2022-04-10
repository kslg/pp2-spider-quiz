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

## UX Planning

I used the 5 Planes of UX to provide a conceptual framework. 


------




















