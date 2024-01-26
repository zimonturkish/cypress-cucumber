import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep("I open example page", () => {
  cy.visit("https://example.com/");
});

defineStep("I see page title", () => {
  cy.get("h1").should("be.visible");
});

defineStep("I see text", () => {
  cy.get("p").should("be.visible");
});
