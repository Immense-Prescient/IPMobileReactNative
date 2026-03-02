import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {
  SplashScreen,
  LoginScreen,
  SignupScreen,
  DashboardScreen,
} from './src/screens';
import {authService} from './src/services/authService';

type AppState = 'splash' | 'login' | 'signup' | 'dashboard';

function App(): React.JSX.Element {
  const [appState, setAppState] = useState<AppState>('splash');

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    const isAuthenticated = await authService.isAuthenticated();
    if (isAuthenticated) {
      setAppState('dashboard');
    } else {
      setAppState('login');
    }
  };

  const handleSplashFinish = async () => {
    await checkAuthStatus();
  };

  const handleLoginSuccess = () => {
    setAppState('dashboard');
  };

  const handleSignupSuccess = () => {
    setAppState('dashboard');
  };

  const handleLogout = () => {
    setAppState('login');
  };

  const renderScreen = () => {
    switch (appState) {
      case 'splash':
        return <SplashScreen onFinish={handleSplashFinish} />;
      case 'login':
        return (
          <LoginScreen
            onLoginSuccess={handleLoginSuccess}
            onNavigateToSignup={() => setAppState('signup')}
          />
        );
      case 'signup':
        return (
          <SignupScreen
            onSignupSuccess={handleSignupSuccess}
            onNavigateToLogin={() => setAppState('login')}
          />
        );
      case 'dashboard':
        return <DashboardScreen onLogout={handleLogout} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
