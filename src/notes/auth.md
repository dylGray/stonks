# Google OAuth 2.0 Flow Reference (Next.js + NextAuth v5)

outlines the secure "Handshake" between our User, the Next.js Server, and Google's OAuth Servers.

1. the request: user clicks "Sign in with Google"
    --> our app sends the user to Googles login page with our clientId
    --> this lets Google know our app wants this user to login via Google

2. the auth: user enters credentials and approves request
    --> Google verifies the users identity
    --> this ensures the user is who they say they are without sharing their pw with our app

3. the redirect: Google sends user back to our app
    --> the user is sent to our redirect URI (src/app/api/auth/[...nextauth]/route.ts),
    --> with an authorization code to verify the request came from Google

4. the handshake: server catches the code and goes back to Google
    --> we send Google the auth code + clientId + client secret
    --> all server-to-server communication, client never sees this

5. resolution: obtaining the session
    --> Google verfies all these credentails we send them in step 4 and sends back the users data
    --> NextAuth creates an encrypted session cookie signed with our AUTH_SECRET (in local.env)

and now the user is logged into our app!