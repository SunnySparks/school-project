import React from "react";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import "./style.scss";
import badge from "../../images/badge.png";
import lang from "../../images/lang.webp";

const SaberMas = () => {
  return (
    <>
      <Header />
      <div id="dividerCont"></div>
      <div className="subTitleCont" id="aboutBanner">
        <h2 className="subpageTitle">Oferta Académica</h2>
        <img src={badge} id="titleLogo" />
      </div>
      <div id="ofCont">
        <div className="ofInner" id="firstInner">
          <div className="ofText webfont">
            <h2>
              Programa de Licenciatura en Idiomas <br></br> Sunshine University
            </h2>
            <p>
              Bienvenido al programa de Licenciatura en Idiomas en Sunshine
              University, donde preparamos y cultivamos a los aspirantes a
              lingüistas para inspirar el amor por los idiomas y las culturas en
              la próxima generación. Nuestro programa integral está diseñado
              para equiparlo con los conocimientos, habilidades y experiencias
              necesarias para convertirse en un experto en idiomas hábil y
              eficaz
            </p>
            <br></br>
            <h3>Descripción general del programa:</h3>
            <p>Título ofrecido: Licenciatura en Idiomas</p>
            <p>Duración del programa: Cuatro años (8 semestres)</p>
            <p>
              <strong>Acreditación:</strong> Nuestro programa está acreditado
              por el Accrediting Body for Language Education, garantizando los
              más altos estándares de calidad y excelencia en la enseñanza de
              idiomas.
            </p>
          </div>
          <div className="ofImg">
            <img src={lang} />
          </div>
        </div>
        <div className="ofInner">
          <div className="ofText webfont">
            <h2>¿Por qué elegir Sunshine University?</h2>
            <h4>
              En Sunshine University, nos enorgullecemos de ofrecer un programa
              de idiomas que va más allá de los libros de texto y las aulas.
              Estas son algunas de las razones por las que nuestro programa
              destaca:
            </h4>
            <ol>
              <li>
                <p>
                  <strong>Profesorado con experiencia: </strong>Aprenda de
                  profesores dedicados con amplia experiencia docente que se
                  apasionan por ayudarle a convertirse en un experto de idiomas
                  eficaz.
                </p>
              </li>
              <li>
                <p>
                  <strong>Experiencia práctica: </strong>Obtenga experiencia
                  práctica a través de observaciones en el aula y oportunidades
                  de enseñanza para estudiantes en las escuelas locales. Nuestra
                  estrecha colaboración con instituciones educativas locales te
                  proporcionará experiencias reales de lingüística.
                </p>
              </li>
              <li>
                <p>
                  <strong>Plan de estudios de vanguardia: </strong>Nuestro plan
                  de estudios se actualiza constantemente para reflejar las
                  últimas tendencias y metodologías en idiomas. Explorarás
                  enfoques pedagógicos, desarrollo curricular e integración
                  tecnológica.
                </p>
              </li>
              <li>
                <p>
                  <strong>Inmersión lingüística: </strong>Sumérgete en el idioma
                  que quieres enseñar. Ofrecemos cursos de idiomas en varios
                  idiomas, lo que le permite desarrollar su competencia en el
                  idioma de destino.
                </p>
              </li>
              <li>
                <p>
                  <strong>Comunidad de aprendizaje diversa: </strong>Únete a una
                  comunidad diversa de estudiantes y profesores que comparten su
                  pasión por la lengua y la cultura. Este rico entorno fomenta
                  el entendimiento intercultural.
                </p>
              </li>
              <li>
                <p>
                  <strong>Oportunidades globales: </strong>Explora las
                  oportunidades de enseñanza internacional a través de nuestras
                  asociaciones con escuelas y organizaciones de todo el mundo.
                  Nuestro programa te prepara para la enseñanza tanto en el país
                  como en el extranjero.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div className="ofInner">
          <div className="ofText webfont">
            <h2>Estructura del programa:</h2>
            <h4>
              El programa de Licenciatura en Enseñanza de Idiomas en la
              Universidad de Sunshine está diseñado para proporcionar una
              educación integral en la adquisición del lenguaje, metodologías de
              enseñanza, y la gestión del aula. He aquí una visión general de
              nuestro plan de estudios:
            </h4>
            <ul>
              <li>
                <p>
                  <strong>Cursos de Educación General: </strong>Una amplia gama
                  de cursos en temas como la literatura, la psicología y la
                  sociología para desarrollar su pensamiento crítico y
                  habilidades de comunicación.
                </p>
              </li>
              <li>
                <p>
                  <strong>Cursos de idiomas: </strong>
                  Cursos de profundización en la lengua de enseñanza elegida
                  para garantizar su dominio.
                </p>
              </li>
              <li>
                <p>
                  <strong>Prácticas de enseñanza: </strong>adquiere experiencia
                  práctica en el aula a través de prácticas de enseñanza
                  supervisadas.
                </p>
              </li>
              <li>
                <p>
                  <strong>Cursos de especialización: </strong>Adapta tu
                  titulación con opciones de especialización como la enseñanza a
                  jóvenes estudiantes, la enseñanza a adultos o la enseñanza del
                  inglés como segunda lengua (ESL).
                </p>
              </li>
              <li>
                <p>
                  <strong>Investigación y Capstone: </strong>Participa en
                  proyectos de investigación y completa un proyecto final que
                  demuestre tu experiencia docente.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="ofInner">
          <div className="ofText webfont">
            <h2>Oportunidades profesionales:</h2>
            <h4>
              Al graduarte, estarás bien preparado para embarcarte en una
              gratificante carrera en la enseñanza de idiomas. Nuestros alumnos
              han encontrado el éxito en diversos entornos, incluyendo:
            </h4>
            <ul>
              <li>
                <p>Colegios públicos y privados</p>
              </li>
              <li>
                <p>Institutos de idiomas</p>
              </li>
              <li>
                <p>Escuelas internacionales</p>
              </li>
              <li>
                <p>Programas de educación de adultos</p>
              </li>
              <li>
                <p>Programas de intercambio de idiomas</p>
              </li>
              <li>
                <p>Plataformas de enseñanza en línea</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="ofInner">
          <div className="ofText webfont">
            <h2>Requisitos de admisión:</h2>
            <h4>
              Para formar parte del programa de Grado en Enseñanza de Idiomas de
              Sunshine University, deberás cumplir nuestros requisitos de
              admisión, entre los que se incluyen:
            </h4>
            <ul>
              <li>
                <p>Título de bachillerato o equivalente</p>
              </li>
              <li>
                <p>GPA mínimo de 3.0</p>
              </li>
              <li>
                <p>Puntuaciones SAT o ACT (si procede)</p>
              </li>
              <li>
                <p>Cartas de recomendación</p>
              </li>
              <li>
                <p>Declaración personal</p>
              </li>
              <li>
                <p>Entrevista (en algunos casos)</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="ofInner">
          <div className="ofText webfont">
            <h2>Inscríbete hoy mismo:</h2>
            <p>
              Si te apasionan los idiomas y la educación, el programa de Grado
              en Idiomas de Sunshine University es el lugar perfecto para
              comenzar tu viaje hacia convertirte en un inspirador experto de
              idiomas. ¡Únete a nosotros para dar forma al futuro lingüístico!
            </p>
            <p>
              Para obtener más información y para iniciar su solicitud, por
              favor visite nuestra Página de Admisiones.
            </p>
            <p>
              En Sunshine University, creemos que la enseñanza de idiomas no es
              sólo una profesión; es una vocación. Únete a nosotros para marcar
              la diferencia en las vidas de estudiantes de todo el mundo.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SaberMas;
