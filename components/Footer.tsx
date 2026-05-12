import Image from "next/image";
import { TennisBall } from "./Decorations";

export function Footer() {
  return (
    <footer className="bg-royal-900 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-12 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12">
        <div className="flex items-center gap-3">
          <div className="grid h-14 w-20 flex-shrink-0 place-items-center rounded-2xl bg-white px-3 py-2">
            <Image
              src="/images/kta-logo.png"
              alt="대한테니스협회 KTA 로고"
              width={500}
              height={320}
              priority={false}
              sizes="80px"
              className="h-auto w-full object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-extrabold tracking-wide">대한테니스협회</p>
            <p className="text-[11px] text-white/60 tracking-[.18em]">
              KOREA TENNIS ASSOCIATION
            </p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-white/80 md:justify-center">
          <li>
            <a href="#" className="hover:text-white">
              이용약관
            </a>
          </li>
          <li className="text-white/30">|</li>
          <li>
            <a href="#" className="hover:text-white font-bold">
              개인정보처리방침
            </a>
          </li>
          <li className="text-white/30">|</li>
          <li>
            <a href="#" className="hover:text-white">
              이벤트 유의사항
            </a>
          </li>
          <li className="text-white/30">|</li>
          <li>
            <a href="#" className="hover:text-white">
              문의하기
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3 md:justify-end">
          <Social
            label="Instagram"
            href="https://www.instagram.com/official_kta?igsh=MWcyNDAybmMxbzl0"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </Social>
          <Social
            label="YouTube"
            href="https://youtube.com/@koreatennis_tv?si=MMRPagZ_g0WlK8Ol"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
              <path d="M10 9.5v5L15 12z" fill="currentColor" />
            </svg>
          </Social>
          <Social
            label="대한테니스협회 공식 웹사이트"
            href="https://www.kortennis.or.kr/index.do"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path
                d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Social>
          <div className="ml-3 flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
            <TennisBall size={20} />
            <span className="text-[11px] font-bold tracking-wider text-white/90">
              BLEUM
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-[11px] text-white/60">
        © Korea Tennis Association. All rights reserved.
      </div>
    </footer>
  );
}

function Social({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
    >
      {children}
    </a>
  );
}
