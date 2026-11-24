import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const films = [
  {
    number: '01',
    slug: 'mot-tam-hinh-thi-thuc',
    title: 'Một tấm hình thị thực',
    englishTitle: 'A Visa Photo',
    details: 'Đang phát triển · Short · Drama',
    description: 'Một người phụ nữ nông thôn cùng hai đứa con đến thành phố để chụp lại ảnh visa. Cô cố gắng kiểm soát diện mạo của mình, trong khi thế giới xung quanh dần hé lộ sự mong manh của quyền lực và sự chắc chắn.',
    descriptionEn: 'A rural woman and her two children travel to the city to retake a visa photo, obsessively adjusting her appearance, while her world reveals how fragile control and certainty truly are.',
    image: '/Images/A visa photo/Avisaphoto.jpg',
    images: ['/Images/A visa photo/Avisaphoto.jpg', '/Images/A visa photo/Cover.png'],
    awards: 'Top 5 projects at Short Film Incubator – Objectifs and Momo Film Co. (Singapore)',
  },
  {
    number: '02',
    slug: 'diem-bao',
    title: 'Điềm Báo',
    englishTitle: 'Omen',
    details: '2025 · Short · Drama',
    description: 'Tin rằng những giấc mơ nhục dục về một người lạ bí ẩn đang mang lại bất hạnh cho con trai mình như lời thầy bói đã phán, một góa phụ tuyệt vọng bước vào cuộc chiến chống lại chính những khao khát của bản thân, chênh vênh trên ranh giới mong manh giữa mê tín, dục vọng và mặc cảm tội lỗi.',
    descriptionEn: 'Convinced that her erotic dreams about a mysterious stranger are bringing misfortune upon her son, as a fortune teller has foretold, a desperate widow wages a battle against her own desires, teetering on the fragile boundary between superstition, lust, and guilt.',
    image: '/Images/Omen/Omen4.png',
    images: ['/Images/Omen/Omen.png', '/Images/Omen/Omen2.png', '/Images/Omen/Omen3.png', '/Images/Omen/Omen4.png', '/Images/Omen/omen 4.png'],
    awards: 'In competition: 28th Short Shorts Film Festival & Asia (Japan); 20th Jogja-NETPAC Asian Film Festival (Jogjakarta, Indonesia); 16th Bengaluru International Film Festival (Bengaluru, India); 5th VITA ShortS Shanghai Film Festival (Shanghai, China)\nScreened at Cinema D’IDEA (Rome, Italy)',
  },
  {
    number: '03',
    slug: 'duong-cao-toc',
    title: 'Đường Cao Tốc',
    englishTitle: 'Highway – Happy Money',
    details: '2020 · Short · Drama',
    description: 'Sau nhiều tháng không được trả lương, một nhân viên tín dụng trẻ và thiếu kinh nghiệm buộc phải đánh một canh bạc đầy rủi ro để tìm kiếm khách hàng trong địa bàn do các băng nhóm cho vay nặng lãi kiểm soát.',
    descriptionEn: 'After months of going unpaid, a young and inexperienced loan officer is forced to take a risky gamble in search of clients within territory controlled by illegal lending gangs.',
    image: '/Images/Duong Cao Toc/DCT.png',
    images: ['/Images/Duong Cao Toc/DCT.png', '/Images/Duong Cao Toc/DCT2.png', '/Images/Duong Cao Toc/DCT3.png'],
    awards: 'Silver Kite Award for Best Narrative Short (Vietnam)\nShortlisted, Quinzaine des Réalisateurs (France)',
  },
  {
    number: '04',
    slug: 'muon',
    title: 'Muộn',
    englishTitle: 'Ephemera',
    details: '2017 · Short · Drama',
    description: 'Trong một buổi nhậu đêm muộn, một cô gái trẻ bất ngờ trở nên thân mật với một tay giang hồ nguy hiểm ngay trước mắt người bạn trai bất lực, đẩy cả ba vào một hành trình căng thẳng và khó lường suốt đêm đó.',
    descriptionEn: 'During a late-night drinking session, a young woman unexpectedly grows intimate with a dangerous gangster right before the eyes of her helpless boyfriend, setting the three of them on a tense and unpredictable course through the night.',
    image: '/Images/Ephemera/Ephemera.png',
    images: ['/Images/Ephemera/Ephemera.png', '/Images/Ephemera/Ephemera2.png', '/Images/Ephemera/Ephemera3.jpg'],
    awards: 'Golden Lotus Award for Best Short Film (Vietnam)\nOfficial Selection, 28th Singapore International Film Festival\nScreened at: International Documentary & Short Film Festival of Kerala; 7th Nabunturan Independent Film Exhibition (Philippines); SeaShorts International Film Festival (Malaysia); Stadtlichter International Film Festival (Germany); Vietnamese Showcase at Griffith Film School (Australia)',
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
  '/Images/Practice/Nhà Nghỉ.jpeg',
  '/Images/Practice/SGIFF 2018.jpg',
  '/Images/Practice/Vang lua 2.jpg',
  '/Images/Practice/Vang lua.jpg',
  '/Images/Practice/Vang lưa 3.jpg',
  '/Images/Practice/Đường phố.jpg',
]

function Navigation({ activeSection = 'about' }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav aria-label="Main navigation" className={isHome ? 'nav-on-cover' : 'nav-on-paper'}>
      <Link to="/about" className={activeSection === 'about' ? 'active' : ''}>About</Link>
      <Link to="/films/mot-tam-hinh-thi-thuc" className={activeSection === 'upcoming' ? 'active' : ''}>Upcoming</Link>
      <Link to="/#films" className={activeSection === 'films' ? 'active' : ''}>Films</Link>
      <Link to="/#stories" className={activeSection === 'stories' ? 'active' : ''}>Miscellaneous</Link>
      <Link to="/#practice" className={activeSection === 'practice' ? 'active' : ''}>Practice</Link>
      <Link to="/#archive" className={activeSection === 'archive' ? 'active' : ''}>Gallery</Link>
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
            <div className="film-detail-description">
              <small className="scroll-note">Scroll for English</small>
              <p lang="vi">{film.description}</p>
              {film.descriptionEn ? <p className="film-description-en" lang="en">{film.descriptionEn}</p> : null}
            </div>

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
        const title = typeof item === 'string' ? `Gallery image ${index + 1}` : item.title

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
        <small className="scroll-note" aria-label="Cuộn để đọc tiếng Anh">Scroll for English</small>
        <div className="bio-block">
          <p lang="vi">
            Sinh tại Hà Nội, Việt Nam, Hồ Thanh Thảo lấy cảm hứng làm phim từ đời sống thường nhật của con người miền Bắc Việt Nam. Cô quan tâm đến những cảm xúc và suy nghĩ thường không được nói thành lời — những hiện diện tinh tế nhưng dai dẳng trong cuộc sống hằng ngày. Các tác phẩm của cô thường khai thác những khoảnh khắc thỏa hiệp, nơi bản năng bị kìm nén và sự ngây thơ dần phai nhạt.
          </p>
          <p lang="vi">
            Thảo tốt nghiệp Học viện Ngân hàng nhưng bắt đầu tự học làm phim và tích lũy kinh nghiệm thực tế từ khi còn là sinh viên đại học. Sau khi tốt nghiệp, cô chuyển hướng sự nghiệp để theo đuổi làm phim độc lập. Trong suốt quá trình này, cô thường tự viết kịch bản, đồng thời chủ động tìm kiếm nguồn vốn và tập hợp ê-kíp để hiện thực hóa các dự án. Bên cạnh công việc đạo diễn, cô cũng đảm nhận nhiều vai trò khác nhau trong cả phim truyện và các dự án phim tài liệu thương mại.
          </p>
        </div>
        <div className="bio-block bio-block-en">
          <p lang="en">
            Born in Hanoi, Vietnam, Hồ Thanh Thảo draws inspiration for her films from the everyday lives of people in Northern Vietnam. She is interested in emotions and thoughts that often go unspoken — subtle yet persistent presences in daily life. Her work often explores moments of compromise, where instincts are suppressed and innocence gradually fades.
          </p>
          <p lang="en">
            Thảo graduated from the Banking Academy of Vietnam but began teaching herself filmmaking and gaining hands-on experience while still a university student. After graduation, she shifted her career path to pursue independent filmmaking. Throughout the process, she often writes her own scripts, while actively seeking funding and assembling crews to bring her projects to life. Alongside directing, she has also taken on various roles in both narrative films and commercial documentary projects.
          </p>
        </div>
      </div>
    </section>
  )
}

function SupportSection() {
  return (
    <section className="support" id="donate">
      <div className="support-intro">
        <h2>Đồng hành cùng tôi</h2>
        <p>
          Ngân sách của tôi có hạn nhưng bạn có thể cải thiện điều đó.
        </p>
        <p className="support-description-en" lang="en">
          I'm on a budget, but you can change that.
        </p>
      </div>

      <div className="payment payment-qr">
        <img src="/Images/VCB.JPG" alt="QR Vietcombank" className="qr-image" />
      </div>

      <div className="payment">
        <strong>Donate here</strong>
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
      {film.englishTitle ? <span className="film-image-caption">{film.englishTitle}</span> : null}
    </div>
  )
}

function PracticeCrossfade({ images, slot }) {
  const [activeIndex, setActiveIndex] = useState(slot)
  const [previousIndex, setPreviousIndex] = useState(slot)

  useEffect(() => {
    if (images.length < 2) return
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        setPreviousIndex(current)
        return (current + 1) % images.length
      })
    }, 3600 + slot * 600)
    return () => window.clearInterval(timer)
  }, [images.length, slot])

  return (
    <div className="practice-crossfade">
      {previousIndex !== activeIndex && (
        <img
          key={`practice-out-${previousIndex}-${slot}`}
          className="practice-crossfade-image practice-crossfade-outgoing"
          src={images[previousIndex]}
          alt=""
          aria-hidden="true"
        />
      )}
      <img
        key={`practice-in-${activeIndex}-${slot}`}
        className="practice-crossfade-image practice-crossfade-active"
        src={images[activeIndex]}
        alt={`Practice ${slot + 1}`}
      />
    </div>
  )
}

function ArchiveCarousel({ images, onOpen }) {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const timer = window.setInterval(() => {
      const card = track.querySelector('.landing-archive-item')
      if (!card) return
      const gap = 10
      const nextLeft = track.scrollLeft + card.getBoundingClientRect().width + gap
      const maxLeft = track.scrollWidth - track.clientWidth

      if (nextLeft > maxLeft + 2) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: card.getBoundingClientRect().width + gap, behavior: 'smooth' })
      }
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="landing-archive-carousel" ref={trackRef}>
      {images.map((image, index) => (
        <button
          type="button"
          className="landing-archive-item"
          key={`${image}-${index}`}
          onClick={() => onOpen({ title: `Archive ${index + 1}`, image })}
          aria-label={`Xem ảnh gallery ${index + 1} lớn hơn`}
        >
          <img src={image} alt={`Gallery ${index + 1}`} />
        </button>
      ))}
    </div>
  )
}

function HomePage({ onOpenArchiveImage }) {

  return (
    <>
      <main>
        <section className="films" id="films" aria-label="Filmography">
          <h2 className="landing-section-title">Upcoming</h2>
          {films.map((film, index) => (
            <article className={`film-row ${index === 0 ? 'film-featured' : ''}`} key={film.number}>
              <div className="film-copy">
                <span className="film-number">{film.number}</span>
                <h2><Link to={`/films/${film.slug}`}>{film.title}</Link></h2>
                <strong>{film.details}</strong>
                <div className="film-description-bilingual">
                  <small className="scroll-note">Scroll for English</small>
                  <p lang="vi">{film.description}</p>
                  {film.descriptionEn ? <p className="film-description-en" lang="en">{film.descriptionEn}</p> : null}
                </div>
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
            <h2>Miscellaneous</h2>
            {stories.map(([title, year]) => (
              <Link className="text-link" to="/stories" key={title}>
                <span>{title}</span><small>{year}</small>
              </Link>
            ))}
            <Link className="more" to="/stories">Xem tất cả →</Link>
          </div>

          <div id="practice">
            <h2>Practice</h2>
            <div className="practice-grid">
              {[0, 1, 2, 3].map((slot) => (
                <PracticeCrossfade key={slot} images={practiceImages} slot={slot} />
              ))}
            </div>
            <Link className="more" to="/practice">Xem tất cả →</Link>
          </div>

          <div id="archive">
            <h2>Gallery</h2>
            <ArchiveCarousel images={archive} onOpen={onOpenArchiveImage} />
            <Link className="more" to="/archive">Xem tất cả →</Link>
          </div>
        </section>

        <SupportSection />
      </main>
    </>
  )
}

function AboutPage() {
  return (
    <main>
      <IntroSection />
      <SupportSection />
    </main>
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
                <div className="film-description-bilingual">
                  <small className="scroll-note">Scroll for English</small>
                  <p lang="vi">{film.description}</p>
                  {film.descriptionEn ? <p className="film-description-en" lang="en">{film.descriptionEn}</p> : null}
                </div>
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
        <h2>Miscellaneous</h2>
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
            <img key={image} src={image} alt={`Practice ${index + 1}`} />
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
        <h2>Gallery</h2>
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
  const isDetailPage = location.pathname === '/about' || location.pathname.startsWith('/films/') || ['/stories', '/practice', '/archive'].includes(location.pathname)

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.slice(1)
      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (location.pathname === '/about') {
      setActiveSection('about')
      return
    }
    if (location.pathname === '/practice') {
      setActiveSection('practice')
      return
    }
    if (location.pathname === '/archive') {
      setActiveSection('archive')
      return
    }
    if (location.pathname === '/stories') {
      setActiveSection('stories')
      return
    }
    if (location.pathname.startsWith('/films/')) {
      setActiveSection(location.pathname === '/films/mot-tam-hinh-thi-thuc' ? 'upcoming' : 'films')
      return
    }
    if (location.pathname !== '/') return

    const sectionIds = ['films', 'stories', 'practice', 'archive']
    const updateActiveSection = () => {
      let current = 'films'
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
        <Route path="/about" element={<AboutPage />} />
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
        <a
          className="footer-instagram"
          href="https://www.instagram.com/thaoho2106/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram ↗
        </a>
      </footer>
    </>
  )
}

export default App