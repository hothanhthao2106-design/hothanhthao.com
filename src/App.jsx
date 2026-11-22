import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const films = [
  {
    number: '01',
    slug: 'mot-tam-hinh-thi-thuc',
    title: 'Một tấm hình thị thực',
    details: 'Đang phát triển · Phim ngắn · Tìm kiếm đối tác tài trợ và sản xuất.',
    description: 'Một người phụ nữ nông thôn cùng hai đứa con đến thành phố để chụp lại ảnh visa. Tin rằng tấm ảnh là nguyên nhân khiến hồ sơ trước bị từ chối, cô cố kiểm soát tối đa diện mạo của mình, trong khi thế giới xung quanh ngày một trở nên mong manh và bất định.',
    image: '/Images/A visa photo/Avisaphoto.jpg',
    images: ['/Images/A visa photo/Avisaphoto.jpg', '/Images/A visa photo/Cover.png'],
    awards: '',
  },
  {
    number: '02',
    slug: 'diem-bao',
    title: 'Điềm Báo',
    details: '2025 · Phim ngắn · Drama',
    description: 'Cho rằng những giấc mơ nhục cảm về người đàn ông xa lạ chính là nguồn cơn đem lại vận rủi cho con trai như lời thầy bói phán, một góa phụ tuyệt vọng lao vào cuộc chiến chống lại ham muốn của bản thân, đứng trước ranh giới mong manh của mê tín, dục vọng và tội lỗi',
    image: '/Images/Omen/Omen4.png',
    images: ['/Images/Omen/Omen.png', '/Images/Omen/Omen2.png', '/Images/Omen/Omen3.png', '/Images/Omen/Omen4.png', '/Images/Omen/omen 4.png'],
    awards: 'Lựa chọn chính thức · SSFF & ASIA\nLựa chọn chính thức · Jogja-NETPAC\nLựa chọn chính thức · Bengaluru International Film Festival',
  },
  {
    number: '03',
    slug: 'duong-cao-toc',
    title: 'Đường Cao Tốc',
    details: '2020 · Phim ngắn · Drama',
    description:
      'Sau nhiều tháng không nhận được lương, một nhân viên tín dụng trẻ, thiếu kinh nghiệm buộc phải liều mình tìm kiếm khách hàng ngay trong địa bàn do các băng nhóm tín dụng đen kiểm soát.ệc.',
    image: '/Images/Đường Cao Tốc/DCT.png',
    images: ['/Images/Đường Cao Tốc/DCT.png', '/Images/Đường Cao Tốc/DCT2.png', '/Images/Đường Cao Tốc/DCT3.png'],
    awards: 'Giải Cánh Diều Bạc\nDanh sách rút gọn · Quinzaine des Réalisateurs',
  },
  {
    number: '04',
    slug: 'muon',
    title: 'Muộn',
    details: '2017 · Phim ngắn · Drama',
    description:
      'Trong một buổi nhậu đêm khuya, một cô gái trẻ bất ngờ trở nên thân mật với một tay giang hồ knguy hiểm ngay trước mắt người bạn trai bất lực của mình, khiến mối quan hệ giữa ba người dần trượt vào một đêm đầy căng thẳng và khó lường.',
    image: '/Images/Ephemera/Ephemera.png',
    images: ['/Images/Ephemera/Ephemera.png', '/Images/Ephemera/Ephemera2.png', '/Images/Ephemera/Ephemera3.jpg'],
    awards: 'Giải Búp Sen Vàng\nLựa chọn chính thức · Singapore International Film Festival\nTrình chiếu tại: Liên hoan phim Tài liệu & Ngắn Quốc tế Kerala; 7th NABIFIMEX (Philippines); SeaShorts International Film Festival (Malaysia); Stadtlichter International Film Festival (Đức); Vietnamese Showcase tại Griffith Film School (Úc)',
  },
]

const stories = [
  ['Làm phim với rất ít tiền', '2026'],
  ['Điều còn sót lại sau mỗi bộ phim', '2025'],
  ['Vì sao tôi quay nhiều cảnh đêm', '2024'],
  ['Một ngày ở Jogja', '2024'],
  ['Những bộ phim đã nuôi tôi', '2023'],
]

const archive = [
  '/Images/Archive/274056339_2997416303922233_7582249236786053186_n.jpeg',
  '/Images/Archive/29514_112549345452505_2308406_n.jpeg',
  '/Images/Archive/Onset_culaocham.jpg',
  '/Images/Archive/44528254_2684287341612013_5180671027964805120_n.jpeg',
  '/Images/Archive/5511bbca4de919f0d685d721a9c34c84.JPG',
  '/Images/Archive/5713310c1f628273d8b7bc52b6fce612.JPEG',
  '/Images/Archive/DUG_5884 copy.jpeg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05677.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05689.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05690.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05756.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05772.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05778.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05783.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05789.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05791.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05792.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05799.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05802.jpg',
  '/Images/Archive/JAFF20-D7-@ASHRAFALKHAWARIZMI-RAP05808.jpg',
  '/Images/Archive/JAFF20-D8-@ASHRAFALKHAWARIZMI-RAP06389.jpg',
  '/Images/Archive/JAFF20-D8-@ASHRAFALKHAWARIZMI-RAP06400.jpg',
  '/Images/Archive/JAFF20-D8-@ASHRAFALKHAWARIZMI-RAP06405.jpg',
  '/Images/Archive/JAFF20-D8-@ASHRAFALKHAWARIZMI-RAP06426.jpg',
  '/Images/Archive/JAFF20-D8-@ASHRAFALKHAWARIZMI-RAP06432.jpg',
  '/Images/Archive/JAFF20-D8-@ASHRAFALKHAWARIZMI-RAP06435.jpg',
  '/Images/Archive/c2d0e749-f488-4909-b804-cea2cbf6a09a.jpeg',
  '/Images/Archive/poster 2 DIEM BAO tiếng anh 2.jpeg',
]

const landingArchiveSlides = archive.slice(-5)

const practiceImages = [
  '/Images/Practice/47684617_2788984664475613_8154136939218337792_n.jpg',
  '/Images/Practice/Nha Ma 2.jpg',
  '/Images/Practice/Nha Ma.jpg',
  '/Images/Practice/Nhà Nghỉ.jpeg',
  '/Images/Practice/SGIFF 2018.jpg',
  '/Images/Practice/Vang lua 2.jpg',
  '/Images/Practice/Vang lua.jpg',
  '/Images/Practice/Vang lưa 3.jpg',
  '/Images/Practice/Đường phố.jpg',
]

function Navigation({ activeSection = 'about' }) {
  return (
    <nav aria-label="Main navigation" className={activeSection === 'about' ? 'nav-on-cover' : 'nav-on-paper'}>
      <Link to="/#about" className={activeSection === 'about' ? 'active' : ''}>About</Link>
      <Link to="/#films" className={activeSection === 'films' ? 'active' : ''}>Films</Link>
      <Link to="/#stories" className={activeSection === 'stories' ? 'active' : ''}>Stories</Link>
      <Link to="/practice" className={activeSection === 'practice' ? 'active' : ''}>Practice</Link>
      <Link to="/archive" className={activeSection === 'archive' ? 'active' : ''}>Archive</Link>
    </nav>
  )
}

function SiteHeader({ isDetailPage = false }) {
  return (
    <header className={`hero ${isDetailPage ? 'hero-detail' : ''}`} id="top">
      <div className="hero-name">
        <Link to="/">Hồ Thanh Thảo</Link>
        <em>Filmmaker</em>
      </div>


      {!isDetailPage && (
        <div className="hero-quote">
          <p className="tagline">What is true,<br />echoes.</p>
          <small>STILL FROM ĐIỀM BÁO (OMEN), 2025</small>
        </div>
      )}
    </header>
  )
}

function FilmDetailPage() {
  const { filmSlug } = useParams()
  const film = films.find((item) => item.slug === filmSlug)

  if (!film) {
    return (
      <main className="page-shell">
        <section className="page-section">
          <h2>Không tìm thấy phim</h2>
          <Link to="/" className="back-link">← Quay lại</Link>
        </section>
      </main>
    )
  }

  return (
    <main className="page-shell">
      <section className="page-section film-detail-shell">
        <Link to="/" className="back-link">← Quay lại</Link>

        <div className="film-detail-hero">
          <FilmCrossfade film={film} className="film-detail-crossfade" />
        </div>

        <div className="film-detail">
          <div className="film-detail-copy">
            <span className="film-number">{film.number}</span>
            <h2>{film.title}</h2>
            <strong>{film.details}</strong>
            <p>{film.description}</p>

            {film.awards ? (
              <div className="film-awards film-awards-detail">
                {film.awards.split('\n').map((award, index) => (
                  <span key={`${award}-${index}`}>{award}</span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  )
}

function ArchiveGallery({ items = archive, compact = false, onSelect }) {
  return (
    <div className={`archive-list ${compact ? 'archive-list-compact' : 'page-archive-list'}`}>
      {items.map((item, index) => {
        const image = typeof item === 'string' ? item : item.image
        const title = typeof item === 'string' ? `Archive image ${index + 1}` : item.title

        return (
          <button
            type="button"
            className={`archive-item ${compact ? 'archive-item-compact' : ''}`}
            key={`${title}-${index}`}
            onClick={() => onSelect?.({ title, image })}
            aria-label={`Xem ảnh ${title}`}
          >
            <img className="archive-thumb" src={image} alt={title} />
          </button>
        )
      })}
    </div>
  )
}

function IntroSection() {
  return (
    <section id="about" className="intro-section">
      <div className="intro-media">
        <img
          src="/Images/MKE09956-3.jpg"
          alt="Hồ Thanh Thảo"
          className="intro-image"
        />
      </div>

      <div className="intro-content">
        <p>
          Sinh ra tại Hà Nội, Việt Nam, Hồ Thanh Thảo tìm thấy điểm khởi đầu cho
          những bộ phim của mình trong đời sống thường nhật của người dân miền
          Bắc. Cô quan tâm đến những cảm xúc và suy nghĩ ít khi được gọi
          tên — âm thầm nhưng dai dẳng trong đời sống thường nhật. Thảo thường
          tìm đến những khoảnh khắc thỏa hiệp, nơi bản năng bị đè nén và sự hồn
          nhiên dần phai nhạt.
        </p>
        <p>
          Thảo tốt nghiệp Học viện Ngân hàng, nhưng đã bắt đầu tự học và thực
          hành làm phim từ khi còn là sinh viên. Sau khi tốt nghiệp, cô chuyển
          hướng để theo đuổi con đường làm phim độc lập. Trong quá trình làm
          phim, Thảo thường tự viết kịch bản, đồng thời chủ động tìm kiếm nguồn
          tài chính và xây dựng ê-kíp để hiện thực hóa các dự án của mình. Bên
          cạnh công việc đạo diễn, cô còn tham gia vào nhiều vị trí khác nhau
          trong các dự án phim truyện và phim tài liệu thương mại.
        </p>
      
      </div>
    </section>
  )
}

function FilmCrossfade({ film, className = '' }) {
  const images = film.images?.length ? film.images : [film.image]
  const [activeIndex, setActiveIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        setPreviousIndex(current)
        return (current + 1) % images.length
      })
    }, 4200)
    return () => window.clearInterval(timer)
  }, [images.length])

  return (
    <div className={`film-crossfade ${className}`}>
      {previousIndex !== activeIndex && (
        <img
          key={`film-out-${previousIndex}`}
          className="film-crossfade-image film-crossfade-outgoing"
          src={images[previousIndex]}
          alt=""
          aria-hidden="true"
        />
      )}
      <img
        key={`film-in-${activeIndex}`}
        className="film-crossfade-image film-crossfade-active"
        src={images[activeIndex]}
        alt={film.title}
      />
    </div>
  )
}

function ArchiveCrossfade({ images, offset, slot, onOpen }) {
  const nextIndex = (offset + slot * 3) % images.length
  const [activeIndex, setActiveIndex] = useState(nextIndex)
  const [previousIndex, setPreviousIndex] = useState(nextIndex)

  useEffect(() => {
    if (nextIndex === activeIndex) return
    setPreviousIndex(activeIndex)
    setActiveIndex(nextIndex)
  }, [nextIndex, activeIndex])

  const activeImage = images[activeIndex]
  const previousImage = images[previousIndex]

  return (
    <button
      type="button"
      className="landing-archive-item archive-crossfade"
      onClick={() => onOpen({ title: `Archive ${slot + 1}`, image: activeImage })}
      aria-label={`Xem ảnh archive ${slot + 1} lớn hơn`}
    >
      {previousIndex !== activeIndex && (
        <img
          key={`outgoing-${previousIndex}-${slot}`}
          className="archive-image archive-image-outgoing"
          src={previousImage}
          alt=""
          aria-hidden="true"
        />
      )}
      <img
        key={`active-${activeIndex}-${slot}`}
        className="archive-image archive-image-active"
        src={activeImage}
        alt={`Archive landscape ${slot + 1}`}
      />
    </button>
  )
}

function HomePage({ onOpenArchiveImage }) {
  const [archiveOffset, setArchiveOffset] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setArchiveOffset((current) => (current + 1) % archive.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
      <main>
        <IntroSection />
        <section className="films" id="films" aria-label="Filmography">
          {films.map((film, index) => (
            <article className={`film-row ${index === 0 ? 'film-featured' : ''}`} key={film.number}>
              <div className="film-copy">
                <span className="film-number">{film.number}</span>
                <h2><Link to={`/films/${film.slug}`}>{film.title}</Link></h2>
                <strong>{film.details}</strong>
                <p>{film.description}</p>
              </div>

              <Link to={`/films/${film.slug}`} className="film-image-link">
                <FilmCrossfade
                  film={film}
                  className={film.title === 'Đường Cao Tốc' ? 'film-image-no-frame' : ''}
                />
              </Link>

              <p className="film-awards">
                {film.awards.split('\n').map((award, index) => (
                  <span key={`${award}-${index}`}>{award}</span>
                ))}
              </p>
            </article>
          ))}
        </section>

        <section className="three-columns">
          <div id="stories">
            <h2>Stories</h2>
            {stories.map(([title, year]) => (
              <Link className="text-link" to="/stories" key={title}>
                <span>{title}</span><small>{year}</small>
              </Link>
            ))}
            <Link className="more" to="/stories">Xem tất cả →</Link>
          </div>

          <div id="archive">
            <h2>Archive</h2>
            <div className="landing-archive-grid">
              {[0, 1, 2].map((slot) => (
                <ArchiveCrossfade
                  key={slot}
                  images={archive}
                  offset={archiveOffset}
                  slot={slot}
                  onOpen={onOpenArchiveImage}
                />
              ))}
            </div>
            <Link className="more" to="/archive">Xem tất cả →</Link>
          </div>

          <div id="practice">
            <h2>Tập tành</h2>
            <div className="practice-grid">
              {practiceImages.map((image, index) => (
                <img key={index} src={image} alt="" />
              ))}
            </div>
            <Link className="more" to="/practice">Xem tất cả →</Link>
          </div>
        </section>

        <section className="support" id="donate">
          <div className="support-intro">
            <h2>Đồng hành cùng dự án</h2>
            <p>
              Dự án đang trong quá trình phát triển. Nếu bạn muốn đồng hành cùng
              những bộ phim tiếp theo, hãy hỗ trợ bằng một cách nhỏ dưới đây.
            </p>
          </div>

          <div className="payment payment-qr">
            <img src="/Images/VCB.JPG" alt="QR Vietcombank" className="qr-image" />
          </div>

          <div className="payment">
            <strong>Chuyển khoản trong nước</strong>
            <p>Chủ tài khoản: HO THANH THAO</p>
            <p>Số tài khoản: 0011004290779</p>
            <p>Ngân hàng: Vietcombank</p>
            <p>SWIFT: BFTVVNVX</p>
          </div>

          <div className="payment">
            <strong>Contact</strong>
            <p>Email: hothanhthao2106@gmail.com</p>
          </div>
        </section>
      </main>
    </>
  )
}

function FilmsPage() {
  return (
    <main className="page-shell">
      <section className="page-section">
        <h2>Phim</h2>
        <div className="page-list">
          {films.map((film) => (
            <article className="page-card film-page-card" key={film.number}>
              <FilmCrossfade film={film} className="page-card-crossfade" />
              <div>
                <span className="film-number">{film.number}</span>
                <h3>{film.title}</h3>
                <strong>{film.details}</strong>
                <p>{film.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function StoriesPage() {
  return (
    <main className="page-shell">
      <section className="page-section">
        <h2>Câu chuyện</h2>
        <div className="story-list page-story-list">
          {stories.map(([title, year]) => (
            <Link className="text-link story-page-item" to="/" key={title}>
              <span>{title}</span>
              <small>{year}</small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

function PracticePage() {
  return (
    <main className="page-shell">
      <section className="page-section">
        <h2>Practice</h2>
        <div className="practice-grid page-practice-grid">
          {practiceImages.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </div>
      </section>
    </main>
  )
}

function ArchivePage({ onOpenArchiveImage }) {
  return (
    <main className="page-shell">
      <section className="page-section">
        <h2>Archive</h2>
        <ArchiveGallery items={archive} onSelect={onOpenArchiveImage} />
      </section>
    </main>
  )
}

function SupportPage() {
  return (
    <main className="page-shell">
      <section className="page-section support-page">
        <h2>Đồng hành cùng dự án</h2>
        <div className="support-grid-page">
          <div className="payment payment-qr">
            <img src="/Images/VCB.JPG" alt="QR Vietcombank" className="qr-image" />
          </div>

          <div className="payment">
            <strong>Chuyển khoản trong nước</strong>
            <p>Chủ tài khoản: HO THANH THAO</p>
            <p>Số tài khoản: 0011004290779</p>
            <p>Ngân hàng: Vietcombank</p>
            <p>SWIFT: BFTVVNVX</p>
          </div>

          <div className="payment">
            <strong>Hỗ trợ khác</strong>
            <p>Liên hệ để trao đổi phương thức hỗ trợ phù hợp.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  const location = useLocation()
  const [selectedArchiveImage, setSelectedArchiveImage] = useState(null)
  const [activeSection, setActiveSection] = useState('about')
  const isDetailPage = location.pathname.startsWith('/films/') || location.pathname === '/archive' || location.pathname === '/practice'

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.slice(1)
      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (location.pathname === '/practice') {
      setActiveSection('practice')
      return
    }
    if (location.pathname === '/archive') {
      setActiveSection('archive')
      return
    }
    if (location.pathname !== '/') return

    const sectionIds = ['about', 'films', 'stories', 'practice', 'archive']
    const updateActiveSection = () => {
      let current = 'about'
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId)
        if (section && section.getBoundingClientRect().top <= 180) {
          current = sectionId
        }
      }
      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [location.pathname])

  return (
    <>
      <SiteHeader isDetailPage={isDetailPage} />
      <Navigation activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<HomePage onOpenArchiveImage={setSelectedArchiveImage} />} />
        <Route path="/films/:filmSlug" element={<FilmDetailPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/archive" element={<ArchivePage onOpenArchiveImage={setSelectedArchiveImage} />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>

      {selectedArchiveImage && (
        <div className="archive-lightbox" onClick={() => setSelectedArchiveImage(null)} role="dialog" aria-modal="true">
          <div className="archive-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="archive-lightbox-close"
              onClick={() => setSelectedArchiveImage(null)}
              aria-label="Đóng ảnh"
            >
              ×
            </button>
            <img src={selectedArchiveImage.image} alt={selectedArchiveImage.title} />
          </div>
        </div>
      )}

      <footer>
        <span>© 2026 Hồ Thanh Thảo</span>
  
      </footer>
    </>
  )
}

export default App