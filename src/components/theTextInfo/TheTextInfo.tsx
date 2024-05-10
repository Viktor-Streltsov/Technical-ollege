import React from 'react'
import styles from './TheTextInfo.module.scss'

const TheTextInfo = () => {
	return (
		<>
			<p className={styles.text}>
				Добро пожаловать в отделение "Информационные технологии"! Мы в Бишкекском техническом колледже гордимся
				предоставлением высококачественного образования в сфере информационных технологий. Наше отделение
				предоставляет студентам широкий спектр курсов, охватывающих все от основ программирования до разработки
				веб-приложений и анализа данных.
			</p>
			<button className={styles.btnBegin}>Начать</button>
		</>
	)
}

export default TheTextInfo