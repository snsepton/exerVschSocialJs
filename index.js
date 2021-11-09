var racquetballPlayers = [
    {
        name: "Bob",
        age: 31,
        favoriteBrands: ["Pro Kennex", "Eforce"],
        brands: function() {
            console.log (this.name + "'s favorite brands are " + this.favoriteBrands)
        },
        racquetballPlayingFriends: [
        {
            name: "Sarah",
            age: 29,
            favoriteBrands: ["Gearbox", "Ektelon"],
                
                    clubName: "Sportsmall",
                    members: 10
        }]
    },

    {   name: "Sandy",
        age: 35,
        favoriteBrands: ["Pro Kennex", "Head"],
        racquetballPlayingFriends: [
        {
            name: "Matt",
            age: 30,
            favoriteBrands: ["Gearbox", "Head"],

                    clubName: "LA Fitness",
                    members: 15
        }]
    },

   {    name: "Suzie",
        age: 45,
        favoriteBrands: ["Wilson", "Head", "Gearbox"],
        racquetballPlayingFriends: [
        {
        name: "Damian",
        age: 50,
        favoriteBrands: ["Pro Kennex", "Penn"],

                clubName: "LA Fitness",
                members: 9
            }]
        },

    {   name: "Tony",
        age: 48,
        favoriteBrands: ["Eforce", "Penn", "Gearbox"],
        racquetballPlayingFriends: [
        {
            name: "Wilbur",
            age: 39,
            favoriteBrands: ["Pro Kennex", "Wilson"],

                clubName: "Marv Jensen",
                members: 25,
        }]
            
    },
    
]
console.log(racquetballPlayers)
racquetballPlayers[0].brands()
