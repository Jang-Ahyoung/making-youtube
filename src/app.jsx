import { useEffect,useState } from 'react';
import './app.css';
import Video_list from './components/videoList/video_list';

function App() {
  const [videos, setVideos] = useState([]); // 1. 초기값은 텅비어진 videos의 목록

  //2. 마운트되거나 업데이트 되어졌을때 쓸 수 있는 콜백 등록 -> useEffect에 원하는 함수 등록해놓으면 컴포넌트 마운트 되거나 업데이트 될때마다 호출돼
  useEffect(()=>{
    // 4. 함수 안에 postman에서 가져온 fetch 코드 복붙해와
    // 5. var -> const로 변경
    const requestOptions = {
      method: 'GET',
      redirect: 'follow' // fetch 쓸때 리퀘스트할때 옵션을 전달하는 부분
    };
    
    fetch("https://content-youtube.googleapis.com/youtube/v3/videos?maxResults=25&part=snippet&chart=mostPopular&key=AIzaSyDdDBqTrgjO5stM0DhLvxa9WODoosWfPUE", requestOptions) // 메인url과 옵션을 전달해줘
      .then(response => response.json()) // 6. 정상적으로 받아지면 -> 반응을 텍스트로 변환
      // .then(result => console.log(result)) // 변환된 텍스트를 콘솔에 출력
      .then(result=>setVideos(result.items))
      .catch(error => console.log('error', error)); // 만약 에러가 발생하면 에어를 콘솔에 출력한다.

      //7. 받아온 데이터 작업하기 편리하게 하려면 텍스트 보단 json으로 변환하는 것이 좋아 text -> json(결과가 더 이쁘게 나와)
      // 관심있는 결과를 설정해줘 콘솔 대신 -> setVdieos(result.items)로 업데이트 할거야!
      // 8. 즉 컴포넌트가 마운트 되면 유행하는 videos 받아와 비동기적으로 setVideos라는 api이용해 우리 컴포넌트에 데이터를 업데이트 해준다. 
      // 9. 업데이트 되면 videos를 video_list컴포넌트에 전달하면돼
  },[]);
  //3. 두번째 인자 - [] 한번만 마운트 되었을때만 호출 / [name, 원하는 변수 목록 전달] useEffect는 name만 바꼈을때 (콜백함수)호출됐으면 좋겠어 / 
  // 아무것도 전달하지 않으면 컴포넌트에 state나 prop이 업데이트 될때마다 무조건 반복 호출돼

  return (
    <Video_list videos={videos}/>
  );
}

export default App;
