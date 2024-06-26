import YouTube from "react-youtube";

// E Drone chord : https://youtu.be/3k-fD0hu_4g
// F Drone chord :  https://youtu.be/IST7dd6yMOw
// G Drone chord : https://youtu.be/OfFP5T0yvvk
// A Drone chord :  : https://youtu.be/12HjkV1Llyc
// A# Drone chord : https://youtu.be/pRg93KUVBII

const YoutubePlayer = ({ videoId }) => {
  // ID de la vidéo YouTube que vous souhaitez lire
  // const videoId = "OfFP5T0yvvk";

  // Options pour le lecteur YouTube
  const opts = {
    height: "200",
    width: "300",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // Fonction appelée lorsque le lecteur YouTube est prêt
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo(); // Exemple : mettre en pause la vidéo dès qu'elle est prête
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default YoutubePlayer;
