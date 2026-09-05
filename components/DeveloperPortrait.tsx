const codeSymbols = [
  { symbol: '</>', className: 'portrait-code portrait-code-one' },
  { symbol: '{ }', className: 'portrait-code portrait-code-two' },
  { symbol: '01', className: 'portrait-code portrait-code-three' },
  { symbol: '()', className: 'portrait-code portrait-code-four' },
  { symbol: 'git add .', className: 'portrait-code portrait-code-five' },

];

export default function DeveloperPortrait() {
  return (
    <div className="portrait-scene" aria-label="Illustrated placeholder portrait of a developer" role="img">
      {codeSymbols.map(({ symbol, className }) => (
        <span key={symbol} className={className} aria-hidden="true">
          {symbol}
        </span>
      ))}
      <div className="portrait-frame">
        <img src="/developer-portrait.svg" alt="Temporary illustrated portrait placeholder" />
        <span className="portrait-status" aria-hidden="true">
          <i /> available for a new build
        </span>
      </div>
    </div>
  );
}