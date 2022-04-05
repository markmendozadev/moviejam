const Videos = (props) => {
  const officialTrailer = props.data.results.find(
    (video) => video.name === "Official Trailer" || video.name === "Trailer"
  );
  console.log(props.data.results);

  return (
    <div className="max-w-screen-xl m-auto p-8 flex flex-col items-center justify-center">
      <iframe
        id="ytplayer"
        type="text/html"
        width="80%"
        height="550px"
        src={`https://www.youtube.com/embed/${officialTrailer?.key}?autoplay=1&controls=1&rel=0`}
      ></iframe>
    </div>
  );
};

export default Videos;
