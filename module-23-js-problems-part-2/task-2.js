

/*
Problem-2:
    Find the friend with the smallest name.
    const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/


// Solve it-----

function lowestFriend(friends){
    let lowest = friends[0]
    for(const friend of friends){
        if(friend.length < lowest.length){
            lowest = friend;
        }
    }
    return "Small name is: " + lowest;
}
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(lowestFriend(friends));