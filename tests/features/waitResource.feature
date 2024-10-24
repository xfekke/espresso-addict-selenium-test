Feature: Wait mechanic to gain resources

  Scenario: Waiting inside the bar for resources
    Given I am in the Bar
    When I wait until I have "a can of beer" in my "bag"
    Then I should have "a can of beer" in my "bag"

  Scenario: Waiting at the Guitarist and Saxplayer scene
    Given I am at the Guitarist and Saxplayer scene
    And I have noted the initial "Money" value
    When I wait until I can click the "Jam with the band" button
    Then I should have received 5 "Money"
