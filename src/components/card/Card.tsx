import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import styles from "../../styles/Card.module.css";

interface CardProps {
  title: string;
  subtitle: string;
  route: string;
}

export const Card: FC<CardProps> = ({ title, subtitle, route }) => {
  const router = useRouter();

  const handleOnClick = useCallback(() => {
    router.push(route);
  }, [router, route]);

  return (
    <div className={styles.card} onClick={handleOnClick}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};
