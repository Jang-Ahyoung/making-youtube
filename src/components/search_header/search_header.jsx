import styles from './search_header.module.css'
import React from 'react';

const SearchHeader = (props) => {
    return(
        <header className={styles.header}>

            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt=""/>
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input className={styles.input} type="search" placeholder="Search..."/>
            <button className={styles.button} type="submit" >
                {/* 1. 우선 검색을 위해 버튼 클릭되면 onclick되면 클릭한 것 처리해줘야되고 
                2. input에서 사용자가 검색할수있도록 만들어줘야해*/}
                <img className={styles.icon} src="/images/search.png" alt=""/>
            </button>
        </header>
        
    )
}

export default SearchHeader;