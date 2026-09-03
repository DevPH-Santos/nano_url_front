import { useState } from 'react'
import './app.css'

export default function App() {

  const [ url, setUrl ] = useState('')

  return (

    <>

      <main className="shortener-page">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <nav className="navbar">
          <a href="#" className="brand">
            <span className="brand-mark">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.5 15.5 15.5 8.5M7 12l-2 2a4 4 0 0 0 5.66 5.66l2-2M17 12l2-2a4 4 0 0 0-5.66-5.66l-2 2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>link<span className="brand-accent">ly</span></span>
          </a>

          <div className="nav-links">
            <a href="#features">Recursos</a>
            <a href="#analytics">Analytics</a>
            <a href="#pricing">Preços</a>
          </div>

          <div className="nav-actions">
            <a href="#" className="login-link">Entrar</a>
            <a href="#" className="nav-button">Criar conta</a>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              <span>Encurte. Compartilhe. Converta.</span>
            </div>

            <h1>
              Links menores.
              <br />
              <span>Impacto maior.</span>
            </h1>

            <p className="hero-description">
              Transforme URLs longas em links curtos, elegantes e fáceis de
              compartilhar. Tudo em um só lugar.
            </p>

            <div className="url-card">
              <div className="url-input-wrapper">
                <svg
                  className="input-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>

                <input
                  type="url"
                  placeholder="Cole sua URL aqui..."
                  aria-label="URL para encurtar"
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <button className="shorten-button">
                Encurtar
                <span className="button-arrow">↗</span>
              </button>
            </div>

            <div className="trust-row">
              <div className="avatars">
                <span className="avatar avatar-1">M</span>
                <span className="avatar avatar-2">A</span>
                <span className="avatar avatar-3">R</span>
                <span className="avatar avatar-4">+</span>
              </div>

              <span>
                Usado por <strong>12.000+</strong> criadores e empresas
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="floating-card card-main">
              <div className="card-top">
                <div className="mini-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <span className="live-badge">
                  <i /> Ativo
                </span>
              </div>

              <div className="generated-url">
                <span className="url-domain">lnk.ly/</span>
                <strong>v7k2p</strong>
                <button className="copy-button" aria-label="Copiar link">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect
                      x="9"
                      y="9"
                      width="10"
                      height="10"
                      rx="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M15 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </button>
              </div>

              <div className="original-url">
                exemplo.com/campanha/verao-2027
              </div>

              <div className="card-divider" />

              <div className="card-stats">
                <div>
                  <span>Cliques</span>
                  <strong>2.847</strong>
                </div>

                <div>
                  <span>CTR</span>
                  <strong>18,4%</strong>
                </div>

                <div className="trend">
                  <span>7 dias</span>
                  <strong>+24,8%</strong>
                </div>
              </div>

              <div className="mini-chart">
                <div className="chart-grid">
                  <span />
                  <span />
                  <span />
                </div>

                <svg
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="chartGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#b8ff4d"
                        stopOpacity=".25"
                      />
                      <stop
                        offset="100%"
                        stopColor="#b8ff4d"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 82 C35 75 42 80 68 68 S105 72 130 55 S160 62 188 48 S218 52 244 40 S275 46 298 30 S330 38 355 19 S380 26 400 8 V100 H0 Z"
                    fill="url(#chartGradient)"
                  />

                  <path
                    d="M0 82 C35 75 42 80 68 68 S105 72 130 55 S160 62 188 48 S218 52 244 40 S275 46 298 30 S330 38 355 19 S380 26 400 8"
                    fill="none"
                    stroke="#b8ff4d"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="floating-card card-small card-clicks">
              <span className="small-label">Cliques hoje</span>
              <strong>+384</strong>
              <span className="positive">↑ 12,6%</span>
            </div>

            <div className="floating-card card-small card-location">
              <div className="location-icon">◉</div>
              <div>
                <span className="small-label">Top localização</span>
                <strong>São Paulo, BR</strong>
              </div>
            </div>

            <div className="spark-dot dot-one" />
            <div className="spark-dot dot-two" />
            <div className="spark-dot dot-three" />
          </div>
        </section>

        <section className="stats-section">
          <div className="stat-item">
            <strong>1.2M+</strong>
            <span>links encurtados</span>
          </div>

          <div className="stat-item">
            <strong>99.9%</strong>
            <span>uptime</span>
          </div>

          <div className="stat-item">
            <strong>84M+</strong>
            <span>cliques rastreados</span>
          </div>

          <div className="stat-item">
            <strong>190+</strong>
            <span>países alcançados</span>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <span className="section-kicker">FEITO PARA CRESCER</span>
            <h2>
              Mais que um link.
              <br />
              <span>Uma ferramenta de crescimento.</span>
            </h2>
          </div>

          <div className="bento-grid">
            <article className="feature-card feature-analytics" id="analytics">
              <div className="feature-content">
                <span className="feature-number">01</span>
                <h3>Analytics em tempo real</h3>
                <p>
                  Saiba quem está clicando, de onde vem seu público e quais
                  campanhas realmente funcionam.
                </p>
              </div>

              <div className="analytics-preview">
                <div className="preview-header">
                  <span>Visão geral</span>
                  <span>Últimos 7 dias</span>
                </div>

                <div className="preview-value">18.429</div>

                <div className="preview-bars">
                  <i style={{ height: "34%" }} />
                  <i style={{ height: "52%" }} />
                  <i style={{ height: "42%" }} />
                  <i style={{ height: "68%" }} />
                  <i style={{ height: "58%" }} />
                  <i style={{ height: "82%" }} />
                  <i style={{ height: "72%" }} />
                  <i style={{ height: "96%" }} />
                </div>
              </div>
            </article>

            <article className="feature-card feature-branding">
              <span className="feature-number">02</span>
              <div className="branding-icon">↗</div>
              <h3>Domínio personalizado</h3>
              <p>
                Coloque sua marca em cada link que você compartilhar.
              </p>
              <div className="domain-pill">
                <span>go.</span> suamarca.com
              </div>
            </article>

            <article className="feature-card feature-security">
              <span className="feature-number">03</span>
              <div className="security-visual">
                <div className="security-ring">
                  <span>✓</span>
                </div>
              </div>
              <h3>Seguro por padrão</h3>
              <p>
                HTTPS, proteção contra spam e links maliciosos.
              </p>
            </article>
          </div>
        </section>

        <footer className="footer">
          <a href="#" className="brand">
            <span className="brand-mark">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.5 15.5 15.5 8.5M7 12l-2 2a4 4 0 0 0 5.66 5.66l2-2M17 12l2-2a4 4 0 0 0-5.66-5.66l-2 2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>link<span className="brand-accent">ly</span></span>
          </a>

          <span className="footer-copy">
            © 2027 Linkly. Links que vão mais longe.
          </span>

          <div className="footer-links">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
            <a href="#">Contato</a>
          </div>
        </footer>
      </main>

    </>

  )
}
