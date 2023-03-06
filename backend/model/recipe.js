const mongoose = require ('mongoose');
const recipe = new mongoose.Schema({ // Schema means d way u want to store ur data in ur data base which is mongoDB
    Title: {
        type: String,
        unique:true, 
        required:'title is required',
    },
    Ingredient:{
        type: String, 
        unique: true, 
        required: 'Ingredient is required',
    },
    Ingredientlist:{
        type: String, 
        unique: true, 
        required: 'Ingredientlist is required'
    },
    id:{
        type: Number,
        required: 'id is required'
    },
    price:{
        type: Number,
        required: "price required"
    }

})


export default mongoose.model("recipe", recipe)