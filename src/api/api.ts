import axios             from 'axios';
import { ChartResponse } from '../models/ChartResponse.ts';

const instance = axios.create( {
                                 baseURL: 'https://yfapi.net/',
                                 headers: {
                                   'accept': 'application/json',
                                   'X-API-KEY': 'o31F2jLjhn5YUpMnS0AxO9j42rdUpZxV1Utsqcqi',
                                 },
                               } );

export const chartsApi = {
  getChart( ticker: string ) {
    const paramsString = `range=1mo&region=US&interval=1d&lang=en`;
    return instance.get<ChartResponse>( `v8/finance/chart/${ ticker }?${ paramsString }` );
  }
};