import React, { useState, useEffect } from 'react';
import mockUser from './tempData.js/tempUser';
import mockRepos from './tempData.js/tempRepos';
import mockFollowers from './tempData.js/tempFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';
