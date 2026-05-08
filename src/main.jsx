import React from 'react';
import { createRoot } from 'react-dom/client';
import { Music, Play, Mail, ExternalLink, Zap } from "lucide-react";
import './styles.css';

const links = {
  instagram: 'https://www.instagram.com/its.theunderdogs?igsh=NHl6OGw2bHFjdmZr',
  spotify: 'https://open.spotify.com/intl-it/artist/5zL4fVJ40WA8KxgWsHjZtf?',
  apple: 'https://music.apple.com/us/artist/the-underdogs/1472429616',
  heavens: 'https://distrokid.com/hyperfollow/theunderdogs6/heavens-rock-cave',
  gwen: 'https://distrokid.com/hyperfollow/theunderdogs6/gwen'
};

function App() {
  return (
    <main className="site">
      <nav className="nav">
        <a href="#top" className="mini-logo"><img src="/assets/logo.png" alt="The Underdogs logo" /></a>
        <div className="nav-links">
          <a href="#music">Music</a><a href="#videos">Videos</a><a href="#photos">Photos</a><a href="#about">About</a><a href="#contact">Contact</a>
        </div>
        <div className="icons"><a href={links.instagram}><Instagram size={20}/></a><a href={links.spotify}><Music size={20}/></a></div>
      </nav>

      <section id="top" className="hero">
        <div className="texture" />
        <div className="hero-copy">
          <img className="logo" src="/assets/logo.png" alt="The Underdogs" />
          <p className="tagline">it's too late to save me</p>
          <p className="genre">POP PUNK / ALTERNATIVE / ITALY</p>
          <p className="intro">Born from chaos, raised on loud music and sleepless nights. Loud guitars, emotional hooks, and DIY punk-rock energy.</p>
          <div className="buttons"><a className="primary" href="#music">Listen now <Zap size={18}/></a><a className="secondary" href="#videos">Watch video <Play size={17}/></a></div>
        </div>
        <div className="hero-art"><img src="/assets/hero.jpg" alt="The Underdogs promo"/><div className="paper"><img src="/assets/heavens-rock-cave.png" alt="Heaven's Rock Cave artwork"/><span>Heaven's Rock Cave</span></div></div>
      </section>

      <section id="music" className="section grid-section">
        <div><h2>Latest releases</h2><div className="underline" /></div>
        <Release img="/assets/heavens-rock-cave.png" title="Heaven's Rock Cave" year="2024" url={links.heavens} />
        <Release img="/assets/gwen.jpg" title="Gwen" year="2023" url={links.gwen} />
        <div className="listen-card"><h3>Listen on</h3><a href={links.spotify}>Spotify</a><a href={links.apple}>Apple Music</a><a href={links.heavens}>DistroKid</a></div>
      </section>

      <section id="videos" className="section videos"><h2>Videos</h2><div className="video-grid"><Video title="Heaven's Rock Cave"/><Video title="Gwen"/><Video title="Live / Rehearsal"/></div></section>

      <section id="photos" className="section photos"><h2>Photos</h2><div className="photo-wall"><img src="/assets/hero.jpg"/><img src="/assets/gwen.jpg"/><img src="/assets/heavens-rock-cave.png"/></div></section>

      <section id="about" className="section about"><div><h2>About The Underdogs</h2><p>The Underdogs are an Italian punk-rock band blending melodic pop-punk hooks, raw guitars, and a strong visual identity. Their songs move between bright, explosive energy and darker, more emotional atmospheres.</p><p className="pink">this is our way out.</p></div></section>

      <section id="contact" className="section contact"><h2>Booking / Press / EPK</h2><p>For booking, press, festival submissions, and collaborations.</p><div className="buttons"><a className="primary" href="mailto:theunderdogs@example.com"><Mail size={18}/> Email us</a><a className="secondary" href={links.instagram}><Instagram size={18}/> Instagram</a></div></section>

      <footer>© 2026 The Underdogs — it's too late to save me</footer>
    </main>
  )
}

function Release({img,title,year,url}){return <article className="release"><img src={img}/><h3>{title}</h3><p>Single • {year}</p><a href={url}>Listen <ExternalLink size={15}/></a></article>}
function Video({title}){return <div className="video"><div className="play"><Play fill="currentColor"/></div><p>{title}</p></div>}

createRoot(document.getElementById('root')).render(<App />);
