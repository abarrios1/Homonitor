import React, { Component } from "react";

import '../css/content-body.css'

export default class Home extends Component {
  render() {
    return (
       // Content section of website layout
          <div class = "row">

              <div class = "sidebar">
                  <h2>Column A</h2>
                  <p>Prepare for the Recruitment drive of product
                  based companies like Microsoft, Amazon, Adobe
                  etc with a free online placement preparation
                  course. The course focuses on various MCQ's
                  & Coding question likely to be asked in the
                  interviews & make your upcoming placement
                  season efficient and successful.</p>
              </div>

              <div class = "maincontent">
                  <h2>Column B</h2>
                  <p>Prepare for the Recruitment drive of product
                  based companies like Microsoft, Amazon, Adobe
                  etc with a free online placement preparation
                  course. The course focuses on various MCQ's
                  & Coding question likely to be asked in the
                  interviews & make your upcoming placement
                  season efficient and successful.</p>
              </div>


          </div>
    )
  }
}
