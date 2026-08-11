const films = [
  {
    title: 'Một tấm hình thị thực',
    english: 'A Visa Photo',
    meta: '2026 · Short film · In development',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85',
  },
  {
    title: 'Điềm Báo',
    english: 'Omen',
    meta: '2025 · Short film',
    image:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=85',
  },
  {
    title: 'Đường Cao Tốc',
    english: 'Highway Happy Money',
    meta: '2024 · Short film',
    image:
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=85',
  },
  {
    title: 'Muộn',
    english: 'Ephemera',
    meta: '2023 · Short film',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=85',
  },
]

const archive = [
  ['2026', 'Một tấm hình thị thực — Development diary #01'],
  ['2025', 'Điềm Báo — SSFF & ASIA'],
  ['2025', 'Jogja-NETPAC Asian Film Festival'],
  ['2024', 'Photo notebook'],
]

function App() {
  return (
    <>
      <header className="hero" id="top">
        <nav>
          <a className="brand" href="#top">HỒ THANH THẢO</a>
          <div className="nav-links">
            <a href="#about">Giới thiệu</a>
            <a href="#films">Phim</a>
            <a href="#stories">Câu chuyện</a>
            <a href="#practice">Tập tành</a>
            <a href="#archive">Archive</a>
            <a href="#support">Đồng hành</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">FILMMAKER · VIETNAM</p>
          <h1>Hồ<br />Thanh Thảo</h1>
          <p className="quote">“Trong yên lặng,<br />sự thật vang lên.”</p>
        </div>

        <a className="scroll" href="#about">Cuộn để khám phá ↓</a>
      </header>

      <main>
        <section className="intro section" id="about">
          <p className="eyebrow">01 — GIỚI THIỆU</p>
          <div>
            <h2>Những câu chuyện<br />ở lại thật lâu.</h2>
            <p className="body-copy">
              Hồ Thanh Thảo là một nhà làm phim độc lập. Thực hành của cô
              đi qua ký ức, sự thân mật và những khoảnh khắc nhỏ bé của đời sống.
            </p>
          </div>
        </section>

        <section className="section films" id="films">
          <div className="section-heading">
            <p className="eyebrow">02 — FILMOGRAPHY</p>
            <h2>Phim</h2>
          </div>

          <div className="film-list">
            {films.map((film, index) => (
              <article className="film-card" key={film.english}>
                <img src={film.image} alt={film.title} />
                <div className="film-info">
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{film.title}</h3>
                    <p className="film-english">{film.english}</p>
                    <p>{film.meta}</p>
                  </div>
                  <a href="#support" aria-label={`Xem ${film.title}`}>↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stories section" id="stories">
          <p className="eyebrow">03 — CÂU CHUYỆN</p>
          <h2>Ghi chép<br />từ thực hành.</h2>
          <div className="story-list">
            <a href="#archive"><span>01</span> Những hình ảnh không chịu biến mất <b>↗</b></a>
            <a href="#archive"><span>02</span> Làm phim từ một cơn mưa <b>↗</b></a>
            <a href="#archive"><span>03</span> Về những nơi ta muốn trở về <b>↗</b></a>
          </div>
        </section>

        <section className="practice section" id="practice">
          <div className="section-heading">
            <p className="eyebrow">04 — TẬP TÀNH</p>
            <h2>Hình ảnh<br />và ghi chú.</h2>
          </div>
          <div className="practice-grid">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85" alt="" />
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=85" alt="" />
            <img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85" alt="" />
          </div>
        </section>

        <section className="archive section" id="archive">
          <p className="eyebrow">05 — ARCHIVE</p>
          <h2>Nhật ký<br />và dấu vết.</h2>
          <div className="archive-list">
            {archive.map(([year, title]) => (
              <a href="#top" key={title}><span>{year}</span><span>{title}</span><b>↗</b></a>
            ))}
          </div>
        </section>

        <section className="support section" id="support">
          <p className="eyebrow">06 — ĐỒNG HÀNH</p>
          <h2>Cùng làm nên<br />những bộ phim.</h2>
          <a className="button" href="mailto:hello@example.com">Liên hệ hợp tác ↗</a>
        </section>
      </main>

      <footer>
        <span>© 2026 HỒ THANH THẢO</span>
        <span>INSTAGRAM · EMAIL</span>
      </footer>
    </>
  )
}

export default App