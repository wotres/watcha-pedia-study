import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { latestApi } from '../../../apis/movieApi';
import { MovieDetail } from '../../../types';

const useLatestMovie = () => {
  // post, update 였으면 useMutation
  // useQuery 를 통해 데이터를 get
  // useQuery(uniqueKey, 비동기 함수(API))
  // AxiosResponse 로 return 값 감싸서 받음
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>('latestMovie', latestApi);
}

export default useLatestMovie;
