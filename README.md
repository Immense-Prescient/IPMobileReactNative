# Demo Project - React Native Architecture

A professional React Native demo project showcasing clean architecture and best practices.

## 📁 Project Structure

```
DemoProject/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── index.ts
│   ├── screens/          # Screen components
│   │   ├── HomeScreen.tsx
│   │   └── index.ts
│   ├── navigation/       # Navigation configuration
│   ├── services/         # API and external services
│   │   └── api.ts
│   ├── hooks/            # Custom React hooks
│   │   └── useProducts.ts
│   ├── utils/            # Helper functions
│   │   └── formatters.ts
│   ├── constants/        # App constants (colors, spacing, etc.)
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── store/            # State management (Redux/Zustand)
│   └── assets/           # Images, fonts, etc.
│       ├── images/
│       └── fonts/
├── App.tsx               # Root component
└── package.json
```

## 🏗️ Architecture Principles

### 1. Separation of Concerns
- **Components**: Reusable UI elements
- **Screens**: Page-level components
- **Services**: API calls and business logic
- **Hooks**: Shared stateful logic
- **Utils**: Pure helper functions

### 2. Type Safety
- TypeScript for type checking
- Centralized type definitions in `src/types/`

### 3. Scalability
- Modular folder structure
- Easy to add new features
- Clear import/export patterns

### 4. Maintainability
- Consistent naming conventions
- Centralized constants
- Reusable components

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)

### Installation

```bash
# Install dependencies
npm install

# iOS only
cd ios && pod install && cd ..

# Run on iOS
npm run ios

# Run on Android
npm run android
```

### Login Credentials
- Email: `admin@yopmail.com`
- Password: `Admin@123`

## 📦 Key Features

- Complete authentication flow (Splash → Login → Signup → Dashboard → Logout)
- Persistent authentication with AsyncStorage
- Clean folder structure
- TypeScript support
- Reusable components (Button, Card)
- Custom hooks for data fetching
- Centralized styling constants
- Mock API service layer
- Error handling patterns
- Form validation
- Loading states
- User profile display

## 🎨 Design System

### Colors
Defined in `src/constants/colors.ts`:
- Primary, Secondary colors
- Success, Warning, Error states
- Text and background colors

### Spacing
Defined in `src/constants/spacing.ts`:
- Consistent spacing scale (xs, sm, md, lg, xl, xxl)

## 📝 Code Examples

### Creating a New Screen
```typescript
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../constants';

export const NewScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>New Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.md,
    backgroundColor: COLORS.surface,
  },
});
```

### Using Custom Hooks
```typescript
import {useProducts} from '../hooks/useProducts';

const {products, loading, error, refetch} = useProducts();
```

## 🔧 Best Practices Demonstrated

1. **Component Composition**: Small, focused components
2. **Custom Hooks**: Reusable logic extraction
3. **Type Safety**: Full TypeScript coverage
4. **Error Handling**: Graceful error states
5. **Loading States**: User feedback during async operations
6. **Consistent Styling**: Design system approach
7. **Service Layer**: Abstracted API calls

## 📚 Next Steps

- Add navigation (React Navigation)
- Implement state management (Redux/Zustand)
- Add authentication flow
- Integrate real API endpoints
- Add unit tests (Jest)
- Add E2E tests (Detox)

## 🎯 App Flow

1. **Splash Screen** - Shows app logo with loading animation (2 seconds)
2. **Login Screen** - Email/password authentication with validation
3. **Signup Screen** - New user registration with form validation
4. **Dashboard Screen** - 
   - User profile display with avatar
   - Statistics cards (product count, average price)
   - Product list with API data
   - Logout functionality
5. **Logout** - Clears session and returns to login

## 👥 For Client Presentation

This project demonstrates:
- Complete authentication flow with persistent sessions
- Professional code organization
- Scalable architecture
- Industry best practices
- Clean, maintainable code
- TypeScript expertise
- Modern React patterns
- Form validation and error handling
- Async storage for data persistence
- Mock API services ready for real backend integration
