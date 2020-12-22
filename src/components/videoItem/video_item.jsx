import React from 'react';
import styles from './video_Item.module.css';// 같은 폴터 안에있는 비디어아이템

const Video_item = ({video:{snippet : vs}}) => (
    // 1단계 : 단순히 props에 전달된 title리턴하는 아이템
        // <h1>{props.video.snippet.title}</h1>

        //2단계 : 더 많은걸 받아와 (썸네일, 채널명) 꾸며줄거야
        // props.video 반복해서 사용하기 싫을때 -> props에서 deconstructing이 가능해
        // props 안의 비디오 받아오고 싶을때 바로 {video} 해주면돼
        // 다른 이름 쓰고 싶을때 이름 할당도 가능해 {video:videoItem}
        // video 안의 키인 snippet도 deconstructing해주고 싶으면 {video :{snippet}} 해주면 -> 바로 snippet로 접급이 가능해
        <li className={styles.container}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={vs.thumbnails.medium.url} alt="video thumbnail"/>
            <div>
                <p className={styles.title}>{vs.title}</p>
                <p className={styles.channel}>{vs.channelTitle}</p>
            </div>
            </div>
            
            
            
        </li>
    );


export default Video_item;