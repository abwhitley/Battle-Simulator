//Sprint 4 Battle Sim

import {Player, Enemy}from "./classes.js";

import {requestUserInfo, enterNumberOptionPrompt, createRandomEnemy} from "./utilities.js";

import {battle} from "./simulation.js";


var user = requestUserInfo();

battle(user);
