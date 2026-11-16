// MUSIC LIST - songs are mp3 files hosted on GitHub.
// Set BASE to the folder that holds your mp3s (raw link, must end with /), e.g.
//   https://raw.githubusercontent.com/YOUR_NAME/YOUR_REPO/main/music/
// To add a song: upload the mp3 to that folder, then add one line below.
const BASE='https://raw.githubusercontent.com/lawloverilovelaw-cpu/who-am-i/main/music/';
const SONGS=[
  {id:'Song_For_Wemmbu_PLAYFUL_MASSACRE.mp3',file:BASE+'Song_For_Wemmbu_PLAYFUL_MASSACRE.mp3', name:'Song For Wemmbu - PLAYFUL MASSACRE', character:'Wemmbu'},
  {id:'Song_For_Wemmbu_PLAYING_WITH_FIRE.mp3',file:BASE+'Song_For_Wemmbu_PLAYING_WITH_FIRE.mp3', name:'Song For Wemmbu - PLAYING WITH FIRE', character:'Wemmbu'},
  {id:'Song_For_Wemmbu_PLAYFUL_MASSACRE_2v1000_ver.mp3',file:BASE+'Song_For_Wemmbu_PLAYFUL_MASSACRE_2v1000_ver.mp3', name:'Song For Wemmbu - PLAYFUL MASSACRE (2v1000 ver)', character:'Wemmbu'},
  {id:'Song_For_Wemmbu_ABOVE_THE_LAW.mp3',file:BASE+'Song_For_Wemmbu_ABOVE_THE_LAW.mp3', name:'Song For Wemmbu - ABOVE THE LAW', character:'Wemmbu'},
  {id:'Song_For_Wemmbu_DEADLOCK.mp3',file:BASE+'Song_For_Wemmbu_DEADLOCK.mp3', name:'Song For Wemmbu - DEADLOCK', character:'Wemmbu'},
  {id:'CHAOS_CONSTRUCT.mp3',file:BASE+'CHAOS_CONSTRUCT.mp3', name:'CHAOS CONSTRUCT', character:'Wemmbu'},
  {id:'BATTLE_UNDER_A_BROKEN_SKY.mp3',file:BASE+'BATTLE_UNDER_A_BROKEN_SKY.mp3', name:'BATTLE UNDER A BROKEN SKY', character:'Wemmbu'},
  {id:'The_Last_Cry_Of_The_Orbitals_2.mp3',file:BASE+'The_Last_Cry_Of_The_Orbitals_2.mp3', name:'THE LAST CRY OF THE ORBITALS (FAN MADE)', character:'Wemmbu'},
  {id:'FlameFrags_Official_Theme_Song.mp3',file:BASE+'FlameFrags_Official_Theme_Song.mp3', name:'FLAMEFRAGS OFFICIAL THEME SONG', character:'Flamefrags'},
  {id:'FlameFrags_2nd_Official_Theme_Song.mp3',file:BASE+'FlameFrags_2nd_Official_Theme_Song.mp3', name:'FLAMEFRAGS 2ND OFFICIAL THEME SONG', character:'Flamefrags'},
  {id:'Burn_the_Horizon_-_Music_for_FlameFrags.mp3',file:BASE+'Burn_the_Horizon_-_Music_for_FlameFrags.mp3', name:'BURN THE HORIZON', character:'Flamefrags'},
  {id:'Killstreak_Anthem_-_Music_for_FlameFrags.mp3',file:BASE+'Killstreak_Anthem_-_Music_for_FlameFrags.mp3', name:'KILLSTREAK ANTHEM', character:'Flamefrags'},
  {id:'Scorched_Earth_Symphony_-_Music_for_FlameFrags.mp3',file:BASE+'Scorched_Earth_Symphony_-_Music_for_FlameFrags.mp3', name:'SCORCHED EARTH SYMPHONY', character:'Flamefrags'},
  {id:'Kyon_-_Sorcery_Ring__unstable_universe_music.mp3',file:BASE+'Kyon_-_Sorcery_Ring__unstable_universe_music.mp3', name:'KYON - SORCERY RING (UNSTABLE UNIVERSE MUSIC)', character:'Jadenman'},
  {id:'Music_For_Jadenman_Trident_Ascension.mp3',file:BASE+'Music_For_Jadenman_Trident_Ascension.mp3', name:'MUSIC FOR JADENMAN - TRIDENT ASCENSION', character:'Jadenman'},
  {id:'Jaden_MAN_Death_scene_Song_Final_Stand.mp3',file:BASE+'Jaden_MAN_Death_scene_Song_Final_Stand.mp3', name:'JADEN MAN DEATH SCENE SONG - FINAL STAND', character:'Jadenman'},
  {id:'TheobaldTheBird_UNSTABLE_Theme_They_Run_-_Jose_Barrios_1.mp3',file:BASE+'TheobaldTheBird_UNSTABLE_Theme_They_Run_-_Jose_Barrios_1.mp3', name:'THEOBALDTHEBIRD UNSTABLE THEME - THEY RUN (JOSE BARRIOS)', character:'TheobaldTheBird'},
  {id:'ClownPierces_Official_Theme_Song_-_Updated.mp3',file:BASE+'ClownPierces_Official_Theme_Song_-_Updated.mp3', name:"CLOWNPIERCE'S OFFICIAL THEME SONG (UPDATED)", character:'ClownPierce'},
  {id:'Combat_Carousel_-_Minecraft_Music_for_ClownPierce.mp3',file:BASE+'Combat_Carousel_-_Minecraft_Music_for_ClownPierce.mp3', name:"COMBAT CAROUSEL", character:'ClownPierce'},
  {id:'Born_to_win_-_Updated_-_Minecraft_Music_for_ClownPierce.mp3',file:BASE+'Born_to_win_-_Updated_-_Minecraft_Music_for_ClownPierce.mp3', name:"BORN TO WIN (UPDATED)", character:'ClownPierce'},
  {id:'Chased_by_fate_-_Minecraft_music_for_ClownPierce.mp3',file:BASE+'Chased_by_fate_-_Minecraft_music_for_ClownPierce.mp3', name:"CHASED BY FATE", character:'ClownPierce'},
  {id:'Ringmasters_Requiem_-_Minecraft_music_for_ClownPierce.mp3',file:BASE+'Ringmasters_Requiem_-_Minecraft_music_for_ClownPierce.mp3', name:"RINGMASTER'S REQUIEM", character:'ClownPierce'},
];
