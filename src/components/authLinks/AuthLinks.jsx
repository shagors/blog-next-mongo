import Link from "next/link";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const status = "notAuth";
  return (
    <>
      {status === "notAuth" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
