_.mixin(function(){

  // Return the first object whose field `field` has the value `target` (as determined by `===`).
  function findBy(obj, field, target) {
    return _.find(obj,function(value) {
      return _.isObject(value) && value[field] === target;
    });
  }

  // Use `findBy` to determine if the array has an object matching the given field and target.
  function containsBy(obj, field, target) {
    return !_.isUndefined(_.findBy(obj, field, target));
  };

  return ({
    findBy:     findBy    ,
    detectBy:   findBy    ,
    containsBy: containsBy,
    includeBy:  containsBy,
  });

}());
