/**
 * Created by jimmy on 17/2/26.
 */

// var Base = require('../../utils/base.js').base;

//  景区所在区域多边形


const ytPonits = [
    {
        latitude: '24.775864',
        longitude:'110.493000'
    },
    {
        latitude: '24.774885',
        longitude: '110.491873'
    },
    {
        latitude: '24.774198',
        longitude: '110.492072'
    },
    {
        latitude: '24.774105',
        longitude: '110.492501'
    },
    // TODO
    {
        latitude: '24.773940',
        longitude: '110.493579'
    },
    {
        latitude: '24.773755',
        longitude: '110.493965'
    },
    {
        latitude: '24.773896',
        longitude: '110.494078'
    },
    {
        latitude: '24.774091',
        longitude: '110.493788'
    },
    {
        latitude: '24.774592',
        longitude: '110.494174'
    },
    // {
    //     latitude: '24.774008',
    //     longitude: '110.493686'
    // },
    {
        latitude: '24.775075',
        longitude: '110.494153'
    },
    {
        latitude: '24.775742',
        longitude: '110.493992'
    },
    {
        latitude: '24.775503',
        longitude: '110.493477'
    },
    {
        latitude: '24.775864',
        longitude: '110.493000'
    },
]




const IsPtInPoly = (aLat, aLon, pointList)=> {
  /*
  :param aLon: double 经度
  :param aLat: double 纬度
  :param pointList: list [{latitude: 22.22, longitude: 113.113}...] 多边形点的顺序需根据顺时针或逆时针，不能乱
  */
  var iSum = 0
  var iCount = pointList.length

  if(iCount < 3) {
      return false
  }
  for(var i = 0; i < iCount;i++) {
      var pLat1 = pointList[i].latitude
      var pLon1 = pointList[i].longitude
      if(i == iCount - 1) {
          var pLat2 = pointList[0].latitude
          var pLon2 = pointList[0].longitude
      } else {
          var pLat2 = pointList[i + 1].latitude
          var pLon2 = pointList[i + 1].longitude
      }
      if (((aLat >= pLat1) && (aLat < pLat2)) || ((aLat>=pLat2) && (aLat < pLat1))) {
          if (Math.abs(pLat1 - pLat2) > 0) {
              var pLon = pLon1 - ((pLon1 - pLon2) * (pLat1 - aLat)) / (pLat1 - pLat2);
              if(pLon < aLon) {
                  iSum += 1
              }
          }
      }
  }
  if(iSum % 2 != 0) {
      return true
  }else {
      return false
  }
}
const timeFormat=(time, fmStr)=> {
	const weekCN = '一二三四五六日';
	const weekEN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

	let year = time.getFullYear();
	let month = time.getMonth() + 1;
	let day = time.getDate();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	let milliSeconds = time.getMilliseconds();
	let week = time.getDay();

	month = month >= 10 ? month : ('0' + month);
	day = day >= 10 ? day : ('0' + day);
	hours = hours >= 10 ? hours : ('0' + hours);
	minutes = minutes >= 10 ? minutes : ('0' + minutes);
	seconds = seconds >= 10 ? seconds : ('0' + seconds);

	if (fmStr.indexOf('yyyy') !== -1) {
		fmStr = fmStr.replace('yyyy', year);
	} else {
		fmStr = fmStr.replace('yy', (year + '').slice(2));
	}
	fmStr = fmStr.replace('mm', month);
	fmStr = fmStr.replace('dd', day);
	fmStr = fmStr.replace('hh', hours);
	fmStr = fmStr.replace('MM', minutes);
	fmStr = fmStr.replace('ss', seconds);
	fmStr = fmStr.replace('SSS', milliSeconds);
	fmStr = fmStr.replace('W', weekCN[week - 1]);
	fmStr = fmStr.replace('ww', weekEN[week - 1]);
	fmStr = fmStr.replace('w', week);

	return fmStr;
}
export { IsPtInPoly, ytPonits,timeFormat };
