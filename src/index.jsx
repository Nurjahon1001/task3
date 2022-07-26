import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "../src/images/welthfront.svg";
import dark_logo from "../src/images/welthfront_purple.svg";
import preview_img from "../src/images/previewImg.png";
import investopdeia_img from "../src/images/invostepedia.svg";
import nerdwallet_img from "../src/images/nerdwallet.svg";
import star from "../src/images/star.svg";
import dark_phone from "../src/images/investing_img.png";
import light_phone from "../src/images/light_phone.png";
import saving_img from "../src/images/image 3.png";
import rectangle from "../src/images/Rectangle.png";
import wsj from "../src/images/wsj.svg";
import newYorkTimes from "../src/images/newYorkTimes.svg";
import cnbs from "../src/images/cnbs.svg";
import bloomberg from "../src/images/bloomberg.png";
import reuters from "../src/images/reuters.svg";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const Container = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <div className="header">
            <a href="" className="logo">
              <img src={dark_logo} alt="logo" />
            </a>
            <nav>
              <ul className="navigation">
                <li className="list-item">Invest</li>
                <li className="list-item">Cash</li>
                <li className="list-item">Borrow</li>
                <li className="list-item">Blog</li>
              </ul>
            </nav>
            <div className="header_btns">
              <button className="login_btn">Log In</button>
              <button className="getStarted_btn">Get Started</button>
            </div>
          </div>
        </header>
        <main>
          <div className="preview">
            <img src={preview_img} alt="boys and man skating" />
            <div className="preview_context">
              <h1 className="h1_title">
                Make wealth <br /> your own
              </h1>
              <p className="main_subtitle">
                Personalized, Automated, Effortless <br /> Investing and
                Savings.
              </p>
              <button className="preview_btn getStarted_btn">
                Get started
              </button>
            </div>
          </div>
          <div className="tags">
            <div className="tag">
              <img src={nerdwallet_img} alt="nerdwallet logo" />
              <p className="tag_text">
                Best Robo-advisor, 2019 <sup>1</sup> <br />
                Best Cash Management App, 2020 <sup>1</sup>
              </p>
            </div>
            <div className="tag">
              <img src={investopdeia_img} alt="nerdwallet logo" />
              <p className="tag_text">
                Best Robo-advisor, 2020 <sup>1</sup>
              </p>
            </div>
            <div className="tag">
              <p className="tag_num">450K+</p>
              <p className="tag_text">Trusted clients</p>
            </div>
            <div className="tag">
              <p className="tag_num">$26B+</p>
              <p className="tag_text">In client funds</p>
            </div>
            <div className="tag">
              <p className="tag_num">
                4.9 <img src={star} alt="rate star" />
              </p>
              <p className="tag_text">
                Apple App Store <sup>2</sup>
              </p>
            </div>
            <div className="tag">
              <p className="tag_num">
                4.5 <img src={star} alt="rate star" />
              </p>
              <p className="tag_text">
                Google Play Store <sup>2</sup>
              </p>
            </div>
          </div>
          <div className="investing_page">
            <div className="investing">
              <div className="investing_context">
                <h1 className="preview_title">
                  Investing isn’t easy. We just make it feel that way.
                </h1>
                <p className="preview_subtitle">
                  Let us customize a portfolio just for you or build it
                  yourself, and our powerful automation will make the most of
                  your investments, optimizing your performance and helping
                  lower your taxes.
                </p>
                <div className="investing_buttons">
                  <button className="getStarted_btn">Start investing</button>
                  <button className="learn_btn login_btn">Learn more</button>
                </div>
              </div>
              <div className="investing_img">
                <img src={dark_phone} alt="phone" />
              </div>
            </div>
          </div>
          <div className="investing_page cash_page">
            <div className="investing cash">
              <div className="investing_img">
                <img src={light_phone} alt="phone" />
              </div>
              <div className="investing_context">
                <h1 className="preview_title">
                  Everyday cash, designed to build long-term wealth.
                </h1>
                <p className="preview_subtitle">
                  Our Cash account, offered with Green Dot Bank, lets you
                  automate your savings, so you can pay bills, withdraw from
                  19,000+ ATMs, and invest your extra cash in seconds to keep
                  building your future.
                </p>
                <div className="investing_buttons">
                  <button className="getStarted_btn">Start saving</button>
                  <button className="learn_btn login_btn">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="investing_page">
        <div className="investing saving">
          <div className="investing_context">
            <h1 className="preview_title">
              Saving and investing. All while you’re relaxing.
            </h1>
            <p className="preview_subtitle">
              Tell us what you’re saving for, and we’ll automatically set aside
              extra cash to hit your goals. And since we connect with all your
              accounts, you only need one app to watch your wealth grow.
            </p>
          </div>
          <div className="investing_img">
            <img src={saving_img} alt="phone" />
          </div>
        </div>
      </div>
      <div className="card_page">
        <div className="cards_wrapper">
          <div className="card">
            <p className="card_title">Testimonial</p>
            <p className="card_text">
              It's the single best resource for both investing, managing
              retirement and seeing my entire financial picture.
            </p>
            <p className="card_title">Joshua B</p>
          </div>
          <div className="card">
            <p className="card_title">Testimonial</p>
            <p className="card_text">
              It's the single best resource for both investing, managing
              retirement and seeing my entire financial picture.
            </p>
            <p className="card_title">Joshua B</p>
          </div>
          <div className="card">
            <p className="card_title">Testimonial</p>
            <p className="card_text">
              It's the single best resource for both investing, managing
              retirement and seeing my entire financial picture.
            </p>
            <p className="card_title">Joshua B</p>
          </div>
          <div className="centered_card">
            <img src={rectangle} alt="rectangle" />
            <p className="rectangle_text">
              Over 450,000 people are already using Wealthfront to earn more and
              worry less
            </p>
          </div>
        </div>
        <button className="getStarted_btn">Get started</button>
        <p className="feauterd_text">As featured in</p>
        <div className="logos">
          <img src={wsj} alt="wsj logo" />
          <img src={bloomberg} alt="bloomberg logo" />
          <img src={newYorkTimes} alt="new york times logo" />
          <img src={reuters} alt="reuters logo" />
          <img src={cnbs} alt="cnbs logo" />
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="footer_top">
            <a href="#" className="logo">
              <img src={logo} alt="logo" />
            </a>
            <div className="lists_wrapper">
              <ul className="footer_list">
                <li>Careers</li>
                <li>Help center</li>
                <li>Homeownership</li>
              </ul>
              <ul className="footer_list">
                <li>Legal</li>
                <li>Blog</li>
                <li>College</li>
              </ul>
              <ul className="footer_list">
                <li>Methodology</li>
                <li>Planning</li>
                <li>Our PhD Team</li>
              </ul>
              <ul className="footer_list">
                <li>Contact</li>
                <li>Retirement</li>
                <li>Back to top</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="footer_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis{" "}
            <br /> <br />
            ratione sequi nihil delectus, vero perspiciatis, suscipit ab
            praesentium fugiat exercitationem fugit numquam, quo minus illum cum
            porro iusto architecto reiciendis quidem? Voluptas eos ratione
            doloremque distinctio praesentium, voluptate ipsum corporis
            laboriosam natus doloribus necessitatibus officia libero assumenda
            itaque sunt porro magnam? Corporis error expedita sit, eum ut fuga{" "}
            <br /> <br />
            quae minus molestiae fugit iure similique voluptas nesciunt
            inventore laboriosam voluptatem hic doloremque officia provident.
            Quidem obcaecati soluta beatae ducimus eveniet amet. Alias odit,
            nobis officiis consequatur, aliquam fugiat impedit deserunt unde{" "}
            <br /> <br />
            dolor ea magnam, rerum quaerat ipsum repudiandae in? Dignissimos{" "}
            <br /> <br />
            aliquam quo iusto omnis sequi praesentium odit, facere, assumenda
            fugit doloribus accusamus quaerat, nulla ipsum illum eum dolorum
            fuga incidunt perspiciatis ex architecto voluptatibus? Deleniti
            ipsum consectetur accusamus necessitatibus sit asperiores molestiae
            iste qui, magni atque nemo mollitia. Quae sit voluptate, et iusto
            veniam repudiandae unde vel? Corrupti, consectetur sapiente? <br />{" "}
            <br />
            Consectetur ipsa sequi eligendi sapiente minus voluptate. Ipsam est
            aut, eveniet distinctio mollitia unde fuga. Inventore commodi saepe
            temporibus, rem pariatur numquam, ratione delectus consequatur
            doloremque, illum laborum natus aperiam! Doloremque assumenda omnis
            alias optio, possimus impedit hic accusantium maxime voluptas <br />{" "}
            <br />
            architecto reiciendis eligendi! Amet id quas iure aliquid, eos
            corporis fugit esse vitae tempora sint at voluptate delectus officia
            error illo animi consectetur officiis totam saepe sapiente? Modi
            soluta eius voluptatem! Necessitatibus iusto nam itaque in
            distinctio sapiente, cum accusantium rerum esse dignissimos ad
            aliquid molestiae est non quae laborum, repudiandae sequi. Nisi
            error rem provident minima, quibusdam exercitationem temporibus ea
            similique libero accusamus in vel, totam consequatur at natus,
            assumenda quos vitae dicta tempore nihil ab? Asperiores, minima
            temporibus unde libero earum iste sapiente explicabo dignissimos{" "}
            <br /> <br />
            dolore impedit culpa molestiae aperiam laboriosam deleniti delectus
            exercitationem. Libero quod illo omnis, adipisci veritatis nesciunt
            molestiae quidem perspiciatis inventore impedit. Rerum libero quam
            dolor a eveniet, deserunt quaerat id natus quos. Quod accusamus
            repellendus laboriosam delectus laborum facilis minus eaque eligendi
            dolor nemo! Eius harum nostrum non magni ipsum necessitatibus iusto
            reprehenderit officiis rem itaque! Quod ad, atque expedita nesciunt
            optio omnis veniam voluptatum architecto nisi quis esse repellendus
            porro recusandae sequi labore officiis. Itaque quidem perspiciatis{" "}
            <br /> <br />
            vitae enim? Ducimus iure sequi sunt cum vero ipsa fugiat nam sint
            quasi non nesciunt, illo explicabo. Inventore possimus soluta vitae
            vel dolorem officia! Recusandae tempore nemo magni. Minus labore
            harum, vitae id eveniet nesciunt mollitia sit. Veritatis illo id
            vero temporibus sint eos in vel quas officia natus voluptatem quasi
            omnis alias quis vitae consequuntur quia distinctio hic, quo sequi
            mollitia. Dolor aspernatur provident praesentium sunt fuga
            repudiandae minima facere! Sapiente quasi sequi eos ab accusamus
            minima totam ipsum odio excepturi itaque vero dolor possimus
            praesentium, quam, autem tenetur quaerat soluta. Neque quam harum,
            voluptatem mollitia error illo doloremque atque eos deleniti fugit{" "}
            <br /> <br />
            incidunt dignissimos, quaerat quod quasi laboriosam eligendi nisi
            dolorem debitis quia nemo vero cum! At ut iste dolore voluptatum{" "}
            <br /> <br />
            ullam nam neque earum distinctio architecto, nihil assumenda rem
            mollitia! Consequatur tempore quibusdam exercitationem neque eveniet{" "}
            <br /> <br />
            asperiores cum ab sunt accusantium voluptate? <br /> <br />© 2021
            Wealthfront Corporation. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

Container();

root.render(<Container />);
