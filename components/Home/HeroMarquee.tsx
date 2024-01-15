export const HeroMarquee = () => {
  return (
    <div className="marquee">
      <div className="marquee--inner">
        <span>
          <div className="orb">one</div>
          <div className="orb red">two</div>
          <div className="orb yellow">three</div>
          <div className="orb blue">four</div>
          <div className="orb orange">five</div>
          <div className="orb purple">six</div>
          <div className="orb green">seven</div>
          <div className="orb">eight</div>
        </span>
        <span>
          <div className="orb">nine</div>
          <div className="orb red">ten</div>
          <div className="orb yellow">eleven</div>
          <div className="orb blue">twelve</div>
          <div className="orb orange">thirteen</div>
          <div className="orb purple">fourteen</div>
          <div className="orb green">fifteen</div>
          <div className="orb">sixteen</div>
        </span>
      </div>
    </div>
  );
};
