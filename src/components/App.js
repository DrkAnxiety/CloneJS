import '../styleSheets/App.css';
import Testimonio from './Testimonio';

function App() {
  return (
    <div className="App">
        <h1>Here is what our students say about FreeCodeCamp:</h1>
      <div className="container">
        <Testimonio
          name="Emma Bostian"
          country="Sweden"
          position="Software Engineer"
          company="Spotify"
          description="I've always struggled with learning JavaScript. I've taken 
        many courses but freeCodeCamp's course was the one which stuck. Studying 
        JavaScript as well as data structures and algorithms on freeCodeCamp gave 
        me the skills and confidence I needed to land my dream job as a software 
        engineer at Spotify." 
        imgProfile='https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png'/>
        <Testimonio
          name="Shawn Wang"
          country="Singapore"
          position="Software Engineer"
          company="Amazon"
          description="It's scary to change careers. I only gained confidence 
        that I could code by working through the hundreds of hours of free 
        lessons on freeCodeCamp. Within a year I had a six-figure job as a 
        Software Engineer. freeCodeCamp changed my life."
          imgProfile='https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png' />
        <Testimonio
          name="Sarah Chima"
          country="Nigeria"
          position="Software Engineer"
          company="ChatDesk"
          description="freeCodeCamp was the gateway to my career as a software 
        developer. The well-structured curriculum took my coding knowledge from 
        a total beginner level to a very confident level. It was everything I 
        needed to land my first dev job at an amazing company."
        imgProfile='https://www.freecodecamp.org/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png' />
      </div>
    </div>
  );
}

export default App;
