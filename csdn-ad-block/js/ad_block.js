function adBlock() {
  displayNone(document.getElementsByClassName('t0'));
  displayNone(document.querySelectorAll('[data-pid="blog"]'));
  displayNone(document.querySelectorAll('.comment-box'));
  displayNone(document.querySelectorAll('.recommend-box'));
  displayNone(document.querySelectorAll('#csdn-toolbar'));
  displayNone(document.querySelectorAll('.vertical'));
  displayNone(document.querySelectorAll('#asideNewComments'));
  displayNone(document.querySelectorAll('#asideFooter'));
  displayNone(document.getElementsByClassName('recommend-ad-box'));
  displayNone(document.getElementsByClassName('csdn-side-toolbar'));
  displayNone(document.getElementsByTagName('iframe'));

  // 屏蔽 ituring 的 header
  displayNone(document.getElementsByClassName('layout-head'));

  var readmore = document.querySelector('.btn-readmore');
  if (readmore) {
    document.querySelector('.btn-readmore').click();
  }  
}

function displayNone(elems) {
  for (var i = 0; i < elems.length; i++) {
    elems[i].style.display = 'none';
  }
}

window.addEventListener('load', function (ev) {
  adBlock();
});

