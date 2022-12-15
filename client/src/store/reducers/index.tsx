import { connectRouter } from 'connected-react-router';
import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux';
import Home from './home';
import Mine from './mine';
import Profile from './profile';
import history from '@/history';
import { CombinedState } from '@/typings/state';

// // 第二种
// //我们先自己构建 CombinedState 根状态 合并后的状态，也就是根状态
// export interface CombinedState {
//   Home: HomeState;
//   Mine: MineState;
//   Profile: ProfileState;
//   router: RouterState;
// }

let reducers: ReducersMapObject<CombinedState, AnyAction> = {
  Home,
  Mine,
  Profile,
  router: connectRouter(history),
};

const rootReducer: Reducer<CombinedState, AnyAction> = combineReducers<CombinedState>(reducers);

// 第一种
// const rootReducer = combineReducers<CombinedState>(reducers);

// export type CombinedState = {
//   // 迭代reducers所有的key  reducers[key]是reducer类型  ReturnType返回此函数类型的返回值类型
//   [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>;
// };

export default rootReducer;
