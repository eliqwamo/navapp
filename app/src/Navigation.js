//1.  IMPORT BOTTOM TAB LIBRARY
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//2.  IMPORT SCREENS
import Characters from './Characters';
import Episodes from './Episodes';
import Quotes from './Quotes';

//3.  CREATE BOTTOM TAB
const AppTabs = createMaterialBottomTabNavigator();

//4.  CREATE THE TABS
export const Tabs = () => {
    return(
        <AppTabs.Navigator>
            <AppTabs.Screen name='Characters' component={Characters} />
            <AppTabs.Screen name='Episodes' component={Episodes} />
            <AppTabs.Screen name='Quotes' component={Quotes} />
        </AppTabs.Navigator>
    )
}