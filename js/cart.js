
let cart = {
    items: [],
    totalPrice: 0,
    count: 0,

    getTotalPrice: function(){
        return this.totalPrice;
    },

    calculateitemPrice: function(){
        this.totalPrice = this.items.map(item => item.price * item.count).reduce((prev, next) => prev + next);
    },

    increaseCount: function(num){
        this.count += num;
    },

    add: function(itemName, itemPrice, itemCount = 1){
        this.items.push({
            name: itemName,
            price: itemPrice,
            count: itemCount
        });
    },

    clear: function(){
        this.totalPrice = 0;
        this.count = 0;
        while (this.items.length){
            this.items.pop();
        }
    },

    print: function(){
        console.log(JSON.stringify(this.items));
        console.log(this.getTotalPrice());
    }
};

// cart.increaseCount(4);
cart.add('GTX', 200, 5);
cart.add('RTX', 600, 5);
cart.add('RX', 500, 5);
cart.calculateitemPrice(cart.items);
// cart.clear();
cart.print();
console.log(cart);





