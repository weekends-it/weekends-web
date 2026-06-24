// Shared button/link styles. Compose with layout classes at the call site:
//   className={`inline-block ${btnPrimary}`}
//   className={`block w-full text-center ${btnWhite}`}
// Keeping these in one place means the brand button look changes everywhere at once.

export const btnPrimary =
  "bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]";

export const btnGhost =
  "text-foreground/50 font-medium text-sm border-b border-foreground/20 pb-0.5 transition-all duration-500 hover:text-foreground hover:border-foreground/60";

export const btnOutline =
  "border border-foreground/15 text-foreground/70 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-400 hover:bg-brand-green hover:border-brand-green hover:text-white";

export const btnWhite =
  "bg-white text-brand-green px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-400 hover:bg-white/90";
