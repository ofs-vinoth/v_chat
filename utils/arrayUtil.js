
module.exports = function(array) {
  
  return {
		objectFindByKey : function (id) {
			for (var i = 0, len = array.length; i < len; i++) {
				if (array[i].id === id) {
					return array[i];
				}
			}
			return null; //nothing found
		}
  };
};
