import { useState } from "react";

function UseStateHook() {
  // HOOKS
  // useState : state tanımlamak için kullanılır.
  // useEffect : component yüklendiğinde, state değiştiğinde, component güncellendiğinde çalışır.
  // useContext : context kullanımı için kullanılır.

  const [count, setCount] = useState(0);

  const inc = () => {
    console.log(count);
    setCount(count + 1);
  };

  //   const dec = () => {
  //     if (count > 0) setCount(count - 1);
  //   };

  const [person, setPerson] = useState({
    name: "Talha",
    age: 34,
  });

  const ageInc = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  const nameChange = () => {
    setPerson({ ...person, name: "Rıdvan" });
  };
  return (
    <>
      <div className="container text-center mt-3">
        <h1>Use State Hook</h1>
        <h2>Count: {count}</h2>
        <button onClick={inc} className="btn btn-primary">
          Arttır
        </button>
        <button onClick={() => setCount(0)} className="btn btn-danger">
          Sıfırla
        </button>
        {/* <button
        onClick={dec}
        className="btn btn-dark"
      >
        Azalt
      </button> */}
        <button
          onClick={() => count > 0 && setCount(count - 1)}
          className="btn btn-dark"
        >
          Azalt
        </button>
      </div>
      <div className="container text-center mt-3">
        <h2>Person</h2>
        <h4>{person.name}</h4>
        <h4>{person.age}</h4>
        <button onClick={ageInc} className="btn btn-primary mx-2">
          Yaş Artır
        </button>
        <button onClick={() => setPerson({ ...person, age: person.age + 1 })} className="btn btn-primary mx-2">
          Yaş Artır
        </button>
        <button onClick={nameChange} className="btn btn-primary mx-2">
          İsim Değiştir
        </button>
      </div>
    </>
  );
}

export default UseStateHook;
