import infoImg from "../images/info-img.png";
import mailIcon from "../images/mail-icon.png";
import { useEffect, useState } from "react";
import "../styles/contactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    telephone: "",
    topic: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://server.internal.anjela.info/api/contact_form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response) {
        console.log("There was an error with the POST");
      } else {
        console.log("Form Data Submitted:", formData);
        alert("Изпратихте успешно вашата заявка");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <div className="relative">
              {" "}
              <input
                className="normal-input"
                placeholder="Име"
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
                required
              ></input>
              <span className="bullet">*</span>
            </div>
            <div>
              {" "}
              <input
                className="normal-input"
                placeholder="Фамилия"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
              ></input>
            </div>
          </div>
          <div className="flex">
            <div className="relative">
              {" "}
              <input
                className="normal-input"
                placeholder="Е-маил"
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
              ></input>
              <span className="bullet">*</span>
            </div>

            <input
              className="normal-input"
              placeholder="Телефон"
              type="text"
              value={formData.telephone}
              onChange={handleChange}
              name="telephone"
            ></input>
          </div>
          <div>
            <input
              placeholder="Тема"
              className="topic-input"
              type="text"
              value={formData.topic}
              onChange={handleChange}
              name="topic"
            ></input>
          </div>
          <div>
            <input
              placeholder="Запитване"
              className="request-input"
              type="text"
              value={formData.request}
              onChange={handleChange}
              name="request"
            ></input>
          </div>

          <button className="form-button" type="submit">
            изпрати <img src={mailIcon} alt="mail-icon" className="mail-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}
