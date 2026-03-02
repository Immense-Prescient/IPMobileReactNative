# Testing Guide

## Manual Testing Checklist

### 1. Splash Screen Testing

#### Test Case 1.1: First Launch (No Auth)
- [ ] Open app for the first time
- [ ] Verify splash screen appears
- [ ] Verify logo and text are visible
- [ ] Verify loading indicator appears
- [ ] After 2 seconds, redirects to Login screen

#### Test Case 1.2: Returning User (Authenticated)
- [ ] Login to app
- [ ] Close app completely
- [ ] Reopen app
- [ ] Verify splash screen appears
- [ ] After 2 seconds, redirects directly to Dashboard

### 2. Login Screen Testing

#### Test Case 2.1: Empty Form Submission
- [ ] Leave email and password empty
- [ ] Click "Sign In"
- [ ] Verify alert: "Please fill in all fields"

#### Test Case 2.2: Valid Login
- [ ] Enter email: `admin@yopmail.com`
- [ ] Enter password: `Admin@123`
- [ ] Click "Sign In"
- [ ] Verify button shows loading state
- [ ] Verify redirect to Dashboard after ~1.5 seconds

#### Test Case 2.3: Invalid Credentials
- [ ] Enter email: `wrong@example.com`
- [ ] Enter password: `wrongpassword`
- [ ] Click "Sign In"
- [ ] Verify alert: "Invalid email or password"
- [ ] Verify stays on login screen

#### Test Case 2.4: Navigation to Signup
- [ ] Click "Sign Up" link
- [ ] Verify navigation to Signup screen

#### Test Case 2.5: Keyboard Behavior
- [ ] Tap email field
- [ ] Verify keyboard appears
- [ ] Verify email keyboard type
- [ ] Tap password field
- [ ] Verify password is masked
- [ ] Tap outside
- [ ] Verify keyboard dismisses

### 3. Signup Screen Testing

#### Test Case 3.1: Empty Form Submission
- [ ] Leave all fields empty
- [ ] Click "Sign Up"
- [ ] Verify alert: "Please fill in all fields"

#### Test Case 3.2: Short Password
- [ ] Enter name: `John Doe`
- [ ] Enter email: `john@example.com`
- [ ] Enter password: `123` (less than 6 chars)
- [ ] Click "Sign Up"
- [ ] Verify alert: "Password must be at least 6 characters"

#### Test Case 3.3: Valid Signup
- [ ] Enter name: `Jane Smith`
- [ ] Enter email: `jane@example.com`
- [ ] Enter password: `password123`
- [ ] Click "Sign Up"
- [ ] Verify button shows loading state
- [ ] Verify redirect to Dashboard after ~1.5 seconds
- [ ] Verify user name appears in Dashboard

#### Test Case 3.4: Navigation to Login
- [ ] Click "Sign In" link
- [ ] Verify navigation to Login screen

#### Test Case 3.5: Name Capitalization
- [ ] Tap name field
- [ ] Verify keyboard has capitalization enabled
- [ ] Type lowercase name
- [ ] Verify first letter auto-capitalizes

### 4. Dashboard Screen Testing

#### Test Case 4.1: User Profile Display
- [ ] Login/Signup successfully
- [ ] Verify avatar shows first letter of name
- [ ] Verify "Welcome back," text appears
- [ ] Verify user name is displayed
- [ ] Verify user email is displayed

#### Test Case 4.2: Statistics Cards
- [ ] Verify "Products" card shows count (2)
- [ ] Verify "Avg Price" card shows calculated average
- [ ] Verify both cards are properly styled

#### Test Case 4.3: Product List
- [ ] Verify "Available Products" header
- [ ] Verify 2 products are displayed
- [ ] Verify each product shows:
  - [ ] Title
  - [ ] Description
  - [ ] Price (formatted as $XX.XX)
- [ ] Verify products are in card format

#### Test Case 4.4: Loading State
- [ ] Clear app data
- [ ] Login again
- [ ] Verify loading indicator appears briefly
- [ ] Verify products load after indicator

#### Test Case 4.5: Logout Confirmation
- [ ] Click "Logout" button
- [ ] Verify confirmation dialog appears
- [ ] Verify dialog shows: "Are you sure you want to logout?"
- [ ] Click "Cancel"
- [ ] Verify dialog closes, stays on Dashboard

#### Test Case 4.6: Successful Logout
- [ ] Click "Logout" button
- [ ] Click "Logout" in confirmation dialog
- [ ] Verify redirect to Login screen
- [ ] Verify user data is cleared

### 5. Session Persistence Testing

#### Test Case 5.1: App Restart (Logged In)
- [ ] Login to app
- [ ] Close app completely (swipe away)
- [ ] Reopen app
- [ ] Verify splash screen appears
- [ ] Verify automatic redirect to Dashboard
- [ ] Verify user data is still present

#### Test Case 5.2: App Restart (Logged Out)
- [ ] Logout from app
- [ ] Close app completely
- [ ] Reopen app
- [ ] Verify splash screen appears
- [ ] Verify redirect to Login screen

#### Test Case 5.3: Background/Foreground
- [ ] Login to app
- [ ] Put app in background (home button)
- [ ] Wait 30 seconds
- [ ] Return to app
- [ ] Verify still on Dashboard
- [ ] Verify data is intact

### 6. Error Handling Testing

#### Test Case 6.1: Network Simulation
Note: Currently using mock data, but structure is ready
- [ ] Verify error states are handled
- [ ] Verify retry functionality works

#### Test Case 6.2: Invalid Data
- [ ] Test with various invalid inputs
- [ ] Verify appropriate error messages

### 7. UI/UX Testing

#### Test Case 7.1: Color Consistency
- [ ] Verify primary color (#007AFF) is used consistently
- [ ] Verify text colors are readable
- [ ] Verify background colors are appropriate

#### Test Case 7.2: Spacing Consistency
- [ ] Verify consistent padding/margins
- [ ] Verify proper spacing between elements
- [ ] Verify no overlapping elements

#### Test Case 7.3: Button States
- [ ] Verify buttons show loading state
- [ ] Verify buttons are disabled during loading
- [ ] Verify button colors match design

#### Test Case 7.4: Responsive Layout
- [ ] Test on different screen sizes
- [ ] Verify text doesn't overflow
- [ ] Verify images scale properly

### 8. Platform-Specific Testing

#### iOS Testing
- [ ] Test on iOS simulator
- [ ] Verify SafeAreaView works correctly
- [ ] Verify keyboard behavior
- [ ] Verify status bar styling
- [ ] Test on different iOS versions

#### Android Testing
- [ ] Test on Android emulator
- [ ] Verify back button behavior
- [ ] Verify keyboard behavior
- [ ] Verify status bar styling
- [ ] Test on different Android versions

## Automated Testing (Future)

### Unit Tests
```typescript
// Example: authService.test.ts
describe('authService', () => {
  test('login with valid credentials', async () => {
    const result = await authService.login({
      email: 'test@example.com',
      password: 'password123'
    });
    expect(result.user).toBeDefined();
    expect(result.token).toBeDefined();
  });

  test('login with invalid credentials', async () => {
    await expect(
      authService.login({email: '', password: ''})
    ).rejects.toThrow();
  });
});
```

### Component Tests
```typescript
// Example: Button.test.tsx
describe('Button', () => {
  test('renders correctly', () => {
    const {getByText} = render(
      <Button title="Test" onPress={() => {}} />
    );
    expect(getByText('Test')).toBeTruthy();
  });

  test('shows loading state', () => {
    const {getByTestId} = render(
      <Button title="Test" onPress={() => {}} loading={true} />
    );
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });
});
```

### Integration Tests
```typescript
// Example: LoginFlow.test.tsx
describe('Login Flow', () => {
  test('complete login flow', async () => {
    const {getByPlaceholder, getByText} = render(<App />);
    
    // Wait for splash to finish
    await waitFor(() => {
      expect(getByText('Welcome Back')).toBeTruthy();
    });
    
    // Fill form
    fireEvent.changeText(
      getByPlaceholder('Enter your email'),
      'test@example.com'
    );
    fireEvent.changeText(
      getByPlaceholder('Enter your password'),
      'password123'
    );
    
    // Submit
    fireEvent.press(getByText('Sign In'));
    
    // Verify dashboard
    await waitFor(() => {
      expect(getByText('Welcome back,')).toBeTruthy();
    });
  });
});
```

## Performance Testing

### Metrics to Monitor
- [ ] App launch time (< 3 seconds)
- [ ] Screen transition time (< 300ms)
- [ ] API response time (mock: ~1.5s)
- [ ] Memory usage (< 100MB)
- [ ] Battery consumption

### Tools
- React Native Performance Monitor
- Flipper
- Xcode Instruments
- Android Profiler

## Accessibility Testing

### Screen Reader Testing
- [ ] Enable VoiceOver (iOS) / TalkBack (Android)
- [ ] Navigate through all screens
- [ ] Verify all elements are announced
- [ ] Verify proper focus order

### Visual Testing
- [ ] Test with increased font size
- [ ] Test with reduced motion
- [ ] Test with high contrast mode
- [ ] Verify color contrast ratios

## Security Testing

### Data Storage
- [ ] Verify sensitive data is not logged
- [ ] Verify AsyncStorage encryption (production)
- [ ] Verify no hardcoded credentials
- [ ] Verify secure token handling

### Input Validation
- [ ] Test SQL injection attempts
- [ ] Test XSS attempts
- [ ] Test buffer overflow
- [ ] Test special characters

## Bug Report Template

```markdown
### Bug Description
[Clear description of the issue]

### Steps to Reproduce
1. [First step]
2. [Second step]
3. [...]

### Expected Behavior
[What should happen]

### Actual Behavior
[What actually happens]

### Environment
- Device: [iPhone 14 / Pixel 6]
- OS Version: [iOS 17 / Android 13]
- App Version: [1.0.0]

### Screenshots
[Attach screenshots if applicable]

### Additional Context
[Any other relevant information]
```

## Test Coverage Goals

- Unit Tests: 80%+
- Component Tests: 70%+
- Integration Tests: 60%+
- E2E Tests: Critical paths covered

## Continuous Testing

### Pre-commit
- Linting
- Type checking
- Unit tests

### Pre-push
- All tests
- Build verification

### CI/CD Pipeline
- Automated testing on PR
- Performance benchmarks
- Security scans
- Build for both platforms
