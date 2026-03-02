# Application Flow Diagram

## Complete User Journey

```
┌─────────────────────────────────────────────────────────────────┐
│                         APP LAUNCH                               │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                      SPLASH SCREEN                               │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    🚀 Demo App                            │  │
│  │              Professional Architecture                     │  │
│  │                   [Loading...]                            │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                   │
│  Actions:                                                         │
│  • Check AsyncStorage for auth token                             │
│  • Wait 2 seconds                                                │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    ┌─────────┴─────────┐
                    ↓                   ↓
            Token Found          Token Not Found
                    ↓                   ↓
┌───────────────────────────────────────────────────────────────────┐
│                       LOGIN SCREEN                                 │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                    🔐 Welcome Back                          │  │
│  │                  Sign in to continue                        │  │
│  │                                                             │  │
│  │  Email:    [_____________________________]                 │  │
│  │  Password: [_____________________________]                 │  │
│  │                                                             │  │
│  │              [      Sign In      ]                         │  │
│  │                                                             │  │
│  │  Don't have an account? Sign Up                            │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  Validations:                                                       │
│  • Email required                                                   │
│  • Password required (min 6 chars)                                 │
│  • Loading state during auth                                       │
│                                                                     │
│  Actions:                                                           │
│  • Call authService.login()                                        │
│  • Store token & user in AsyncStorage                              │
│  • Navigate to Dashboard                                           │
└───────────────────────────────────────────────────────────────────┘
                              ↓
                    Click "Sign Up" link
                              ↓
┌───────────────────────────────────────────────────────────────────┐
│                      SIGNUP SCREEN                                 │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                  ✨ Create Account                          │  │
│  │                Sign up to get started                       │  │
│  │                                                             │  │
│  │  Name:     [_____________________________]                 │  │
│  │  Email:    [_____________________________]                 │  │
│  │  Password: [_____________________________]                 │  │
│  │                                                             │  │
│  │              [      Sign Up      ]                         │  │
│  │                                                             │  │
│  │  Already have an account? Sign In                          │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  Validations:                                                       │
│  • All fields required                                              │
│  • Email format validation                                          │
│  • Password min 6 characters                                        │
│  • Loading state during registration                                │
│                                                                     │
│  Actions:                                                           │
│  • Call authService.signup()                                       │
│  • Store token & user in AsyncStorage                              │
│  • Navigate to Dashboard                                           │
└───────────────────────────────────────────────────────────────────┘
                              ↓
                    Successful Auth
                              ↓
┌───────────────────────────────────────────────────────────────────┐
│                     DASHBOARD SCREEN                               │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  ┌───┐  Welcome back,                                       │  │
│  │  │ J │  John Doe                                            │  │
│  │  └───┘  john@example.com                                    │  │
│  │                                                             │  │
│  │  ┌──────────────────┐  ┌──────────────────┐               │  │
│  │  │        2         │  │     $124.99      │               │  │
│  │  │    Products      │  │    Avg Price     │               │  │
│  │  └──────────────────┘  └──────────────────┘               │  │
│  │                                                             │  │
│  │  Available Products                                         │  │
│  │                                                             │  │
│  │  ┌─────────────────────────────────────────────────────┐   │  │
│  │  │ Product 1                                           │   │  │
│  │  │ High-quality product with excellent features       │   │  │
│  │  │ $99.99                                              │   │  │
│  │  └─────────────────────────────────────────────────────┘   │  │
│  │                                                             │  │
│  │  ┌─────────────────────────────────────────────────────┐   │  │
│  │  │ Product 2                                           │   │  │
│  │  │ Premium product for professionals                  │   │  │
│  │  │ $149.99                                             │   │  │
│  │  └─────────────────────────────────────────────────────┘   │  │
│  │                                                             │  │
│  │              [        Logout        ]                      │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  Data Sources:                                                      │
│  • User from AsyncStorage                                           │
│  • Products from apiService.getProducts()                          │
│                                                                     │
│  Actions:                                                           │
│  • Display user profile                                             │
│  • Fetch and display products                                       │
│  • Calculate statistics                                             │
│  • Handle logout                                                    │
└───────────────────────────────────────────────────────────────────┘
                              ↓
                      Click "Logout"
                              ↓
┌───────────────────────────────────────────────────────────────────┐
│                    LOGOUT CONFIRMATION                             │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                      Logout                                 │  │
│  │                                                             │  │
│  │        Are you sure you want to logout?                    │  │
│  │                                                             │  │
│  │         [  Cancel  ]    [  Logout  ]                       │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  Actions:                                                           │
│  • Call authService.logout()                                       │
│  • Clear AsyncStorage (token & user)                               │
│  • Navigate to Login Screen                                        │
└───────────────────────────────────────────────────────────────────┘
                              ↓
                      Back to Login
```

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER ACTION                              │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    SCREEN COMPONENT                              │
│  • Handles UI events                                             │
│  • Manages local state                                           │
│  • Displays loading/error states                                │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    CUSTOM HOOKS                                  │
│  • useProducts() - Fetches product data                         │
│  • Manages async state                                          │
│  • Provides refetch functionality                               │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    SERVICE LAYER                                 │
│  • authService - Authentication logic                           │
│  • apiService - API calls                                       │
│  • Abstracts implementation details                             │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    DATA STORAGE                                  │
│  • AsyncStorage - Persistent data                               │
│  • Token storage                                                │
│  • User data storage                                            │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STATE UPDATE                                  │
│  • Component re-renders                                          │
│  • UI reflects new data                                         │
│  • Loading states cleared                                       │
└─────────────────────────────────────────────────────────────────┘
```

## Authentication State Machine

```
┌──────────────┐
│  INITIAL     │
│  (Splash)    │
└──────┬───────┘
       │
       ↓ Check Token
       │
   ┌───┴────┐
   │        │
   ↓        ↓
Token    No Token
Found    Found
   │        │
   │        ↓
   │   ┌────────────┐
   │   │ LOGGED_OUT │ ←──────────┐
   │   │  (Login)   │            │
   │   └─────┬──────┘            │
   │         │                   │
   │         ↓ Login/Signup      │
   │         │                   │
   │   ┌─────┴──────┐            │
   └──→│ LOGGED_IN  │            │
       │ (Dashboard)│────────────┘
       └────────────┘   Logout
```

## Component Hierarchy

```
App.tsx
├── SplashScreen
│   └── [Checks auth status]
│
├── LoginScreen
│   ├── TextInput (Email)
│   ├── TextInput (Password)
│   └── Button (Sign In)
│
├── SignupScreen
│   ├── TextInput (Name)
│   ├── TextInput (Email)
│   ├── TextInput (Password)
│   └── Button (Sign Up)
│
└── DashboardScreen
    ├── User Profile Section
    │   ├── Avatar
    │   └── User Info
    ├── Statistics Section
    │   ├── Card (Product Count)
    │   └── Card (Avg Price)
    ├── Product List
    │   └── FlatList
    │       └── Card (Product Item)
    └── Button (Logout)
```

## Service Dependencies

```
┌─────────────────────────────────────────────────────────────────┐
│                         SCREENS                                  │
│  LoginScreen | SignupScreen | DashboardScreen                   │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ↓ uses
┌─────────────────────────────────────────────────────────────────┐
│                        SERVICES                                  │
│  authService.ts | apiService.ts                                 │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ↓ stores/fetches
┌─────────────────────────────────────────────────────────────────┐
│                      ASYNC STORAGE                               │
│  @auth_token | @user_data                                       │
└─────────────────────────────────────────────────────────────────┘
```

## Error Handling Flow

```
User Action
    ↓
Try Block
    ↓
Service Call
    ↓
┌───┴────┐
│        │
↓        ↓
Success  Error
│        │
│        ↓
│   Catch Block
│        │
│        ↓
│   Set Error State
│        │
│        ↓
│   Show Alert
│        │
└────────┴────→ Finally Block
                     │
                     ↓
                Clear Loading
                     │
                     ↓
                Update UI
```
