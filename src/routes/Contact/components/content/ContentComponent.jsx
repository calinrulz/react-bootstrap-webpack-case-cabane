import React from 'react';

// Assets
import AboutHistoryImg from '../../../../assets/history-thumb-left.png';

// Component Styles
import './ContentComponent.scss';

class ContentComponent extends React.Component {
  render () {
    return (
      <div className="cabane-contact-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Contact</h3>
              <div className="cabane-form-container">
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" id="name" placeholder="Nume*" required />
                  </div>

                  <div className="form-group">
                    <input type="password" className="form-control" id="surname" placeholder="Prenume*" required />
                  </div>

                  <div className="form-group">
                    <input type="password" className="form-control" id="email" placeholder="E-mail*" required />
                  </div>

                  <div className="form-group">
                    <textarea className="form-control" rows="3" placeholder="Subiect*"></textarea>
                  </div>

                  <button type="submit" className="btn btn-send">Trimite</button>
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <div className="get-in-touch-01">
                <h3 className="orange-text">Poti sa ne <span className="bold-text">scrii</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nibh et eros consectetur mollis a nec nisl. Donec finibus massa quis neque euismod, et blandit nunc malesuada.</p>
              </div>

              <hr className="tall"></hr>

              <div className="get-in-touch-02">
                <h3 className="orange-text">Unde ne <span className="bold-text">gasesti</span></h3>

                <ul className="list list-icons-text">
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <strong>Adresa: </strong>
                    Strada Balanoaiei 2, Giurgiu, Romania
                  </li>

                  <li>
                    <i className="fa fa-phone"></i>
                    <strong>Telefon: </strong>
                    +40 (760) 500 241
                  </li>

                  <li>
                    <i className="fa fa-envelope"></i>
                    <strong>E-mail: </strong>
                    <a href="mailto:office@ecasesicabane.ro">office@ecasesicabane.ro</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ContentComponent;
