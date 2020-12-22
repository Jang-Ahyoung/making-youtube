import styles from './search_header.module.css'
import React,{useRef} from 'react';

//4. 검색하는 것을 props로 받아와야되 -> 검색되면 컴포넌트 안에서 버튼을 눌러졌는지
// 엔터쳐서 검색이 되는지 상관없이 검색이라는 이벤트 발생하면 내가 전달해준 콜백함수 불러! 라고 props로 전달받아.
const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () =>{
        // 3. 검색할거야
        const value = inputRef.current.value;
        onSearch(value); // onSearch에 검색된 결과값을 호출해줄거야

    };
    const onClick =()=>{
        handleSearch();
    };

    const onKeyPress =(event)=>{ // 이벤트 인자를 전달해야해
        if(event.key ==='Enter'){
            handleSearch();
        };

    };
    return(
        <header className={styles.header}>

            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt=""/>
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input ref ={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
            <button className={styles.button} type="submit" onClick={onClick}>
                {/* 1. 우선 검색을 위해 버튼 클릭되면 onclick되면 클릭한 것 처리해줘야되고 
                2. input에서 사용자가 검색할수있도록 만들어줘야해*/}
                <img className={styles.icon} src="/images/search.png" alt=""/>
            </button>
        </header>
        
    )
}

export default SearchHeader;