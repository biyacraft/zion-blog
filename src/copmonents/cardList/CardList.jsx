import React from 'react'
import styles from './cardList.module.css'
import { excludeDefaultMomentLocales } from '../../../next.config'
import Pagination from '../pagination.jsx/Pagination'

const CardList = () => {
    return(
        <div className={styles.container}>Navbar
        <Pagination/>
        </div>
    )
}

export default CardList