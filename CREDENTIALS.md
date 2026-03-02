# Login Credentials

## Default Admin Account

For demo and testing purposes, use the following credentials:

### Email
```
admin@yopmail.com
```

### Password
```
Admin@123
```

## Important Notes

- These are the **only** valid credentials for login
- The signup flow creates new users but they won't be able to login (demo limitation)
- In production, this would be replaced with real authentication against a backend API
- Password is case-sensitive

## For Client Demo

When presenting to clients, you can either:
1. **Show the credentials** - Display them on screen or in documentation
2. **Pre-fill the form** - Modify LoginScreen to have default values
3. **Mention verbally** - "I'll use our demo admin account"

## Security Note

⚠️ **For Demo Only**: These hardcoded credentials are for demonstration purposes only. In a production environment:
- Credentials would be validated against a secure backend
- Passwords would be hashed and never stored in plain text
- Multi-factor authentication would be implemented
- Rate limiting would prevent brute force attacks
- Session tokens would have expiration times

## Testing Different Scenarios

### Valid Login
- Email: `admin@yopmail.com`
- Password: `Admin@123`
- Result: ✅ Success → Dashboard

### Invalid Email
- Email: `wrong@email.com`
- Password: `Admin@123`
- Result: ❌ Error → "Invalid email or password"

### Invalid Password
- Email: `admin@yopmail.com`
- Password: `wrongpassword`
- Result: ❌ Error → "Invalid email or password"

### Empty Fields
- Email: (empty)
- Password: (empty)
- Result: ❌ Error → "Please fill in all fields"

## Signup Flow

The signup screen allows creating new accounts, but for demo purposes:
- New accounts are created locally
- They are stored in AsyncStorage
- However, login only accepts the admin credentials above
- This demonstrates the UI/UX without backend complexity

To make signup functional, you would need to:
1. Store registered users in a database
2. Validate against stored users during login
3. Implement proper password hashing
4. Add email verification

## Quick Copy-Paste

For easy testing:

**Email:** admin@yopmail.com  
**Password:** Admin@123
