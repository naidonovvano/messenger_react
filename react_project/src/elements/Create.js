import React from "react";
import { useState } from "react";
import env from "../env.json";

const Create = () => {

  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');

  let sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');
    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.result) {
          setUrl(env.url + '/' + response.url);
        }
      })
  }

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert('Заполните поля');
      return false;
    }
    sendData({ "note": note });
  }

  return (
    <div className="container">
      <div className="text text-center">
        <form onSubmit={loadDataFromForm} className={formClass}>
          <div className="form-group d-flex flex-column p-5">
            <label htmlFor="">Введите заметку</label>
            <textarea name="note" id="note" defaultValue="Введите текст тут..." className="col-8 align-self-center"></textarea>
            <button type="submit" className="btn btn-primary text-light">Создать</button>
          </div>
        </form>
        <div className={lineClass}>
          <div className="text-light border bg-body-tertiary">{url}</div>
          <p>Скопируйте и сохраните хэш ссылки (все символы после note/) или сделайте скриншот экрана!</p>
          <div>
            <button className="btn btn-primary text-light" onClick={() => window.location.reload()}>Создать новую заметку</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;