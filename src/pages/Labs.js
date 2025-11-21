import ContentBox from "../components/ContentBox/ContentBox";
import styles from "./Labs.module.css";
import "../styles/PageContainer.css";

export default function Labs() {
  return (
    <div className="page-container">
      <ContentBox>
        <h2 className={styles.title}>Research Laboratory</h2>

        <p className={styles.text}>Unauthorized access will be logged.</p>

        <p className={styles.status}>
          STATUS: Experimental systems pending activation.
        </p>
      </ContentBox>
    </div>
  );
}
