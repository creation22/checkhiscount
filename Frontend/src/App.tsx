import { useState, useEffect } from 'react'

// Real user images from public folder
const users = [
  { name: '@clavicular', img: '/clavicular.jpg' },
  { name: '@kalash', img: '/kalash.jpg' },
  { name: '@kohei', img: '/kohei.jpg' },
  { name: '@roy_cluely', img: '/roy_cluely.jpg' },
  { name: '@shydev', img: '/shydev.jpg' },
  { name: '@ethantianyiqi', img: '/ethantianyiqi.jpg' },
  { name: '@jason', img: '/jason.jpg' },
  { name: '@tenzz', img: '/tenzz.jpg' },
]

const stackedImages = users.map(u => u.img)

// Extract username from Instagram URL or @handle
const extractUsername = (input: string): string => {
  const trimmed = input.trim()
  if (trimmed.startsWith('@')) return trimmed.slice(1)
  const match = trimmed.match(/instagram\.com\/([a-zA-Z0-9._]{1,30})/)
  return match ? match[1] : trimmed
}

// ===== RESULTS PAGE =====
function ResultsPage({ username, onBack }: { username: string; onBack: () => void }) {
  return (
    <div className="h-screen flex flex-col items-center bg-[#f5f0e8] overflow-hidden px-4">

      {/* Page heading */}
      <h1
        className="mt-4 mb-1 text-center tracking-tighter text-black"
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
        }}
      >
        BODY COUNT CHECKER
      </h1>

      {/* Back + results for */}
      <div className="w-full max-w-2xl flex items-center gap-3 mb-2">
        <button
          onClick={onBack}
          className="px-3 py-1.5 bg-black text-white text-[11px] font-bold border-[2px] border-black shadow-[2px_2px_0px_0px_#000] cursor-pointer shrink-0 transition-all duration-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000]"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          ← BACK
        </button>
        <p
          className="flex-1 text-center text-[13px] text-[#555] font-bold"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          results for @{username}
        </p>
      </div>

      {/* Verdict badge */}
      <div className="mb-3 bg-black text-[#00FF88] px-4 py-1 border-[2px] border-black shadow-[3px_3px_0px_0px_#000] -rotate-1">
        <span
          className="font-bold text-[11px] tracking-[0.15em] uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          ✅ VERDICT: HE REALLY LOVES YOU
        </span>
      </div>

      {/* Message card — scrollable inside if needed */}
      <div className="w-full max-w-2xl flex-1 min-h-0 mb-3 flex items-center">
        <div className="w-full bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_#000] p-4 md:p-6 overflow-y-auto max-h-full">
          <div
            className="text-[12px] md:text-[13px] leading-[1.7] text-[#222] text-center"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <p className="mb-3">
              Girl, be real for a second. Everyone has a past. You didn't meet <span className="font-bold text-black">@{username}</span> at the beginning of his life you met him while he was already <span className="font-bold text-black">leveling up</span>. Right now he's <span className="font-bold text-black">locked in</span>, focusing on <span className="font-bold text-black">moneymaxxing</span>, trying to build something instead of wasting time.
            </p>
            <p className="mb-3">
              He's in his <span className="font-bold text-black">grind era</span>, putting energy into his work, his future, and <span className="font-bold text-black">skillmaxxing</span> so he doesn't stay average. He's <span className="font-bold text-black">looksmaxxing</span> too, taking care of himself, moving with quiet <span className="font-bold text-black">him energy</span>, not trying to impress everyone—just becoming better.
            </p>
            <p className="mb-3">
              He's <span className="font-bold text-black">on his purpose</span>, staying away from distractions, <span className="font-bold text-black">futuremaxxing</span> instead of living recklessly. That's what being <span className="font-bold text-black">built different</span> actually looks like—consistency, not words.
            </p>
            <p className="mb-3">
              And at the same time, he's still <span className="font-bold text-black">lovemaxxing</span>. He talks to you, makes time for you, and treats you like you matter. That's how you know someone is a <span className="font-bold text-black">real one</span>—through actions, not their history.
            </p>
            <p>
              You're seeing <span className="font-bold text-black">@{username}</span>'s <span className="font-bold text-black">glow-up</span> version, not the unfinished one. So don't ruin your own peace over things that don't exist anymore. Sometimes the smartest move is just <span className="font-bold text-black">choosing peace</span> and paying attention to who he is now, not who he was before you.
            </p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-3">
        <a
          href="https://buymeacoffee.com/creation22"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#FFDD00] text-black text-[11px] font-bold border-[2px] border-black shadow-[3px_3px_0px_0px_#000] no-underline transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000]"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          ☕ BUY ME A COFFEE
        </a>
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: 'Check His Body Count', url: window.location.href })
            } else {
              navigator.clipboard.writeText(window.location.href)
              alert('Link copied to clipboard!')
            }
          }}
          className="px-4 py-2 bg-white text-black text-[11px] font-bold border-[2px] border-black shadow-[3px_3px_0px_0px_#000] cursor-pointer transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000]"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          🔗 SHARE
        </button>
      </div>

      {/* Bottom tagline */}
      <p
        className="pb-4 text-[11px] text-[#999]"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        he's not the problem. your overthinking is. 💀
      </p>
    </div>
  )
}

// ===== LOADER PAGE =====
const loadingSteps = [
  'Scanning followers...',
  'Analyzing tagged photos...',
  'Cross-referencing DMs...',
  'Calculating body count...',
]

function LoaderPage({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    if (currentStep < loadingSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1)
      }, 1200)
      return () => clearTimeout(timer)
    } else {
      const done = setTimeout(onComplete, 800)
      return () => clearTimeout(done)
    }
  }, [currentStep, onComplete])

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#f5f0e8] px-4">

      {/* Spinner */}
      <div className="mb-8">
        <div
          className="w-12 h-12 border-[3px] border-[#ddd] rounded-full"
          style={{
            borderTopColor: '#e74c3c',
            animation: 'spin 0.8s linear infinite',
          }}
        />
      </div>

      {/* Steps */}
      <div className="flex flex-col items-center gap-2">
        {loadingSteps.map((step, i) => {
          const isDone = i < currentStep
          const isActive = i === currentStep
          const isPending = i > currentStep

          return (
            <p
              key={i}
              className={`text-[14px] transition-all duration-300 ${isDone ? 'text-black font-bold' :
                isActive ? 'text-black font-bold' :
                  isPending ? 'text-[#ccc]' : ''
                }`}
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {isDone ? '✓' : isActive ? '→' : '○'} {step}
            </p>
          )
        })}
      </div>
    </div>
  )
}

// ===== MAIN APP =====
function App() {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const [page, setPage] = useState<'home' | 'loading' | 'results'>('home')
  const [checkedUsername, setCheckedUsername] = useState('')

  const isValidInstaUrl = (input: string): boolean => {
    const trimmed = input.trim()
    const patterns = [
      /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9._]{1,30}\/?(\?.*)?$/,
      /^@[a-zA-Z0-9._]{1,30}$/,
    ]
    return patterns.some(p => p.test(trimmed))
  }

  const handleCheck = () => {
    const trimmed = url.trim()
    if (!trimmed) {
      setError('Please enter an Instagram URL')
      return
    }
    if (!isValidInstaUrl(trimmed)) {
      setError('Enter a valid Instagram URL (e.g. instagram.com/username)')
      return
    }
    setError('')
    setCheckedUsername(extractUsername(trimmed))
    setPage('loading')
  }

  const handleBack = () => {
    setPage('home')
    setUrl('')
  }

  // Show loader page
  if (page === 'loading') {
    return <LoaderPage onComplete={() => setPage('results')} />
  }

  // Show results page
  if (page === 'results') {
    return <ResultsPage username={checkedUsername} onBack={handleBack} />
  }

  // Mix users across rows
  const row1 = [...users, ...users, ...users]
  const row2 = [...users.slice(2), ...users.slice(0, 2), ...users, ...users]

  return (
    <div className="h-screen flex flex-col items-center overflow-hidden bg-[#f5f0e8]">

      {/* ========== TITLE ========== */}
      <h1
        className="font-display text-5xl sm:text-7xl md:text-8xl text-foreground tracking-tight text-center mb-6 mt-14 md:mt-20"
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 900,
        }}
      >
        CHECK HIS BODYCOUNT
      </h1>

      {/* ========== SUBTITLE ========== */}
      <p
        className="text-center mb-7 px-4 text-[#555] text-[13px] leading-[1.7]"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        Drop his Instagram URL. We'll scan his followers,<br />
        analyze the pics, and estimate his body count.
      </p>

      {/* ========== INPUT + BUTTON ========== */}
      <div className="w-full max-w-[600px] px-4 mt-4 mb-5">
        <div className={`flex items-stretch border-[3px] shadow-[4px_4px_0px_0px_#000] ${error ? 'border-red-500' : 'border-black'}`}>
          <input
            id="instagram-url-input"
            type="text"
            placeholder="paste his instagram url"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError('') }}
            onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
            className="flex-1 outline-none bg-transparent px-5 py-3.5 text-[13px] text-black placeholder-[#999]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          />
          <button
            id="check-button"
            onClick={handleCheck}
            className="cursor-pointer bg-black text-white px-7 py-3.5 text-[13px] font-medium tracking-[0.1em] whitespace-nowrap transition-all duration-100 hover:bg-[#333] active:bg-[#555]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            CHECK IT
          </button>
        </div>
        {error && (
          <p
            className="mt-2 text-[12px] text-red-600 font-bold"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            ⚠ {error}
          </p>
        )}
      </div>

      {/* ========== AVATAR STACK + COUNT ========== */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex mr-1">
          {stackedImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="w-8 h-8 rounded-full border-2 border-[#f5f0e8] bg-white object-cover relative"
              style={{
                marginLeft: i === 0 ? 0 : '-10px',
                zIndex: stackedImages.length - i,
              }}
            />
          ))}
        </div>
        <span
          className="text-[13px] text-[#555]"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          2004+ guys checked
        </span>
      </div>

      {/* ========== RECENTLY CHECKED ========== */}
      <div className="mt-10 mb-5">
        <span
          className="text-[11px] tracking-[0.3em] text-[#999] uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          RECENTLY CHECKED
        </span>
      </div>

      {/* ========== TICKER ROW 1 ========== */}
      <div className="w-full overflow-hidden mb-2">
        <div className="flex items-center" style={{ width: 'max-content', animation: 'scroll-left 35s linear infinite' }}>
          {[...row1, ...row1].map((user, i) => (
            <div
              key={`r1-${i}`}
              className="flex items-center gap-2.5 mx-1.5 bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_#000] px-4 py-2.5 whitespace-nowrap"
            >
              <img
                src={user.img}
                alt={user.name}
                className="w-7 h-7 rounded-full border-2 border-black bg-white object-cover"
              />
              <span
                className="text-[12px] text-[#333]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {user.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ========== TICKER ROW 2 ========== */}
      <div className="w-full overflow-hidden">
        <div className="flex items-center" style={{ width: 'max-content', animation: 'scroll-right 35s linear infinite' }}>
          {[...row2, ...row2].map((user, i) => (
            <div
              key={`r2-${i}`}
              className="flex items-center gap-2.5 mx-1.5 bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_#000] px-4 py-2.5 whitespace-nowrap"
            >
              <img
                src={user.img}
                alt={user.name}
                className="w-7 h-7 rounded-full border-2 border-black bg-white object-cover"
              />
              <span
                className="text-[12px] text-[#333]"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {user.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ========== BOTTOM LINK ========== */}
      <footer className="mt-auto pb-20">
        <a
          href="#"
          id="secret-check-link"
          className="text-[13px] text-[#888] underline underline-offset-4 hover:text-[#333] transition-colors"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Want to check secretly?
        </a>
      </footer>
    </div>
  )
}

export default App
