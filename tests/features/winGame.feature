Feature: Win Game

  Scenario: Winning the game
    Given that I am outside the cafe
    When I move around to collect resources
    # kolla anteckningar angående hur spelet ska spelas
    Then I should that I have 5 "Espressos"
    And I should see the "Play again" button

# Given outside cafe
# South
# West
# Wait loop until jam
# Jam with band
# East
# North
# North
# East
# Wait loop until can of beer
# West
# South
# Enter Cafe
# Buy x3
# Wait loop until give beer
# Give beer
# Win



    

