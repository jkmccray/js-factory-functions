// This is a factory function. It returns a new object every time.
const createAmplifier = function (volume = 11, color = "Black") { // The volume and color act as the 'default values'
  return {
      "type": "Guitar Amplifier",
      "maximumVolume": volume,
      "caseColor": color
  }
}

// a function is only a factory function if it returns an object

const marshallAmp = createAmplifier(9, "White")
> { "type": "Guitar Amplifier", "maximumVolume": 9, "caseColor": "White" }

const blackstarAmp = createAmplifier(10, "Gold")
> { "type": "Guitar Amplifier", "maximumVolume": 10, "caseColor": "Gold" }

// Not a factory function. Primitive type returned.
const add = function (first, second) {
  return first + second
}

// This is a factory function. It returns a new object every time.
const createLocation = (name, address, type) => ({
  "businessType": type,
  "businessName": name,
  "address": address
})

const kennel = createLocation("Bow Wow Kennels", "100 Infinity Way", "Animal Boarding")
> { "businessType": "Animal Boarding", "businessName": "Bow Wow Kennels", "address": "100 Infinity Way" }

// Not a factory function. Primitive type returned.
const isLegal = (activity, age) => age >= activity.minimumAge // returns true or false

const socialActivity = {
    activity: "Buy alcohol",
    minimumAge: 21
}

const april = {
    name: "April Atkinson",
    age: 19
}

const canAprilDrink = isLegal(socialActivity, april.age)
> false

// Stuffed animal factory function
// Factory functions should start with the word "create"

const animalContainer = document.querySelector("#container")

const render = (animalString) => {
  animalContainer.innerHTML += animalString
}

const createAnimal = (stuffingMaterial, furMaterial, eyeballMaterial, color, hasClothing, species) => {
  return {
    toString () {  // can write our own toString method on any object
      return `The ${this.color} ${this.species} filled with ${this.material.stuffing}` // have to use 'this' to refer to another property within the object
    },
    material: {
      stuffing: stuffingMaterial,
      fur: furMaterial,
      eyeball: eyeballMaterial
    },
    color: color,
    hasClothing: hasClothing,
    species: species
  }
}

const diggy = createAnimal("cotton", "wool", "felt", "goldenrod", false, "iguana")
console.log(diggy.toString())

// render(diggy.toString()) 
// render(diggy)
// these two lines of code have the same result
// when you add an object to the DOM, javascript automatically invokes the toString method
// if you do not specify what the toString method should return, it will automatically return '[object Object]'


// ------ Kneel Diamonds ------
const metals = [
  { metal: "Sterling Silver", price: 12.42 },
  { metal: "14K Gold", price: 736.4 },
  { metal: "24K Gold", price: 1258.9 },
  { metal: "Platinum", price: 795.45 },
  { metal: "Palladium", price: 1241.0 }
]

const diamonds = [
  { carets: 0.5, price: 405 },
  { carets: 0.75, price: 782 },
  { carets: 1, price: 1470 },
  { carets: 1.5, price: 1997 },
  { carets: 2, price: 3638 }
]

const ringStyles = [
  { style: "Classic", price: 500 },
  { style: "Modern", price: 710 },
  { style: "Vintage", price: 965 }
]

// factory function
const createCustomRing = (style, carets, metal) => {
  return {
      toString () {
        return `A ${this.style}, ${this.metal} ring will cost $${this.price}`
      },
      style: style.style,
      carets: carets.carets,
      metal: metal.metal,
      price: (metal.price + style.price + carets.price).toFixed(2)
  }
}

const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2])
// Then add order to customer's shopping cart

render(newRingOrder)


