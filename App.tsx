import "./App.css";
import myPhoto from "./components/images/20220927_students_baker_tower_eb_237.jpg";
import myPhoto2 from "./components/images/smile.jpg";
import research1 from "./components/images/photo6 (1).png";
import research2 from "./components/images/Kidneyandbowl.png";
import research3 from "./components/images/PHOTO-2023-01-30-17-18-17.jpg";
import research4 from "./components/images/IMG_7727.jpg";
import research5 from "./components/images/research.jpg";
import work1 from "./components/images/IMG_5217.jpg";
import work2 from "./components/images/IMG_5238.jpg";
import work3 from "./components/images/IMG_6019.jpg";
import work4 from "./components/images/workingtimes.jpg";
import volleyball1 from "./components/images/IMG_6228.jpg";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Gustavo Lopez-Fleming</h1>
        <p>
          Email: Gustavo.lopez-fleming.jr.26@dartmouth.edu / Phone: 720-380-0217
        </p>
      </header>

      <section className="info-section">
        <div className="info-box">
          <h2>About Me!</h2>
          <img src={myPhoto} alt="my photo" />
          <p>Hey there! Welcome to my website!</p>
          <p>
            My name is Gustavo Lopez-Fleming (he/him) and I am a '26 here at
            Dartmouth majoring in Computer Engineering. I am from Aurora,
            Colorado where I have lived my whole life. Even though I've never
            been skiing (I know) I enjoy the fresh air and walks outdoors, but I
            still will always choose to spend my time watching movies and
            playing video games.
          </p>
          <img src={myPhoto2} alt="my photo2" />
          <p>
            I like to laugh at things people usually find unfunny. To me, life
            is so much better if everything makes you laugh. I live and breath
            my "live, laugh, love" and like to have good faith in people.
          </p>
          <p>Enjoy the rest of my website!</p>
        </div>
        <div className="info-box">
          <h2>Past Work Experience</h2>
          <p>
            I worked a number of jobs in Highschool as a barista, golf caddy,
            and even political canvasser. But I worked the longest at the
            restaurant "Texas Roadhouse" for over two years! I worked as a
            busser getting my hands dirty cleaning tables and washing dishes!
          </p>
          <img src={work4} alt="my photo" />
          <p>
            The summer before college I worked in my city's Park's and
            Recreation department where I was stationed at a Conservation Center
            for Colorado's native Short-grass Priarie. Heres what it looked
            like...
          </p>
          <img src={work2} alt="my photo" />
          <p>
            The position also included running summer programming. My favorite
            memory was when we worked with a group of immigrant children from
            refugee families and taught them how to fish and kayak. This is
            Frankie!
          </p>
          <img src={work1} alt="my photo" />
          <p>
            My Freshman fall I was apart of the student bonfire chair,
            responsible for organizing homecoming events and building the
            homecoming bonfire. It wasn't a paid position so I'm not sure if I
            can count it as work, but it sure was fun!
          </p>
          <img src={work3} alt="my photo" />
          <p>Onto the next section!</p>
        </div>
        <div className="info-box">
          <h2>Research Experience</h2>
          <p>
            Last summer I participated in a research program at the University
            of Southern California and spent the whole summer in LA! My research
            was focused on phytoplankton response to changing sea temperatures.
            After a summer of research, we presented our research on Catalina
            Island where I had the opportunity snorkel even though I don't know
            how to swim!
          </p>
          <img src={research1} alt="my photo" />
          <p>
            My freshman year, I worked in a lab at DHMC where we worked on
            developing an ultrasound to use in outerspace. It was so cool!!!
          </p>
          <img src={research5} alt="my photo" />
          <p>
            The work involved a suprising amoung of gel making, where we would
            replicate a human kidney with kidney stones...
          </p>
          <img src={research4} alt="my photo" />
          <img src={research3} alt="my photo" />
          <p>
            I even learned how to splice an MRI scan and create 3D models of the
            Kidney, Kidney Stones, and surrounding gel.
          </p>
          <img src={research2} alt="my photo" />
          <p>I loved it!</p>
        </div>
      </section>

      <section className="info-section">
        <div className="info-box">
          <h2>Volleyball</h2>
          <img
            src="https://img.olympics.com/images/image/private/t_s_w1340/t_s_16_9_g_auto/f_auto/v1536936974/primary/exvzqcvorticinejmmel"
            alt="volleyball"
          />
          <p>
            I only started play volleyball about a year and a half ago, but I
            love it! The thrill of diving for balls and spiking over opponents
            (although the guy pictured was at least 6'8") makes volleyball my
            favorite sport.
          </p>
          <img src={volleyball1} alt="my photo" />
          <p>
            Here on campus, I play on the Men's club volleyball team. It's been
            one of my favorite communities to be apart of.
          </p>
        </div>
        <div className="info-box">
          <h2>My Top 3 Movies</h2>
          <br></br>
          <p>1. Fantastic Mr. Fox</p>
          <img
            src="https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UY3495_.jpg"
            alt="my photo"
          />
          <p>
            A Middle-aged married fox, grappling between living out a peaceful
            life as a newspaper collumnist or pursuing his innate wild animal
            instincts? Sign me up!
          </p>
          <br></br>
          <p>2. Hidden Figures</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/4/4f/The_official_poster_for_the_film_Hidden_Figures%2C_2016.jpg"></img>
          <p>
            My interest in space exploration and this being inspiring story puts
            this movie in my top 3. Powerful message that discrimmination and
            stereotyping happen even among the smartest people in the country.
          </p>
          <br></br>
          <p>3. The Pursuit of Happyness</p>
          <img src="https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_FMjpg_UX1000_.jpg"></img>
          <p>
            As first-gen low income college studnent, something about this movie
            just really resonates with me. Will Smith has this line in the movie
            where he tells his son "don't let anyone tell you, you can't do
            something, not even me". I feel like I live by that line. This movie
            makes me cry every time I watch it.
          </p>
        </div>

        <div className="info-box">
          <h2>Goodbye!</h2>
          <p>
            Thank you so much for reading and taking the time to get to know me
            (I feel closer already)! It looks like this website needs some more
            CSS to make it visually appealing, maybe a hover effect for each
            box? Maybe I'll learn how react router works? We'll see what happens
            but I look forward to the next time we see eachother!
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
