const Main = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-12">
          <div className="text d-flex flex-column">
            <h3><b>DontTellTwice</b></h3>
            <h6>Cервис для обмена шифрованными сообщениями</h6>
            <ul className="button-list">
              <li>Пройдите по ссылке</li>
              <li>Вставьте текст и нажмите Create</li>
              <li>Отправьте сгенерированный адрес на созданную заметку!</li>
            </ul>
          </div>
          <div className="text">
            <ul className="row button-list">
              <li className="col-6"><a href="/create" type="button" className="btn btn-primary text-light">Создать</a></li>
              <li className="col-6"><a href="/note" type="button" className="btn btn-primary text-light">Посмотреть</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;