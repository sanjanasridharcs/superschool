// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START gae_node_request_example]
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/landing.html'));
});

router.get('/student-login', (req, res) => {
  res.sendFile(path.join(__dirname + '/student-login.html'));
});

router.get('/student', (req, res) => {
  res.sendFile(path.join(__dirname + '/student-homepage.html'));
});

router.get('/teacher-login', (req, res) => {
  res.sendFile(path.join(__dirname + '/teacher-login.html'));
});

router.get('/teacher', (req, res) => {
  res.sendFile(path.join(__dirname + '/teacher-homepage.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.use('/', router);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;

