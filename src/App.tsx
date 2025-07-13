import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { LoadingScreen } from './components/LoadingScreen';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';
import { ForgotPasswordForm } from './components/auth/ForgotPasswordForm';
import { VaultPage } from './components/pages/VaultPage';
import { TimelinePage } from './components/pages/TimelinePage';
import { CollectionsPage } from './components/pages/CollectionsPage';
import { ArchivePage } from './components/pages/ArchivePage';
import { GalleryPage } from './components/pages/GalleryPage';
import { ResearchPage } from './components/pages/ResearchPage';
import { UsersPage } from './components/pages/UsersPage';
import { AnalyticsPage } from './components/pages/AnalyticsPage';
import { SettingsPage } from './components/pages/SettingsPage';
import { TemplatesPage } from './components/pages/TemplatesPage';
import { ExportPage } from './components/pages/ExportPage';

function AppContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const [authMode, setAuthMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (isLoading) {
    return <LoadingScreen message="Initializing secure connection..." />;
  }

  if (!isAuthenticated) {
    switch (authMode) {
      case 'signup':
        return <SignupForm onSwitchToLogin={() => setAuthMode('login')} />;
      case 'forgot':
        return <ForgotPasswordForm onSwitchToLogin={() => setAuthMode('login')} />;
      default:
        return (
          <LoginForm
            onSwitchToSignup={() => setAuthMode('signup')}
            onSwitchToForgotPassword={() => setAuthMode('forgot')}
          />
        );
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'vault':
        return <VaultPage />;
      case 'timeline':
        return <TimelinePage />;
      case 'collections':
        return <CollectionsPage />;
      case 'archive':
        return <ArchivePage />;
      case 'gallery':
        return <GalleryPage />;
      case 'research':
        return <ResearchPage />;
      case 'users':
        return <UsersPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      case 'templates':
        return <TemplatesPage />;
      case 'export':
        return <ExportPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;