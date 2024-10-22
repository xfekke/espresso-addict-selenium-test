Feature: Lose Game

  Scenario: Losing the game
    Given that I am outside the "Cafe"
    When I click the "Wait" button until I lose all "Health"
    # Kolla så health är 0 och loop stoppas
    Then I should see the "Play again" button



