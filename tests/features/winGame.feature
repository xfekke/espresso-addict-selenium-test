Feature: Win Game

  Scenario: Winning the game
    Given that I am outside the cafe
    When I click the "Go South" button
    And I click the "Go West" button
    And I wait until I can click the "Jam with the band" button
    And I click the "Go East" button
    And I click the "Go North" button
    And I click the "Go North" button
    And I click the "Go East" button
    And I wait until I have "a can of beer" in my "bag"
    And I click the "Go West" button
    And I click the "Go South" button
    And I click the "Enter the cafe" button
    And I click the "Buy an espresso" button 3 times
    And I wait until I can click the "Give beer to barista" button
    Then I should have 5 "Espressos"
    And I should see the "Play again" button



    

