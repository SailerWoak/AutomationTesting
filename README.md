# AutomationTesting

To run the project: 

* npx wdio run ./wdio.conf.js 
* you will need have a "yarn"
* chrome version not lower then 103
  * Link to download the chrome version: https://chrome.softwaredownload.co.in/chrome-103-0-5060-53
* You’ll need Node.js installed.
  * Install at least v12.16.1 or higher as this is the oldest active LTS version

HomeWorks for Automation Practice 

Automation practice on http://www.uitestingplayground.com/

* First TC
    1) Entering the page "http://www.uitestingplayground.com/dynamicid"
    2) Finding the css selector for button
    3) Clicking on the button "Button with Dynamic ID"
* Second TC
    1) Entering the page "http://www.uitestingplayground.com/classattr"
    2) Finding button with unic name by css selector
    3) Clicking on blue button
    4) Closing the Error message
* Third TC
    1) Entering the page "http://www.uitestingplayground.com/hiddenlayers"
    2) Pressing on "Green" button
    3) Adding new Style property to hide "Blue" button
    4) Clicking again on "Green" button
    5) Checking that Error message appeared and printing the text in console log
* Forth TC
    1) Entering the page "http://www.uitestingplayground.com/loaddelay"
    2) Wating until page will be loaded 
    3) Pressing the "Blue" button
* Fifth TC
    1) Entering the page "http://www.uitestingplayground.com/ajax"
    2) Pressing the "Blue" button 
    3) Waiting for 15sec 
    4) Checking that the text appears

