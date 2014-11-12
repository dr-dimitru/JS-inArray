/*
 * @function
 * @name Object.prototype.inArray
 * @description Extend Object prototype within inArray function
 *
 * @param {mix}    needle       - Search-able needle
 * @param {bool}   searchInKey  - Search needle in keys?
 * @param {bool}   searchByKey  - Search needle only in keys?
 *
 */
Object.defineProperty(Object.prototype, 'inArray',{
    value: function(needle, searchInKey, searchByKey){

        var object = this;
        
        if( Object.prototype.toString.call(needle) === '[object Object]' || 
            Object.prototype.toString.call(needle) === '[object Array]'){
            needle = JSON.stringify(needle);
        }

        
        return Object.keys(object).some(function(key){
            
            var value = object[key];

            if( Object.prototype.toString.call(value) === '[object Object]' || 
                Object.prototype.toString.call(value) === '[object Array]'){
                value = JSON.stringify(value);
            }

            if(searchByKey){
                if(key === needle){
                    return true;
                }
            }else if(searchInKey){
                if(value === needle || key === needle){
                    return true;
                }
            }else{
                if(value === needle){
                    return true;
                }
            }
        });
    },
    writable: true,
    configurable: true,
    enumerable: false
});