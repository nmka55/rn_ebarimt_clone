import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './pages/login/login';
import {NavigationContainer} from '@react-navigation/native';
import NotificationsScreen from './pages/notificationsScreen/notificationScreen';
import React from 'react';
import TabA from './pages/home/tabA';
import TabADetails from './pages/home/tabADetails';
import TabB from './pages/home/tabB';
import {TabBDetails} from './pages/home/tabB';
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

// const drawerButton = navigation => {
//   return (
//     <Icon
//       name="menu"
//       size={24}
//       style={{marginLeft: 10}}
//       onPress={() => navigation.toggleDrawer()}
//     />
//   );
// };

const LoginStackNav = createStackNavigator();
function LoginStack() {
  return (
    <LoginStackNav.Navigator initialRouteName="Login">
      <LoginStackNav.Screen
        name="Login"
        component={Login}
        options={{headerShown: false, headerTitle: ''}}
      />
    </LoginStackNav.Navigator>
  );
}

const NotificationStackNav = createStackNavigator();
function NotificationsStack() {
  return (
    <NotificationStackNav.Navigator>
      <NotificationStackNav.Screen
        name="Notfications"
        component={NotificationsScreen}
        options={{headerShown: false}}
      />
    </NotificationStackNav.Navigator>
  );
}

const HomeTabAStackNav = createStackNavigator();
function HomeTabAStack() {
  return (
    <HomeTabAStackNav.Navigator
      initialRouteName="TabA"
      screenOptions={{headerShown: false}}>
      <HomeTabAStackNav.Screen name="TabA" component={TabA} />
      <HomeTabAStackNav.Screen name="TabADetails" component={TabADetails} />
    </HomeTabAStackNav.Navigator>
  );
}

const HomeTabBStackNav = createStackNavigator();
function HomeTabBStack() {
  return (
    <HomeTabBStackNav.Navigator
      initialRouteName="TabB"
      screenOptions={{headerShown: false}}>
      <HomeTabBStackNav.Screen name="TabB" component={TabB} />
      <HomeTabBStackNav.Screen name="TabBDetails" component={TabADetails} />
    </HomeTabBStackNav.Navigator>
  );
}

const HomeTabNav = createBottomTabNavigator();
function HomeTab() {
  return (
    <HomeTabNav.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {color: 'gray'},
        tabBarIcon: ({size}) => {
          let iconName;

          switch (route.name) {
            case 'Камер нээх':
              iconName = 'qrcode-scan';
              break;
            case 'Баримт шивэх':
              iconName = 'file-document-edit-outline';
              break;
            case 'Татвар':
              iconName = 'card-account-details-outline';
              break;
            case 'Үйлчилгээ':
              iconName = 'briefcase-variant-outline';
              break;
            case 'Бусад':
              iconName = 'cellphone-text';
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={size} color={'gray'} />;
        },
      })}>
      <HomeTabNav.Screen name="Камер нээх" component={HomeTabAStack} />
      <HomeTabNav.Screen name="Баримт шивэх" component={HomeTabBStack} />
      <HomeTabNav.Screen name="Татвар" component={HomeTabBStack} />
      <HomeTabNav.Screen name="Үйлчилгээ" component={HomeTabBStack} />
      <HomeTabNav.Screen name="Бусад" component={HomeTabBStack} />
    </HomeTabNav.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function RootContainer({user}) {
  if (user?.loggedin)
    return (
      <NavigationContainer>
        <HomeTab />
      </NavigationContainer>
    );
  else
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="LoginStack">
          <Drawer.Screen
            name="LoginStack"
            component={LoginStack}
            options={{headerTitle: ''}}
          />
          <Drawer.Screen
            name="NotificationsStack"
            component={NotificationsStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

const mapStateToProps = state => {
  return {user: state?.user};
};
export default connect(mapStateToProps)(RootContainer);
