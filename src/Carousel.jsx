import React from 'react';

class Carousel extends React.Component {
  constructor (props) {
    super(props);

    // anything that's event listener - this must be done
    // this will always be set to instance of carousel
    // use fat arrow functions to avoid this
    this.handleIndexClick = this.handleIndexClick.bind(this);

    this.state = {
      photos: [],
      active: 0
    }
  }

  static getDerivedStateFromProps({ media }) {
    // props coming from parent and you derived data
    // everytime props change, runs this to update state
    // static: doesn't exist on instance - exists on class level
    // isn't operating on the interior - take props give state

    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo['@size'] === 'pn')
    }
    
    return { photos };
  }

  handleIndexClick(event) {
    this.setState({
      // takes a string and makes a number; coercion
      active: +event.target.dataset.index
    });
  }

  render () {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // refactor to be an image inside of a button with onClick
            <img 
              key={photo.value}
              data-index={index}
              src={photo.value} 
              className={index === active ? "active" : ""}
              alt="Animal Thumbnail"
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel;