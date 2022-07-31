import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import styles from "../../styles/Card.module.css";

interface CardProps {
  title: string;
  subtitle: string;
  route: string;
}

export const Card: FC<CardProps> = ({ title, subtitle, route }) => {
  return (
    <Link href={route}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
};
