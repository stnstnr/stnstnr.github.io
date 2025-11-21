import ContentBox from "../components/ContentBox/ContentBox";
import styles from "./Contact.module.css";
import "../styles/PageContainer.css";

export default function Contact() {
  return (
    <div className="page-container">
      <ContentBox>
        <h2 className={styles.title}>Compliance Office</h2>

        <p className={styles.text}>
          For anomaly reporting, escalation requests, or external communication.
        </p>

        <p className={styles.email}>
          Email: <b>contact@stronghold-software.com</b>
        </p>
      </ContentBox>
    </div>
  );
}
