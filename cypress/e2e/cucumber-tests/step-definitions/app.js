import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep("I open example page", () => {
  cy.visit("https://example.com/");
});
