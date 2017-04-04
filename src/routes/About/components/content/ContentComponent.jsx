import React from 'react';
import SideinfoComponent from '../sideinfo/SideinfoComponent';

// Assets
import AboutHistoryImg from '../../../../assets/history-thumb-left.png';

// Component Styles
import './ContentComponent.scss';

class ContentComponent extends React.Component {
  render () {
    return (
      <div className="cabane-about-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Noi suntem Tiai Com Prod, o companie <span className="animation-text">XTEAM DESIGN SOLUTIONS</span></h3>
            </div>

            <div className="col-md-12">
              <hr className="tall" />
            </div>
          </div>

          <div className="row about-us-section">
            <div className="col-md-8">
              <h3><span className="bold-text">Cine</span> suntem noi</h3>

              <div className="about-us-text">
                <p>
                  Avem experienta de un deceniu in domeniul produselor si constructiilor din lemn de calitate.
                  ECase&Cabane are disponibila o gama larga de produse din lemn folosite la constructia caselor dar si la finisarea lor.
                  Folosim cu responsabilitate și profesionalism lemnul, aceasta resursa atat de pretioasa in zilele noastre.
                  Astfel, sistemul constructiv pe care-l foloseste , este un sistem care utilizeaza cat mai putina masa lemnoasa cu putinta, care sa garanteze, insa,
                  o structura de inalta flexibilitate si rezistenta la cutremure, precum si cu un grad superior de izolare termica si fonica.
                </p>

                <p>
                  Folosim sistemul “frame houses” (case din rame de lemn) de fabricarea a caselor din lemn.
                  Acest sistem constructiv, care exista in tarile din America de Nord si nordul Europei de mai bine de 70 de ani,
                  a fost adus si in Romania. Este un fel de a face case brevetat in urma cu 70 de ani si utilizat cu succes in tari ca Suedia,
                  Finlanda, Norvegia, Canada, Statele Unite ale Americii, tari cu temperaturi medii anuale mult mai mici decat in Romania.
                  Modul nostru de construire garanteaza cea mai buna rezistenta la seisme si cea mai eficienta izolatie termica dintre toate
                  sistemele constructive aflate pe piata romaneasca de case.
                </p>

                <p>
                  Casele noastre sunt integral fabricate in atelierele , garantand astfel planeitatea peretilor, rezistenta si coerenta
                  superioara a structurii.  ofera un sistem de case modulare, cu o gama larga de suprafete si scheme functionale care sa
                  raspunda oricaror nevoi. De asemenea, proiectantii nostri pot transpune in realitate orice casa proiectata de arhitectul
                  dumneavoastra sau impreuna putem realiza un proiect care sa transpuna in realitate proiectul ce raspunde cel mai bine necesitatilor
                  pe care le aveti. Un ansamblu de utilaje performante, disponibile in atelierele noastre, sunt in masura sa realizeze constructii
                  de cateva sute de metri patrati in doar cateva saptamani. Oricine este pasionat de bricolaj, poate achizitiona subansamblele
                  fabricate de  cu care sa-si construiasca singur casa. Va recomandam insa, transportul facil si montajul asistat de expertii nostri,
                  care face ca in mai putin de o luna, sa aveti ridicata casa de vis pe care v-o doriti.
                </p>

                <p>
                  Cercetarea continua si imbunatatirea sistemului de mai bine de 70 de ani, face ca lucrarile de instalatii si finisare sa fie
                  simple si sa ofere o larga flexibilitate produsului finit. Produsele din lemn profesionale ale , va dau posibilitatea realizarii
                  unor finisaje de inalta calitate, conforme cu standardele actuale. Parchetul, lambriurile, usile si ferestrele noastre din lemn,
                  fara emisii de formaldehide sunt ecologice, trainice si cu un aspect deosebit.
                </p>

                <p>
                  Alegeti acum o casa, contactati-ne si comandati-o si va veti convinge de beneficiile unui imobil de ultima generatie, suplu, durabil si frumos.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <SideinfoComponent />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <hr className="tall" />
            </div>
          </div>

          <div className="row about-us-section">
            <div className="col-md-12">
              <h3><span className="bold-text">Istoria</span> noastra</h3>
            </div>
          </div>

          <div className="row about-us-history-section">
            <div className="col-md-12">
              <ul className="about-history-list">
                <li className="">
                  <div className="history-image">
                    <img src={AboutHistoryImg} alt="" />
                  </div>

                  <div className="history-featured-box">
                    <div className="boxed-content">
                      <h4 className="history-year"><strong>2016</strong></h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur pellentesque neque eget diam posuere porta.
                        Quisque ut nulla at nunc vehicula lacinia.
                        Proin adipiscing porta tellus, Curabitur pellentesque neque eget diam posuere porta.
                        Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus.
                        Proin adipiscing porta tellus, Curabitur pellentesque neque eget diam posuere porta.
                        Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="">
                  <div className="history-image">
                    <img src={AboutHistoryImg} alt="" />
                  </div>

                  <div className="history-featured-box">
                    <div className="boxed-content">
                      <h4 className="history-year"><strong>2015</strong></h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur pellentesque neque eget diam posuere porta.
                        Quisque ut nulla at nunc vehicula lacinia.
                        Proin adipiscing porta tellus, Curabitur pellentesque neque eget diam posuere porta.
                        Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus.
                        Proin adipiscing porta tellus, Curabitur pellentesque neque eget diam posuere porta.
                        Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing porta tellus.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ContentComponent;
