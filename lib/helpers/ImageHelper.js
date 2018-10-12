class ImageHelper {

  static getName(competition){
    return competition.toLowerCase().replace(/ /g,'') + '.png';
  }

}

export default ImageHelper;
