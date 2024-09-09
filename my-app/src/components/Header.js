import { useState, useEffect } from "react";
import "../styles/header.css";
export default function Header() {
  //   const [headerImage, setHeaderImage] = useState("");

  //   useEffect(() => {
  //     fetch(`https://server.internal.anjela.info/uploads/image_95c7461820.png`)
  //       .then((res) => res.blob())
  //       .then((blob) => {
  //         const imgUrl = URL.createObjectURL(blob);
  //         setHeaderImage(imgUrl);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);

  return (
    <div>
      <section className="header">
        <div className="header-text-box">
          <div className="content">
            <h1>Свържете се с нас</h1>
            <p>
              Изпратете запитване за изготвяне на проект и ценово предложение,
              не се колебайте да попитате ако имате въпроси, нашия екип е винаги
              отзивчив и любезен.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
