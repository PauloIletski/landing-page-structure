import { SalesButton } from "../SalesButton";
import styles from "./styles.module.scss";

export function Description() {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.overlayDescription}></div>
      <div className={styles.informationContainer}>
        <h1>
          Aprenda tudo sobre as{" "}
          <strong>Técnicas Mais Atuais</strong> de Alongamento de Unhas!
        </h1>
        <p>
          Muitas alunas estão colocando em prática as TÉCNICAS ATUAIS DE
          ALONGAMENTO que estão aprendendo neste EXATO MOMENTO na ESCOLA
          DESIGNER DE UNHAS. Só falta você.
        </p>
        <SalesButton />
      </div>
      <div className={styles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6ggxcAidO28"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
