import { useState, useEffect } from "react"
import styles from './styles.module.scss';

export default function Modal(props) {
    return (
        <div className={styles.container}>
            <h2>New Task</h2>
            <input className={styles.input__custom} placeholder="Title" type='text' value={props.title} onChange={(e) => props.setTitle(e.target.value)}></input>
            <textarea className={styles.text__area} placeholder="A little description of my task" value={props.description} onChange={(e) => props.setDescription(e.target.value)}></textarea>
        </div>
        );
};