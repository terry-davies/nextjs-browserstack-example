import { getGreeting } from "../support/app.po";

describe("browserstack-next-not-nx", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    // Custom command example, see `../support/commands.ts` file
    cy.get('[data-cy="get-started"]').contains(/Get started by editing/);
  });
});
