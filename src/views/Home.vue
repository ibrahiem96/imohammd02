<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1>Welcome</h1>
        <ul class="ch-grid">
          <li>
            <div class="ch-item ch-img-1">
              <div class="ch-info">
                <h3>Ibrahiem Mohammad</h3>
                <p>Cloud Services</p>
              </div>
            </div>
          </li>
        </ul>
        <p><strong> I am a Software Engineer by trade.  
          I have an interest in the future of automating cloud operations, and designing software architecture. I also find fintech and UI/UX design very interesting. 
          In my free time I enjoy literature, film, and nature.
          Always open to new and exciting opportunities.</strong> </p>
      </div>
      <div id="social-container">
        <a class="social-link" href="https://github.com/ibrahiem96/">
          <i class="fa fa-github fa-2x icon-3d"></i>
        </a>
        <a class="social-link" href="https://www.linkedin.com/in/ibrahiem-mohammad/">
          <i class="fa fa-linkedin fa-2x icon-3d"></i>
        </a>
        <a class="social-link" href="https://instagram.com/ibrahiem96/">
          <i class="fa fa-instagram fa-2x icon-3d"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
/*----------------- begin icon design -----------------*/

.ch-grid {
  /* margin: 250px 0 0 0; */
  padding: 0;
  list-style: none;
  display: block;
  text-align: center;
  width: 100%;
}
.ch-grid:after {
  content: "";
  display: table;
}
.ch-item:before {
  content: "";
  display: table;
}
.ch-grid:after {
  clear: both;
}
.ch-grid li {
  width: 220px;
  height: 220px;
  display: inline-block;
  margin: 20px;
}
.ch-item {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  cursor: default;
  box-shadow: inset 0 0 0 16px rgba(255, 255, 255, 0.6),
    0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;
}
.ch-img-1 {
  background-image: url("../assets/profile_clean_small.jpg");
}
.ch-info {
  position: absolute;
  background: #42b983;
  /*background: rgba(63, 147, 147, 0.8);*/
  width: inherit;
  height: inherit;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  transform: scale(0);
}
.ch-info h3 {
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 22px;
  margin: 0 30px;
  padding: 45px 0 0 0;
  height: 140px;
  font-family: "Open Sans", Arial, sans-serif;
  text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);
}
.ch-info p {
  color: #fff;
  padding: 10px 5px;
  font-style: italic;
  margin: 0 30px;
  font-size: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  opacity: 0;
  transition: all 1s ease-in-out 0.4s;
}
.ch-info p a {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 1px;
  padding-top: 4px;
  font-family: "Open Sans", Arial, sans-serif;
}
.ch-info p a:hover {
  color: rgba(255, 242, 34, 0.8);
}
.ch-item:hover {
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1),
    0 1px 2px rgba(0, 0, 0, 0.1);
}
.ch-item:hover .ch-info {
  transform: scale(1);
  opacity: 1;
}
.ch-item:hover .ch-info p {
  opacity: 1;
}
/*----------------- end icon design -----------------*/

/*----------------- begin button design -----------------*/

.offset {
  box-shadow: 0.3em 0.3em 0 0 var(--color), inset 0.3em 0.3em 0 0 var(--color);
}
.offset:hover,
.offset:focus {
  box-shadow: 0 0 0 0 var(--hover), inset 6em 3.5em 0 0 var(--hover);
}

.offset {
  --color: #cc147f;
  /*--color: #19bc8b;*/
  --hover: #1973bc;
}
button {
  color: var(--color);
  transition: 0.25s;
}

button:hover,
button:focus {
  border-color: var(--hover);
  color: #fff;
}

button {
  background: none;
  border: 2px solid;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  justify-content: center;
}

/*----------------- end button design -----------------*/

.landing-container-main {
  text-align: center;
}

.current-title {
  color: blue;
}

#home {
  background-image: linear-gradient(black, white);
  /*opacity: 0.5;*/
}

.social-link {
  padding-left: 2.5%;
  padding-right: 2.5%;
}

#social-container {
  padding-top: 5%;
}

</style>
