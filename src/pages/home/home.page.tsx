import { useContext, useEffect } from "react";
import { AppContext } from "src/context/app.context";
import bgImage from "../../assets/reporteros.webp";
import burri from "../../assets/burri.jpg";
import styles from "./home.module.scss";

const HomePage = () => {
  const { setOpenMenu } = useContext(AppContext);

  useEffect(() => {
    setOpenMenu(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["home-page"]}>
      <header>
        <img src={bgImage} alt="bg-reporteros" />
      </header>
      <div>
        <aside>
          <h3>Ilustraciones de la semana</h3>
          <img
            src="https://res.cloudinary.com/dbgww54tl/image/upload/v1711845402/photo1711844977_ft43kd.jpg"
            alt="daily-img"
          />
          <img
            src="https://res.cloudinary.com/dbgww54tl/image/upload/v1711843450/photo1708707437_opzgr1.jpg"
            alt="daily-img"
          />
        </aside>
        <div className={styles.divider} />
        <main>
          <div>
            <h2>Lecciones de la naturaleza</h2>
            <p>
              "Así enseña la naturaleza. Durante los primeros cinco o seis años
              de su vida, todo, especialmente las cosas que se mueven, es objeto
              de una curiosidad inteligente. Una calle o un campo es un panorama
              de deleite. El perro del vecino, el camión de la basura, un hombre
              con una cortadora de césped es vívidamente fascinantes. Él que
              tiene mil preguntas que hacer, quiere saber de todo. De hecho,
              tiene un apetito ilimitado por el conocimiento. Pero pronto
              arreglamos eso. Lo mantenemos ocupado con libros en lugar de cosas
              y despertamos otros deseos dentro del niño en lugar de permitir
              que su propio deseo de conocimiento lo motive a aprender".
            </p>
            <i>vol 2, Padres e hijos</i>
            <br />
            <p>
              “Es nuestra actitud personal hacia las maravillas de la Naturaleza
              la que, tanto en la teoría como en la práctica, será de más valor
              para el niño que muchas palabras”.
            </p>
            <i>- Revisión de padres</i>
            <br />
            <p>
              “Considérese, también, el inigualable entrenamiento mental que el
              niño naturalista está recibiendo para cualquier estudio o vocación
              bajo el sol: las facultades de atención, de discriminación, de
              búsqueda paciente, que crecen con su crecimiento, ¿para qué no le
              servirán? Además, la vida es tan [p 62] interesante para él, que
              no tiene tiempo para los defectos de temperamento que generalmente
              tienen su origen en el hastío; no hay razón para que sea
              malhumorado, enfurruñado u obstinado cuando siempre se le mantiene
              bien entretenido”.
            </p>
            <i>Vol. 1, Educación en el hogar</i>
            <br />
            <p>
              “No hay ningún tipo de conocimiento que se pueda tener en estos
              primeros años tan valioso para los niños como el que adquieren por
              sí mismos, del mundo en que viven. Que se pongan inmediatamente en
              contacto con la Naturaleza, y se formará un hábito que será una
              fuente de deleite a través de la vida. Todos estamos destinados a
              ser naturalistas, cada uno en su propio grado, y es inexcusable
              vivir en un mundo tan lleno de maravillas de vida vegetal y animal
              y no preocuparse por ninguna de estas cosas”.
            </p>
            <i>- Revisión de los padres</i>
            <br />
            <p>
              "El estudio de la naturaleza como tema debe abordarse con gran
              reverencia, porque al tratar con aves, animales, flores y todas
              las demás formas de vida natural, estamos quizás más cerca del
              Creador que en cualquier otra rama de la ciencia; porque el mundo
              natural es la expresión de la personalidad de Dios en una forma
              que está al alcance de todos nosotros para comprender en alguna
              medida. ¿Y no es el mundo natural una de las mayores pruebas de
              que hay un Dios?".
            </p>
            <i>- Revisión de los padres</i>
            <br />
            <p></p>
          </div>
        </main>
        <div className={styles.divider} />
        <aside>
          <img src={burri} alt="daily-img" />
          <p>"En todas las cosas de la naturaleza hay algo maravilloso"</p>
          <span>-Aristóteles</span>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
