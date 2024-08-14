# Motorserve - Gatsby x Sanity

This setup has separate repos for Gatsby and Sanity Studio

## Installation

- Create a `/motorserve` directory in your sites folder for this repo along with the [Sanity repo](https://github.com/primemotive/motorserve-sanity)

### Gatsby repo

- Clone this repo in the `/motorserve` directory

- Create an `.env` file based on `example.env` and populate the required environment variables

- Run `nvm use` (.nvmrc specifies v16.0.0)

- Run `npm install`

- Install the Sanity CLI globally:

  ```
  npm install -g @sanity/cli
  ```

### Sanity repo

- Clone the [Sanity repo](https://github.com/primemotive/motorserve-sanity) in the `/motorserve` directory

- Login to Sanity Sudio:

  ```
  sanity login
  ```

- Ensure Sanity's GraphQL API is up-to-date:
  ```
  sanity graphql deploy
  ```

## Local development

The file setup should look like this:

```
motorserve
  /motorserve-gatsby
  /motorserve-sanity
```

### Sanity Studio

To launch the development server run the `start` script within the `/motorserve` folder:

```
npm start
```

The local version of Sanity Studio can be accessed via: [http://localhost:3333](http://localhost:3333)

### Gatsby

Once the Sanity Studio server is running locally Gatsby can also be launched from the `root` directory via the `start` script:

```
npm start
```

- Gatsby will serve the frontend at [http://localhost:8000/](http://localhost:8000/)

- Gatsby also provides GraphiQL, an in-browser IDE, to explore your site's data and schema via [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)
