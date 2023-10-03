import React, { useContext } from "react";
import { LanguageContext } from "../../Context/language";

function LanguageCompo() {
  const { contextLang, setContextLang } = useContext(LanguageContext);
  return (
    <div className="dropdown-center">
      <button
        type="button"
        className="btn btn-outerline-success dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {contextLang}
      </button>
      <ul className="dropdown-menu">
        <button className="btn" onClick={() => setContextLang("en")}>
          Change to en
        </button>
        <li>
          <button className="btn " onClick={() => setContextLang("ar")}>
            Change to ar
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LanguageCompo;
