const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const i18n = require('i18n');
const cors = require('cors');
const config = require('./config/config');
const mongoose = require('./config/dbConnection');

const app = express();

// Set request config
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

// seurity middleware
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(helmet.noSniff());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

//enable https requests
app.enable("trust proxy")

//disables powered by express
app.disable('x-powered-by');

// Set langs setting
i18n.configure({
  locales: ['en', 'es'],
  directory: __dirname + '/server/locals/',
  objectNotation: true,
  updateFiles: false,
  register: global,
  api: {
    '__': 'trans',
    '__n': 'transn'
  }
});

// Initialize langs with actual settings
app.use(i18n.init);

//set express session
app.use(session({
  secret: config.sessionToken,
  saveUninitialized: false, // don't create session until something stored
  resave: false, //don't save session if unmodified
  cookie: {
    httpOnly: true,
  },
  rolling: true,
  // store: new MongoStore({ mongooseConnection: mongoose.connection, autoRemove: 'native' })
}));

// App router
let Router = require('./server/router')(app);

app.listen(config.port, () => {
  console.log(`server started on http://localhost:${config.port}`);
});
