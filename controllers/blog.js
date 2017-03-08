/*
 * Copyright (C) 2017 MINDORKS NEXTGEN PRIVATE LIMITED
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://mindorks.com/license/apache-v2
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */

/**
 * Created by janisharali on 07/03/17.
 */

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/admin/login',
    (req, res, next) => res.sendFile(path.join(__dirname, './../view', 'admin_login.html')));

router.get('/about',
    (req, res, next) => res.sendFile(path.join(__dirname, './../view', 'about.html')));

router.get('/post',
    (req, res, next) => res.sendFile(path.join(__dirname, './../view', 'post.html')));

router.get('/contact',
    (req, res, next) => res.sendFile(path.join(__dirname, './../view', 'contact.html')));

router.get('/',
    (req, res, next) => res.sendFile(path.join(__dirname, './../view', 'index.html')));

module.exports = router;


module.exports = router;