module.exports = function () {
  console.log('in test-runner');

  return {
    then: function () {
      console.log('then called');
    }
  };
};
