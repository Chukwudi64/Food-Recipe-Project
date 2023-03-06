const router = require('express').Router();
import {Recipe, fetchRecipe} from '../controller/recipe';


router.post('/recipe', Recipe)
router.get('/fetchrecipe', fetchRecipe)

module.exports = router;
