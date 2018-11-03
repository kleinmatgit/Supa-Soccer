const statusMap = {
  'SCHEDULED': '',
  'LIVE': 'Live',
  'IN_PLAY': 'Live',
  'PAUSED': 'HT',
  'FINISHED': 'FT',
  'POSTPONED': 'Post.',
  'SUSPENDED': 'Susp.',
  'CANCELED': 'Canc.'
};

class StatusHelper {

  static getStatus(status){
    if(status in statusMap) {
      return statusMap[status];
    }
    return status;
  }

}

export default StatusHelper;
