'use strict';

const Video = (function() {
  function create(id, title, tn) {
    return { id, title, tn, };
  }

  return { create };
}());

// console.log(Video.create);