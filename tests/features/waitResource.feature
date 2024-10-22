Feature: Wait mechanic to gain resources

  Scenario: Waiting inside the bar for resources
    Given I am in the Bar
    When I click the "Wait" button
    Then I should have "a can of beer" in my "bag"

  Scenario: Waiting on the country-side
    Given I am on the country-side
    When I click the "Wait" button
    And I click the "Wait" button again
    Then I should have recieved "5" Money
