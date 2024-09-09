import infoImg from "../images/info-img.png";
import mailIcon from "../images/mail-icon.png";
import "../styles/contactForm.css";

export default function ContactForm() {
  return (
    <div className="main-container">
      <div className="info-box">
        <h3>Производствена база и магазин:</h3>

        <div className="info-list">
          <p>
            Тел. 02 / 123 456 <br></br>
            Факс: 02 / 123 456<br></br>
            е-mail: offfice@forthepeople.bg<br></br>
            Адрес: Черни Връх 1
          </p>
        </div>
        <img src={infoImg} alt="img" className="info-img" />
      </div>
      <div className="form">
        <h3>Изпрати запитване:</h3>
        <form>
          <div className="flex">
            <input className="normal-input" placeholder="Име"></input>
            <input className="normal-input" placeholder="Фамилия"></input>
          </div>
          <div className="flex">
            <input className="normal-input" placeholder="Е-маил"></input>
            <input className="normal-input" placeholder="Телефон"></input>
          </div>
          <div>
            <input placeholder="Тема" className="topic-input"></input>
          </div>
          <div>
            <input placeholder="Запитване" className="request-input"></input>
          </div>

          <button className="form-button">
            изпрати <img src={mailIcon} alt="mail-icon" className="mail-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}
