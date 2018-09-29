module.exports.tables = {
  // ['columnName','columnType']
  // ["columnName", "columnType", "foreignTable", "foreignTableReference"]
  ingredients: [
    ["name", "string"],
    ["price", "decimal"],
    ["department", "string"],
    ["purchasing_note", "text"]
  ],
  photos: [["name", "string"], ["description", "text"]],
  dishes: [["name", "string"], ["photo_id", "foreign", "photos"]],
  meals: [
    ["name", "string"],
    ["type", "string"],
    ["photo_id", "foreign", "photos"]
  ],
  times: [["slot", "integer"], ["day", "string"]],
  ingredients_dishes: [
    ["meal_id", "foreign", "meals"],
    ["ingredient_id", "foreign", "ingredients"],
    ["ingredient_volume", "decimal"],
    ["prep_note", "string"]
  ],
  dishes_meals: [
    ["dish_id", "foreign", "dishes"],
    ["meal_id", "foreign", "meals"]
  ],
  meals_times: [
    ["meal_id", "foreign", "meals"],
    ["time_id", "foreign", "times"],
    ["week", "string"]
  ],
  users: [["username", "string"], ["password", "text"], ["email", "text"]],
  shoppinglists: [
    ["name", "string"],
    ["date", "string"],
    ["user_id", "foreign", "users"]
  ],
  carts: [
    ["name", "string"],
    ["date", "string"],
    ["ingredient_id", "foreign", "ingredients"],
    ["user_id", "foreign", "users"]
  ],
  ingredients_shoppinglists: [
    ["shoppinglist_id", "foreign", "shoppinglists"],
    ["ingredient_id", "foreign", "ingredients"],
    ["purchase_quantity", "decimal"],
    ["prep_note", "string"]
  ],
  ingredients_carts: [
    ["meal_id", "foreign", "meals"],
    ["ingredient_id", "foreign", "ingredients"],
    ["purchase_quantity", "decimal"],
    ["prep_note", "string"]
  ]
};
