(function(){
    'use strict';

    angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];        
    
    function ToBuyController(ShoppingListCheckOffService){
        var buyingList = this;

        buyingList.items = ShoppingListCheckOffService.toBuyItem; // Items to buy fetched from Service

        buyingList.pushToBoughtList = function(itemIndex){  // Call to Service function to remove items from toBuyItem array and push items to alreadyBoughtItem array.
            ShoppingListCheckOffService.pushToBoughtList(itemIndex);
        }

    }
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.alreadyBoughtItem;
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuyItem = [       // List of pre-populated Items
            {
                name: "Cookies",
                quantity: "2 bags"
            },{
                name: "Milk",
                quantity:"3 litres"
            },{
                name: "Carrots",
                quantity:"1 kg"
            },{
                name: "Cheese",
                quantity:"0.5 kg"
            },{
                name: "Pasta",
                quantity:"2 kg"
            },{
                name: "Beers",
                quantity:"10 cans"
            }
        ];

        var alreadyBoughtItem = [];
        service.toBuyItem = toBuyItem;
        service.alreadyBoughtItem = alreadyBoughtItem;

        service.pushToBoughtList = function(itemIndex){
            var boughtItem = toBuyItem.splice(itemIndex,1); // Remove 1 item starting from itemIndex and store the retured new array of object (removed items) in boughtItem
            alreadyBoughtItem.push(boughtItem[0]); // Push 1st element of array from BoughtItem to alreadyBoughtItem array
            // console.log(boughtItem);
            // console.log(boughtItem[0]);
        }
    }
})();
