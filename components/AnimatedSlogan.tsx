export default function AnimatedSlogan() {
  return (
    <h1 className="rubik-slogan text-4xl sm:text-5xl font-bold mt-4 leading-tight text-[#f3f7fb] h-16" aria-label="I code, I build, I solve">
      <span className="rubik-stage" aria-hidden="true">
        <span className="rubik-face rubik-face-one">I code</span>
        <span className="rubik-face rubik-face-two">I build</span>
        <span className="rubik-face rubik-face-three">I solve</span>
      </span>
    </h1>
  );
}
