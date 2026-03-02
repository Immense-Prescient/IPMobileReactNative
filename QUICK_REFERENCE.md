# Quick Reference Card

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# iOS setup
cd ios && pod install && cd ..

# Run iOS
npm run ios

# Run Android
npm run android
```

## 📁 Project Structure at a Glance

```
src/
├── components/      → Reusable UI (Button, Card)
├── screens/         → App screens (Login, Dashboard, etc.)
├── services/        → API & Auth logic
├── hooks/           → Custom React hooks
├── utils/           → Helper functions
├── constants/       → Colors, spacing, etc.
├── types/           → TypeScript definitions
├── store/           → State management (future)
├── navigation/      → Navigation config (future)
└── assets/          → Images, fonts
```

## 🔑 Key Files

| File | Purpose |
|------|---------|
| `App.tsx` | Main app entry, state management |
| `src/services/authService.ts` | Authentication logic |
| `src/services/api.ts` | API calls |
| `src/screens/LoginScreen.tsx` | Login UI & logic |
| `src/screens/DashboardScreen.tsx` | Main app screen |
| `src/components/Button.tsx` | Reusable button |
| `src/constants/colors.ts` | Color palette |
| `src/types/index.ts` | TypeScript types |

## 🎨 Design System

### Colors
```typescript
COLORS.primary      // #007AFF (Blue)
COLORS.secondary    // #5856D6 (Purple)
COLORS.success      // #34C759 (Green)
COLORS.error        // #FF3B30 (Red)
COLORS.background   // #FFFFFF (White)
COLORS.surface      // #F2F2F7 (Light Gray)
COLORS.text         // #000000 (Black)
COLORS.textSecondary // #8E8E93 (Gray)
```

### Spacing
```typescript
SPACING.xs   // 4px
SPACING.sm   // 8px
SPACING.md   // 16px
SPACING.lg   // 24px
SPACING.xl   // 32px
SPACING.xxl  // 48px
```

## 🔐 Authentication Flow

```
Splash (2s) → Login → Dashboard
                ↓         ↓
              Signup    Logout → Login
```

## 📝 Common Code Patterns

### Using Auth Service
```typescript
// Login
await authService.login({email, password});

// Signup
await authService.signup({name, email, password});

// Check auth
const isAuth = await authService.isAuthenticated();

// Get user
const user = await authService.getStoredUser();

// Logout
await authService.logout();
```

### Using Custom Hooks
```typescript
const {products, loading, error, refetch} = useProducts();
```

### Creating a Component
```typescript
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../constants';

export const MyComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACING.md,
    backgroundColor: COLORS.surface,
  },
  text: {
    color: COLORS.text,
  },
});
```

### Using Button Component
```typescript
<Button 
  title="Click Me"
  onPress={handlePress}
  loading={isLoading}
  disabled={isDisabled}
  variant="primary" // or "secondary"
/>
```

### Using Card Component
```typescript
<Card style={styles.customCard}>
  <Text>Card Content</Text>
</Card>
```

## 🧪 Testing Credentials

Default admin credentials:
- Email: `admin@yopmail.com`
- Password: `Admin@123`

## 📊 Data Storage

### AsyncStorage Keys
- `@auth_token` - Authentication token
- `@user_data` - User profile JSON

### Clear Storage (for testing)
```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';
await AsyncStorage.clear();
```

## 🐛 Common Issues & Solutions

### Issue: Metro bundler not starting
```bash
npx react-native start --reset-cache
```

### Issue: iOS build fails
```bash
cd ios
pod deintegrate
pod install
cd ..
```

### Issue: Android build fails
```bash
cd android
./gradlew clean
cd ..
```

### Issue: TypeScript errors
```bash
npm run tsc
```

## 📦 Dependencies

### Core
- `react-native` - Framework
- `typescript` - Type safety
- `@react-native-async-storage/async-storage` - Data persistence

### Future Additions
- `@react-navigation/native` - Navigation
- `redux` or `zustand` - State management
- `axios` - HTTP client
- `react-native-vector-icons` - Icons
- `jest` - Testing

## 🎯 Demo Talking Points

1. **Architecture** - Clean separation of concerns
2. **Scalability** - Easy to add features
3. **Type Safety** - Full TypeScript coverage
4. **UX** - Loading states, error handling
5. **Code Quality** - Reusable components, consistent styling
6. **Security** - Token-based auth, secure storage
7. **Documentation** - Comprehensive guides

## 📚 Documentation Files

- `README.md` - Project overview
- `ARCHITECTURE.md` - Architecture details
- `FEATURES.md` - Feature documentation
- `APP_FLOW.md` - Visual flow diagrams
- `DEMO_GUIDE.md` - Presentation guide
- `TESTING_GUIDE.md` - Testing checklist
- `QUICK_REFERENCE.md` - This file

## 🔧 Useful Commands

```bash
# Type checking
npm run tsc

# Linting
npm run lint

# Format code
npm run format

# Clear cache
npm start -- --reset-cache

# Build iOS
npm run ios --configuration Release

# Build Android
npm run android --variant=release
```

## 💡 Next Steps for Production

1. ✅ Add React Navigation
2. ✅ Integrate real API endpoints
3. ✅ Add state management (Redux/Zustand)
4. ✅ Implement error logging (Sentry)
5. ✅ Add analytics (Firebase/Mixpanel)
6. ✅ Add crash reporting
7. ✅ Implement CI/CD
8. ✅ Add automated tests
9. ✅ Add app icons & splash screens
10. ✅ Configure environment variables

## 🎨 Customization Quick Tips

### Change Primary Color
Edit `src/constants/colors.ts`:
```typescript
primary: '#YOUR_COLOR'
```

### Add New Screen
1. Create `src/screens/NewScreen.tsx`
2. Export from `src/screens/index.ts`
3. Add to App.tsx state management

### Add New API Endpoint
Edit `src/services/api.ts`:
```typescript
async getNewData(): Promise<DataType> {
  // Implementation
}
```

### Add New Component
1. Create `src/components/NewComponent.tsx`
2. Export from `src/components/index.ts`
3. Use in screens

## 📞 Support

For questions or issues:
1. Check documentation files
2. Review code comments
3. Check TypeScript types
4. Review error messages

## 🎓 Learning Resources

- React Native Docs: https://reactnative.dev
- TypeScript Docs: https://www.typescriptlang.org
- React Hooks: https://react.dev/reference/react
- AsyncStorage: https://react-native-async-storage.github.io

---

**Version**: 1.0.0  
**Last Updated**: 2024  
**Author**: Demo Project Team
