import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:+250784427142">
                  <IconPhoneCall /> &nbsp; +91 9876543210
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                codinglone@gmail.com"
                >
                  <IconMail />
                  &nbsp; carrental@carmail.com
                </a>
              </li>

              
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">New Delhi</a>
              </li>
              <li>
                <a href="#home">Mumbai</a>
              </li>
              <li>
                <a href="#home">Lucknow</a>
              </li>
              <li>
                <a href="#home">Chandigarh</a>
              </li>
              <li>
                <a href="#home">Chennai</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 7:00PM</li>
              <li>Sun: 9:00AM - 2:00PM</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
            <ul className="footer-content__2">
              <li>Team Members</li>
              <li>Harsh Kumar Sahu (2210991620)</li>
              <li>Himanshi Mittal (2210991657)</li>
              <li>Nandini Jindal (2210992586)</li>
              <li>Hardik (2210991607)</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
