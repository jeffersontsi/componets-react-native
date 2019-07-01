import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Page1 from '~/pages/Page1';

const Routes = createAppContainer(createSwitchNavigator({ Home: Main, About: Page1 }));

export default Routes;
