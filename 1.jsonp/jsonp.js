

function jsonp({url,params,jsonpCallback}){

    return new Promise((resolve,reject)=>{
        let script = document.createElement('script');
        window[jsonpCallback] = function (data){
            resolve(data);
            document.body.removeChild(script);
        }

        params = {...params,jsonpCallback}; //{page: 1, page_size: 20, city_id: 1101, cb:'jsonpName'} => page=1&page_size=20&city_id=1101&cb='jsonpName'
        let arrs = [];
        for(let key in params){
            arrs.push(`${key}=${params[key]}`);
        }
        script.src=`${url}?${arrs.join('&')}`;
        document.body.appendChild(script);

    })
    
}


