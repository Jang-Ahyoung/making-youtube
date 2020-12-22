// 유트브 클래스 통해서 필요한 네트워크 처리를 할것
class Youtube {
    // 1. 우리가 필요한 키 받아와 저장
    constructor(key) {
        this.key = key;
        // 2. 반복적으로 쓰이는 값 가져와 기본적으로 설정해줄거야 const(함수) -> this.(클래스)으로 선언해주면되
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    // ... : 프로미스 return 하니깐 ansync 쓰는 것 어때 라고 제안해주는 것

    //3. 함수 API는 2가지 정도가 나올것
    mostPopular() {// useEffect에 있는거 복사해서 가져오면돼
        // fetch then then 하면 최종적으로 promise 만들어지므로 반환해줘
        return fetch(`https://content-youtube.googleapis.com/youtube/v3/videos?maxResults=25&part=snippet&chart=mostPopular&key=${this.key}`,
            this.getRequestOptions)
            .then(response => response.json())
            .then(result => result.items)
            .catch(error => console.log('error', error));
    } // mostPopular 호출하면 네트워크 통신해서 받아온 데이터를 items로 변환해 리턴하는 api

    async search(query) { // 쿼리 받아서 해당하는 쿼리에 맞게 검색하는 아이
        const response = await fetch(`https://content-youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions);
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
        // item변환해서 items까지만 리턴하는 것으로!


    }


}

export default Youtube;