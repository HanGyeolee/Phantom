# Phantom
본 프로젝트는 [이미 존재하는 프로젝트](https://html5up.net/phantom)를 보고 UI 및 애니메이션을 유추하여 클론 코딩하였습니다. 

리액트를 공부하게 되면서 상기시켜야할 만한 부분들을 정리하였습니다.

## [Main.css](https://github.com/HanGyeolee/Phantom/blob/main/src/Main.css)
전반적으로 사용하는 태그들을 한 번에 정리해두었습니다.    
이는 다른 프로젝트에서 손쉽게 불러와서 프로젝트의 기반을 빠르게 시작하기 위함입니다.    

# [Pages](https://github.com/HanGyeolee/Phantom/tree/main/src/pages)
* [Main](##main)
* [Element](##element)
* [Generic](##generic)

아예 한 폴더를 기준으로 페이지를 구성하였습니다.    
그래서 각 페이지가 작동될 때에 각 폴더의 index.js가 호출되며 화면을 구성합니다.

각 폴더 내 index.js 를 손쉽게 App.js에서 가져오는 방법으로 pages 폴더에 index.js를 생성하여 다음과 같이 변수들을 export 하였습니다.
``` javascript
export {Element} from './Element'
export {Generic} from './Generic'
export {Main} from './Main'
```
## [Main](https://github.com/HanGyeolee/Phantom/tree/main/src/pages/Main)
메인 화면에서 제일 많이 반복되는 hover 이벤트와 애니메이션 그리고 화면 전환이 포함되어 있는 이미지를 function으로 구현하여 손쉽게 반복시킬 수 있었습니다.    
``` javascript
function ImgAnime(props){
    ...

    return(
      <div className="imganime">
        <div className={props.colorstyle}>
            <img src={props.src} alt={props.alt}></img>
        </div>
        <a onClick={Move} >
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </a>
      </div>
    );
}
```
지금 와서 [해당 스크립트](https://github.com/HanGyeolee/Phantom/blob/main/src/pages/Main/index.js)를 보고 있자면, 
<ImgAnime/> 태그를 12번 그냥 복붙해놓은 것 보다. for문을 활용하여 화면을 구성하는 편이 조금 더 JSX 스러울 것이라 생각합니다.
## [Element](https://github.com/HanGyeolee/Phantom/tree/main/src/pages/Element)
## [Generic](https://github.com/HanGyeolee/Phantom/tree/main/src/pages/Generic)
# run.bat
손쉽게 해당 프로젝트를 실행시킬 수 있도록 하기위해 작성된 배치파일.    
~~해당 배치파일은 [React/NewProject.bat]()를 실행시키면 자동으로 생성된다.~~
