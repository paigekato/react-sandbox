import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet"; // no quote is defaul export

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

// Class component -> more powerful
class Results extends React.Component {
  //calls parent component constructor
  constructor(props) { 
    super(props);

    this.state = {
      pets: [],
      loading: true
    };
  }

  // Loading State
  componentDidMount() {
    petfinder.pet.find({
      output: "full",
      location: "Seattle, WA",
    }).then(data => {
      let pets;

      // Make sure it exists
      if (data.petfinder.pets && data.petfinder.pets.pet) {
        if (Array.isArray(data.petfinder.pets.pet)) {
          pets = data.petfinder.pets.pet
        } else {
          pets = [data.petfinder.pets.pet];
        }
      }  else {
        pets = [];
      }

      // React is smart about updates; can call multuple times
      // shallow merge; won't overwrite
      //same same as pets: pest
      this.setState({ pets, loading: false }) 
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="search">
          <h1>LOADING....</h1>
        </div>
      )
    } else {
      return (
        <div className="search">
          {this.state.pets.map(pet => {
            let breed;
  
            Array.isArray(pet.breeds.breed) ? breed = pet.breeds.breed.join(', ') : breed = pet.breeds.breed;
  
            return(
              <Pet
                key={pet.id}
                animal={pet.animal}
                name={pet.name}
                breed={breed}
                media={pet.media}
                id={pet.id}
                location={`${pet.contact.city}, ${pet.contact.state}`}
              />
            );
          })}
        </div>
      )
    }
  }
}

export default Results;