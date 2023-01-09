import { useState } from "react";
import axios from "axios";
export default function Form(){
    const [valueName, setValueName] = useState("");
    const [valueTel, setValueTel] = useState("");
    const [valueEmail, setValueEmail] = useState("");
    const [valueText, setValueText] = useState("");
    const [valueTextarea, setValueTextarea] = useState("");
    const [valueFile, setValueFile] = useState("");
    const token = "5824012656:AAEqyw1mVOZiHBfPqpQDz_3HC5J2FIi_CGg";
    const chatId = "-1001818079951";
    const URI_API = (path) => `https://api.telegram.org/bot${token}/${path}`;
    function submitHandler(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("chat_id", chatId);
      formData.append("document", valueFile);
      formData.append("caption", `\n ${valueName}`);
      valueFile && 
      axios
        .post(URI_API("sendDocument"), formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setValueName("");
          setValueTel("");
          setValueEmail("");
          setValueText("");
          setValueTextarea("");
        });
      let message = `<b>Заявка с сайта</b>\n <b>Отправитель: </b> ${valueName}\n <b>Телефон: </b> ${valueTel}\n<b>Email: </b>${valueEmail}\n<b>Тема обращения: </b>${valueText}\n<b>Техт обращения: </b>${valueTextarea}`;
      axios.post(URI_API("sendMessage"), {
        chat_id: chatId,
        parse_mode: "html",
        text: message,
      });
    }
    return (
        <form onSubmit={(e) => submitHandler(e)}>
        <div className="m-2">
          <span className="block">Фамилия Имя Отчество</span>
          <input
            className="md:text-2xl"
            value={valueName}
            onChange={(e) => setValueName(e.currentTarget.value)}

          />
        </div>
        <div className="m-2">
          <span className="block">Номер телефона</span>
          <input
            className="md:text-2xl"
            value={valueTel}
            onChange={(e) => setValueTel(e.currentTarget.value)}
          />
        </div>
        <div className="m-2">
          <span className="block">Адрес электронной почты</span>
          <input
            className="md:text-2xl"
            value={valueEmail}
            onChange={(e) => setValueEmail(e.currentTarget.value)}
          />
        </div>
        <div className="m-2">
          <span className="block">Тема обращения</span>
          <input
            className="md:text-2xl"
            value={valueText}
            onChange={(e) => setValueText(e.currentTarget.value)}
          />
        </div>
        <div className="m-2  ">
          <span className="block">
            Прикрепить файл (файл, размером не более 10 мб)
          </span>
          <input
            className="text-xs"
            onChange={(e) => setValueFile(e.target.files[0])}
            type="file"
          />
        </div>
        <div className="m-2">
          <span className="block">Текст обращения</span>
          <textarea
            value={valueTextarea}
            onChange={(e) => setValueTextarea(e.currentTarget.value)}
            className="md:w-96 h-40 "
          ></textarea>
        </div>

        <div className="m-2 ">
          <button className="border-2  rounded-md p-2  bg-lime-300 hover:bg-lime-400">
            Отправить
          </button>
        </div>
      </form>
    )
}