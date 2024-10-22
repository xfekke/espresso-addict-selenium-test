Feature: Progress Bar

  Scenario: 3 visible progress bars
    Given that I am outside the cafe
    When I do nothing
    Then I should see "Health", "Money" and "Espressos"

  Scenario: Losing Health
    Given that I am outside the cafe
    When I click the "Wait" button
    Then I should have lost "Health"

  Scenario: Gaining Espressos
    Given that I am outside the cafe
    When I click the "Enter the Cafe" button
    And I click the "Buy an espresso" button
    Then I should have gained "Espressos"
    And I should have gained "Health"
    And I should have lost "Money"