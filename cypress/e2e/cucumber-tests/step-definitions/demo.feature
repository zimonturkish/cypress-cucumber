# Test suite
Feature: Demo Feature 

    Just to create a quick BDD Demo
    this is the second line of the description 

    Scenario: Should load example website
        Given I open example page 
        Then I see page title "Example"
        And I see text

    Scenario Outline: Scenario Outline name: Should load example website
        Given I open example page 
        Then I see page title "<title>"
        And I see text

    Examples:
        | title | 
        | Example | 

