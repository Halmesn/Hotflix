<br />
<p align="center">
  <h1 align="center">Nextflix: A Netflix Clone</h1>
  <img src="https://github.com/Halmesn/Nextflix/blob/main/public/images/readme/browse.png" alt="Nextflix Screenshot">
  <p align="center">
    My React.js implementation of Netflix. Movie data was pulled from TMDB and trailer videos from Youtube.
    <br /><br />
    <a href="https://nextflix-clone.vercel.app/"><strong>View Demo »</strong></a>
    <br /><br />
    <a href="https://github.com/Halmesn/Nextflix/issues">Report Bug</a>
    ·
    <a href="https://github.com/Halmesn/Nextflix/issues">Request Feature</a>
  </p>
</p>

<h2 style="display: inline-block">Table of Contents</h2>
<ol>
  <li>
    <a href="#about-the-project">About The Project</a>
    <ul>
      <li><a href="#built-with">Built With</a></li>
    </ul>
  </li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contact">Contact</a></li>
</ol>

## About The Project

### Built With

- **[React](https://reactjs.org/)**
- **[Next.js](https://nextjs.org/)**
- [NextAuth](https://next-auth.js.org/)
- [styled-components](https://styled-components.com/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Install latest version of npm

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the project
   ```sh
   git clone https://github.com/Halmesn/Nextflix.git
   ```
2. Go to project directory and Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env.local file
4. Request an API key from TMDB and add it to .env.local file
   ```sh
   NEXT_PUBLIC_TMDB_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
5. Create a database at MongoDB and add connection url to .env.local file
   ```sh
   MONGODB_DATABASE=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
6. Add a next-auth host url to .env.local file
   ```sh
   NEXTAUTH_URL=http://localhost:3000
   ```
7. Create a trial account at your database, adjust the email address in AuthForm onTrialClick function and add it's password to .env.local file
   ```sh
   NEXT_PUBLIC_TRIAL_ACCOUNT_PASSWORD=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
8. Add Google and Facebook client id and secret to .env.local file
   ```sh
   GOOGLE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   GOOGLE_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   FACEBOOK_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   FACEBOOK_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
9. Start the application
   ```sh
   npm next start
   ```

## Usage

**Creating an Account**

![](https://github.com/Halmesn/Nextflix/blob/main/public/images/readme/signup.png)

1. Go to Sign Up page.
   - From the homepage, enter your email and click 'Get Started'.
   - From Sign In page, click the 'Sign up now' link below 'Sign In' button.
2. Input the necessary fields. Don't worry. It won't take long.
   - Both email and phone number has to be unique.
   - Or just click the trial account button, the email and password will be filled automatically for you.
3. After signing up, you'll receive a success message, then you can sign in.
   - Your email and password will be filled automatically for you.

**Logging In**

![](https://github.com/Halmesn/Nextflix/blob/main/public/images/readme/signin.png)

1. Go to Sign In page.
   - From the homepage, click 'Sign in' button.
   - From Sign Up page, click the 'Sign in now' link below 'Sign Up' button.
2. Input the necessary fields and proceed.
   - You can sign in using either email or phone number.
   - You can also sign in with your google or facebook account.

**Searching for a Show**

![](https://github.com/Halmesn/Nextflix/blob/main/public/images/readme/search.png)

1. Log in and add a profile if you don't already have one or selected a profile.'
2. Click the appropriate tab for your search.
   - If searching for a movie, click 'Movies' tab in the header.
   - If searching for a series, click 'TV Shows' tab in the header.
3. Click the search icon on the header.
4. Input your search term.
5. To go back to browse page, click the 'back' arrow in the left top corner.

**Adding User Profile**

![](https://github.com/Halmesn/Nextflix/blob/main/public/images/readme/manage_profile.png)

1. Log in to your account.
2. Click 'Manage Profiles'.
3. Click 'Add Profile'.
   - You can only add up to 5 profiles for each account.
4. Click the pencil/edit icon and choose your preferred avatar.
5. Enter your preferred display name and click 'Save'.
   - You can't use avatars and names already used by other profiles in the same account.

**Editing User Profile**

![](https://github.com/Halmesn/Nextflix/blob/main/public/images/readme/edit_profile.png)

1. Log in to your account.
2. Click 'Manage Profiles'.
3. Click the profile you wish to edit.
4. Modify the profile as you see fit and click 'Save'.

**Deleting User Profile**

![](https://github.com/Halmesn/Nextflix/blob/main/public/images/readme/delete_profile.png)

1. Log in to your account.
2. Click 'Manage Profiles'.
3. Click the profile you wish to delete.
4. Click 'Delete Profile'.
5. Confirm deletion by clicking 'Yes'.

## Contact

Adrian Li - [LinkedIn](https://www.linkedin.com/in/adrian-li-332395208/) - xiaxi.li.syd@gmail.com
