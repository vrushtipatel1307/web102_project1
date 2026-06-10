import { useState } from 'react'
import awningImg from '/image.png'
import './App.css'

const trucks = [
  {
    name: 'India Men', cuisine: 'National', location: 'All India',
    rating: '5.0', hot: true,
    img: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=400&q=80',
    desc: 'The flagship Indian men’s cricket squad competing across Test, ODI, and T20 formats.',
    menu: [['Captain: Rohit Sharma', 'Mumbai Indians'], ['Key Batter: Virat Kohli', 'Star Performer'], ['Strike Bowler: Jasprit Bumrah', 'Fast & lethal'], ['World Cups: 2 titles', '1983, 2011']],
    link: 'https://www.bcci.tv',
  },
  {
    name: 'India Women', cuisine: 'Women\'s', location: 'All India',
    rating: '4.9', hot: true,
    img: 'https://images.unsplash.com/photo-1549041748-6baa1c76ec7c?w=400&q=80',
    desc: 'India’s women’s cricket team drawing fans with aggressive batting and world-class spin.',
    menu: [['Captain: Harmanpreet Kaur', 'Power hitter'], ['Top Batter: Smriti Mandhana', 'Elegant strokeplay'], ['Star Bowler: Renuka Singh', 'Match winner'], ['ICC Finalists: 2023', 'Championship contender']],
    link: 'https://www.icc-cricket.com',
  },
  {
    name: 'India U19', cuisine: 'U19', location: 'All India',
    rating: '4.7', hot: false,
    img: 'https://images.unsplash.com/photo-1511174511562-5f7f18b87220?w=400&q=80',
    desc: 'Young Indian prospects building the next generation of national cricket stars.',
    menu: [['Emerging Captain: Yash Dhull', 'Leader of the future'], ['Fast Prospect: Mohit Kumar', 'Pace sensation'], ['Rising Batter: Angkrish Raghuvanshi', 'Big-hitting talent'], ['Recent Title: 2022 U19 World Cup', 'Champions']],
    link: 'https://www.bcci.tv',
  },
  {
    name: 'Mumbai Indians', cuisine: 'IPL', location: 'Mumbai',
    rating: '4.8', hot: true,
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80',
    desc: 'India’s most successful IPL franchise with a fan-first approach and multiple titles.',
    menu: [['Captain: Hardik Pandya', 'Aggressive leader'], ['Superstar: Rohit Sharma', 'Captain cool'], ['Icon: Kieron Pollard', 'Big hitter'], ['Championships: 5 IPL titles', 'Record holders']],
    link: 'https://www.mumbaiindians.com',
  },
  {
    name: 'Chennai Super Kings', cuisine: 'IPL', location: 'Chennai',
    rating: '4.9', hot: true,
    img: 'https://images.unsplash.com/photo-1522212893646-ea5d7f58d8b9?w=400&q=80',
    desc: 'A fan-favorite IPL team known for consistency, leadership, and loyal crowd energy.',
    menu: [['Captain: MS Dhoni', 'Captain fantastic'], ['Batter: Ruturaj Gaikwad', 'Elegant scorer'], ['Bowler: Deepak Chahar', 'Swing specialist'], ['Championships: 5 IPL titles', 'Yellow army']],
    link: 'https://www.chennaisuperkings.com',
  },
  {
    name: 'Kolkata Knight Riders', cuisine: 'IPL', location: 'Kolkata',
    rating: '4.7', hot: false,
    img: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&q=80',
    desc: 'A strong IPL franchise blending power hitting and spin depth in every match.',
    menu: [['Captain: Shreyas Iyer', 'Middle-order backbone'], ['Spinner: Sunil Narine', 'Mystery bowler'], ['All-rounder: Andre Russell', 'Game changer'], ['Championships: 2 IPL titles', 'Purple cap contenders']],
    link: 'https://www.kkr.in',
  },
  {
    name: 'Royal Challengers Bangalore', cuisine: 'IPL', location: 'Bangalore',
    rating: '4.6', hot: true,
    img: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=400&q=80',
    desc: 'A passionate franchise famous for star power, big-hitting batting, and electric support.',
    menu: [['Captain: Faf du Plessis', 'Strategic leader'], ['Batter: Virat Kohli', 'Run machine'], ['Pacer: Mohammed Siraj', 'Death overs ace'], ['Finals: 3 appearances', 'High potential']],
    link: 'https://www.rcb.com',
  },
  {
    name: 'Rajasthan Royals', cuisine: 'IPL', location: 'Jaipur',
    rating: '4.5', hot: false,
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80',
    desc: 'An IPL team known for discovering young talent and delivering spirited match performances.',
    menu: [['Captain: Sanju Samson', 'Explosive batter'], ['Bowler: Yuzvendra Chahal', 'Spin magician'], ['All-rounder: Ravichandran Ashwin', 'Wily veteran'], ['Championship: 2008', 'Original winners']],
    link: 'https://www.rajasthanroyals.com',
  },
  {
    name: 'Sunrisers Hyderabad', cuisine: 'IPL', location: 'Hyderabad',
    rating: '4.4', hot: false,
    img: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&q=80',
    desc: 'A bowling-heavy IPL squad with a reputation for strong pace attacks and tight defense.',
    menu: [['Captain: Pat Cummins', 'Pace leader'], ['Batter: Abhishek Sharma', 'Young stroke-maker'], ['Bowler: Bhuvneshwar Kumar', 'Swing specialist'], ['Title: 2016', 'Golden era']],
    link: 'https://www.sunrisershyderabad.in',
  },
  {
    name: 'Lucknow Super Giants', cuisine: 'IPL', location: 'Lucknow',
    rating: '4.3', hot: false,
    img: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=400&q=80',
    desc: 'A newer IPL franchise bringing fresh talent and powerful batting lineups to the league.',
    menu: [['Captain: KL Rahul', 'Calm anchor'], ['Opener: Quinton de Kock', 'Aggressive starter'], ['Bowler: Avesh Khan', 'Fast wicket-taker'], ['Rising force: 2022 debut', 'Strong fanbase']],
    link: 'https://www.lsgipl.com',
  },
]

const allCuisines = ['All', ...new Set(trucks.map(t => t.cuisine))]

export default function App() {
  const [cuisine, setCuisine] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = cuisine === 'All' ? trucks : trucks.filter(t => t.cuisine === cuisine)

  return (
    <div className="page">
      <img src={awningImg} alt="Awning" className="awning" />

      <h1 className="hero">Indian Cricket Team Favorites</h1>
      <p className="sub">A fan-curated lineup of Indian cricket teams and rising squads.</p>

      <div className="filter-bar">
        {allCuisines.map(c => (
          <button key={c} className={`ftag${cuisine === c ? ' active' : ''}`} onClick={() => setCuisine(c)}>{c}</button>
        ))}
      </div>

      <div className="grid">
        {visible.map((t, i) => (
          <div className="card" key={i}>
            <div className="cimg-wrap">
              <img className="cimg" src={t.img} alt={t.name} loading="lazy" />
            </div>
            <div className="cbody">
              <p className="cname">{t.name}</p>
              <p className="ccuisine">{t.cuisine}</p>
              <p className="cdesc">{t.desc}</p>
              <div className="cmeta">
                <span className="badge">★ {t.rating}</span>
                <span className={`badge${t.hot ? ' hot' : ''}`}>{t.hot ? 'Trending' : 'Local Fave'}</span>
                <span className="badge">{t.location.split('&')[0].trim()}</span>
              </div>
              <div className="cbtns">
                <button className="cbtn primary" onClick={() => setSelected(t)}>View Roster</button>
                <a className="cbtn secondary" href={t.link} target="_blank" rel="noreferrer">Website</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="mclose" onClick={() => setSelected(null)}>✕</button>
            <p className="mtitle">{selected.name}</p>
            <p className="mcuisine">{selected.cuisine} · {selected.location}</p>
            <div className="mdiv" />
            <ul className="mlist">
              {selected.menu.map(([item, price], i) => (
                <li key={i} className="mrow"><span>{item}</span><span className="mprice">{price}</span></li>
              ))}
            </ul>
            <a className="mlink" href={selected.link} target="_blank" rel="noreferrer">Visit {selected.name} Website</a>
          </div>
        </div>
      )}
    </div>
  )
}
