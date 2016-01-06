# parsecloud-browserify-example

An example Parse Cloud project that uses Browserify to bundle modules, dependencies and templates. It demonstrates how to use your own modules, libraries installed through NPM and how to include Handlebars templates.

## Setup

Copy `config/global.json.example` to `config/global.json` and update it with your Parse Application ID and Master Key.

Install NPM dependencies:

```sh
$ npm install
```

Build and uplod to Parse:

```sh
$ npm run deploy
```

## Examples

There are two example endpoints - a cloud function and an express application listening for the requests to the root of your Parse subdomian. You can call those endpoints using curl or [httpie](https://github.com/jkbrzt/httpie).

### Parse Cloud function

An example cloud function is registered under the name of `md5` and it returns a md5 checksum.

#### Request

```sh
$ http POST \
-H "X-Parse-Application-Id: <Your Parse Application ID>" \
-H "X-Parse-REST-API-Key: <Your Parse Application REST API Key>" \
input=abc123 \
https://api.parse.com/1/functions/md5
```

#### Response

```js
{
    "result": {
        "md5": "e99a18c428cb38d5f260853678922e03"
    }
}
```

### Parse Cloud custom endpoint

A custom endpoint is listening at the root of your Parse subdomain.

#### Request

```sh
$ http GET http://< your app >.parseapp.com
```

#### Response

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello World!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700,400italic,300italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="/normalize.css">
    <link rel="stylesheet" href="/skeleton.css">
<body>
    <div class="container">
      <h1>Hello World!</h1>
    </div>
</body>
</html>
```