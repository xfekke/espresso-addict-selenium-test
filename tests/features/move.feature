Feature: Changing scenario by moving

  Scenario: Walking inside the Cafe
    Given that I am outside the "Cafe"
    When I click the "Enter the cafe" button
    Then I should be in the "Cloud Forest Cafe"

  Scenario: Walking north
    Given that I am outside the "Cafe"
    When I click the "Go North" button
    Then I should see an "empty street"

  Scenario: Walking north then east
    Given that I am outside the "Cafe"
    When I click the "Go North" button
    And I click the "Go East" button
    Then I should be in a "crowded bar"

  Scenario: Walking south
    Given that I am outside the "Cafe"
    When I click the "Go South" button
    Then I should be out in the "country-side"

  Scenario: Walking south then west
    Given that I am outside the "Cafe"
    When I click the "Go South" button
    And I click the "Go West" button
    Then I should see a "guitarist" and "sax player"
