class Section2 {

  apiServerVisit() {
    cy.visit("http://localhost:8080/section-2");
  }

  // Click on the following button to trigger an abnormally long network call (+10sec)
  apiServerButton() {
    cy.get('[id=network-call-button]').click({ timeout: 15000 });
    cy.wait(11000);
  }

  // Assert the status of the answer
  apiServerRequestAssert() {
    cy.request("http://localhost:8080/section-2")
      .then((response) => {
        expect(response.status).to.eq(200);

      })
  }

  // Assert that the UI shows an alert message and its content should equal "Abnormally long network call!"
  apiWindowAlert() {
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Abnormally long network call!');
    })
  }

  //  Click on the following button to trigger a new tab opening
  // Assert that the button does what's it's supposed to do
  apiNewTabButton() {
    cy.get('[id=new-tab-button]').invoke('removeAttr', 'target').click({ force: true })
    cy.url().should('include', 'http://localhost:8080')
  }

  //  Click on the following button to trigger a file download
  // Assert that the button does what's it's supposed to do
  // BONUS: Assert the details of the file downloaded
  apiDownloadButton() {
    cy.get('[data-test="file-download-button"] > button').click({ force: true })
  }

  assertDownload() {
    cy.downloadFile('http://localhost:8080/assets/img/javascript-logo.png',
      'cypress/fixtures/Download', 'javascript-logo.png')
    cy.readFile('cypress/fixtures/Download/javascript-logo.png').should('exist');
  }
}

export default Section2

module.exports = { Section2 }
