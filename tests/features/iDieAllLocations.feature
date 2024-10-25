Feature: Die in all locations

  Scenario: Outside Cafe image
    Given that I am outside the cafe
    When I do nothing
    Then I should see an image of the cafe
    And I should see a descriptive text explaining the scenario

  Scenario: Inside Cafe image
    Given that I am outside the cafe
    When I click the "Enter the cafe" button
    Then I should see an image displayed inside the cafe
    When I click the "Wait" button until I lose all "Health"
    Then I should see the "Play again" button

  Scenario: Empty Street Image
    Given that I am outside the cafe
    When I click the "Go North" button
    Then I should see an image of the empty street
    When I click the "Wait" button until I lose all "Health"
    Then I should see the "Play again" button

  Scenario: Crowded Bar Image
    Given that I am outside the cafe
    When I click the "Go North" button
    And I click the "Go East" button
    Then I should see an image of a crowded bar
    When I click the "Wait" button until I lose all "Health"
    Then I should see the "Play again" button

  Scenario: Country-side Image
    Given that I am outside the cafe
    When I click the "Go South" button
    Then I should see an image of the country-side
    When I click the "Wait" button until I lose all "Health"
    Then I should see the "Play again" button

  Scenario: Guitarist and Saxplayer Image
    Given that I am outside the cafe
    When I click the "Go South" button
    And I click the "Go West" button
    Then I should see an image of a guitarist and saxplayer
    When I click the "Wait" button until I lose all "Health"
    Then I should see the "Play again" button
