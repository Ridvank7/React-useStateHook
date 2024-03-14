import React from "react";

// onclick event : tıklama olayı
// onchange event : input alanına yazı yazıldığında onun değerini takip eder.
// onsubmit event : form gönderildiğinde çalışır.

function Events() {
  let message = "Merhaba";

  const handleClick = () => {
    alert(message);
  };

  const handleGo = (msg) => {
    alert(msg)
  }

  return (
    <div className="container text-center mt-5">
      {/* <button onClick={() => console.log("Buton Tıklandı")} className='btn btn-success'>Tıkla</button>
        <input type="text" onChange={(e) => console.log(e.target.value)}/> */}

      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Gönderildi");
        }}
      >
        <button type="submit" className="btn btn-danger">
          Gönder
        </button> 
      </form>*/}
      <h1>Başlık: {message}</h1>
      <button onClick={handleClick} className="btn btn-dark">
        Tıkla
      </button>
      <button onClick={() => handleGo("Yeni Dersimiz Events")} className="btn btn-primary">Gönder</button>
    </div>
  );
}

export default Events;
