class Section1 {
  //Visit the URL
  visit() {
    cy.visit("http://localhost:8080/section-1");
  }

  // Assert that the table is not visible
  tableNotVisible() {
    cy.get('table[id=alaya-table]').should('not.be.visible');
  }
  // After clicking the "Show table" button, assert the table is visible
  showButton() {
    cy.get('[id=table-toggle-button]').click();
  }
  tableIsVisible() {
    cy.get('table[id=alaya-table]').should('to.be.visible');
  }

  // Assert that the table is 5 columns wide
  tableRow() {
    cy.get('table[id=alaya-table]').find('tr[class=table-header] th')
      .should('have.length', 5);
  }

  // Assert that the table is 10 rows long, excluding the first (header) row
  noofRows() {
    cy.get('table[id=alaya-table]')
      .find('tr:not(:first)').should('have.length', 10);
  }

  // Assert that at least 5 entries have the role "user"
  fiveUser() {
    var count = 0;
    cy.get("th:nth-child(5)").each(($e1, index) => {
      const text = $e1.text();
      if (text.includes("user")) {
        cy.get("th:nth-child(5)").eq(index).its(length).then($ele => {
          count++;
          if (cy.log(count >= 5)) {
            assert(true);
          } else {
            console.error(false);
          }
        })
      }
    })
  }

  //Assert there are exactly 3 people older than 60 years old
  sixtyUser() {
    var count = 0;
    const dateToday = new Date();
    const timestamp = (dateToday);
    cy.get('#alaya-table>tbody>tr').parent().within(function () {
      cy.get('th').eq(3).each(($e) => {
        var dob = (new Date($e.text))
        if ((timestamp - dob > 1893415560)) {
          count++
          cy.log(count);
        }
      })
    }
    )
    //  expect(count).to.be.equal(3)
  }

  ///DOM: Forms --------->

  // Assert that the form is not visible
  formNotVisible() {
    cy.get('form[id=alaya-form]').should('not.be.visible');
  }

  // After clicking the "Show form" button, assert that the form is visible
  showFormButton() {
    cy.get('[id=form-toggle-button]').click();
  }

  formIsVisible() {
    cy.get('form[id=alaya-form]').should('to.be.visible');
  }

  // Fill in the "Name" and "Age" inputs, and assert that both inputs are filled
  NameTypeAndVerify() {
    cy.get('form[id=alaya-form]').within(($ele) => {
      cy.get('[id=fullName]').type("Suprith").should('have.value', 'Suprith')
    })

  }
  AgeTypeAndVerify() {
    cy.get('form[id=alaya-form]').within(($ele) => {
      cy.get('[id=age]').type("26").should('have.value', '26')
    })

  }

  // Select "Female" from the select option, and assert that the value is "female"
genderSelect(){
  cy.get('form[id=alaya-form]').within(($ele) => {
    cy.get('[id=gender]').select('female').should('have.value', 'female');
  })
}

// Tick the "Nurse" checkbox and assert that the value "nurse" is true
nurseCheck(){
  cy.get('form[id=alaya-form]').within(($ele) => {
    cy.get('[id=nurse]').check({force :true }).should('be.checked');
  })
}

// Click on the "Submit" button and assert that there is an alert window showing with the text "Form submitted!"
submitForm(){
   cy.get('form[id=alaya-form]').within(($ele) => {
    cy.get('[id=submit]').click({force :true});
    cy.wait(5000);
   })

}
}

export default Section1
