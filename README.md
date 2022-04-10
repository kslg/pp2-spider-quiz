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

### Countdown Timer

`As a` Player.
`I want to` click 'START' to start the countdown timer.
`So that` i have sixty seconds to complete the quiz.

### Window Alert

`As a` Player.
`I want to` be shown a window alert if I do not complete the quiz in time.
`So that` the game tells me that I have ran out of time.
`Otherwise` I will not be shown the alert.


## Test Cases

### Quiz Logic












