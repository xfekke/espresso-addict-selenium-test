Feature: Help Button

  Scenario: Clicking the help button
    Given that I am outside the cafe
    When I click the "Help" button
    Then I should see helpful text
    And I should see the "Continue" button

  Scenario: Clicking the continue button
    Given that I am outside the cafe
    And I have clicked the "Help" button
    When I click the "Continue" button
    Then I should be outside of the cafe

  Scenario: Clicking help then continue in the bar
    Given that I am inside the bar
    And I have clicked the "Help" button
    When I click the "Continue" button
    Then I should be inside the bar