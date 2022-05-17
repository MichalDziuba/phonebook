import { BallTriangle } from "react-loader-spinner";
import React from "react";
import styles from './Loading.module.css'
export const Loader = () => {
    return <div className={styles.loading}><BallTriangle color="#00BFFF" height={100} width={100} />;
</div>}