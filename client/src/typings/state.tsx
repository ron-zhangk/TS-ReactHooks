import { RouterState } from 'connected-react-router';
import { HomeState } from '@/store/reducers/home';
import { MineState } from '@/store/reducers/mine';
import { ProfileState } from '@/store/reducers/profile';

export interface CombinedState {
  Home: HomeState;
  Mine: MineState;
  Profile: ProfileState;
  router: RouterState;
}
