// each status is mapped to its display name and a class name
const statusMap = {
  'SCHEDULED': {'display':'', 'cls':''},
  'LIVE': {'display':'LIVE', 'cls':'status-match-live'},
  'IN_PLAY': {'display':'LIVE', 'cls':'status-match-live'},
  'PAUSED': {'display':'HT', 'cls':'status-match-half-time'},
  'FINISHED': {'display':'FT', 'cls':'status-match-finished'},
  'POSTPONED': {'display':'POST.', 'cls':'status-match-other'},
  'SUSPENDED': {'display':'SUSP.', 'cls':'status-match-other'},
  'CANCELED': {'display':'CANC.', 'cls':'status-match-other'}
};

class StatusHelper {

  static getStatusDisplayName(status){
    if(status in statusMap) {
      return statusMap[status].display;
    }
    return status;
  }

  static getStatusClassName(status){
    if(status in statusMap) {
      return statusMap[status].cls;
    }
    return status;
  }

}

export default StatusHelper;
