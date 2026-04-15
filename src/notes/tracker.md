# daily progress tracker

4/14: implemented Google OAauth login
- got Google OAuth login working through setting up a new project in GCC
- setup a 'catch-all' api route to handle redirect URIs for Google OAuth login flow
- setup an auth config file to setup secrets and handlers
- setup an auth server actions file to seperate the login logic from client facing components 
- TODO: get user insertion into db with Google OAuth working -> setup in Vercel