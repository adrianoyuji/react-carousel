# React Carousel Demo
##### by Adriano Vasconcelos

#### **This features a Carousel Component that:**
* Works on mobile and desktop devices
* Supports swipes on mobile
* Works with any HTML Component
* Is animated, finger-following swipes, just like Instagram multi-picture post

#### **It also features:**
* Multiple slides on the screen
* Scrolls to a selected slide through Component API or by clicking the tracking balls
* Desktop only controls

# Installation

You can check this project's demo live right now [clicking here](https://react-carousel-nine.vercel.app/)!

To run this project in your computer you will need to have [node.js and npm](https://nodejs.org/en/)/[yarn](https://yarnpkg.com/) and [GIT](https://git-scm.com/) installed in your environment;
After assuring you have everything installed, you will clone this repo, open your project folder and execute this command on your git bash:

````bash
git clone https://github.com/adrianoyuji/react-carousel.git
````
after that, you will have to open the cloned directory

````bash
cd react-carousel
````
now, you will install the dependencies
###### Using NPM
````bash
npm install
````
###### Using Yarn
````bash
yarn install
````
Finally you can run your project
###### Using NPM
````bash
npm run start
````
###### Using Yarn
````bash
yarn start
````
If everything goes right, congratulations! You have succesfuly started this project at `localhost:8080`

# API

As mentioned above, this component features a few things, here is how to use them!

### Adding 'slides' to the component
This component can handle any type of HTML component, each tag is considered a slide.
````javascript
 <Carousel>
    <img src="image1.jpg" />
    <section>
      <p>I am a regular HTML component!</p>
    </section>
    <img src="image2.jpg"  /> 
 </Carousel>
````
### displayQuantity - Specifying amount of slides on the screen 
You can specify how many slides you want to be shown at the same time using the **displayQuantity** prop
| Prop       | Type          | Default  |
| ------------- |:-------------:| -----:|
| displayQuantity     | number | 1 |
````javascript
 <Carousel displayQuantity={2} >
    <img src="image1.jpg" />
    <section>
      <p>I am a regular HTML component!</p>
    </section>
    <img src="image2.jpg"  /> 
 </Carousel>
````
Above snippet will render 2 slides on the screen.

### currentPosition - Scrolling to a specific slide
You can control the position of the carousel using the **currentPosition** prop, just insert a number and it will scroll to its position.
| Prop       | Type          | Default  |
| ------------- |:-------------:| -----:|
| currentPosition     | number | 0 |
````javascript
 <Carousel currentPosition={2} >
    <img src="image1.jpg" />
    <section>
      <p>I am a regular HTML component!</p>
    </section>
    <img src="image2.jpg"  /> 
 </Carousel>
````
Above snippet will scroll the carousel to the 2nd slide.

### disableControls - Disabling controls for desktop
If you want to implement your own scrollTo buttons, you can disable the desktop ones, be aware that the mobile swipes will still work.
| Prop       | Type          | Default  |
| ------------- |:-------------:| :-----:|
| disableControls     | boolean | false |
````javascript
 <Carousel disableControls >
    <img src="image1.jpg" />
    <section>
      <p>I am a regular HTML component!</p>
    </section>
    <img src="image2.jpg"  /> 
 </Carousel>
````
Above snippet will not render scrolling buttons on devices with width above `800px`.

### Styles - Styling the Carousel
You can specify some of the dimensions of the carousel, as well specify the `object-fit` for `img` tags 
| Prop       | Type          | Default  |
| ------------- |:-------------:| :-----:|
| height     | string | "90vh"|
| width     | string | "100vw"|
| objectFit     | string | fill / contain / cover / none / scale-down|
````javascript
 <Carousel  styles={{ height: "60vh", width: "100vw" }} >
    <img src="image1.jpg" />
    <section>
      <p>I am a regular HTML component!</p>
    </section>
    <img src="image2.jpg"  /> 
 </Carousel>
````
Above snippet set `height` to `60vh` and `width` to `100vw`.

# Dependencies

This projects only uses [React JSS](https://cssinjs.org/react-jss/), a CSS-IN-JS allower, no other external library was needed.

# Contact
If you would like to talk to me, you can email to adrianoyuji@gmail.com or DM me on LinkedIn by [clicking here](https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/).
### Thank you!
