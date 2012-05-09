$(document).ready(function() {
  module("Arrays");

  test("arrays: findBy", function() {
    var target = {id: 10};
    equal(_.findBy([]                     ,'id'   , 10       ),undefined ,'findBy returns 0 when no object is found');
    equal(_.findBy([target ,{id:10,x:11}] ,'id'   , 10       ),target    ,'findBy returns the first object with the given field, target');
    equal(_.findBy([target]               ,'none' , undefined),target    ,'findBy returns objects not containing the field if the target is `undefined`');
    equal(_.findBy([target]               ,'none' , 10       ),undefined ,'findBy only returns objects not containing the field if the target is `undefined`');
    equal(_.findBy,_.detectBy,'findBy and detectBy are synonyms');
  });

  test("arrays: includeBy", function() {
    var target = {id: 10};
    equal(_.includeBy([]                     ,'id'   , 10       ),false  ,'includeBy returns false when no object is found');
    equal(_.includeBy([target ,{id:10,x:11}] ,'id'   , 10       ),true   ,'includeBy returns true if an object with the given field, target exists');
    equal(_.includeBy([target]               ,'none' , undefined),true   ,'includeBy returns true if there exists an object not containing the field if the target is `undefined`');
    equal(_.includeBy([target]               ,'none' , 10       ),false  ,'includeBy returns false if no object has the given field and the target is `undefined`.');
    equal(_.includeBy,_.containsBy,'includeBy and containsBy are synonyms');
  });
});
