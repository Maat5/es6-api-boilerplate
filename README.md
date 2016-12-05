# ES6 express api
___

### What do you need to execute this app?

* [node.js] - evented I/O for the backend

```sh
 curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
 sudo apt-get install -y nodejs

 sudo apt-get install -y build-essential
```

* [mongo] - Mongo is document dabatase

```sh
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse"
| sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

sudo apt-get update

sudo apt-get install -y mongodb-org
```

### Installation

first clone this repository
```sh
$ git clone https://github.com/Maat5/es6-api-boilerplate.git
```
``` sh
 cd es6-api-boilerplate
```

### How to run it

Install all required modules with:

```sh
$ npm install
```

### Start server:
```sh
$  npm start
```

   [node.js]: <http://nodejs.org>
   [Npm]: <https://www.npmjs.com/>
   [mongo]: <https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/>
