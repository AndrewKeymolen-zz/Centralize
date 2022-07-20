import React, { Component } from "react";

export default class Experience extends Component {
  showmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = " Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = " Read less";
      moreText.style.display = "inline";
    }
  }

  showmore2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = " Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = " Read less";
      moreText.style.display = "inline";
    }
  }

  showmore3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = " Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = " Read less";
      moreText.style.display = "inline";
    }
  }

  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                {/*<span className="heading-meta">Experience</span>*/}
                <h2 className="colorlib-heading animate-box">
                  Work Experience
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  className="timeline-centered animate-box"
                  data-animate-effect="fadeInLeft"
                >

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Project Management Consultant at{" "}
                          <a
                            href="https://positivethinking.tech/"
                            style={{ color: "#2c98f0" }}
                          >
                            Positive Thinking Company
                          </a>
                          , Luxembourg <span>2020 - Ongoing</span>
                        </h2>
                        <p>
                          I was offered to certify as a SCRUM Master by PTC in May 2020, which I did. Strong of that new certification, and the latest projects I had been working on being finished, I seized an opportunity with the support of PTC in October 2020 and took on the role and responsibilities of SCRUM Master among 3 teams at Spuerkeess, one focusing on customer data processing (8 developers), one focusing on customer data and products (9 developers), and the last one overseeing daily transactions (6 developers). Eventually, I certified as an Agile Project Manager and I've been aiming to fully dedicate myself to that career path since.
                          <br />
                          <br />
                          <b>
                            ✔ Mission as SCRUM Master at Spuerkeess, see below for details
                            <br />✔ Agile workshops organizer
                            <br />
                          </b>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>
                          SCRUM Master at{" "}
                          <a
                            href="https://www.spuerkeess.lu/en/private-customers/"
                            style={{ color: "#2c98f0" }}
                          >
                            Spuerkeess
                          </a>
                          , Luxembourg <span>2020 - Ongoing</span>
                        </h2>
                        <p>
                          Shortly after certifying as one, I took on the role
                          and responsibilities of SCRUM Master among 3 teams
                          at Spuerkeess, one focusing on customer data
                          processing (8 developers), one<span id="dots3">...</span>
                          <span id="more3">
                            {" "}
                            focusing on customer data and products (9 developers),
                            and the last one overseeing daily transactions
                            (6 developers).
                            <br />
                            <br />
                            My objective was to successfully transition both
                            teams to the SCRUM Methodology, and train them to
                            the handling of their respective backlog on
                            Microsoft DevOps Server, which I would supervise and
                            curate. The transition, including the transfer of
                            the existing Lotus Notes backlogs to the newly
                            created DevOps backlogs, was finished by November
                            and I've been successfully collaborating with both
                            teams since, helping them in applying the SCRUM
                            Methodology to the repartition, planification, and
                            delivery of their respective tasks and projects.
                            <br />
                            <br />
                          </span>
                          <a onClick={this.showmore3.bind(this)} id="myBtn3">
                            {" "}
                            Read more
                          </a>
                          <br />
                          <br />
                          <b>
                            ✔ Project Management and transitioning of teams and backlogs to SCRUM
                            <br />✔ Use of Azure DevOps Server for management of code, releases, tests and backlogs
                            <br />✔ Azure DevOps for code management and
                            implementation of the SCRUM methodology
                            <br />✔ All previous responsibilities at Spuerkeess, see below for details
                            <br />
                          </b>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>
                          IT Consultant at{" "}
                          <a
                            href="https://positivethinking.tech/"
                            style={{ color: "#2c98f0" }}
                          >
                            ADNEOM
                          </a>
                          , Luxembourg <span>2017 - Ongoing</span>
                        </h2>
                        <p>
                          Thanks to Positive Thinking Company, I acquired many useful skills and started working with Spuerkeess as an Analyst Developer, participating in everything from simple maintenance to high stake projects at a national scale.
                          <br />
                          <br />
                          <b>
                            ✔ Mission as Analyst Developer at Spuerkeess, see below for details
                            <br />✔ Android development workshops organizer
                            <br />
                          </b>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2"></i>
                      </div>

                      <div className="timeline-label">
                        <h2>
                          Analyst Developer at{" "}
                          <a
                            href="https://www.spuerkeess.lu/en/private-customers/"
                            style={{ color: "#2c98f0" }}
                          >
                            Spuerkeess
                          </a>
                          , Luxembourg <span>2017 - 2020</span>
                        </h2>
                        <p>
                          I was hired by Spuerkeess, a private and public bank,
                          as an IT consultant to join the ± 24-person team in
                          charge of the various retail-related software. I
                          started working on Siroco, the software used for
                          <span id="dots">...</span>
                          <span id="more">
                            {" "}
                            the onboarding of customers and the handling of
                            their personal information (contact information,
                            job, relationships with other customers, other
                            legally required information, etc.), the creation of
                            products (e.g., various bank accounts, various debit
                            and credit cards, share accounts, life insurances,
                            etc.), everyday money transfer, some customer
                            relationship management, and many other things.
                            After a couple of months of familiarization through
                            production follow-up, development of new features of
                            various sizes and incident management, I was also
                            asked to do similar interventions on Spuerkeess’
                            dedicated customer relationship management tool,
                            their risk management tool and their money transfer
                            management tool.
                            <br />
                            <br />
                            Those tasks became omnipresent and a daily
                            responsibility as I started working on a first
                            higher stake project involving four developers: the
                            upgrade of Spuerkeess’ risk management tool’s front
                            end so it would become compliant with Basel III, a
                            new regulatory framework. That project being a
                            success, it was followed with another one focusing
                            on the onboarding of new customers on site and on
                            the marketing of existing products to existing
                            customers. At the core of that project was a tablet
                            app consisting of a form customers would fill in
                            before being suggested some banking products
                            according to their answers. The project, involving
                            six developers and three main users, was managed
                            with the SCRUM methodology and I took the
                            responsibilities of an unofficial SCRUM Master for
                            the front-end development team. This became my first
                            experience in project management and resulted in the
                            successful deployment of exciting new software and a
                            new customer acquisition method.
                            <br />
                            <br />
                            In February 2020, I started working on an even
                            higher stake project: allowing potential customers
                            to start their onboarding from the bank’s mobile app
                            as well as to be able to order products like bank
                            accounts and debit and credit cards directly
                            following the onboarding. The development was
                            successfull despite the COVID-19 crisis, and we
                            deployed the project to production in September of
                            the same year.
                            <br />
                            <br />
                            Other projects have followed since. For example, I recently designed and implemented a BizTalk Server application allowing the mutualization of data between multiple banks in Luxembourg.
                            <br />
                            <br />
                            Eventually though, I would take on the role of SCRUM Master for the entire division.
                            <br />
                          </span>
                          <a onClick={this.showmore.bind(this)} id="myBtn">
                            {" "}
                            Read more
                          </a>
                          <br />
                          <br />
                          <b>
                            ✔ Development in VB.Net with Visual Studio for the front and back end, and COBOL with a 3270 emulator for the back end. Also, SOAP services with XML, REST APIs with JSON and SQL DB2 for querying <br />✔ Needs assessment, writing of technical and functional documentation in French, incident management, production follow-up, development of new features on existing software and development of new software and high stakes projects
                            <br />✔ Use of the MVC design pattern  with focus on maintainability, improvability and testing
                            <br />✔ Use of expertise to recommend functional and technical enhancements <br />✔ Retail (e-banking, mobile banking, bank accounts, credit/debit cards, money transfers)
                            <br />
                          </b>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Android App Developer at{" "}
                          <a
                            href="https://www.djmdigital.be/en/"
                            style={{ color: "#2c98f0" }}
                          >
                            DJM digital
                          </a>
                          , Belgium <span>2016</span>
                        </h2>
                        <p>
                          My internship took place at DJM Digital, a consulting
                          company, where I had to handle the development from
                          scratch to production of an Android app called “
                          <a href="https://www.ethias.be/pgInt.go?pg=ECIF747&q_lg=1">
                            Ethias Prévention
                          </a>
                          .” That app, an order from<span id="dots2">...</span>
                          <span id="more2">
                            {" "}
                            the insurance company Ethias, was aimed at their
                            field officers.
                            <br />
                            <br />
                            The mobile app was all about facilitating the making
                            and centralization of risk reports. An Ethias
                            employee could go on the field and use Ethias
                            Prévention to save his observation through an
                            ergonomic UI - pictures and videos included. The app
                            could then convert the reports to pdf files before
                            saving them, as well as the media files, on Ethias’
                            servers. The employee could then send the reports to
                            anyone by mail - to the customer for example - or
                            simply review them later from any device.
                            <br />
                            <br />
                            The development was a success; the app went to
                            production, was used by Ethias employees and
                            eventually got an award.
                          </span>
                          <a onClick={this.showmore2.bind(this)} id="myBtn2">
                            {" "}
                            Read more
                          </a>
                          <br />
                          <br />
                          <b>
                            ✔ Development in Java for Android (including some
                            XML for the UI) with Android Studio
                            <br />✔ Writing of a functional and technical
                            analysis and of the documentation in English and
                            French, included in my thesis
                            <br />✔ Use of the latest Android technologies at
                            the time, i.e., Google’s Data Binding Library,
                            facilitating the implementation of the MVVM design
                            pattern
                            <br />✔ Focus on maintainability and unit testing
                            <br />✔ Respect of Google's guidelines on Material
                            Design regarding the UI
                            <br />✔ Use of expertise to recommend functional and
                            technical enhancements
                            <br />✔ Sourcetree for code management
                            <br />
                          </b>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
