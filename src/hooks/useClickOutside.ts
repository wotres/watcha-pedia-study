import { RefObject, useEffect } from 'react';

// 요소 밖 클릭시 특정 동작을 하도록 만드는 훅
// 사용하는 곳에서 특정 DOM 을 선택할 수 있는 내장 훅 useRef 사용
// ref(클릭한값이랑) 들어옴
const useOnClickOutside = (ref: RefObject<HTMLElement>, callback: (e: Event) => void) => {
  // useEffect 첫번째 파라미터는 함수, 두번째 파라미터는 의존값이 들어있는 배열(deps)
  useEffect(() => {
    const listener = (e: Event) => {
      // ref 가 존재하고, ref 안에 클릭한 부분이 없을Eo만 callback 동작
      if (!ref.current || ref.current?.contains(e.target as Node)) {
        return;
      }
      callback(e);
    }
    // ref 영역에 마우스 누른 순간 listener 이벤트 발생
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // unmount 되었을때 동작을 멈추자 (return 에 CleanUp 지정)
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
    // deps 에 있을것이 불릴때만 호출되자
  }, [ref, callback]);
}

export default useOnClickOutside;
