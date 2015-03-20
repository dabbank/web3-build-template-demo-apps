Feature: Bestprice
  As a user dev
  I want to have it running

  Scenario: A user with negative balance
    Given I have an income of 1000 and an expense of 2000
    When I check my total balance
    Then the total should be -1000 and highlighted in red