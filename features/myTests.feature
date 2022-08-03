Feature: Dynamic button clicking

  Scenario: As a user, I'm looking for the button with Dynamic ID and and checking that id of the button was changed

    Given open page "dynamicid"
    When click on
    Then checking dynamic ID


  Scenario: Record primary 'Blue' button click and press ok in alert popup
  
    Given open page "classattr"
    When primary click
    Then close alert

  Scenario: Make sure that green button can't be pressed twice 
    Given open page "hiddenlayers"
    When success click
    Then change style
    Then success click
    Then warning