import { ReactSVG } from "react-svg";

const ContactsPage: React.FC = (): JSX.Element => {

  return (

    <>
      
      <div className="contacts">
        <div className="container">
          <div className="title">Контакты</div>
          <div className="contacts__wrapper">

            <div className="contacts__items">
              <div className="contacts__item">
                <div className="contacts__item-title">Адресс</div>
                <address>Страна, Город, улица, номер здания 88</address>
              </div>
              <div className="contacts__item">
                <div className="contacts__item-title">Телефон</div>
                <a href="tel:88001231234">88001231234</a>
                <a href="tel:88001231234">88004321321</a>
              </div>
              <div className="contacts__item">
                <div className="contacts__item-title">Email</div>
                <a href="mailto:qiojion@gmail.com">qiojion@gmail.com</a>
              </div>
              <div className="contacts__item">
                <div className="contacts__item-title">Социальные сети</div>
                <div className="contacts__item-social">

                  <a href="">
                    <ReactSVG src={'/insta.svg'} />
                  </a>
                  <a href="">
                    <ReactSVG src={'/tiktok.svg'} />
                  </a>
                  <a href="">
                    <ReactSVG src={'/twitter.svg'} />
                  </a>

                </div>
              </div>
            </div>

            <div className="contacts__map">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148494.53016332895!2d50.06688121298954!3d53.23192556285546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416618e22bd879d3%3A0xba95cda9bb3a030b!2z0KHQsNC80LDRgNCwLCDQodCw0LzQsNGA0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1692643960215!5m2!1sru!2sru" width="100%" height="100%"></iframe>
              
            </div>

          </div>
        </div>
      </div>

    </>
    
  )

}

export default ContactsPage;