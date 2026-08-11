{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState, useEffect \} from 'react';\
import './App.css';\
\
export default function App() \{\
  const [content, setContent] = useState(null);\
\
  useEffect(() => \{\
    fetch('/data/content.json')\
      .then((res) => res.json())\
      .then((data) => setContent(data))\
      .catch((err) => console.error('L\uc0\u7895 i n\u7841 p d\u7919  li\u7879 u:', err));\
  \}, []);\
\
  if (!content) return <div style=\{\{ padding: '40px', textAlign: 'center' \}\}>Loading...</div>;\
\
  const \{ hero, films, stories, archive \} = content;\
\
  return (\
    <div>\
      <section className="hero-section" style=\{\{ backgroundImage: `url($\{hero.hero_img\})` \}\}>\
        <div className="hero-overlay"></div>\
        <div className="hero-header">\
          <div>\
            <h1 className="brand-name">\{hero.name\}</h1>\
            <p className="brand-sub">\{hero.sub\}</p>\
          </div>\
          <nav className="hero-nav">\
            <a href="#about">Gi\uc0\u7899 i thi\u7879 u</a>\
            <a href="#films">Phim</a>\
            <a href="#stories">C\'e2u chuy\uc0\u7879 n</a>\
            <a href="#notes">T\uc0\u7853 p t\'e0nh</a>\
            <a href="#archive">Archive</a>\
            <a href="#support" className="highlight-red">\uc0\u272 \u7891 ng h\'e0nh</a>\
          </nav>\
        </div>\
        <div className="hero-content">\
          <h2 className="hero-tagline">\{hero.tagline\}</h2>\
          <p className="hero-still-note">\{hero.still_note\}</p>\
        </div>\
      </section>\
\
      <section id="films" className="films-section">\
        \{films.map((film) => \{\
          const isFeatured = film.status === 'IN DEVELOPMENT';\
          return (\
            <div key=\{film.id\} className="film-item">\
              <div>\
                <p className="film-num">\{film.id\}</p>\
                <a href=\{`#film-$\{film.id\}`\} className="film-title-link">\
                  <h3 className="film-title">\
                    \{film.title_vi\} \{film.title_en && <span>(\{film.title_en\})</span>\}\
                  </h3>\
                </a>\
                \{film.status && <p className="film-status">\{film.status\}</p>\}\
                <p className="film-meta">\{film.year && `$\{film.year\} \'95 `\}\{film.type\}</p>\
                \{film.note && <p style=\{\{ fontStyle: 'italic', color: '#555', marginBottom: '8px' \}\}>\{film.note\}</p>\}\
                <p className="film-desc">\{film.desc\}</p>\
              </div>\
              <div>\
                <a href=\{`#film-$\{film.id\}`\} className=\{`film-img-anchor $\{isFeatured ? 'featured-img' : 'standard-img'\}`\}>\
                  <img src=\{film.image\} alt=\{film.title_vi\} />\
                </a>\
              </div>\
            </div>\
          );\
        \})\}\
      </section>\
\
      <section className="bottom-grid">\
        <div id="stories">\
          <h4 className="sec-title">C\'e2u Chuy\uc0\u7879 n</h4>\
          \{stories.map((item, i) => (\
            <a key=\{i\} href=\{`#story-$\{i\}`\} className="list-row-link">\
              <span>\{item.title\}</span>\
              <span className="year">\{item.year\}</span>\
            </a>\
          ))\}\
        </div>\
        <div id="notes">\
          <h4 className="sec-title">T\uc0\u7853 p T\'e0nh</h4>\
          <div className="gallery-grid">\
            <a href="#gallery-1"><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=300" alt="Note 1" /></a>\
            <a href="#gallery-2"><img src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=300" alt="Note 2" /></a>\
            <a href="#gallery-3"><img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=300" alt="Note 3" /></a>\
            <a href="#gallery-4"><img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=300" alt="Note 4" /></a>\
            <a href="#gallery-5"><img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=300" alt="Note 5" /></a>\
            <a href="#gallery-6"><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=300" alt="Note 6" /></a>\
          </div>\
        </div>\
        <div id="archive">\
          <h4 className="sec-title">Archive</h4>\
          \{archive.map((item, i) => (\
            <a key=\{i\} href=\{`#archive-$\{i\}`\} className="list-row-link">\
              <span>\{item.title\}</span>\
              <span className="year">\{item.year\}</span>\
            </a>\
          ))\}\
        </div>\
      </section>\
\
      <section id="support" className="support-section">\
        <div>\
          <h4 className="sec-title red-title">\uc0\u272 \u7890 NG H\'c0NH C\'d9NG A VISA PHOTO</h4>\
          <p style=\{\{ color: '#555', lineHeight: '1.7' \}\}>\
            A Visa Photo hi\uc0\u7879 n \u273 ang trong qu\'e1 tr\'ecnh ph\'e1t tri\u7875 n. N\u7871 u b\u7841 n mu\u7889 n \u273 \u7891 ng h\'e0nh c\'f9ng d\u7921  \'e1n ho\u7863 c nh\u7919 ng b\u7897  phim ti\u7871 p theo, b\u7841 n c\'f3 th\u7875  h\u7895  tr\u7907  b\u7857 ng m\u7897 t trong c\'e1c h\'ecnh th\u7913 c d\u432 \u7899 i \u273 \'e2y.\
          </p>\
        </div>\
        <div className="support-methods">\
          <div className="qr-box">\
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=whattrueechoes" alt="QR" className="qr-code" />\
            <div>\
              <p style=\{\{ fontWeight: '600', fontSize: '11px' \}\}>Chuy\uc0\u7875 n kho\u7843 n n\u7897 i \u273 \u7883 a</p>\
              <p style=\{\{ color: '#666', fontSize: '10px' \}\}>Qu\'e9t m\'e3 QR</p>\
              <p style=\{\{ color: '#666', fontSize: '10px', marginTop: '4px' \}\}>Ch\uc0\u7911  TK: NGUYEN [H\u7885  t\'ean]</p>\
            </div>\
          </div>\
          <div className="wise-box">\
            <p style=\{\{ fontWeight: '600', fontSize: '11px' \}\}>Qu\uc0\u7889 c t\u7871  qua Wise</p>\
            <p style=\{\{ color: '#666', fontSize: '10px' \}\}>D\'e0nh cho \uc0\u273 \u7889 i t\'e1c & Qu\u7929  qu\u7889 c t\u7871 </p>\
            <a href="https://wise.com" target="_blank" rel="noreferrer" className="wise-link">\
              wise.com/pay/me/hothanhthao \uc0\u8599 \
            </a>\
          </div>\
        </div>\
      </section>\
\
      <footer id="about">\
        <p>\'a9 2025 H\uc0\u7891  Thanh Th\u7843 o \'97 All rights reserved.</p>\
        <div>\
          <a href="#">Instagram</a>\
          <a href="#">Facebook</a>\
          <a href="mailto:contact@whattrueechoes.app">Email</a>\
        </div>\
      </footer>\
    </div>\
  );\
\}}