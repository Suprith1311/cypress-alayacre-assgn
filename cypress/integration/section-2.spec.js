const { Section2 } = require('../objects/section-2')
// import Section2 from "../objects/section-2";

describe('Problem 2', function () {
  it("API Request and call Section 2", function(){
    const section2 =new Section2();
    section2.apiServerVisit();
    section2.apiServerButton();
    section2. apiServerRequestAssert();
    section2.apiWindowAlert();
    section2.apiNewTabButton();
    section2.apiDownloadButton();
    section2.assertDownload();
  })
  })