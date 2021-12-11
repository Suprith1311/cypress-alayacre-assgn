/// < reference types ="Cypress />"
import Section1 from "../objects/section-1";

describe('Problem 1', function () {
  it("DOM Tables Section 1", function(){
    const section1 = new Section1();
    section1.visit();
    section1.tableNotVisible();
    section1.showButton();
    section1.tableIsVisible();
    section1.tableRow();
    section1.noofRows();
    section1.fiveUser();
    section1.sixtyUser();
    section1.formNotVisible();
    section1.showFormButton();
    section1.formIsVisible();
    section1.NameTypeAndVerify();
    section1.AgeTypeAndVerify();
    section1.genderSelect();
    section1.nurseCheck();
    section1.submitForm();
    })     
  })
  