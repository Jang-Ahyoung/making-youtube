import React from 'react';
import Video_item from '../videoItem/video_item';
import styles from './video_list.module.css'
const Video_list = (props) => (
    //props 전달받으면 ul사용해서 
        <ul className={styles.videos}>
            {props.videos.map(video=>(
                //key값으로 포스트맨에 비디오마다 고유의 id값이 존재!
            <Video_item key={video.id} video={video}/>))}
        </ul>
    );

export default Video_list;