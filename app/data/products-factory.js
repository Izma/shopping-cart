(function () {
  'use strict';

  angular
    .module('myStoreApp')
    .factory('productsFactory', function ($window) {
      if ($window.localStorage.getItem('products') === null) {
        $window.localStorage.setItem('products', JSON.stringify([{
          "id": "52dfb762-08ed-49af-a5b1-8af8f8228465",
          "name": "Bread Base - Gold Formel",
          "price": "$40.86",
          "stock": 56,
          "status": true
        }, {
          "id": "a4e6262d-2a7f-49ec-b393-e30b5c7c1f3f",
          "name": "Syrup - Monin - Blue Curacao",
          "price": "$95.22",
          "stock": 38,
          "status": false
        }, {
          "id": "262d20cd-74ab-4a5c-8666-ef63cb06a6df",
          "name": "Country Roll",
          "price": "$32.09",
          "stock": 31,
          "status": true
        }, {
          "id": "e350f882-5f1d-4a50-830d-0effc0c14b38",
          "name": "Pastry - Banana Muffin - Mini",
          "price": "$15.94",
          "stock": 69,
          "status": true
        }, {
          "id": "e07f7936-063d-4ca2-a5d0-8dfa5cebfbd1",
          "name": "Wine - Manischewitz Concord",
          "price": "$84.44",
          "stock": 86,
          "status": false
        }, {
          "id": "82261572-3c23-44f3-ade2-c8c7eefeafba",
          "name": "Cheese - Cheddar With Claret",
          "price": "$56.57",
          "stock": 50,
          "status": false
        }, {
          "id": "5e249cff-13f8-4e67-92dc-91e220988995",
          "name": "Milk - 2%",
          "price": "$93.35",
          "stock": 27,
          "status": false
        }, {
          "id": "573ab06f-72e3-4759-892a-0c77d0b7956c",
          "name": "Chevril",
          "price": "$14.19",
          "stock": 53,
          "status": true
        }, {
          "id": "36baf5f6-ac61-4701-9f27-8fa5346a09e2",
          "name": "Water - Evian 355 Ml",
          "price": "$37.39",
          "stock": 33,
          "status": false
        }, {
          "id": "2719040e-0090-4911-9a3d-353083eed8f5",
          "name": "Salmon - Atlantic, No Skin",
          "price": "$56.98",
          "stock": 25,
          "status": true
        }, {
          "id": "9eb2a74d-035d-4b97-85b1-1eae0ddd3c06",
          "name": "Wine - Periguita Fonseca",
          "price": "$89.35",
          "stock": 93,
          "status": true
        }, {
          "id": "40e36c9e-0dba-48bb-8e6c-4d52fcc97a50",
          "name": "Longos - Chicken Wings",
          "price": "$24.41",
          "stock": 19,
          "status": true
        }, {
          "id": "0e922e34-3087-4ddf-a4d0-6f47bb1fca88",
          "name": "Yogurt - Banana, 175 Gr",
          "price": "$60.16",
          "stock": 51,
          "status": true
        }, {
          "id": "047f7e8d-c159-48cb-8203-e4db325cec23",
          "name": "Soup Campbells - Italian Wedding",
          "price": "$80.13",
          "stock": 87,
          "status": true
        }, {
          "id": "ca150438-eff7-4fb3-8898-5c3087a0f6b3",
          "name": "Nut - Walnut, Chopped",
          "price": "$71.03",
          "stock": 80,
          "status": false
        }, {
          "id": "aa73467b-c514-4ef4-83fd-8fae09a498f8",
          "name": "Pears - Bartlett",
          "price": "$48.55",
          "stock": 78,
          "status": false
        }, {
          "id": "9d2760e7-35d7-4779-9df7-0a18c4808220",
          "name": "Sardines",
          "price": "$60.26",
          "stock": 82,
          "status": false
        }, {
          "id": "d3563ddf-7b54-42ae-aa7b-74d55d574d9a",
          "name": "Coconut - Shredded, Unsweet",
          "price": "$34.11",
          "stock": 54,
          "status": true
        }, {
          "id": "cde5f2e9-5c41-4303-a9f8-ebe3c7344627",
          "name": "Heavy Duty Dust Pan",
          "price": "$35.70",
          "stock": 98,
          "status": true
        }, {
          "id": "8c31bf63-d33f-4f8d-b5aa-45a11c92c914",
          "name": "Wine - Alicanca Vinho Verde",
          "price": "$49.23",
          "stock": 42,
          "status": false
        }, {
          "id": "47a3c27a-6877-4194-bb51-29dd440fc117",
          "name": "Cheese - Mozzarella",
          "price": "$81.24",
          "stock": 59,
          "status": false
        }, {
          "id": "bbd9831f-46b2-42b0-a8a8-4ee455490868",
          "name": "Bread - Pullman, Sliced",
          "price": "$68.41",
          "stock": 52,
          "status": true
        }, {
          "id": "0f1ef52b-6f89-4ce3-bf14-a606cc68d9f7",
          "name": "Appetizer - Crab And Brie",
          "price": "$37.66",
          "stock": 88,
          "status": false
        }, {
          "id": "fb66ac66-b87f-46de-b8ee-910b53157874",
          "name": "Flour - So Mix Cake White",
          "price": "$35.63",
          "stock": 65,
          "status": true
        }, {
          "id": "358822c6-44a5-40a0-a1af-dd80ac2a2612",
          "name": "Wine - Lamancha Do Crianza",
          "price": "$73.12",
          "stock": 77,
          "status": true
        }, {
          "id": "00eb38de-c4d8-4b9a-b56d-282cc1406f2a",
          "name": "Capon - Whole",
          "price": "$83.65",
          "stock": 35,
          "status": true
        }, {
          "id": "3e261d46-0f10-48ad-aa0e-b81e5198ae9a",
          "name": "Dry Ice",
          "price": "$18.18",
          "stock": 33,
          "status": true
        }, {
          "id": "e6c71a6e-fb81-429f-9d22-56ef766a6e39",
          "name": "Beef - Montreal Smoked Brisket",
          "price": "$44.89",
          "stock": 50,
          "status": false
        }, {
          "id": "173a0ec8-913a-4d66-8895-ba8dd0231917",
          "name": "Vodka - Smirnoff",
          "price": "$54.28",
          "stock": 50,
          "status": false
        }, {
          "id": "7014ab4d-de54-45c0-9ba6-b89a3ea96ecb",
          "name": "Squash - Butternut",
          "price": "$65.03",
          "stock": 52,
          "status": true
        }, {
          "id": "adac5adf-bd38-4691-82e8-4e5efe3a00e0",
          "name": "Cookie Dough - Chocolate Chip",
          "price": "$96.09",
          "stock": 93,
          "status": true
        }, {
          "id": "e4c268f7-60f7-4a13-966b-c88ff6f825ea",
          "name": "Beer - Original Organic Lager",
          "price": "$19.19",
          "stock": 79,
          "status": false
        }, {
          "id": "10a918bc-4822-41dc-aee7-70cbe20af8dc",
          "name": "Pork - Butt, Boneless",
          "price": "$89.43",
          "stock": 40,
          "status": false
        }, {
          "id": "5d70913a-0c2c-499b-a093-79984e9fd299",
          "name": "Truffle Cups - Red",
          "price": "$41.45",
          "stock": 72,
          "status": true
        }, {
          "id": "ebfafadb-4528-4091-b79c-9b872c0c501b",
          "name": "Chilli Paste, Sambal Oelek",
          "price": "$20.27",
          "stock": 45,
          "status": true
        }, {
          "id": "6780b7cd-7daa-40b3-9ca0-0b3e16f2a161",
          "name": "Sprite, Diet - 355ml",
          "price": "$67.79",
          "stock": 94,
          "status": false
        }, {
          "id": "4b17ec67-55c7-4189-8d38-6cd7f8afc5e4",
          "name": "Molasses - Fancy",
          "price": "$28.24",
          "stock": 67,
          "status": false
        }, {
          "id": "e206f696-d45e-467c-83c4-e44acd975f7c",
          "name": "Pepper - Jalapeno",
          "price": "$44.21",
          "stock": 15,
          "status": true
        }, {
          "id": "a4e6574f-e829-43f9-9a9e-dff771eafb77",
          "name": "Coffee - Dark Roast",
          "price": "$68.04",
          "stock": 26,
          "status": true
        }, {
          "id": "761ea9ea-3df2-4577-9d1c-1e9e5bd65662",
          "name": "Sauce - Salsa",
          "price": "$14.63",
          "stock": 87,
          "status": false
        }, {
          "id": "cbd76923-5a2f-4fba-b54f-da38e92ff80b",
          "name": "Muffin Mix - Banana Nut",
          "price": "$97.20",
          "stock": 15,
          "status": false
        }, {
          "id": "0ff9ed1c-b826-4caf-a961-33faa055cf48",
          "name": "Island Oasis - Raspberry",
          "price": "$53.49",
          "stock": 13,
          "status": false
        }, {
          "id": "6979a21c-a549-4980-ab43-369986d0bfdb",
          "name": "Veal - Tenderloin, Untrimmed",
          "price": "$65.76",
          "stock": 19,
          "status": true
        }, {
          "id": "4c3eb505-d404-4b13-a5c2-e347d08be106",
          "name": "Placemat - Scallop, White",
          "price": "$54.38",
          "stock": 79,
          "status": true
        }, {
          "id": "76e0ac73-963a-42ce-807f-5a57d4cf3f11",
          "name": "Beer - Tetleys",
          "price": "$89.66",
          "stock": 47,
          "status": true
        }, {
          "id": "91350010-012d-4792-9a1e-86cf9defd1e3",
          "name": "Langers - Ruby Red Grapfruit",
          "price": "$10.88",
          "stock": 42,
          "status": true
        }, {
          "id": "16ba2165-87e4-42d9-818c-0921c2a09b25",
          "name": "Nut - Walnut, Pieces",
          "price": "$73.11",
          "stock": 45,
          "status": true
        }, {
          "id": "18074f51-d786-4cd5-97d2-6f986c3e8ef8",
          "name": "Scrubbie - Scotchbrite Hand Pad",
          "price": "$81.98",
          "stock": 60,
          "status": false
        }, {
          "id": "075cbc9e-3666-4798-9d7f-ca0170658eca",
          "name": "Tomato - Peeled Italian Canned",
          "price": "$34.61",
          "stock": 86,
          "status": true
        }, {
          "id": "48889eea-56b9-4763-94b2-d47191b819a1",
          "name": "Bread - Pita, Mini",
          "price": "$62.72",
          "stock": 61,
          "status": true
        }]));
      }
      return JSON.parse($window.localStorage.getItem('products'));
    });
}());